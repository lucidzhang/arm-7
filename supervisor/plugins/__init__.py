"""Plugin for Supervisor backend."""
import asyncio
import logging

from packaging import version as pkg_version

from ..coresys import CoreSys, CoreSysAttributes
from ..exceptions import HassioError
from .audio import Audio
from .cli import HaCli
from .dns import CoreDNS
from .multicast import Multicast

_LOGGER: logging.Logger = logging.getLogger(__name__)


class PluginManager(CoreSysAttributes):
    """Manage supported function for plugins."""

    required_cli: pkg_version.Version = pkg_version.parse("26")
    required_dns: pkg_version.Version = pkg_version.parse("9")
    required_audio: pkg_version.Version = pkg_version.parse("17")
    required_multicast: pkg_version.Version = pkg_version.parse("3")

    def __init__(self, coresys: CoreSys):
        """Initialize plugin manager."""
        self.coresys: CoreSys = coresys

        self._cli: HaCli = HaCli(coresys)
        self._dns: CoreDNS = CoreDNS(coresys)
        self._audio: Audio = Audio(coresys)
        self._multicast: Multicast = Multicast(coresys)

    @property
    def cli(self) -> HaCli:
        """Return cli handler."""
        return self._cli

    @property
    def dns(self) -> CoreDNS:
        """Return dns handler."""
        return self._dns

    @property
    def audio(self) -> Audio:
        """Return audio handler."""
        return self._audio

    @property
    def multicast(self) -> Multicast:
        """Return multicast handler."""
        return self._multicast

    async def load(self) -> None:
        """Load Supervisor plugins."""
        # Sequential to avoid issue on slow IO
        for plugin in (
            self.dns,
            self.audio,
            self.cli,
            self.multicast,
        ):
            try:
                await plugin.load()
            except Exception as err:  # pylint: disable=broad-except
                _LOGGER.warning("Can't load plugin %s", type(plugin).__name__)
                self.sys_capture_exception(err)

        # Check requirements
        for plugin, required_version in (
            (self._audio, self.required_audio),
            (self._dns, self.required_dns),
            (self._cli, self.required_cli),
            (self._multicast, self.required_multicast),
        ):
            # Check if need an update
            try:
                if pkg_version.parse(plugin.version) >= required_version:
                    continue
            except TypeError:
                _LOGGER.warning(
                    "Somethings going wrong with requirements on %s",
                    type(plugin).__name__,
                )

            _LOGGER.info(
                "Requirement need update for %s - %s",
                type(plugin).__name__,
                required_version,
            )
            try:
                await plugin.update(version=str(required_version))
            except HassioError:
                _LOGGER.error(
                    "Can't update %s to %s but it's a reuirement, the Supervisor is not health now!",
                    type(plugin).__name__,
                    required_version,
                )
            except Exception as err:  # pylint: disable=broad-except
                _LOGGER.warning("Can't update plugin %s", type(plugin).__name__)
                self.sys_capture_exception(err)

    async def repair(self) -> None:
        """Repair Supervisor plugins."""
        await asyncio.wait(
            [
                self.dns.repair(),
                self.audio.repair(),
                self.cli.repair(),
                self.multicast.repair(),
            ]
        )

    async def shutdown(self) -> None:
        """Shutdown Supervisor plugin."""
        # Sequential to avoid issue on slow IO
        for plugin in (
            self.audio,
            self.cli,
            self.multicast,
            self.dns,
        ):
            try:
                await plugin.stop()
            except Exception as err:  # pylint: disable=broad-except
                _LOGGER.warning("Can't stop plugin %s", type(plugin).__name__)
                self.sys_capture_exception(err)
