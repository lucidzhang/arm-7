"""Helpers to check core security."""
from enum import Enum
from pathlib import Path
from typing import List, Optional

from awesomeversion import AwesomeVersion, AwesomeVersionException

from ...const import CoreState
from ...coresys import CoreSys
from ...exceptions import CodeNotaryUntrusted
from ..const import ContextType, IssueType, SuggestionType, UnhealthyReason
from .base import CheckBase


def setup(coresys: CoreSys) -> CheckBase:
    """Check setup function."""
    return CheckCoreSecurity(coresys)


class SecurityReference(str, Enum):
    """Version references."""

    CUSTOM_COMPONENTS_BELOW_2021_1_5 = "custom_components_below_2021_1_5"


class CheckCoreSecurity(CheckBase):
    """CheckCoreSecurity class for check."""

    async def run_check(self) -> None:
        """Run check if not affected by issue."""
        # Security issue < 2021.1.5 & Custom components
        try:
            if self.sys_homeassistant.version < AwesomeVersion("2021.1.5"):
                if Path(
                    self.sys_config.path_homeassistant, "custom_components"
                ).exists():
                    self.sys_resolution.create_issue(
                        IssueType.SECURITY,
                        ContextType.CORE,
                        reference=SecurityReference.CUSTOM_COMPONENTS_BELOW_2021_1_5,
                        suggestions=[SuggestionType.EXECUTE_UPDATE],
                    )
        except (AwesomeVersionException, OSError):
            return

        # Check if core image is trusted
        if self.sys_core.state != CoreState.RUNNING:
            return
        try:
            await self.sys_homeassistant.core.instance.check_trust()
        except CodeNotaryUntrusted:
            self.sys_resolution.unhealthy = UnhealthyReason.UNTRUSTED

    async def approve_check(self, reference: Optional[str] = None) -> bool:
        """Approve check if it is affected by issue."""
        try:
            if self.sys_homeassistant.version >= AwesomeVersion("2021.1.5"):
                return False
        except AwesomeVersionException:
            return True
        if not Path(self.sys_config.path_homeassistant, "custom_components").exists():
            return False
        return True

    @property
    def issue(self) -> IssueType:
        """Return a IssueType enum."""
        return IssueType.SECURITY

    @property
    def context(self) -> ContextType:
        """Return a ContextType enum."""
        return ContextType.CORE

    @property
    def states(self) -> List[CoreState]:
        """Return a list of valid states when this check can run."""
        return [CoreState.RUNNING, CoreState.STARTUP]
