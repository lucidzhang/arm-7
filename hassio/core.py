"""Main file for HassIO."""
import asyncio
import logging

from .coresys import CoreSysAttributes
from .const import (
    RUN_UPDATE_INFO_TASKS, RUN_RELOAD_ADDONS_TASKS,
    RUN_UPDATE_SUPERVISOR_TASKS, RUN_WATCHDOG_HOMEASSISTANT_DOCKER,
    RUN_CLEANUP_API_SESSIONS, STARTUP_SYSTEM, STARTUP_SERVICES,
    STARTUP_APPLICATION, STARTUP_INITIALIZE, RUN_RELOAD_SNAPSHOTS_TASKS,
    RUN_UPDATE_ADDONS_TASKS)
from .tasks import (
    hassio_update, homeassistant_watchdog_docker, api_sessions_cleanup,
    addons_update)
from .utils.dt import fetch_timezone

_LOGGER = logging.getLogger(__name__)


class HassIO(CoreSysAttributes):
    """Main object of hassio."""

    def __init__(self, coresys):
        """Initialize hassio object."""
        self.coresys = coresys

    async def setup(self):
        """Setup HassIO orchestration."""
        # supervisor
        if not await self._supervisor.attach():
            _LOGGER.fatal("Can't setup supervisor docker container!")
        await self._supervisor.cleanup()

        # update timezone
        if self._config.timezone == 'UTC':
            self._config.timezone = await fetch_timezone(self._websession)

        # hostcontrol
        await self._host_control.prepare()

        # schedule update info tasks
        self._scheduler.register_task(
            self._host_control.prepare, RUN_UPDATE_INFO_TASKS)

        # rest api views
        self._api.register()

        # schedule api session cleanup
        self._scheduler.register_task(
            api_sessions_cleanup(self._config), RUN_CLEANUP_API_SESSIONS,
            now=True)

        # Load homeassistant
        await self._homeassistant.prepare()

        # Load addons
        await self._addons.prepare()

        # schedule addon update task
        self._scheduler.register_task(
            self._addons.reload, RUN_RELOAD_ADDONS_TASKS, now=True)
        self._scheduler.register_task(
            addons_update(self._loop, self._addons), RUN_UPDATE_ADDONS_TASKS)

        # schedule self update task
        self._scheduler.register_task(
            hassio_update(self._supervisor, self._updater),
            RUN_UPDATE_SUPERVISOR_TASKS)

        # schedule snapshot update tasks
        self._scheduler.register_task(
            self._snapshots.reload, RUN_RELOAD_SNAPSHOTS_TASKS, now=True)

        # start dns forwarding
        self._loop.create_task(self._dns.start())

        # start addon mark as initialize
        await self._addons.auto_boot(STARTUP_INITIALIZE)

    async def start(self):
        """Start HassIO orchestration."""
        # on release channel, try update itself
        # on beta channel, only read new versions
        await asyncio.wait(
            [hassio_update(self._supervisor, self._updater)()],
            loop=self.loop
        )

        # start api
        await self._api.start()
        _LOGGER.info("Start hassio api on %s", self._docker.network.supervisor)

        try:
            # HomeAssistant is already running / supervisor have only reboot
            if self._hardware.last_boot == self._config.last_boot:
                _LOGGER.info("HassIO reboot detected")
                return

            # start addon mark as system
            await self._addons.auto_boot(STARTUP_SYSTEM)

            # start addon mark as services
            await self._addons.auto_boot(STARTUP_SERVICES)

            # run HomeAssistant
            if self._homeassistant.boot:
                await self._homeassistant.run()

            # start addon mark as application
            await self._addons.auto_boot(STARTUP_APPLICATION)

            # store new last boot
            self._config.last_boot = self._hardware.last_boot

        finally:
            # schedule homeassistant watchdog
            self._scheduler.register_task(
                homeassistant_watchdog_docker(self._loop, self._homeassistant),
                RUN_WATCHDOG_HOMEASSISTANT_DOCKER)

            # self.scheduler.register_task(
            #    homeassistant_watchdog_api(self.loop, self.homeassistant),
            #    RUN_WATCHDOG_HOMEASSISTANT_API)

            # If landingpage / run upgrade in background
            if self._homeassistant.version == 'landingpage':
                self._loop.create_task(self._homeassistant.install())

    async def stop(self):
        """Stop a running orchestration."""
        # don't process scheduler anymore
        self._scheduler.suspend = True

        # process stop tasks
        self._websession.close()
        self._websession_ssl.close()

        # process async stop tasks
        await asyncio.wait(
            [self._api.stop(), self._dns.stop()], loop=self._loop)
