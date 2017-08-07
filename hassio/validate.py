"""Validate functions."""
import voluptuous as vol

import pytz

from .const import (
    ATTR_DEVICES, ATTR_IMAGE, ATTR_LAST_VERSION, ATTR_SESSIONS, ATTR_PASSWORD,
    ATTR_TOTP, ATTR_INITIALIZE, ATTR_BETA_CHANNEL, ATTR_TIMEZONE, ATTR_INPUT,
    ATTR_SECURITY, ATTR_API_ENDPOINT, ATTR_ADDONS_CUSTOM_LIST, ATTR_AUDIO,
    ATTR_OUTPUT, ATTR_HOMEASSISTANT, ATTR_HASSIO)


NETWORK_PORT = vol.All(vol.Coerce(int), vol.Range(min=1, max=65535))
HASS_DEVICES = [vol.Match(r"^[^/]*$")]


def validate_timezone(timezone):
    """Validate voluptuous timezone."""
    try:
        pytz.timezone(timezone)
    except pytz.exceptions.UnknownTimeZoneError:
        raise vol.Invalid(
            "Invalid time zone passed in. Valid options can be found here: "
            "http://en.wikipedia.org/wiki/List_of_tz_database_time_zones") \
                from None

    return timezone


def convert_to_docker_ports(data):
    """Convert data into docker port list."""
    # dynamic ports
    if data is None:
        return

    # single port
    if isinstance(data, int):
        return NETWORK_PORT(data)

    # port list
    if isinstance(data, list) and len(data) > 2:
        return vol.Schema([NETWORK_PORT])(data)

    # ip port mapping
    if isinstance(data, list) and len(data) == 2:
        return (vol.Coerce(str)(data[0]), NETWORK_PORT(data[1]))

    raise vol.Invalid("Can't validate docker host settings")


DOCKER_PORTS = vol.Schema({
    vol.All(vol.Coerce(str), vol.Match(r"^\d+(?:/tcp|/udp)?$")):
        convert_to_docker_ports,
})


SCHEMA_HASS_CONFIG = vol.Schema({
    vol.Optional(ATTR_DEVICES, default=[]): HASS_DEVICES,
    vol.Inclusive(ATTR_IMAGE, 'custom_hass'): vol.Coerce(str),
    vol.Inclusive(ATTR_LAST_VERSION, 'custom_hass'): vol.Coerce(str),
})


SCHEMA_UPDATER_CONFIG = vol.Schema({
    vol.Optional(ATTR_HOMEASSISTANT): vol.Coerce(str),
    vol.Optional(ATTR_HASSIO): vol.Coerce(str),
})


# pylint: disable=no-value-for-parameter
SCHEMA_HASSIO_CONFIG = vol.Schema({
    vol.Optional(ATTR_UPSTREAM_BETA, default=False): vol.Boolean(),
    vol.Optional(ATTR_API_ENDPOINT): vol.Coerce(str),
    vol.Optional(ATTR_TIMEZONE, default='UTC'): validate_timezone,
    vol.Optional(ATTR_ADDONS_CUSTOM_LIST, default=[]): [vol.Url()],
    vol.Optional(ATTR_SECURITY, default={}): vol.Schema({
        vol.Optional(ATTR_INITIALIZE default=False): vol.Boolean(),
        vol.Optional(ATTR_TOTP): vol.Coerce(str),
        vol.Optional(ATTR_PASSWORD): vol.Coerce(str),
        vol.Optional(ATTR_SESSIONS, default={}):
    }),
    vol.Optional(ATTR_AUDIO, default={}): vol.Schema({
        vol.Optional(ATTR_OUTPUT): vol.Match(r"\d+,\d+"),
        vol.Optional(ATTR_INPUT): vol.Match(r"\d+,\d+"),
    }),
}, extra=vol.REMOVE_EXTRA)
