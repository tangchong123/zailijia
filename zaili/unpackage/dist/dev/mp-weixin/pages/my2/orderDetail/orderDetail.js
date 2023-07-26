"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  (fuiIcon + fuiIcon)();
}
const fuiIcon = () => "../../../node-modules/firstui-uni/firstui/fui-icon/fui-icon.js";
const _sfc_main = {
  __name: "orderDetail",
  setup(__props) {
    require("../../../utils/order.js");
    let detail = common_vendor.ref({});
    common_vendor.onLoad((options) => {
      console.log(JSON.parse(options.list));
      let a = JSON.parse(options.list);
      console.log(options.list, "-----------");
      detail.value = a;
    });
    console.log(detail);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          name: "order-fill",
          size: "55",
          color: "skyblue"
        }),
        b: common_vendor.t(common_vendor.unref(detail).order_state),
        c: common_vendor.t(common_vendor.unref(detail).order_appointment),
        d: common_vendor.t(common_vendor.unref(detail).order_appointment),
        e: common_vendor.t(common_vendor.unref(detail).order_address),
        f: common_vendor.t(common_vendor.unref(detail).order_title),
        g: common_vendor.t(common_vendor.unref(detail).order_price),
        h: common_vendor.t(common_vendor.unref(detail).order_beforeTime),
        i: common_vendor.t(common_vendor.unref(detail).order_descript),
        j: common_vendor.t(common_vendor.unref(detail).order_id),
        k: common_vendor.t(common_vendor.unref(detail).order_createTime),
        l: common_vendor.t(common_vendor.unref(detail).order_master.name),
        m: common_vendor.f(["red", "red", "red", "gray", "gray"], (item, index, i0) => {
          return {
            a: index,
            b: "7b82078a-1-" + i0,
            c: common_vendor.p({
              name: "star",
              size: "40",
              color: item
            })
          };
        }),
        n: common_vendor.p({
          name: "mobile",
          size: "50",
          color: "green"
        }),
        o: common_vendor.p({
          name: "kefu",
          color: "green",
          size: "50"
        }),
        p: common_vendor.p({
          name: "mobile",
          size: "50",
          color: "green"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/tc/Desktop/zailijia/zaili/pages/my2/orderDetail/orderDetail.vue"]]);
wx.createPage(MiniProgramPage);
