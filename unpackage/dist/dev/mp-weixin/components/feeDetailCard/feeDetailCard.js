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
  __name: "feeDetailCard",
  setup(__props) {
    let iconType = common_vendor.ref("top");
    let show = common_vendor.ref(true);
    let toggle = () => {
      iconType.value = iconType.value === "top" ? "bottom" : "top";
      show.value = !show.value;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          color: "#aaa",
          type: common_vendor.unref(iconType)
        }),
        b: common_vendor.o((...args) => common_vendor.unref(toggle) && common_vendor.unref(toggle)(...args)),
        c: common_vendor.unref(show)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Lydia/NOTE/lydia_note3/zhailijia-uni/components/feeDetailCard/feeDetailCard.vue"]]);
wx.createComponent(Component);
