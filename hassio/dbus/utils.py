"""Utils for dbus."""

from ..exceptions import DBusNotConnectedError


def dbus_connected(method):
    """Wrapper for check if dbus is connected."""
    def wrap_dbus(self, *args, **kwargs):
        """Check if dbus is connected before call a method."""
        if self.dbus is None:
            raise DBusNotConnectedError(f"{self!s} not connected to dbus!")
        return self.method(*args, **kwargs)

    return wrap_dbus
