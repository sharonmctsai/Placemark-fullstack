import { v4 } from "uuid";

let bridges = [];

export const bridgeMemStore = {
  async getAllBridges() {
    return bridges;
  },

  async addBridge(countryId, bridge) {
    bridge._id = v4();
    bridge.countryid = countryId;
    bridges.push(bridge);
    return bridge;
  },

  async getBridgesByCountryId(id) {
    return bridges.filter((bridge) => bridge.countryid === id);
  },

  async getBridgeById(id) {
    return bridges.find((bridge) => bridge._id === id);
  },

  async getCountryBridges(countryId) {
    return bridges.filter((bridge) => bridge.countryid === countryId);
  },

  async deleteBridge(id) {
    const index = bridges.findIndex((bridge) => bridge._id === id);
    bridges.splice(index, 1);
  },

  async deleteAllBridges() {
    bridges = [];
  },

  async updateBridge(bridge, updatedBridge) {
    bridge.name = updatedBridge.name;
    bridge.latitude = updatedBridge.latitude;
    bridge.longitude = updatedBridge.longitude;
    bridge.description = updatedBridge.description;
  },
};
