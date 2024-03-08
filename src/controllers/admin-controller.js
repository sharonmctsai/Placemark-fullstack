import { db } from "../models/db.js";
import { analytics } from "../utils/analytics.js";

export const adminController = {
    // index function sending data including analytics data through to view.
    index: {
      plugins: {
        hacli: {
          permissions: ["ADMIN"],
        },
      },
      handler: async function (request, h) {
        try {
          const loggedInUser = request.auth.credentials;
          const users = await db.userStore.getAllUsers();
          const countries = await db.countryStore.getAllCountries();
          const bridges = await db.bridgeStore.getAllBridges();
          const averageBridgesPerUser = await analytics.averageBridgesPerUser();
          const averageBridgesPerCountry = await analytics.averageBridgesPerCountry();
          
          const viewData = {
            title: "Admin Dashboard",
            users: users,
            countries: countries,
            bridges: bridges,
            averageBridgesPerUser: averageBridgesPerUser,
            averageBridgesPerCountry: averageBridgesPerCountry
          };
          return h.view("admin-dashboard-view", viewData);
        } catch (error) {
          console.error("Error in adminController index function:", error);
          throw error;
        }
      },
    },
    // function allowing a user to be deleted
    deleteUser: {
      handler: async function (request, h) {
        try {
          const user = await db.userStore.getUserById(request.params.id);
          await db.userStore.deleteUserById(user._id);
          return h.redirect("/admin-dashboard");
        } catch (error) {
          console.error("Error in adminController deleteUser function:", error);
          throw error;
        }
      },
    },
};
