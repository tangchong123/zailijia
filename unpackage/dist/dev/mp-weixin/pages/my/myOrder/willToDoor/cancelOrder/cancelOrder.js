"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const api_order = require("../../../../../api/order.js");
require("../../../../../utils/request.js");
require("../../../../../utils/config.js");
if (!Array) {
  const _easycom_TopBar2 = common_vendor.resolveComponent("TopBar");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_TopBar2 + _easycom_uni_popup2)();
}
const _easycom_TopBar = () => "../../../../../components/TopBar/TopBar.js";
const _easycom_uni_popup = () => "../../../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_TopBar + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "cancelOrder",
  setup(__props) {
    let cancelReason = common_vendor.ref("");
    let curOrderInfo = common_vendor.ref({});
    let orderDetailInfo = common_vendor.ref({});
    let goodsItem = common_vendor.ref({});
    let popup = common_vendor.ref(null);
    let contactName = common_vendor.ref("");
    let contactPhone = common_vendor.ref("");
    let chooseReason = () => {
      popup.value.open("bottom");
    };
    let handleReason = ({ detail }) => {
      cancelReason.value = detail.value;
    };
    let cancelCurOrder = async () => {
      if (!cancelReason.value) {
        return common_vendor.index.showToast({
          title: "请先选择取消订单原因"
        });
      }
      let params = {
        "cancelReason": cancelReason.value,
        "xcxAddress": curOrderInfo.xcxAddress,
        "xcxUser": curOrderInfo.xcxUser
      };
      let { data } = await api_order.cancelOrderByOrderNum(curOrderInfo.value.orderNum, params);
      if (data.code === "200") {
        common_vendor.index.showToast({
          title: "订单取消成功!"
        });
      }
    };
    common_vendor.onMounted(() => {
      curOrderInfo.value = common_vendor.index.getStorageSync("curOrderInfo");
      orderDetailInfo.value = JSON.parse(curOrderInfo.value.orderDetailInfo);
      goodsItem.value = JSON.parse(orderDetailInfo.value.goodsItem);
      contactName.value = curOrderInfo.value.xcxUser.nickName;
      contactPhone.value = curOrderInfo.value.xcxUser.mobile.slice(0, 3) + "****" + curOrderInfo.value.xcxUser.mobile.slice(-4);
      console.log(curOrderInfo.value.orderNum);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "取消订单"
        }),
        b: common_vendor.o((...args) => common_vendor.unref(chooseReason) && common_vendor.unref(chooseReason)(...args)),
        c: common_vendor.o((...args) => common_vendor.unref(handleReason) && common_vendor.unref(handleReason)(...args)),
        d: common_vendor.sr(popup, "f732fba6-1", {
          "k": "popup"
        }),
        e: common_vendor.o(_ctx.change),
        f: common_vendor.p({
          ["background-color"]: "#fff"
        }),
        g: common_vendor.t(common_vendor.unref(contactName)),
        h: common_vendor.t(common_vendor.unref(contactPhone)),
        i: common_vendor.o((...args) => common_vendor.unref(cancelCurOrder) && common_vendor.unref(cancelCurOrder)(...args))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Lydia/NOTE/lydia_note3/zhailijia-uni/pages/my/myOrder/willToDoor/cancelOrder/cancelOrder.vue"]]);
wx.createPage(MiniProgramPage);
