"use strict";
const common_vendor = require("../../common/vendor.js");
const api_login = require("../../api/login.js");
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
    let isChecked = common_vendor.ref(false);
    let popupbottom = common_vendor.ref();
    let isLogin = common_vendor.ref(false);
    let handleCheck = (event) => {
      isChecked.value = !!event.detail.value.length;
      console.log(isChecked.value);
    };
    let LoginParams = common_vendor.ref({
      "phoneNumber": "",
      "nickName": "",
      "code": "",
      "avatar": ""
    });
    let getPhone = async (content) => {
      if (content.target.errMsg == "getPhoneNumber:ok") {
        let {
          data
        } = await api_login.getPhoneNumber(content.detail.code);
        if (data.code == "200") {
          LoginParams.value.phoneNumber = data.data.phoneNumber;
          if (data.data.register == 0) {
            popupbottom.value.open("bottom");
          } else {
            console.log("----------------------", data.data.token);
            isLogin.value = true;
            common_vendor.index.setStorageSync("token", data.data.token);
            popupbottom.value.open("bottom");
          }
        } else {
          common_vendor.index.showToast({
            title: "出错了",
            icon: "error"
          });
        }
      }
    };
    let confirmLogin = async () => {
      common_vendor.index.getUserProfile({
        desc: "用户获取你的微信昵称和头像",
        success: (res) => {
          if (res.errMsg == "getUserProfile:ok") {
            popupbottom.value.close();
            let {
              userInfo
            } = res;
            LoginParams.value.nickName = userInfo.nickName;
            LoginParams.value.avatar = userInfo.avatarUrl;
            common_vendor.index.setStorageSync("userInfo", LoginParams.value);
            if (!isLogin.value) {
              LoginConfirm();
            } else {
              common_vendor.index.reLaunch({
                url: "/pages/my2/my2"
              });
            }
          }
        }
      });
    };
    let LoginConfirm = () => {
      common_vendor.index.login({
        provider: "weixin",
        //指定平台
        async success(res) {
          LoginParams.value.code = res.code;
          console.log(res.code, "aaaaaa");
          console.log(LoginParams.value);
          if (LoginParams.value.nickName && LoginParams.value.avatar && LoginParams.value.phoneNumber && LoginParams.value.code) {
            let result = await api_login.Login(LoginParams.value);
            console.log(result.data.data);
            common_vendor.index.setStorageSync("token", result.data.data);
            common_vendor.index.setStorageSync("userInfo", LoginParams.value);
            common_vendor.index.reLaunch({
              url: "/pages/my/my"
            });
          }
        }
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(isChecked)
      }, common_vendor.unref(isChecked) ? {
        b: common_vendor.o((...args) => common_vendor.unref(getPhone) && common_vendor.unref(getPhone)(...args))
      } : {}, {
        c: common_vendor.unref(isChecked),
        d: common_vendor.o((...args) => common_vendor.unref(handleCheck) && common_vendor.unref(handleCheck)(...args)),
        e: common_vendor.o(($event) => common_vendor.unref(confirmLogin)(false)),
        f: common_vendor.sr(popupbottom, "2e1040e7-0", {
          "k": "popupbottom"
        }),
        g: common_vendor.p({
          type: "bottom"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/tc/Desktop/zailijia/zaili/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
