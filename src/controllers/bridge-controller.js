import {BridgeSpec } from "../models/joi-schemas.js";
import { db } from "../models/db.js";

export const bridgeController = {
  index: {
    handler: async function (request, h) {
      const country = await db.countryStore.getCountryById(request.params.id);
      const bridge = await db.bridgeStore.getBridgeById(request.params.bridgeid);
      const viewData = {
        title: "Edit bridge",
        country: country,
        bridge: bridge,
      };
      return h.view("update-bridges-view", viewData);
    },
  },

  update: {
    validate: {
      payload: BridgeSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        console.log(error);
        return h.view("update-bridges-view", { title: "Edit bridge error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const newBridge = {
        name: request.payload.name,
        latitude: Number(request.payload.latitude),
        longitude: Number(request.payload.longitude),
        description: request.payload.description,
  
      };
      const bridge = await db.bridgeStore.getBridgeById(request.params.bridgeid);
      try {
        await db.bridgeStore.updateBridge(bridge, newBridge);
      } catch (error) {
        console.log(error);
      }
      return h.redirect(`/country/${request.params.id}`);
    },
  },

  showBridgeDetails: {
    handler: async function (request, h) {
      const bridge = await db.bridgeStore.getBridgeById(request.params.bridgeid);
      const viewData = {
        title: "Update bridge",
        bridge: bridge,
      };
      return h.view("update-bridges-view", viewData);
    },
  },
};