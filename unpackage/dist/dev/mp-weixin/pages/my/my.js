"use strict";
const common_vendor = require("../../common/vendor.js");
const api_user = require("../../api/user.js");
const api_order = require("../../api/order.js");
require("../../utils/request.js");
require("../../utils/config.js");
if (!Array) {
  const _easycom_uni_badge2 = common_vendor.resolveComponent("uni-badge");
  const _easycom_TabBar2 = common_vendor.resolveComponent("TabBar");
  (_easycom_uni_badge2 + _easycom_TabBar2)();
}
const _easycom_uni_badge = () => "../../uni_modules/uni-badge/components/uni-badge/uni-badge.js";
const _easycom_TabBar = () => "../../components/TabBar/TabBar.js";
if (!Math) {
  (_easycom_uni_badge + _easycom_TabBar)();
}
const _sfc_main = {
  __name: "my",
  setup(__props) {
    let userInfo = common_vendor.reactive({
      nickName: "",
      avatar: ""
    });
    let phoneNumber = common_vendor.ref(null);
    let orderStatistics = common_vendor.reactive({});
    let myOrders = common_vendor.reactive([
      {
        imgUrl: "../../static/imgs/my/待付款@2x.png",
        name: "待支付",
        badgeCount: orderStatistics.waitPayCount
      },
      {
        imgUrl: "../../static/imgs/my/待上门@2x.png",
        name: "待上门",
        badgeCount: orderStatistics.waitOnDoorCount
      },
      {
        imgUrl: "../../static/imgs/my/进行中@2x.png",
        name: "进行中",
        badgeCount: orderStatistics.processingCount
      },
      {
        imgUrl: "../../static/imgs/my/待评价@2x.png",
        name: "待评价",
        badgeCount: orderStatistics.waitCommentCount
      },
      {
        imgUrl: "../../static/imgs/my/订单-已完成@2x.png",
        name: "已完成",
        badgeCount: orderStatistics.finishCount
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
    let secretPhoneNumber = common_vendor.computed(() => {
      return (phoneNumber.value + "").slice(0, 3) + "****" + (phoneNumber.value + "").slice(-4);
    });
    let gotoMyCoupon = () => {
      common_vendor.index.navigateTo({
        url: "/pages/my/myCoupon/myCoupon"
      });
    };
    let gotoMyOrder = (id) => {
      common_vendor.index.navigateTo({
        url: "/pages/my/myOrder/myOrder?id=id",
        success(res) {
          common_vendor.index.setStorageSync("curOrderIndex", id);
        }
      });
    };
    let gotoServicesAndTools = (id) => {
      let toAddress = "";
      switch (id) {
        case 0:
          toAddress = "/pages/my/afterSales/afterSales";
          break;
        case 1:
          toAddress = "/pages/my/addressManage/addressManage";
          break;
        case 2:
          toAddress = "/pages/my/configPage/configPage";
          break;
        case 3:
          toAddress = "/pages/my/feedback/feedback";
          break;
      }
      common_vendor.index.navigateTo({
        url: toAddress
      });
    };
    let getUserInfos = async () => {
      let { data } = await api_user.getUserInfo();
      userInfo.nickName = data.data.nickName;
      userInfo.avatar = data.data.avatar;
      common_vendor.index.setStorageSync("userInfo", data.data);
    };
    let isValidSession = async () => {
      if (!phoneNumber.value) {
        common_vendor.index.redirectTo({
          url: "/pages/my/myNotLogin"
        });
      } else {
        getUserInfos();
      }
    };
    let getOrderStatisticsInfo = async () => {
      let { data } = await api_order.getOrderStatistics();
      orderStatistics = data.data;
      myOrders[0].badgeCount = orderStatistics.waitPayCount;
      myOrders[1].badgeCount = orderStatistics.waitOnDoorCount;
      myOrders[2].badgeCount = orderStatistics.processingCount;
      myOrders[3].badgeCount = orderStatistics.waitCommentCount;
      myOrders[4].badgeCount = orderStatistics.finishCount;
    };
    common_vendor.onMounted(() => {
      phoneNumber.value = common_vendor.index.getStorageSync("phoneNumber");
      isValidSession();
      getOrderStatisticsInfo();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(userInfo).avatar,
        b: common_vendor.t(common_vendor.unref(userInfo).nickName),
        c: common_vendor.t(common_vendor.unref(secretPhoneNumber)),
        d: common_vendor.o((...args) => common_vendor.unref(gotoMyCoupon) && common_vendor.unref(gotoMyCoupon)(...args)),
        e: common_vendor.f(common_vendor.unref(myOrders), (item, index, i0) => {
          return {
            a: item.imgUrl,
            b: "2f1ef635-0-" + i0,
            c: common_vendor.p({
              text: item.badgeCount,
              absolute: "rightTop",
              offset: [3, 3],
              size: "small"
            }),
            d: common_vendor.t(item.name),
            e: common_vendor.o(($event) => common_vendor.unref(gotoMyOrder)(index), index),
            f: index
          };
        }),
        f: common_vendor.f(common_vendor.unref(tools), (item, index, i0) => {
          return {
            a: item.imgUrl,
            b: common_vendor.t(item.name),
            c: common_vendor.o(($event) => common_vendor.unref(gotoServicesAndTools)(index), index),
            d: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2f1ef635"], ["__file", "D:/Lydia/NOTE/lydia_note3/zhailijia-uni/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
