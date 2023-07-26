"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_icons + fuiIcon)();
}
const fuiIcon = () => "../../node-modules/firstui-uni/firstui/fui-icon/fui-icon.js";
const _sfc_main = {
  __name: "my2",
  setup(__props) {
    let isLogin = common_vendor.ref(false);
    common_vendor.ref("../../../static/imgs/优惠卷.png");
    let userInfo = common_vendor.reactive();
    let myOrderData = common_vendor.reactive([
      {
        title: "待支付",
        icon: "../../static/imgs/待付款@2x.png",
        url: "./classification/classificationt",
        tabsIndex: 1
      },
      {
        title: "待上门",
        icon: "../../static/imgs/待上门@2x.png",
        url: "./classification/classification",
        tabsIndex: 2
      },
      {
        title: "进行中",
        icon: "../../static/imgs/进行中@2x.png",
        url: "./classification/classification",
        tabsIndex: 3
      },
      {
        title: "待评价",
        icon: "../../static/imgs/待评价@2x.png",
        url: "./classification/classification",
        tabsIndex: 4
      },
      {
        title: "已完成",
        icon: "../../static/imgs/订单-已完成@2x.png",
        url: "./classification/classification",
        tabsIndex: 5
      }
    ]);
    let myOrderData2 = common_vendor.reactive([
      {
        title: "售后",
        icon: "../../static/imgs/售后@2x.png",
        url: "./AfterSales/AfterSales"
      },
      {
        title: "地址管理",
        icon: "../../static/imgs/地址@2x.png",
        url: "./address/address"
      },
      {
        title: "设置",
        icon: "../../static/imgs/3.1 设置@2x.png",
        url: "./setting/setting"
      },
      {
        title: "投诉建议",
        icon: "../../static/imgs/投诉建议@2x.png",
        url: "./advice/advice"
      }
    ]);
    common_vendor.onLoad(() => {
      console.log(common_vendor.index.getStorageSync("userInfo"));
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
    let handleChange = (url, tabsIndex) => {
      console.log(tabsIndex);
      common_vendor.wx$1.navigateTo({
        url: `${url}?i=${tabsIndex}`
      });
    };
    let handleOrder = () => {
      common_vendor.index.navigateTo({
        url: "/pages/my2/classification/classification?i=0"
      });
    };
    let handlevouch = () => {
      common_vendor.index.navigateTo({
        url: "/pages/my2/myVoucher/myVoucher"
      });
    };
    let handleLogin = () => {
      common_vendor.index.navigateTo({
        url: "/pages/login/login"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(isLogin)
      }, common_vendor.unref(isLogin) ? {
        b: common_vendor.unref(userInfo).avatar,
        c: common_vendor.t(common_vendor.unref(userInfo).nickName),
        d: common_vendor.f(common_vendor.unref(userInfo).starsCount, (item, index, i0) => {
          return {
            a: index
          };
        }),
        e: common_vendor.t(common_vendor.unref(userInfo).phoneNumber)
      } : {
        f: common_vendor.p({
          type: "person",
          size: "70"
        }),
        g: common_vendor.o((...args) => common_vendor.unref(handleLogin) && common_vendor.unref(handleLogin)(...args))
      }, {
        h: common_vendor.o((...args) => common_vendor.unref(handlevouch) && common_vendor.unref(handlevouch)(...args)),
        i: common_vendor.f(common_vendor.unref(myOrderData), (item, index, i0) => {
          return {
            a: item.icon,
            b: common_vendor.t(item.title),
            c: item.order_id,
            d: common_vendor.o(($event) => common_vendor.unref(handleChange)(item.url, item.tabsIndex), item.order_id)
          };
        }),
        j: common_vendor.o((...args) => common_vendor.unref(handleOrder) && common_vendor.unref(handleOrder)(...args)),
        k: common_vendor.f(common_vendor.unref(myOrderData2), (item, index, i0) => {
          return {
            a: item.icon,
            b: common_vendor.t(item.title),
            c: index,
            d: common_vendor.o(($event) => common_vendor.unref(handleChange)(item.url), index)
          };
        }),
        l: common_vendor.p({
          name: "kefu",
          size: "70",
          color: "white"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/tc/Desktop/zailijia/zaili/pages/my2/my2.vue"]]);
wx.createPage(MiniProgramPage);
