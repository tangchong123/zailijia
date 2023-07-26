"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_TopBar2 = common_vendor.resolveComponent("TopBar");
  _easycom_TopBar2();
}
const _easycom_TopBar = () => "../../../components/TopBar/TopBar.js";
if (!Math) {
  _easycom_TopBar();
}
const _sfc_main = {
  __name: "noAddress",
  setup(__props) {
    let gotoAddAddress = () => {
      common_vendor.index.navigateTo({
        url: "/pages/my/addressManage/toAddAddress/toAddAddress"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "地址管理"
        }),
        b: common_vendor.o((...args) => common_vendor.unref(gotoAddAddress) && common_vendor.unref(gotoAddAddress)(...args))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-29d23885"], ["__file", "D:/Lydia/NOTE/lydia_note3/zhailijia-uni/pages/my/addressManage/noAddress.vue"]]);
wx.createPage(MiniProgramPage);
