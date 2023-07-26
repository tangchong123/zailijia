"use strict";
const common_vendor = require("../common/vendor.js");
const useLocationStore = common_vendor.defineStore("location", {
  state: () => {
    return { locationInfo: "" };
  },
  getters: {},
  actions: {}
});
exports.useLocationStore = useLocationStore;
