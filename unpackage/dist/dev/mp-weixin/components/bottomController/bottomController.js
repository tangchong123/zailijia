"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "bottomController",
  props: {
    title: {
      type: String
    },
    isContactMaster: {
      type: Boolean,
      default: true
    },
    showBtn: {
      type: Boolean,
      default: true
    },
    showCancelOrderBtn: {
      type: Boolean,
      default: true
    },
    showToPayBtn: {
      type: Boolean,
      default: false
    },
    showSureOrderBtn: {
      type: Boolean,
      default: false
    },
    showToCommentBtn: {
      type: Boolean,
      default: false
    },
    showMyCommentBtn: {
      type: Boolean,
      default: false
    },
    showRepairBtn: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    let orderMinuteTimeSpan = common_vendor.ref(0);
    let cancelOrder = () => {
      if (props.title === "待支付") {
        common_vendor.index.navigateTo({
          url: "/pages/my/myOrder/willToDoor/cancelOrder/cancelOrder"
        });
      } else if (props.title === "待上门") {
        if (orderMinuteTimeSpan.value > 30) {
          common_vendor.index.showModal({
            title: "取消订单",
            content: "距离您预约的上门时间已小于30分钟，取消订单会扣除上门费用，请问您是否取消?",
            success: function(res) {
              if (res.confirm) {
                common_vendor.index.navigateTo({
                  url: "/pages/my/myOrder/willToDoor/cancelOrder/cancelOrder"
                });
              } else if (res.cancel)
                ;
            }
          });
        } else {
          common_vendor.index.showModal({
            title: "取消订单",
            content: "订单一旦取消，无法恢复，请问您是否取消?",
            success: function(res) {
              if (res.confirm) {
                common_vendor.index.navigateTo({
                  url: "/pages/my/myOrder/willToDoor/cancelOrder/cancelOrder"
                });
              } else if (res.cancel)
                ;
            }
          });
        }
      }
    };
    let toPay = () => {
      console.log("前往支付页面");
    };
    let toRepair = () => {
      common_vendor.index.navigateTo({
        url: "/pages/my/myOrder/completed/repairPage/repairPage"
      });
    };
    let seeMyComment = () => {
      common_vendor.index.navigateTo({
        url: "/pages/my/myOrder/willComment/myComment/myComment"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.isContactMaster
      }, __props.isContactMaster ? {
        b: common_vendor.p({
          color: "#00BB95",
          type: "phone-filled",
          size: "20"
        })
      } : {}, {
        c: __props.showBtn
      }, __props.showBtn ? common_vendor.e({
        d: __props.showCancelOrderBtn
      }, __props.showCancelOrderBtn ? {
        e: common_vendor.o((...args) => common_vendor.unref(cancelOrder) && common_vendor.unref(cancelOrder)(...args))
      } : {}, {
        f: __props.showSureOrderBtn
      }, __props.showSureOrderBtn ? {} : {}, {
        g: __props.showToPayBtn
      }, __props.showToPayBtn ? {
        h: common_vendor.o((...args) => common_vendor.unref(toPay) && common_vendor.unref(toPay)(...args))
      } : {}, {
        i: __props.showToCommentBtn
      }, __props.showToCommentBtn ? {} : {}, {
        j: __props.showMyCommentBtn
      }, __props.showMyCommentBtn ? {
        k: common_vendor.o((...args) => common_vendor.unref(seeMyComment) && common_vendor.unref(seeMyComment)(...args))
      } : {}, {
        l: __props.showRepairBtn
      }, __props.showRepairBtn ? {
        m: common_vendor.o((...args) => common_vendor.unref(toRepair) && common_vendor.unref(toRepair)(...args))
      } : {}) : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Lydia/NOTE/lydia_note3/zhailijia-uni/components/bottomController/bottomController.vue"]]);
wx.createComponent(Component);
