"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "MasterKind",
  props: {
    dataList: Array,
    title: String
  },
  setup(__props) {
    let handleClick = (url) => {
      common_vendor.index.navigateTo({
        url: `${url}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.title),
        b: common_vendor.f(__props.dataList, (item, index, i0) => {
          return {
            a: "a2a45d52-0-" + i0,
            b: common_vendor.p({
              type: item.icon,
              size: "40"
            }),
            c: common_vendor.t(item.title),
            d: common_vendor.o(($event) => common_vendor.unref(handleClick)(item.url), index),
            e: index
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/tc/Desktop/zailijia/zaili/components/MasterKind/MasterKind.vue"]]);
wx.createComponent(Component);
