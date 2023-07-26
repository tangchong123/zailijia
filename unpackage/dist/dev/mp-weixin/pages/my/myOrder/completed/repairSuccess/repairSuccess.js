"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const api_order = require("../../../../../api/order.js");
require("../../../../../utils/request.js");
require("../../../../../utils/config.js");
if (!Array) {
  const _easycom_TopBar2 = common_vendor.resolveComponent("TopBar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_TopBar2 + _easycom_uni_icons2)();
}
const _easycom_TopBar = () => "../../../../../components/TopBar/TopBar.js";
const _easycom_uni_icons = () => "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_TopBar + _easycom_uni_icons)();
}
const _sfc_main = {
  __name: "repairSuccess",
  setup(__props) {
    let orderNum = common_vendor.ref("");
    let cacelAfterSale = async () => {
      let { data } = await api_order.cancelAfterSaleOrder(orderNum.value);
      if (data.code === "200") {
        common_vendor.index.showToast({
          title: "取消售后成功!"
        });
      }
    };
    let seeRepairSheet = () => {
      common_vendor.index.navigateBack();
    };
    common_vendor.onMounted(() => {
      orderNum.value = common_vendor.index.getStorageSync("curOrderNum");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "返修成功"
        }),
        b: common_vendor.p({
          color: "#00A07A",
          size: "34",
          type: "checkmarkempty"
        }),
        c: common_vendor.o((...args) => common_vendor.unref(cacelAfterSale) && common_vendor.unref(cacelAfterSale)(...args)),
        d: common_vendor.o((...args) => common_vendor.unref(seeRepairSheet) && common_vendor.unref(seeRepairSheet)(...args))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Lydia/NOTE/lydia_note3/zhailijia-uni/pages/my/myOrder/completed/repairSuccess/repairSuccess.vue"]]);
wx.createPage(MiniProgramPage);
