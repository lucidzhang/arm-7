"""AppArmor control for host."""
import logging
import shutil
from pathlib import Path

from ..coresys import CoreSysAttributes
from ..exceptions import DBusError, HostAppArmorError
from ..utils.apparmor import validate_profile

_LOGGER = logging.getLogger(__name__)

SYSTEMD_SERVICES = {'hassos-apparmor.service', 'hassio-apparmor.service'}


class AppArmorControl(CoreSysAttributes):
    """Handle host apparmor controls."""

    def __init__(self, coresys):
        """Initialize host power handling."""
        self.coresys = coresys
        self._profiles = set()
        self._service = None

    @property
    def available(self):
        """Return True if AppArmor is availabe on host."""
        return self._service is not None

    async def _reload_service(self):
        """Reload internal service."""
        try:
            self.sys_host.services.reload(self._services)
        except DBusError as err:
            _LOGGER.error("Can't reload %s: %s", self._service, err)

    async def load(self):
        """Load available profiles."""
        for content in self.sys_config.path_apparmor.iterdir():
            if not content.is_file():
                continue
            self._profiles.add(content.name)

        # Is connected with systemd?
        for service in SYSTEMD_SERVICES:
            if not self.sys_host.services.exists(service):
                continue
            self._service = service

        # Load profiles
        if self.available:
            await self._reload_service()

    async def load_profile(self, profile_name, profile_file):
        """Load a new profile into AppArmor."""
        if not validate_profile(profile_file, profile_name):
            _LOGGER.error("profile is not valid with name %s", profile_name)
            raise HostAppArmorError()

        # Copy to AppArmor folder
        dest_profile = Path(self.sys_config.path_apparmor, profile_name)
        try:
            shutil.copy(profile_file, dest_profile)
        except OSError as err:
            _LOGGER.error("Can't copy %s: %s", profile_file, err)
            raise HostAppArmorError() from None

        # Load profiles
        if self.available:
            await self._reload_service()

    async def remove_profile(self, profile_name):
        """Remove a AppArmor profile."""
        if profile_name not in self._profiles:
            _LOGGER.error("Can't find %s for removing", profile_name)
            raise HostAppArmorError()
