"""Represent a snapshot file."""
import asyncio
import json
import logging
from pathlib import Path
import tarfile
from tempfile import TemporaryDirectory

import voluptuous as vol
from voluptuous.humanize import humanize_error

from .validate import SCHEMA_SNAPSHOT, ALL_FOLDERS
from .utils import remove_folder, password_to_key, password_for_validating
from ..const import (
    ATTR_SLUG, ATTR_NAME, ATTR_DATE, ATTR_ADDONS, ATTR_REPOSITORIES,
    ATTR_HOMEASSISTANT, ATTR_FOLDERS, ATTR_VERSION, ATTR_TYPE, ATTR_IMAGE,
    ATTR_PORT, ATTR_SSL, ATTR_PASSWORD, ATTR_WATCHDOG, ATTR_BOOT, ATTR_CRYPTO,
    ATTR_LAST_VERSION, ATTR_PROTECTED, ATTR_WAIT_BOOT, CRYPTO_AES128)
from ..coresys import CoreSysAttributes
from ..utils.json import write_json_file
from ..utils.tar import SecureTarFile

_LOGGER = logging.getLogger(__name__)


class Snapshot(CoreSysAttributes):
    """A signle hassio snapshot."""

    def __init__(self, coresys, tar_file):
        """Initialize a snapshot."""
        self.coresys = coresys
        self.tar_file = tar_file
        self._data = {}
        self._tmp = None
        self._key = None

    @property
    def slug(self):
        """Return snapshot slug."""
        return self._data.get(ATTR_SLUG)

    @property
    def sys_type(self):
        """Return snapshot type."""
        return self._data.get(ATTR_TYPE)

    @property
    def name(self):
        """Return snapshot name."""
        return self._data[ATTR_NAME]

    @property
    def date(self):
        """Return snapshot date."""
        return self._data[ATTR_DATE]

    @property
    def protected(self):
        """Return snapshot date."""
        return self._data.get(ATTR_PROTECTED) is not None

    @property
    def addons(self):
        """Return snapshot date."""
        return self._data[ATTR_ADDONS]

    @property
    def folders(self):
        """Return list of saved folders."""
        return self._data[ATTR_FOLDERS]

    @property
    def repositories(self):
        """Return snapshot date."""
        return self._data[ATTR_REPOSITORIES]

    @repositories.setter
    def repositories(self, value):
        """Set snapshot date."""
        self._data[ATTR_REPOSITORIES] = value

    @property
    def homeassistant_version(self):
        """Return snapshot homeassistant version."""
        return self._data[ATTR_HOMEASSISTANT].get(ATTR_VERSION)

    @property
    def homeassistant(self):
        """Return snapshot homeassistant data."""
        return self._data[ATTR_HOMEASSISTANT]

    @property
    def size(self):
        """Return snapshot size."""
        if not self.tar_file.is_file():
            return 0
        return self.tar_file.stat().st_size / 1048576  # calc mbyte

    def create(self, slug, name, date, sys_type, password=None):
        """Initialize a new snapshot."""
        # init metadata
        self._data[ATTR_SLUG] = slug
        self._data[ATTR_NAME] = name
        self._data[ATTR_DATE] = date
        self._data[ATTR_TYPE] = sys_type

        # Add defaults
        self._data = SCHEMA_SNAPSHOT(self._data)

        # Set password
        if password:
            self._key = password_to_key(password)
            self._data[ATTR_PROTECTED] = password_for_validating(password)
            self._data[ATTR_CRYPTO] = CRYPTO_AES128

    async def load(self):
        """Read snapshot.json from tar file."""
        if not self.tar_file.is_file():
            _LOGGER.error("No tarfile %s", self.tar_file)
            return False

        def _load_file():
            """Read snapshot.json."""
            with tarfile.open(self.tar_file, "r:") as snapshot:
                json_file = snapshot.extractfile("./snapshot.json")
                return json_file.read()

        # read snapshot.json
        try:
            raw = await self._loop.run_in_executor(None, _load_file)
        except (tarfile.TarError, KeyError) as err:
            _LOGGER.error(
                "Can't read snapshot tarfile %s: %s", self.tar_file, err)
            return False

        # parse data
        try:
            raw_dict = json.loads(raw)
        except json.JSONDecodeError as err:
            _LOGGER.error("Can't read data for %s: %s", self.tar_file, err)
            return False

        # validate
        try:
            self._data = SCHEMA_SNAPSHOT(raw_dict)
        except vol.Invalid as err:
            _LOGGER.error("Can't validate data for %s: %s", self.tar_file,
                          humanize_error(raw_dict, err))
            return False

        return True

    async def __aenter__(self):
        """Async context to open a snapshot."""
        self._tmp = TemporaryDirectory(dir=str(self._config.path_tmp))

        # create a snapshot
        if not self.tar_file.is_file():
            return self

        # extract a exists snapshot
        def _extract_snapshot():
            """Extract a snapshot."""
            with tarfile.open(self.tar_file, "r:") as tar:
                tar.extractall(path=self._tmp.name)

        await self._loop.run_in_executor(None, _extract_snapshot)

    async def __aexit__(self, exception_type, exception_value, traceback):
        """Async context to close a snapshot."""
        # exists snapshot or exception on build
        if self.tar_file.is_file() or exception_type is not None:
            self._tmp.cleanup()
            return

        # validate data
        try:
            self._data = SCHEMA_SNAPSHOT(self._data)
        except vol.Invalid as err:
            _LOGGER.error("Invalid data for %s: %s", self.tar_file,
                          humanize_error(self._data, err))
            raise ValueError("Invalid config") from None

        # new snapshot, build it
        def _create_snapshot():
            """Create a new snapshot."""
            with tarfile.open(self.tar_file, "w:") as tar:
                tar.add(self._tmp.name, arcname=".")

        try:
            write_json_file(Path(self._tmp.name, "snapshot.json"), self._data)
            await self._loop.run_in_executor(None, _create_snapshot)
        except (OSError, json.JSONDecodeError) as err:
            _LOGGER.error("Can't write snapshot: %s", err)
        finally:
            self._tmp.cleanup()

    async def import_addon(self, addon):
        """Add a addon into snapshot."""
        snapshot_file = Path(self._tmp.name, f"{addon.slug}.tar.gz")

        if not await addon.snapshot(snapshot_file):
            _LOGGER.error("Can't make snapshot from %s", addon.slug)
            return False

        # store to config
        self._data[ATTR_ADDONS].append({
            ATTR_SLUG: addon.slug,
            ATTR_NAME: addon.name,
            ATTR_VERSION: addon.version_installed,
        })

        return True

    async def export_addon(self, addon):
        """Restore a addon from snapshot."""
        snapshot_file = Path(self._tmp.name, f"{addon.slug}.tar.gz")

        if not await addon.restore(snapshot_file):
            _LOGGER.error("Can't restore snapshot for %s", addon.slug)
            return False

        return True

    async def store_folders(self, folder_list=None):
        """Backup hassio data into snapshot."""
        folder_list = set(folder_list or ALL_FOLDERS)

        def _folder_save(name):
            """Intenal function to snapshot a folder."""
            slug_name = name.replace("/", "_")
            tar_name = Path(self._tmp.name, f"{slug_name}.tar.gz")
            origin_dir = Path(self._config.path_hassio, name)

            try:
                _LOGGER.info("Snapshot folder %s", name)
                with SecureTarFile(tar_name, 'w', key=self._key) as tar_file:
                    tar_file.add(origin_dir, arcname=".")

                _LOGGER.info("Snapshot folder %s done", name)
                self._data[ATTR_FOLDERS].append(name)
            except (tarfile.TarError, OSError) as err:
                _LOGGER.warning("Can't snapshot folder %s: %s", name, err)

        # run tasks
        tasks = [self._loop.run_in_executor(None, _folder_save, folder)
                 for folder in folder_list]
        if tasks:
            await asyncio.wait(tasks, loop=self._loop)

    async def restore_folders(self, folder_list=None):
        """Backup hassio data into snapshot."""
        folder_list = set(folder_list or self.folders)

        def _folder_restore(name):
            """Intenal function to restore a folder."""
            slug_name = name.replace("/", "_")
            tar_name = Path(self._tmp.name, f"{slug_name}.tar.gz")
            origin_dir = Path(self._config.path_hassio, name)

            # clean old stuff
            if origin_dir.is_dir():
                remove_folder(origin_dir)

            try:
                _LOGGER.info("Restore folder %s", name)
                with SecureTarFile(tar_name, 'r', key=self._key) as tar_file:
                    tar_file.extractall(path=origin_dir)
                _LOGGER.info("Restore folder %s done", name)
            except (tarfile.TarError, OSError) as err:
                _LOGGER.warning("Can't restore folder %s: %s", name, err)

        # run tasks
        tasks = [self._loop.run_in_executor(None, _folder_restore, folder)
                 for folder in folder_list]
        if tasks:
            await asyncio.wait(tasks, loop=self._loop)

    def store_homeassistant(self):
        """Read all data from homeassistant object."""
        self.homeassistant[ATTR_VERSION] = self._homeassistant.version
        self.homeassistant[ATTR_WATCHDOG] = self._homeassistant.watchdog
        self.homeassistant[ATTR_BOOT] = self._homeassistant.boot
        self.homeassistant[ATTR_WAIT_BOOT] = self._homeassistant.wait_boot

        # custom image
        if self._homeassistant.is_custom_image:
            self.homeassistant[ATTR_IMAGE] = self._homeassistant.image
            self.homeassistant[ATTR_LAST_VERSION] = \
                self._homeassistant.last_version

        # api
        self.homeassistant[ATTR_PORT] = self._homeassistant.api_port
        self.homeassistant[ATTR_SSL] = self._homeassistant.api_ssl
        self.homeassistant[ATTR_PASSWORD] = self._homeassistant.api_password

    def restore_homeassistant(self):
        """Write all data to homeassistant object."""
        self._homeassistant.watchdog = self.homeassistant[ATTR_WATCHDOG]
        self._homeassistant.boot = self.homeassistant[ATTR_BOOT]
        self._homeassistant.wait_boot = self.homeassistant[ATTR_WAIT_BOOT]

        # custom image
        if self.homeassistant[ATTR_IMAGE]:
            self._homeassistant.image = self.homeassistant[ATTR_IMAGE]
            self._homeassistant.last_version = \
                self.homeassistant[ATTR_LAST_VERSION]

        # api
        self._homeassistant.api_port = self.homeassistant[ATTR_PORT]
        self._homeassistant.api_ssl = self.homeassistant[ATTR_SSL]
        self._homeassistant.api_password = self.homeassistant[ATTR_PASSWORD]

        # save
        self._homeassistant.save_data()

    def store_repositories(self):
        """Store repository list into snapshot."""
        self.repositories = self._config.addons_repositories

    def restore_repositories(self):
        """Restore repositories from snapshot.

        Return a coroutine.
        """
        return self._addons.load_repositories(self.repositories)
