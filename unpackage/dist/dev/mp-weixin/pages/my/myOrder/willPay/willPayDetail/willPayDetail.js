"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const api_order = require("../../../../../api/order.js");
require("../../../../../utils/request.js");
require("../../../../../utils/config.js");
if (!Array) {
  const _easycom_TopBar2 = common_vendor.resolveComponent("TopBar");
  const _easycom_uni_countdown2 = common_vendor.resolveComponent("uni-countdown");
  const _easycom_detail2 = common_vendor.resolveComponent("detail");
  const _easycom_serviceFeeCard2 = common_vendor.resolveComponent("serviceFeeCard");
  const _easycom_bottomController2 = common_vendor.resolveComponent("bottomController");
  (_easycom_TopBar2 + _easycom_uni_countdown2 + _easycom_detail2 + _easycom_serviceFeeCard2 + _easycom_bottomController2)();
}
const _easycom_TopBar = () => "../../../../../components/TopBar/TopBar.js";
const _easycom_uni_countdown = () => "../../../../../uni_modules/uni-countdown/components/uni-countdown/uni-countdown.js";
const _easycom_detail = () => "../../../../../components/detail/detail.js";
const _easycom_serviceFeeCard = () => "../../../../../components/serviceFeeCard/serviceFeeCard.js";
const _easycom_bottomController = () => "../../../../../components/bottomController/bottomController.js";
if (!Math) {
  (_easycom_TopBar + _easycom_uni_countdown + _easycom_detail + _easycom_serviceFeeCard + _easycom_bottomController)();
}
const _sfc_main = {
  __name: "willPayDetail",
  setup(__props) {
    let curOrderId = common_vendor.ref(0);
    let curOrderInfo = common_vendor.ref({});
    let restTime = common_vendor.ref(0);
    let restMinutTime = common_vendor.computed(() => {
      return restTime.value / 60 % 60;
    });
    let restSecondTime = common_vendor.computed(() => {
      return restTime.value % 60;
    });
    let timeUp = () => {
      console.log("支付时间已过期!");
    };
    let getCurOrderInfo = async () => {
      let { data } = await api_order.getOrdersById(curOrderId.value);
      curOrderInfo.value = data.data;
      common_vendor.index.setStorageSync("curOrderInfo", data.data);
      let pastTime = (/* @__PURE__ */ new Date() - new Date(curOrderInfo.value.createTime)) / 1e3;
      restTime.value = 30 * 60 - pastTime;
    };
    common_vendor.onMounted(() => {
      curOrderId.value = common_vendor.index.getStorageSync("curOrderId");
      getCurOrderInfo();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "我的订单"
        }),
        b: common_vendor.t(common_vendor.unref(curOrderInfo).mainPayMoney),
        c: common_vendor.o(common_vendor.unref(timeUp)),
        d: common_vendor.p({
          ["font-size"]: 12,
          ["show-day"]: false,
          minute: common_vendor.unref(restMinutTime),
          second: common_vendor.unref(restSecondTime),
          ["show-colon"]: false
        }),
        e: common_vendor.p({
          ["cur-order-info"]: common_vendor.unref(curOrderInfo)
        }),
        f: common_vendor.p({
          title: "待支付",
          showToPayBtn: true,
          isContactMaster: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Lydia/NOTE/lydia_note3/zhailijia-uni/pages/my/myOrder/willPay/willPayDetail/willPayDetail.vue"]]);
wx.createPage(MiniProgramPage);
