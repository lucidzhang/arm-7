"""Discovery service for Matter Server."""
import voluptuous as vol

from ...validate import network_port
from ..const import ATTR_HOST, ATTR_PORT

# pylint: disable=no-value-for-parameter
SCHEMA = vol.Schema(
    {
        vol.Required(ATTR_HOST): str,
        vol.Required(ATTR_PORT): network_port,
    }
)
