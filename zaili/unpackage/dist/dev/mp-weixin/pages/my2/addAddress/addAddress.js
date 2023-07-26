"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_pickerAddress2 = common_vendor.resolveComponent("pickerAddress");
  _easycom_pickerAddress2();
}
const _easycom_pickerAddress = () => "../../../components/pickerAddress/pickerAddress.js";
if (!Math) {
  _easycom_pickerAddress();
}
const _sfc_main = {
  __name: "addAddress",
  setup(__props) {
    common_vendor.ref(false);
    let addressInfo = common_vendor.reactive({
      "name": "",
      "phoneNumber": "",
      "address": "",
      "option": "",
      "specificAddress": ""
    });
    let handleInput = (e, type) => {
      addressInfo[type] = e.detail.value;
      console.log(addressInfo);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(addressInfo).name,
        b: common_vendor.o(($event) => common_vendor.unref(handleInput)($event, "name")),
        c: common_vendor.unref(addressInfo).phoneNumber,
        d: common_vendor.o(($event) => common_vendor.unref(handleInput)($event, "phoneNumber")),
        e: common_vendor.unref(addressInfo).address,
        f: common_vendor.unref(addressInfo).option,
        g: common_vendor.unref(addressInfo).specificAddress,
        h: common_vendor.o(($event) => common_vendor.unref(handleInput)($event, "specificAddress"))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/tc/Desktop/zailijia/zaili/pages/my2/addAddress/addAddress.vue"]]);
wx.createPage(MiniProgramPage);
