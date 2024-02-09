import { db } from "../models/db.js";

export const countryController = {
  index: {
    handler: async function (request, h) {
      const country = await db.countryStore.getCountryById(request.params.id);
      const viewData = {
        title: "Country",
        country: country,
      };
      return h.view("country-view", viewData);
    },
  },

  addBridge: {
    handler: async function (request, h) {
      const country = await db.countryStore.getCountryById(request.params.id);
      const newBridge = {
        name: request.payload.name,
        latitude: request.payload.latitude,
  
        latitude: Number(request.payload.latitude),
        longitude: Number(request.payload.longitude),
        description: request.payload.description,
      };
      await db.bridgeStore.addBridge(country._id, newBridge);
      return h.redirect(`/country/${country._id}`);
    },
  },
};
