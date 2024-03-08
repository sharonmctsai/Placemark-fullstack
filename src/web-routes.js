import { aboutController } from "./controllers/about-controller.js";
import { accountsController } from "./controllers/accounts-controller.js";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { countryController } from "./controllers/country-controller.js";
import { bridgeController } from "./controllers/bridge-controller.js";
import { adminController } from "./controllers/admin-controller.js";

export const webRoutes = [
  { method: "GET", path: "/", config: accountsController.index },
  { method: "GET", path: "/signup", config: accountsController.showSignup },
  { method: "GET", path: "/login", config: accountsController.showLogin },
  { method: "GET", path: "/logout", config: accountsController.logout },
  { method: "POST", path: "/register", config: accountsController.signup },
  { method: "POST", path: "/authenticate", config: accountsController.login },

  { method: "GET", path: "/about", config: aboutController.index },

  { method: "GET", path: "/admin-dashboard", config: adminController.index },
  { method: "GET", path: "/admin-dashboard/deleteuser/{id}", config: adminController.deleteUser },

  { method: "GET", path: "/dashboard", config: dashboardController.index },
  { method: "POST", path: "/dashboard/addcountry", config: dashboardController.addCountry },
  { method: "GET", path: "/dashboard/deletecountry/{id}", config: dashboardController.deleteCountry },

  { method: "GET", path: "/country/{id}", config: countryController.index },
  { method: "POST", path: "/country/{id}/addbridge", config: countryController.addBridge },
  { method: "GET", path: "/country/{id}/deletebridge/{bridgeid}", config: countryController.deleteBridge},

  { method: "GET", path: "/country/{id}/editbridge/{bridgeid}", config: bridgeController.showBridgeDetails},
  { method: "POST", path: "/country/{id}/bridge/{bridgeid}", config: bridgeController.update },

  { method: "GET", path: "/{param*}", handler: { directory: { path: "./public" } }, options: { auth: false } }

];
