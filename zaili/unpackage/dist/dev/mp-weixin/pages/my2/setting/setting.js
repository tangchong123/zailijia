"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "setting",
  setup(__props) {
    let List = common_vendor.reactive([
      {
        "title": "个人资料",
        "url": "../personalInfo/personalInfo"
      },
      {
        "title": "关于我们",
        "url": "../aboutUs/aboutUs"
      },
      {
        "title": "用户协议",
        "url": null
      },
      {
        "title": "隐私政策",
        "url": null
      }
    ]);
    let handle = (url) => {
      if (url) {
        common_vendor.index.navigateTo({
          url: `${url}`
        });
      }
    };
    let logOut = () => {
      common_vendor.index.showModal({
        content: "退出当前用户登陆",
        cancelText: "取消",
        confirmText: "确认退出",
        success() {
          common_vendor.index.removeStorageSync("userInfo");
          common_vendor.index.reLaunch({
            url: "/pages/my2/my2"
          });
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(List), (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: index,
            c: common_vendor.o(($event) => common_vendor.unref(handle)(item.url), index)
          };
        }),
        b: common_vendor.o((...args) => common_vendor.unref(logOut) && common_vendor.unref(logOut)(...args))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/tc/Desktop/zailijia/zaili/pages/my2/setting/setting.vue"]]);
wx.createPage(MiniProgramPage);
