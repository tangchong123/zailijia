"use strict";
const common_vendor = require("../../common/vendor.js");
const api_order = require("../../api/order.js");
require("../../utils/request.js");
require("../../utils/config.js");
const _sfc_main = {
  __name: "afterSaleCard",
  props: {
    status: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    let orderNum = common_vendor.ref("");
    let gotoDetail = () => {
      if (props.status === "待上门") {
        common_vendor.index.navigateTo({
          url: "/pages/my/afterSales/willToDoorDetail/willToDoorDetail"
          // success(res) {
          // 	uni.setStorageSync("curAfterSaleOrderId",props.list.orderNum)
          // }
        });
      } else if (props.status === "进行中") {
        common_vendor.index.navigateTo({
          url: "/pages/my/afterSales/ongoingDetail/ongoingDetail"
        });
      } else {
        common_vendor.index.navigateTo({
          url: "/pages/my/afterSales/completedDetail/completedDetail"
        });
      }
    };
    let cancel = async () => {
      let { data } = await api_order.cancelAfterSaleOrder(orderNum.value);
      if (data.code === "200") {
        common_vendor.index.showToast({
          title: "取消售后成功!"
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.status),
        b: common_vendor.n(__props.status === "待支付" ? "active" : ""),
        c: common_vendor.o((...args) => common_vendor.unref(gotoDetail) && common_vendor.unref(gotoDetail)(...args)),
        d: common_vendor.o((...args) => common_vendor.unref(gotoDetail) && common_vendor.unref(gotoDetail)(...args)),
        e: common_vendor.o((...args) => common_vendor.unref(cancel) && common_vendor.unref(cancel)(...args))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Lydia/NOTE/lydia_note3/zhailijia-uni/components/afterSaleCard/afterSaleCard.vue"]]);
wx.createComponent(Component);
