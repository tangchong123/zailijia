"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_TabBar2 = common_vendor.resolveComponent("TabBar");
  _easycom_TabBar2();
}
const _easycom_TabBar = () => "../../components/TabBar/TabBar.js";
if (!Math) {
  _easycom_TabBar();
}
const _sfc_main = {
  __name: "myNotLogin",
  setup(__props) {
    let myOrders = common_vendor.reactive([
      {
        imgUrl: "../../static/imgs/my/待付款@2x.png",
        name: "待支付"
      },
      {
        imgUrl: "../../static/imgs/my/待上门@2x.png",
        name: "待上门"
      },
      {
        imgUrl: "../../static/imgs/my/进行中@2x.png",
        name: "进行中"
      },
      {
        imgUrl: "../../static/imgs/my/待评价@2x.png",
        name: "待评价"
      },
      {
        imgUrl: "../../static/imgs/my/订单-已完成@2x.png",
        name: "已完成"
      }
    ]);
    let tools = common_vendor.reactive([
      {
        imgUrl: "../../static/imgs/my/售后@2x.png",
        name: "售后"
      },
      {
        imgUrl: "../../static/imgs/my/地址@2x.png",
        name: "地址管理"
      },
      {
        imgUrl: "../../static/imgs/my/3.1 设置@2x.png",
        name: "设置"
      },
      {
        imgUrl: "../../static/imgs/my/投诉建议@2x.png",
        name: "投诉与建议"
      },
      {
        imgUrl: "",
        name: ""
      }
    ]);
    let goToLogin = () => {
      common_vendor.index.redirectTo({
        url: "/pages/login/login"
      });
    };
    common_vendor.onMounted(() => {
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o((...args) => common_vendor.unref(goToLogin) && common_vendor.unref(goToLogin)(...args)),
        b: common_vendor.f(common_vendor.unref(myOrders), (item, index, i0) => {
          return {
            a: item.imgUrl,
            b: common_vendor.t(item.name),
            c: index
          };
        }),
        c: common_vendor.f(common_vendor.unref(tools), (item, index, i0) => {
          return {
            a: item.imgUrl,
            b: common_vendor.t(item.name),
            c: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-81bea1ef"], ["__file", "D:/Lydia/NOTE/lydia_note3/zhailijia-uni/pages/my/myNotLogin.vue"]]);
wx.createPage(MiniProgramPage);
