"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "serviceFeeCard",
  setup(__props) {
    let curOrderInfo = common_vendor.ref({});
    let orderDetailInfo = common_vendor.ref({});
    let goodsItem = common_vendor.ref({});
    common_vendor.onMounted(() => {
      curOrderInfo.value = common_vendor.index.getStorageSync("curOrderInfo");
      orderDetailInfo.value = JSON.parse(curOrderInfo.value.orderDetailInfo);
      goodsItem.value = JSON.parse(orderDetailInfo.value.goodsItem);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(curOrderInfo).mainPayMoney),
        b: common_vendor.t(common_vendor.unref(curOrderInfo).mainReduceMoney),
        c: common_vendor.t(common_vendor.unref(curOrderInfo).payMoney - common_vendor.unref(curOrderInfo).mainReduceMoney)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Lydia/NOTE/lydia_note3/zhailijia-uni/components/serviceFeeCard/serviceFeeCard.vue"]]);
wx.createComponent(Component);
