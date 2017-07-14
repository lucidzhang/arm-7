"""Cluster manager object."""
import asyncio
import logging
import random

from .node import ClusterNode
from .util import generate_cluster_key, get_node_slug
from .util_rest import cluster_do_post, get_nonce_request
from .validate import (
    SCHEMA_CLUSTER_CONFIG, CLUSTER_MASTER_IP, CLUSTER_NODE_KEY,
    CLUSTER_NODE_NAME, CLUSTER_REGISTERED_NODES, CLUSTER_IS_MASTER,
    CLUSTER_IS_INITED)
from ..const import (
    RUN_REGENERATE_CLUSTER_KEY, ATTR_SLUG, ATTR_NODE_KEY,
    ATTR_ADDONS_REPOSITORIES, RUN_PING_CLUSTER_MASTER, ATTR_VERSION,
    HASSIO_VERSION, ATTR_TIMEZONE, ATTR_ARCH, FILE_HASSIO_CLUSTER,
    ATTR_ADDONS, ATTR_INSTALLED, ATTR_NAME, CLUSTER_NODE_MASTER, PORT_CLUSTER)
from ..tools import JsonConfig, RestServer

_LOGGER = logging.getLogger(__name__)


class ClusterManager(JsonConfig, RestServer):
    """Manage cluster."""

    def __init__(self, config, loop, websession, homeassistant, addons):
        """Initialize cluster manager."""
        JsonConfig.__init__(self, FILE_HASSIO_CLUSTER, SCHEMA_CLUSTER_CONFIG)
        RestServer.__init__(self, loop, PORT_CLUSTER)
        self.config = config
        self.homeassistant = homeassistant
        self.websession = websession
        self.addons = addons

        self.nodes = {}

    @property
    def list_nodes(self):
        """Return list of nodes."""
        return set(self.nodes.keys())

    def prepare(self):
        """Init cluster data."""
        for slug, data in self.registered_nodes:
            new_node = ClusterNode(slug, data.get(CLUSTER_NODE_NAME),
                                   data.get(CLUSTER_NODE_KEY), self.websession)
            self.nodes[new_node.slug] = new_node

    async def _regenerate_master_key(self):
        """Periodically re-generating master key."""
        self._master_key = generate_cluster_key()

    async def broadcast(self):
        """Sync data with master."""
        if self.is_master is True:
            return

        addon_list = {}
        for addon in self.addons.list_addons:
            if addon.is_installed:
                addon_list[addon.slug] = addon.installed_version

        data = {
            ATTR_VERSION: HASSIO_VERSION,
            ATTR_ARCH: self.config.arch,
            ATTR_TIMEZONE: self.config.timezone,
            ATTR_ADDONS: addon_list
        }
        data.update(get_nonce_request())

        result = await cluster_do_post(data, self.master_ip, "/sync",
                                       self.node_key, self.websession,
                                       self.node_name)
        if result is None:
            _LOGGER.warning("Failed to ping master")
            return

        if ATTR_NODE_KEY in result:
            node_key = result[ATTR_NODE_KEY]
            self.node_key = node_key

    @staticmethod
    def _format_node(name, key):
        """Formatting registered node."""
        return {
            CLUSTER_NODE_NAME: name,
            CLUSTER_NODE_KEY: key
        }

    def sync_node_addons(self, node, addon_list):
        """Synchronizing addons."""
        for addon in self.addons.list_addons:
            if addon.slug in addon_list:
                addon.cluster = (node.slug, addon_list[addon.slug])
            else:
                addon.cluster = (node.slug, None)

    async def _stop_addon(self):
        """Stopping cluster addon."""
        _LOGGER.info("Stopping cluster addon because left cluster.")
        # FIXME: Stop cluster addon
        self.is_inited = False

    async def switch_to_master(self, is_slave_initiated):
        """Switching operating mode to master."""
        if self.is_master is True:
            return False
        self.is_master = True
        if await self.homeassistant.is_running() is False:
            _LOGGER.info("Starting HASS because of switching to master mode")
            # FIXME: Start HASS
            # await self.homeassistant.run()

        await asyncio.shield(self._stop_addon())

        if is_slave_initiated is False:
            return True

        result = await cluster_do_post(None, self.master_ip, "/leave",
                                       self.node_key, self.websession,
                                       self.node_name)
        self.node_key = None
        if result is not None:
            _LOGGER.info("Successfully left cluster")
            return True
        _LOGGER.error("Failed to leave cluster")
        return False

    async def switch_to_slave(self, master_ip, master_key, node_name):
        """Switching operating mode to slave."""
        if self.is_master is False:
            return

        if self.is_inited is False:
            await asyncio.shield(self.init())

        data = {
            ATTR_NAME: node_name,
        }

        result = await cluster_do_post(data, master_ip, "/register",
                                       master_key, self.websession)
        if result is None:
            _LOGGER.error("Failed to register in cluster.")
            return False

        if await self.homeassistant.is_running():
            _LOGGER.info("Stopping HASS because of switching to slave mode")
            # FIXME: Stop HASS
            # await self.homeassistant.stop()

        node_key = result[ATTR_NODE_KEY]
        self.node_key = node_key
        self.is_master = False
        self.master_ip = master_ip
        self.node_name = node_name

        new = set(result[ATTR_ADDONS_REPOSITORIES])
        await asyncio.shield(self.addons.load_repositories(new))

        _LOGGER.info("Registered with %s, synced %d repositories",
                     master_ip, len(new))
        return True

    def register_node(self, ip_address, node_name):
        """Registering new slave node."""
        if self.is_inited is False:
            raise RuntimeError("Cluster is not initialized yet.")

        node_slug = get_node_slug(node_name)
        if self._find_node(node_slug) is not None:
            _LOGGER.error("Attempt to re-register node %s", node_slug)
            raise RuntimeError("Node already registered")

        _LOGGER.info("Registered new node %s from IP %s",
                     node_slug, ip_address)
        node_key = generate_cluster_key()
        self.registered_nodes = (node_slug,
                                 self._format_node(node_name, node_key))
        new_node = ClusterNode(node_slug, node_name, node_key,
                               self.websession, ip_address)
        self.nodes[new_node.slug] = new_node
        return node_key

    async def remove_node(self, node_, is_master_initiated):
        """Removing known node from cluster."""
        if is_master_initiated:
            is_success = await node_.leave_remote()
            if is_success is False:
                _LOGGER.warning("Failed to execute on remote. "
                                "Perform manual change.")
        self.nodes.pop(node.slug, None)
        self.registered_nodes = (node_.slug, None)
        _LOGGER.info("Removed node %s from cluster", node_.slug)

    def sync(self, node, ip_address, version, arch, time_zone, addon_list):
        """Responding to ping from slave node."""
        node.sync(ip_address, version, arch, time_zone)
        self.sync_node_addons(node, addon_list)

        new_key = None
        if random.SystemRandom().randint(1, 100) <= 20:
            new_key = generate_cluster_key()
            self.registered_nodes = (node_.slug,
                                     self._format_node(node_.name, new_key))
            node_.update_key(new_key)
        return new_key

    async def init(self):
        """Cluster addon initialization."""
        if self.is_inited:
            raise RuntimeError("Cluster already inited")

        _LOGGER.info("Starting cluster addon because joining cluster")
        # FIXME: Install cluster addon
        self.is_inited = True
        return True

    def get_cluster_node(self, request):
        """Parsing request to get remote node."""
        node_slug = request.match_info.get("node")
        if node_slug is None or node_slug == CLUSTER_NODE_MASTER:
            return None
        node_ = self.get(node_slug)
        if node_ is None:
            raise RuntimeError("Node is unknown")
        if node_.is_active is False:
            raise RuntimeError("Node is not active")
        return node_

    def get_node_name(self):
        """Return current cluster node name."""
        if self.is_inited is False:
            return None
        if self.is_master is True:
            return CLUSTER_NODE_MASTER
        return get_node_slug(self.node_name)

    def get(self, slug):
        """Retrieving known node by slug."""
        return self._find_node(slug=slug)

    @property
    def master_key(self):
        """Return current master key."""
        return self._master_key

    @property
    def master_ip(self):
        """Return master IP address."""
        return self._data.get(CLUSTER_MASTER_IP)

    @master_ip.setter
    def master_ip(self, value):
        """Set master IP address."""
        self._data[CLUSTER_MASTER_IP] = value
        self.save()

    @property
    def node_key(self):
        """Return node secret key."""
        return self._data.get(CLUSTER_NODE_KEY)

    @node_key.setter
    def node_key(self, value):
        """Set node secret key."""
        self._data[CLUSTER_NODE_KEY] = value
        self.save()

    @property
    def node_name(self):
        """Return node name."""
        return self._data[CLUSTER_NODE_NAME]

    @node_name.setter
    def node_name(self, value):
        """Set node name."""
        self._data[CLUSTER_NODE_NAME] = value
        self.save()

    @property
    def registered_nodes(self):
        """Return information about known nodes."""
        return self._data[CLUSTER_REGISTERED_NODES].items()

    @registered_nodes.setter
    def registered_nodes(self, value):
        """Set known node."""
        slug, info = value
        if info is None:
            self._data[CLUSTER_REGISTERED_NODES].pop(slug, None)
        else:
            self._data[CLUSTER_REGISTERED_NODES][slug] = info
        self.save()

    @property
    def is_master(self):
        """Return flag indicating whether this node operates as master."""
        return self._data.get(CLUSTER_IS_MASTER)

    @is_master.setter
    def is_master(self, value):
        """Set operation mode."""
        self._data[CLUSTER_IS_MASTER] = value
        self.save()

    @property
    def is_inited(self):
        """Return flag indicating whether cluster addon is inited."""
        return self._data[CLUSTER_IS_INITED]

    @is_inited.setter
    def is_inited(self, value):
        """Set inited status."""
        self._data[CLUSTER_IS_INITED] = value
        self.save()
