"use strict";
const common_vendor = require("../common/vendor.js");
const useUserStore = common_vendor.defineStore("user", {
  state: () => {
    return {
      nickName: "",
      avatar: "",
      phoneNumber: "",
      createUser: ""
    };
  },
  getters: {},
  actions: {}
});
exports.useUserStore = useUserStore;
