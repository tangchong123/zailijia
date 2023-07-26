"use strict";
const common_vendor = require("../../common/vendor.js");
const api_requisition = require("../../api/requisition.js");
require("../../utils/request.js");
require("../../utils/config.js");
const _sfc_main = {
  __name: "requisition",
  setup(__props) {
    common_vendor.onLoad(async () => {
      if (!common_vendor.index.getStorageSync("userInfo")) {
        common_vendor.index.showModal({
          content: "请先登陆",
          confirmText: "去登陆",
          cancelText: "返回",
          success() {
            common_vendor.index.navigateTo({
              url: "/pages/login/login"
            });
          }
        });
      } else {
        let res = await api_requisition.getData();
        console.log(res);
      }
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/tc/Desktop/zailijia/zaili/pages/requisition/requisition.vue"]]);
wx.createPage(MiniProgramPage);
