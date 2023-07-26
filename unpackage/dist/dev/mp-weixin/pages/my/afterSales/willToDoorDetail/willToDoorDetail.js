"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_TopBar2 = common_vendor.resolveComponent("TopBar");
  const _easycom_detail2 = common_vendor.resolveComponent("detail");
  const _easycom_masterProfile2 = common_vendor.resolveComponent("masterProfile");
  const _easycom_bottomController2 = common_vendor.resolveComponent("bottomController");
  (_easycom_TopBar2 + _easycom_detail2 + _easycom_masterProfile2 + _easycom_bottomController2)();
}
const _easycom_TopBar = () => "../../../../components/TopBar/TopBar.js";
const _easycom_detail = () => "../../../../components/detail/detail.js";
const _easycom_masterProfile = () => "../../../../components/masterProfile/masterProfile.js";
const _easycom_bottomController = () => "../../../../components/bottomController/bottomController.js";
if (!Math) {
  (_easycom_TopBar + _easycom_detail + _easycom_masterProfile + _easycom_bottomController)();
}
const _sfc_main = {
  __name: "willToDoorDetail",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "售后订单详情"
        }),
        b: common_vendor.p({
          title: "取消售后",
          isContactMaster: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-97761735"], ["__file", "D:/Lydia/NOTE/lydia_note3/zhailijia-uni/pages/my/afterSales/willToDoorDetail/willToDoorDetail.vue"]]);
wx.createPage(MiniProgramPage);
