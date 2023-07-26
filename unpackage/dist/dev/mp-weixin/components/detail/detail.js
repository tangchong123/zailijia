"use strict";
const common_vendor = require("../../common/vendor.js");
const api_order = require("../../api/order.js");
require("../../utils/request.js");
require("../../utils/config.js");
const _sfc_main = {
  __name: "detail",
  setup(__props) {
    let curOrderId = common_vendor.ref(null);
    let curOrderInfo = common_vendor.ref({});
    let orderDetailInfo = common_vendor.ref({});
    let goodsItem = common_vendor.ref({});
    let serviceAddress = common_vendor.computed(() => {
      return (curOrderInfo.value.xcxAddress.region + "").replaceAll("/", "") + curOrderInfo.value.xcxAddress.address;
    });
    let getCurOrderInfo = async () => {
      let { data } = await api_order.getOrdersById(curOrderId.value);
      curOrderInfo.value = data.data;
      orderDetailInfo.value = JSON.parse(curOrderInfo.value.orderDetailInfo);
      goodsItem.value = JSON.parse(orderDetailInfo.value.goodsItem);
    };
    common_vendor.onMounted(() => {
      curOrderId.value = common_vendor.index.getStorageSync("curOrderId");
      getCurOrderInfo();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t((common_vendor.unref(goodsItem).createTime + "").replaceAll("/", "")),
        b: common_vendor.t(common_vendor.unref(serviceAddress)),
        c: common_vendor.t(common_vendor.unref(curOrderInfo).xcxAddress.linkMan),
        d: common_vendor.t(common_vendor.unref(curOrderInfo).xcxAddress.mobile.slice(0, 3) + "****" + common_vendor.unref(curOrderInfo).xcxAddress.mobile.slice(-4)),
        e: common_vendor.unref(orderDetailInfo).goodsCover,
        f: common_vendor.t(common_vendor.unref(orderDetailInfo).goodsName),
        g: common_vendor.t(common_vendor.unref(goodsItem).price),
        h: common_vendor.t(common_vendor.unref(goodsItem).unit),
        i: common_vendor.t(common_vendor.unref(orderDetailInfo).goodsNum),
        j: common_vendor.t(common_vendor.unref(curOrderInfo).questionDesc),
        k: common_vendor.f(JSON.parse(common_vendor.unref(curOrderInfo).questionImgs), (item, k0, i0) => {
          return {
            a: item
          };
        }),
        l: common_vendor.t(common_vendor.unref(curOrderInfo).orderNum),
        m: common_vendor.t((common_vendor.unref(curOrderInfo).createTime + "").replaceAll("/", ""))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-84b6d033"], ["__file", "D:/Lydia/NOTE/lydia_note3/zhailijia-uni/components/detail/detail.vue"]]);
wx.createComponent(Component);
