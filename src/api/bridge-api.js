import Boom from "@hapi/boom";
import { db } from "../models/db.js";

export const bridgeApi = {
  find: {
    auth: false,
    handler: async function (request, h) {
      try {
        const bridges = await db.bridgeStore.getAllBridges();
        return bridges;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },

  findOne: {
    auth: false,
    async handler(request) {
      try {
        const bridge = await db.bridgeStore.getBridgeById(request.params.id);
        if (!bridge) {
          return Boom.notFound("No bridge with this id");
        }
        return bridge;
      } catch (err) {
        return Boom.serverUnavailable("No bridge with this id");
      }
    },
  },

  create: {
    auth: false,
    handler: async function (request, h) {
      try {
        const bridge = await db.bridgeStore.addBridge(request.params.id, request.payload);
        if (bridge) {
          return h.response(bridge).code(201);
        }
        return Boom.badImplementation("error creating bridge");
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },

  deleteAll: {
    auth: false,
    handler: async function (request, h) {
      try {
        await db.bridgeStore.deleteAllBridges();
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },

  deleteOne: {
    auth: false,
    handler: async function (request, h) {
      try {
        const bridge = await db.bridgeStore.getBridgeById(request.params.id);
        if (!bridge) {
          return Boom.notFound("No Bridge with this id");
        }
        await db.bridgeStore.deleteBridge(bridge._id);
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("No Bridge with this id");
      }
    },
  },
};
