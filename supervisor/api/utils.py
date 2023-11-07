"""Init file for Supervisor util for RESTful API."""
from functools import lru_cache
import json
from typing import Any

from aiohttp import web
from aiohttp.hdrs import AUTHORIZATION
from aiohttp.web_exceptions import HTTPUnauthorized
from aiohttp.web_request import Request
from awesomeversion import AwesomeVersion
import voluptuous as vol
from voluptuous.humanize import humanize_error

from ..const import (
    HEADER_TOKEN,
    HEADER_TOKEN_OLD,
    JSON_DATA,
    JSON_MESSAGE,
    JSON_RESULT,
    REQUEST_FROM,
    RESULT_ERROR,
    RESULT_OK,
)
from ..coresys import CoreSys
from ..exceptions import APIError, APIForbidden, DockerAPIError, HassioError
from ..utils import check_exception_chain, get_message_from_exception_chain
from ..utils.json import JSONEncoder
from ..utils.log_format import format_message
from .const import CONTENT_TYPE_BINARY


def excract_supervisor_token(request: web.Request) -> str | None:
    """Extract Supervisor token from request."""
    if supervisor_token := request.headers.get(HEADER_TOKEN):
        return supervisor_token

    # Old Supervisor fallback
    if supervisor_token := request.headers.get(HEADER_TOKEN_OLD):
        return supervisor_token

    # API access only
    if supervisor_token := request.headers.get(AUTHORIZATION):
        return supervisor_token.split(" ")[-1]

    return None


def json_loads(data: Any) -> dict[str, Any]:
    """Extract json from string with support for '' and None."""
    if not data:
        return {}
    try:
        return json.loads(data)
    except json.JSONDecodeError as err:
        raise APIError("Invalid json") from err


def api_process(method):
    """Wrap function with true/false calls to rest api."""

    async def wrap_api(api, *args, **kwargs):
        """Return API information."""
        try:
            answer = await method(api, *args, **kwargs)
        except (APIError, APIForbidden, HassioError) as err:
            return api_return_error(error=err)

        if isinstance(answer, (dict, list)):
            return api_return_ok(data=answer)
        if isinstance(answer, web.Response):
            return answer
        if isinstance(answer, web.StreamResponse):
            return answer
        elif isinstance(answer, bool) and not answer:
            return api_return_error()
        return api_return_ok()

    return wrap_api


def require_home_assistant(method):
    """Ensure that the request comes from Home Assistant."""

    async def wrap_api(api, *args, **kwargs):
        """Return API information."""
        coresys: CoreSys = api.coresys
        request: Request = args[0]
        if request[REQUEST_FROM] != coresys.homeassistant:
            raise HTTPUnauthorized()
        return await method(api, *args, **kwargs)

    return wrap_api


def api_process_raw(content):
    """Wrap content_type into function."""

    def wrap_method(method):
        """Wrap function with raw output to rest api."""

        async def wrap_api(api, *args, **kwargs):
            """Return api information."""
            try:
                msg_data = await method(api, *args, **kwargs)
                msg_type = content
            except (APIError, APIForbidden) as err:
                msg_data = str(err).encode()
                msg_type = CONTENT_TYPE_BINARY
            except HassioError:
                msg_data = b""
                msg_type = CONTENT_TYPE_BINARY

            return web.Response(body=msg_data, content_type=msg_type)

        return wrap_api

    return wrap_method


def api_return_error(
    error: Exception | None = None, message: str | None = None
) -> web.Response:
    """Return an API error message."""
    if error and not message:
        message = get_message_from_exception_chain(error)
        if check_exception_chain(error, DockerAPIError):
            message = format_message(message)

    return web.json_response(
        {
            JSON_RESULT: RESULT_ERROR,
            JSON_MESSAGE: message or "Unknown error, see supervisor",
        },
        status=400,
        dumps=lambda x: json.dumps(x, cls=JSONEncoder),
    )


def api_return_ok(data: dict[str, Any] | None = None) -> web.Response:
    """Return an API ok answer."""
    return web.json_response(
        {JSON_RESULT: RESULT_OK, JSON_DATA: data or {}},
        dumps=lambda x: json.dumps(x, cls=JSONEncoder),
    )


async def api_validate(
    schema: vol.Schema, request: web.Request, origin: list[str] | None = None
) -> dict[str, Any]:
    """Validate request data with schema."""
    data: dict[str, Any] = await request.json(loads=json_loads)
    try:
        data_validated = schema(data)
    except vol.Invalid as ex:
        raise APIError(humanize_error(data, ex)) from None

    if not origin:
        return data_validated

    for origin_value in origin:
        if origin_value not in data_validated:
            continue
        data_validated[origin_value] = data[origin_value]

    return data_validated


@lru_cache
def version_is_new_enough(
    version: AwesomeVersion, want_version: AwesomeVersion
) -> bool:
    """Return True if the given version is new enough."""
    return version >= want_version
