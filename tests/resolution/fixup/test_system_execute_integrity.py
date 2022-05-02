"""Test evaluation base."""
# pylint: disable=import-error,protected-access
from unittest.mock import AsyncMock

from supervisor.coresys import CoreSys
from supervisor.resolution.const import ContextType, IssueType, SuggestionType
from supervisor.resolution.data import Issue, Suggestion
from supervisor.resolution.fixups.system_execute_integrity import (
    FixupSystemExecuteIntegrity,
)
from supervisor.security.const import ContentTrustResult, IntegrityResult


async def test_fixup(coresys: CoreSys):
    """Test fixup."""
    system_execute_integrity = FixupSystemExecuteIntegrity(coresys)

    assert system_execute_integrity.auto

    coresys.resolution.suggestions = Suggestion(
        SuggestionType.EXECUTE_INTEGRITY, ContextType.SYSTEM
    )
    coresys.resolution.issues = Issue(IssueType.TRUST, ContextType.SYSTEM)

    coresys.security.integrity_check = AsyncMock(
        return_value=IntegrityResult(
            ContentTrustResult.PASS,
            ContentTrustResult.PASS,
            {"audio": ContentTrustResult.PASS},
        )
    )

    await system_execute_integrity()

    assert coresys.security.integrity_check.called
    assert len(coresys.resolution.suggestions) == 0
    assert len(coresys.resolution.issues) == 0


async def test_fixup_error(coresys: CoreSys):
    """Test fixup."""
    system_execute_integrity = FixupSystemExecuteIntegrity(coresys)

    assert system_execute_integrity.auto

    coresys.resolution.suggestions = Suggestion(
        SuggestionType.EXECUTE_INTEGRITY, ContextType.SYSTEM
    )
    coresys.resolution.issues = Issue(IssueType.TRUST, ContextType.SYSTEM)

    coresys.security.integrity_check = AsyncMock(
        return_value=IntegrityResult(
            ContentTrustResult.ERROR,
            ContentTrustResult.PASS,
            {"audio": ContentTrustResult.PASS},
        )
    )

    await system_execute_integrity()

    assert coresys.security.integrity_check.called
    assert len(coresys.resolution.suggestions) == 1
    assert len(coresys.resolution.issues) == 1
