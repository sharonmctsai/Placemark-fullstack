import { userMemStore } from "./mem/user-mem-store.js";
import { countryMemStore } from "./mem/country-mem-store.js";
import { bridgeMemStore } from "./mem/bridge-mem-store.js";
import { userJsonStore } from "./json/user-json-store.js";
import { countryJsonStore } from "./json/country-json-store.js";
import { bridgeJsonStore } from "./json/bridge-json-store.js";


export const db = {
  userStore: null,
  countryStore: null,
  bridgeStore: null,

  init(storeType) {
    switch (storeType) {
      case "json":
        this.userStore = userJsonStore;
        this.countryStore = countryJsonStore;
        this.bridgeStore = bridgeJsonStore;
        break;
      default:
        this.userStore = userMemStore;
        this.countryStore = countryMemStore;
        this.bridgeStore = bridgeMemStore;
    }
  },
};