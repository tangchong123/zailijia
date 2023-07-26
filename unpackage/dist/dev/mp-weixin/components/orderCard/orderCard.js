"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "orderCard",
  props: {
    status: {
      type: String,
      required: true
    },
    list: {
      type: Object
    }
  },
  setup(__props) {
    const props = __props;
    common_vendor.ref(0);
    let orderMinuteTimeSpan = common_vendor.ref(30);
    let isShowToolTips = common_vendor.ref(false);
    let orderDetailInfo = common_vendor.reactive(JSON.parse(props.list.orderDetailInfo));
    let goodsItem = common_vendor.reactive(JSON.parse(orderDetailInfo.goodsItem));
    let toMore = () => {
      isShowToolTips.value = !isShowToolTips.value;
    };
    let toComplaint = () => {
    };
    let gotoDetailPage = () => {
      if (props.status === "待支付") {
        common_vendor.index.navigateTo({
          url: "/pages/my/myOrder/willPay/willPayDetail/willPayDetail",
          success: async () => {
            common_vendor.index.setStorageSync("curOrderId", props.list.id);
            common_vendor.index.setStorageSync("curOrderNum", props.list.orderNum);
          }
        });
      } else if (props.status === "分配师傅") {
        let url = "/pages/my/myOrder/willToDoor/willToDoorDetail/willToDoorDetail";
        if (props.list.xcxEngineer === null) {
          url = "/pages/my/myOrder/willToDoor/distributeMaster/distributeMaster";
        }
        common_vendor.index.navigateTo({
          url,
          success: async () => {
            common_vendor.index.setStorageSync("curOrderId", props.list.id);
            common_vendor.index.setStorageSync("curOrderNum", props.list.orderNum);
          }
        });
      } else if (props.status === "进行中") {
        common_vendor.index.navigateTo({
          url: "/pages/my/afterSales/ongoingDetail/ongoingDetail",
          success: async () => {
            common_vendor.index.setStorageSync("curOrderId", props.list.id);
            common_vendor.index.setStorageSync("curOrderNum", props.list.orderNum);
          }
        });
      } else if (props.status === "待评价") {
        common_vendor.index.navigateTo({
          url: "/pages/my/myOrder/willComment/willCommentDetail/willCommentDetail",
          success: async () => {
            common_vendor.index.setStorageSync("curOrderId", props.list.id);
            common_vendor.index.setStorageSync("curOrderNum", props.list.orderNum);
          }
        });
      } else {
        common_vendor.index.navigateTo({
          url: "/pages/my/myOrder/completed/completedDetail/completedDetail",
          success: async () => {
            common_vendor.index.setStorageSync("curOrderId", props.list.id);
            common_vendor.index.setStorageSync("curOrderNum", props.list.orderNum);
            let currentPage = getCurrentPages().pop();
            if (currentPage == void 0 || currentPage == null)
              return;
            currentPage.onLoad();
          }
        });
      }
    };
    let cancelOrder = () => {
      if (props.status === "待支付") {
        common_vendor.index.navigateTo({
          url: "/pages/my/myOrder/willToDoor/cancelOrder/cancelOrder"
        });
      } else if (props.status === "分配师傅") {
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
    let toRepair = () => {
      common_vendor.index.navigateTo({
        url: "/pages/my/myOrder/completed/repairPage/repairPage",
        success() {
          common_vendor.index.setStorageSync("curOrderNum", props.list.orderNum);
        }
      });
    };
    common_vendor.onMounted(() => {
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(__props.list.orderNum),
        b: common_vendor.t(__props.status),
        c: common_vendor.n(__props.status === "待支付" ? "active" : ""),
        d: common_vendor.o((...args) => common_vendor.unref(gotoDetailPage) && common_vendor.unref(gotoDetailPage)(...args)),
        e: common_vendor.unref(orderDetailInfo).goodsCover,
        f: common_vendor.t(common_vendor.unref(orderDetailInfo).goodsName),
        g: common_vendor.t(common_vendor.unref(goodsItem).createTime),
        h: common_vendor.t(common_vendor.unref(orderDetailInfo).goodsNum),
        i: common_vendor.o((...args) => common_vendor.unref(gotoDetailPage) && common_vendor.unref(gotoDetailPage)(...args)),
        j: common_vendor.t(common_vendor.unref(orderDetailInfo).goodsNum),
        k: common_vendor.t(common_vendor.unref(orderDetailInfo).goodsPrice),
        l: __props.status === "待评价"
      }, __props.status === "待评价" ? common_vendor.e({
        m: common_vendor.unref(isShowToolTips)
      }, common_vendor.unref(isShowToolTips) ? {
        n: common_vendor.o((...args) => common_vendor.unref(toComplaint) && common_vendor.unref(toComplaint)(...args))
      } : {}, {
        o: common_vendor.o((...args) => common_vendor.unref(toMore) && common_vendor.unref(toMore)(...args))
      }) : {}, {
        p: __props.status === "待支付" || __props.status === "分配师傅" || __props.status === "待上门"
      }, __props.status === "待支付" || __props.status === "分配师傅" || __props.status === "待上门" ? {
        q: common_vendor.o((...args) => common_vendor.unref(cancelOrder) && common_vendor.unref(cancelOrder)(...args))
      } : {}, {
        r: __props.status === "待支付"
      }, __props.status === "待支付" ? {} : {}, {
        s: __props.status === "待评价" || __props.status === "已完成"
      }, __props.status === "待评价" || __props.status === "已完成" ? {
        t: common_vendor.o((...args) => common_vendor.unref(toRepair) && common_vendor.unref(toRepair)(...args))
      } : {}, {
        v: __props.status === "待评价"
      }, __props.status === "待评价" ? {} : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Lydia/NOTE/lydia_note3/zhailijia-uni/components/orderCard/orderCard.vue"]]);
wx.createComponent(Component);
