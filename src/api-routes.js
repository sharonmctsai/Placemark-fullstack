import { userApi } from "./api/user-api.js";
import { countryApi } from "./api/country-api.js";
import { bridgeApi } from "./api/bridge-api.js";

export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },

  { method: "POST", path: "/api/countries", config: countryApi.create },
  { method: "DELETE", path: "/api/countries", config: countryApi.deleteAll },
  { method: "GET", path: "/api/countries", config: countryApi.find },
  { method: "GET", path: "/api/countries/{id}", config: countryApi.findOne },
  { method: "DELETE", path: "/api/countries/{id}", config: countryApi.deleteOne },

  { method: "GET", path: "/api/bridges", config: bridgeApi.find },
  { method: "GET", path: "/api/bridges/{id}", config: bridgeApi.findOne },
  { method: "POST", path: "/api/countries{id}/bridges", config: bridgeApi.create },
  { method: "DELETE", path: "/api/bridges", config: bridgeApi.deleteAll },
  { method: "DELETE", path: "/api/bridges/{id}", config: bridgeApi.deleteOne },
];