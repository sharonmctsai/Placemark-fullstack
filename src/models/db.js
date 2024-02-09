import { userMemStore } from "./mem/user-mem-store.js";
import { countryMemStore } from "./mem/country-mem-store.js";
import { bridgeMemStore } from "./mem/bridge-mem-store.js";

export const db = {
  userStore: null,
  countryStore: null,
  bridgeStore: null,

  init() {
    this.userStore = userMemStore;
    this.countryStore = countryMemStore;
    this.bridgeStore = bridgeMemStore;
  },
};
