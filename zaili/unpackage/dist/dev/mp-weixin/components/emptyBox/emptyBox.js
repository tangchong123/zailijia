"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  fuiIcon();
}
const fuiIcon = () => "../../node-modules/firstui-uni/firstui/fui-icon/fui-icon.js";
const _sfc_main = {
  __name: "emptyBox",
  props: ["title"],
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          name: "receive",
          size: "240",
          color: "skyblue"
        }),
        b: common_vendor.t(__props.title)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/tc/Desktop/zailijia/zaili/components/emptyBox/emptyBox.vue"]]);
wx.createComponent(Component);
