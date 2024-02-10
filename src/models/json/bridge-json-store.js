import { v4 } from "uuid";
import { db } from "./store-utils.js";

export const bridgeJsonStore = {
  async getAllBridges() {
    await db.read();
    return db.data.bridges;
  },

  async addBridge(countryId, bridge) {
    await db.read();
    bridge._id = v4();
    bridge.countryid = countryId;
    db.data.bridges.push(bridge);
    await db.write();
    return bridge;
  },

  async getBridgesByCountryId(id) {
    await db.read();
    return db.data.bridges.filter((bridge) => bridge.countryid === id);
  },

  async getBridgeById(id) {
    await db.read();
    return db.data.bridges.find((bridge) => bridge._id === id);
  },

  async deleteBridge(id) {
    await db.read();
    const index = db.data.bridges.findIndex((bridge) => bridge._id === id);
    db.data.bridges.splice(index, 1);
    await db.write();
  },

  async deleteAllBridges() {
    db.data.bridges = [];
    await db.write();
  },

  async updateBridge(bridge, updatedBridge) {
    bridge.name = updatedBridge.name;
    bridge.latitude = updatedBridge.latitude;
    bridge.longitude = updatedBridge.longitude;
    bridge.description = updatedBridge.description;
    await db.write();
  },
};
