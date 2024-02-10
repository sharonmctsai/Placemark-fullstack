// import { userMemStore } from "./mem/user-mem-store.js";
// import { playlistMemStore } from "./mem/playlist-mem-store.js";
// import { trackMemStore } from "./mem/track-mem-store.js";

import { userJsonStore } from "./json/user-json-store.js";
import { countryJsonStore } from "./json/country-json-store.js";
import { bridgeJsonStore } from "./json/bridge-json-store.js";

export const db = {
  userStore: null,
  countryStore: null,
  bridgeStore: null,

  init() {
    this.userStore = userJsonStore;
    this.countryStore = countryJsonStore;
    this.bridgeStore = bridgeJsonStore;
  },
};
