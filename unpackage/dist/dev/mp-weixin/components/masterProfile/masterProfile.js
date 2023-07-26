"use strict";
const common_vendor = require("../../common/vendor.js");
const api_order = require("../../api/order.js");
require("../../utils/request.js");
require("../../utils/config.js");
if (!Array) {
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_uni_rate2 + _easycom_uni_icons2)();
}
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_rate + _easycom_uni_icons)();
}
const _sfc_main = {
  __name: "masterProfile",
  props: {
    showContactMaster: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    let curOrderInfo = common_vendor.ref({});
    let orderDetailInfo = common_vendor.ref({});
    let goodsItem = common_vendor.ref({});
    let masterInfo = common_vendor.ref({});
    let getCurOrderInfo = async () => {
      let { data } = await api_order.getOrdersById(curOrderId.value);
      curOrderInfo.value = data.data;
      orderDetailInfo.value = JSON.parse(curOrderInfo.value.orderDetailInfo);
      goodsItem.value = JSON.parse(orderDetailInfo.value.goodsItem);
      masterInfo.value = curOrderInfo.value.xcxEngineer;
    };
    common_vendor.onMounted(() => {
      getCurOrderInfo();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(masterInfo).avatar,
        b: common_vendor.t(common_vendor.unref(masterInfo).realName),
        c: common_vendor.p({
          readonly: true,
          value: common_vendor.unref(masterInfo).avgScore,
          size: "18"
        }),
        d: common_vendor.t(common_vendor.unref(masterInfo).introduce),
        e: __props.showContactMaster
      }, __props.showContactMaster ? {
        f: common_vendor.p({
          color: "#00BB95",
          type: "phone-filled",
          size: "24"
        })
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ab36d37d"], ["__file", "D:/Lydia/NOTE/lydia_note3/zhailijia-uni/components/masterProfile/masterProfile.vue"]]);
wx.createComponent(Component);
