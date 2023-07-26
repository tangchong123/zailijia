"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_TopBar2 = common_vendor.resolveComponent("TopBar");
  _easycom_TopBar2();
}
const _easycom_TopBar = () => "../../../components/TopBar/TopBar.js";
if (!Math) {
  _easycom_TopBar();
}
const _sfc_main = {
  __name: "configPage",
  setup(__props) {
    let gotoSelfProfile = () => {
      common_vendor.index.navigateTo({
        url: "/pages/my/configPage/selfProfile/selfProfile"
      });
    };
    let gotoAboutUs = () => {
      common_vendor.index.navigateTo({
        url: "/pages/my/configPage/aboutUs/aboutUs"
      });
    };
    let gotoUserAgreement = () => {
      common_vendor.index.navigateTo({
        url: "/pages/my/configPage/userAgreement/userAgreement"
      });
    };
    let gotoPrivatePrivacy = () => {
      common_vendor.index.navigateTo({
        url: "/pages/my/configPage/privatePrivacy/privatePrivacy"
      });
    };
    let logOut = () => {
      common_vendor.index.clearStorage();
      common_vendor.index.redirectTo({
        url: "/pages/login/login"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "设置"
        }),
        b: common_vendor.o((...args) => common_vendor.unref(gotoSelfProfile) && common_vendor.unref(gotoSelfProfile)(...args)),
        c: common_vendor.o((...args) => common_vendor.unref(gotoAboutUs) && common_vendor.unref(gotoAboutUs)(...args)),
        d: common_vendor.o((...args) => common_vendor.unref(gotoUserAgreement) && common_vendor.unref(gotoUserAgreement)(...args)),
        e: common_vendor.o((...args) => common_vendor.unref(gotoPrivatePrivacy) && common_vendor.unref(gotoPrivatePrivacy)(...args)),
        f: common_vendor.o((...args) => common_vendor.unref(logOut) && common_vendor.unref(logOut)(...args))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Lydia/NOTE/lydia_note3/zhailijia-uni/pages/my/configPage/configPage.vue"]]);
wx.createPage(MiniProgramPage);
