"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_MasterKind2 = common_vendor.resolveComponent("MasterKind");
  (_easycom_uni_icons2 + _easycom_MasterKind2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_MasterKind = () => "../../components/MasterKind/MasterKind.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_MasterKind)();
}
const _sfc_main = {
  __name: "my",
  setup(__props) {
    let isLogin = common_vendor.ref(false);
    let userInfo = common_vendor.reactive();
    let handleLogin = () => {
      common_vendor.index.navigateTo({
        url: "/pages/login/login"
      });
    };
    common_vendor.onLoad(() => {
      if (common_vendor.index.getStorageSync("userInfo")) {
        console.log(common_vendor.index.getStorageSync("userInfo").nickName);
        isLogin.value = true;
        userInfo = common_vendor.index.getStorageSync("userInfo");
      } else {
        common_vendor.index.showToast({
          title: "请先登陆",
          icon: "error"
        });
      }
    });
    let titleList = common_vendor.reactive(["服务与工具", "团队管理"]);
    let dataList1 = common_vendor.reactive([
      {
        "title": "实名认证",
        "icon": "wallet-filled",
        "url": "../../pages/Verified/Verified"
      },
      {
        "title": "设置",
        "icon": "gear",
        "url": "../../pages/setting/setting"
      },
      {
        "title": "我的订单",
        "icon": "bars",
        "url": "../../pages/myOrder/myOrder"
      }
    ]);
    let dataList2 = common_vendor.reactive([
      {
        "title": "工人列表",
        "icon": "list",
        "url": "../../pages/workerList/workerList"
      },
      {
        "title": "团队订单",
        "icon": "cart-filled",
        "url": "../../pages/teamOrder/teamOrder"
      },
      {
        "title": "领料",
        "icon": "map",
        "url": "../../pages/requisition/requisition"
      },
      {
        "title": "领料记录",
        "icon": "checkbox",
        "url": "../../pages/requisitionOrder/requisitionOrder"
      }
    ]);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(isLogin)
      }, common_vendor.unref(isLogin) ? {
        b: common_vendor.unref(userInfo).avatar,
        c: common_vendor.t(common_vendor.unref(userInfo).nickName),
        d: common_vendor.f(common_vendor.unref(userInfo).starsCount, (item, k0, i0) => {
          return {};
        }),
        e: common_vendor.t(common_vendor.unref(userInfo).phoneNumber)
      } : {
        f: common_vendor.p({
          type: "person",
          size: "70"
        }),
        g: common_vendor.o((...args) => common_vendor.unref(handleLogin) && common_vendor.unref(handleLogin)(...args))
      }, {
        h: common_vendor.p({
          dataList: common_vendor.unref(dataList1),
          title: common_vendor.unref(titleList)[0]
        }),
        i: common_vendor.p({
          dataList: common_vendor.unref(dataList2),
          title: common_vendor.unref(titleList)[1]
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/tc/Desktop/zailijia/zaili/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
