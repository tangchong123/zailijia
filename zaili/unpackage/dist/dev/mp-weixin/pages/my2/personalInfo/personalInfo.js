"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "personalInfo",
  setup(__props) {
    let userInfo = common_vendor.reactive({
      nickName: "",
      avatar: ""
    });
    common_vendor.onLoad(() => {
      let { nickName, avatar } = common_vendor.index.getStorageSync("userInfo");
      userInfo.nickName = nickName;
      userInfo.avatar = avatar;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(userInfo).avatar,
        b: common_vendor.t(common_vendor.unref(userInfo).nickName)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/tc/Desktop/zailijia/zaili/pages/my2/personalInfo/personalInfo.vue"]]);
wx.createPage(MiniProgramPage);
