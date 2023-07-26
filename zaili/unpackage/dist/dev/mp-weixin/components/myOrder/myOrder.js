"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "myOrder",
  props: {
    detail: Object
  },
  setup(__props) {
    const props = __props;
    let detail = props.detail;
    common_vendor.onLoad(() => {
      console.log(detail, "---------------------");
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(common_vendor.unref(detail).order_id),
        b: common_vendor.t(common_vendor.unref(detail).order_state),
        c: common_vendor.t(common_vendor.unref(detail).order_title),
        d: common_vendor.t(common_vendor.unref(detail).order_appointment),
        e: ["已完成", "待评价"].indexOf(common_vendor.unref(detail).order_state) < 0
      }, ["已完成", "待评价"].indexOf(common_vendor.unref(detail).order_state) < 0 ? {} : {}, {
        f: ["待支付"].indexOf(common_vendor.unref(detail).order_state) > -1
      }, ["待支付"].indexOf(common_vendor.unref(detail).order_state) > -1 ? {} : {}, {
        g: ["已完成"].indexOf(common_vendor.unref(detail).order_state) > -1
      }, ["已完成"].indexOf(common_vendor.unref(detail).order_state) > -1 ? {} : {}, {
        h: ["待评价"].indexOf(common_vendor.unref(detail).order_state) > -1
      }, ["待评价"].indexOf(common_vendor.unref(detail).order_state) > -1 ? {} : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/tc/Desktop/zailijia/zaili/components/myOrder/myOrder.vue"]]);
wx.createComponent(Component);
