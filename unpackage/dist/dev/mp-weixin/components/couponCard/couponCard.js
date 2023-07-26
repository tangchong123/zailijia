"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "couponCard",
  props: {
    itemCoverage: {
      type: String,
      required: true
    },
    useStatus: {
      type: Number,
      required: true
    },
    info: {
      type: Object
    }
  },
  setup(__props) {
    const props = __props;
    let type = common_vendor.computed(() => {
      return props.info.couponDetail.type === "DISCOUNT" ? "折扣券" : props.info.couponDetail.type === "FULL_REDUCE" ? "满减券" : "抵扣券";
    });
    common_vendor.computed(() => {
      return JSON.parse(props.info.couponDetail.ruleInfo).fullMoney;
    });
    let gotoUseCoupon = () => {
      common_vendor.index.navigateTo({
        url: "/pages/category/category"
      });
    };
    common_vendor.onMounted(() => {
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(common_vendor.unref(type)),
        b: common_vendor.unref(type) === "满减券"
      }, common_vendor.unref(type) === "满减券" ? {
        c: common_vendor.t(JSON.parse(__props.info.couponDetail.ruleInfo).reduceMoney),
        d: common_vendor.t(JSON.parse(__props.info.couponDetail.ruleInfo).fullMoney)
      } : {}, {
        e: common_vendor.unref(type) === "抵扣券"
      }, common_vendor.unref(type) === "抵扣券" ? {
        f: common_vendor.t(JSON.parse(__props.info.couponDetail.ruleInfo).deductionMoney)
      } : {}, {
        g: common_vendor.unref(type) === "折扣券"
      }, common_vendor.unref(type) === "折扣券" ? {
        h: common_vendor.t(JSON.parse(__props.info.couponDetail.ruleInfo).discount)
      } : {}, {
        i: common_vendor.t(__props.info.couponDetail.itemCoverage === "CATEGORY" ? "品类券" : "通用券"),
        j: common_vendor.t(__props.info.couponDetail.name),
        k: __props.useStatus === 3
      }, __props.useStatus === 3 ? {
        l: common_vendor.o((...args) => common_vendor.unref(gotoUseCoupon) && common_vendor.unref(gotoUseCoupon)(...args))
      } : {}, {
        m: __props.useStatus === 1
      }, __props.useStatus === 1 ? {} : {}, {
        n: __props.useStatus === 2
      }, __props.useStatus === 2 ? {} : {}, {
        o: common_vendor.n(__props.useStatus === 3 ? "" : "beGray")
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Lydia/NOTE/lydia_note3/zhailijia-uni/components/couponCard/couponCard.vue"]]);
wx.createComponent(Component);
