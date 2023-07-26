"use strict";
const common_vendor = require("../../common/vendor.js");
const api_c_order = require("../../api/c_order.js");
require("../../utils/request.js");
require("../../utils/config.js");
const _sfc_main = {
  __name: "homeContainer",
  props: {
    tabsIndex: Number
  },
  setup(__props) {
    common_vendor.onLoad(async () => {
      let res = await api_c_order.getAllData({
        "pageNum": 0,
        "pageSize": 10,
        "createUser": ""
      });
      console.log(res);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.tabsIndex)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/tc/Desktop/zailijia/zaili/components/homeContainer/homeContainer.vue"]]);
wx.createComponent(Component);
