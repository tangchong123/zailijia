"use strict";
const common_vendor = require("../../common/vendor.js");
const api_login = require("../../api/login.js");
const store_user = require("../../store/user.js");
require("../../utils/request.js");
require("../../utils/config.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
const _sfc_main = {
  __name: "login",
  setup(__props) {
    let userInfo = store_user.useUserStore();
    let { nickName, avatar, phoneNumber } = common_vendor.storeToRefs(userInfo);
    let confine = common_vendor.ref(false);
    let popup = common_vendor.ref();
    let params = common_vendor.reactive({
      "avatar": "",
      "code": "",
      "nickName": "",
      "phoneNumber": ""
    });
    const handlePhone = async ({ detail }) => {
      let { data } = await api_login.getPhoneNumber(detail.code);
      params.phoneNumber = data.data.phoneNumber;
      phoneNumber.value = data.data.phoneNumber;
      common_vendor.index.setStorageSync("phoneNumber", data.data.phoneNumber);
      if (!data.data.register) {
        popup.value.open("bottom");
      } else {
        getLogin();
        common_vendor.index.redirectTo({
          url: "/pages/home/home"
        });
      }
    };
    const getLogin = () => {
      common_vendor.index.login({
        provider: "weixin",
        //指定平台
        async success({ code }) {
          params.code = code;
          let { data } = await api_login.authLogin(params);
          common_vendor.index.setStorageSync("token", data.data);
          common_vendor.index.redirectTo({
            url: "/pages/home/home"
          });
        }
      });
    };
    const handleUserInfo = () => {
      common_vendor.index.getUserProfile({
        desc: "用于注册使用",
        success({ userInfo: userInfo2 }) {
          params.avatar = userInfo2.avatarUrl;
          params.nickName = userInfo2.nickName;
          nickName.value = userInfo2.nickName;
          avatar.value = userInfo2.avatarUrl;
          popup.value.close();
          getLogin();
        }
      });
    };
    const handleSure = ({
      detail
    }) => {
      confine.value = !!detail.value.length;
    };
    const handleUnCheck = () => {
      common_vendor.index.showToast({
        title: "请先勾选用户协议!",
        icon: "error"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(confine)
      }, common_vendor.unref(confine) ? {
        b: common_vendor.o(handlePhone)
      } : {
        c: common_vendor.o(handleUnCheck)
      }, {
        d: common_vendor.unref(confine),
        e: common_vendor.o(handleSure),
        f: common_vendor.o(handleUserInfo),
        g: common_vendor.sr(popup, "e4e4508d-0", {
          "k": "popup"
        }),
        h: common_vendor.p({
          type: "bottom"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4e4508d"], ["__file", "D:/Lydia/NOTE/lydia_note3/zhailijia-uni/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
