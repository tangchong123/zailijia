"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_coupon = require("../../../api/coupon.js");
require("../../../utils/request.js");
require("../../../utils/config.js");
if (!Array) {
  const _easycom_TopBar2 = common_vendor.resolveComponent("TopBar");
  const _easycom_uni_segmented_control2 = common_vendor.resolveComponent("uni-segmented-control");
  const _easycom_couponCard2 = common_vendor.resolveComponent("couponCard");
  (_easycom_TopBar2 + _easycom_uni_segmented_control2 + _easycom_couponCard2)();
}
const _easycom_TopBar = () => "../../../components/TopBar/TopBar.js";
const _easycom_uni_segmented_control = () => "../../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.js";
const _easycom_couponCard = () => "../../../components/couponCard/couponCard.js";
if (!Math) {
  (_easycom_TopBar + _easycom_uni_segmented_control + _easycom_couponCard)();
}
const _sfc_main = {
  __name: "myCoupon",
  setup(__props) {
    let items = common_vendor.reactive(["未使用", "已使用", "已过期"]);
    let current = common_vendor.ref(0);
    let willUseCoupons = common_vendor.reactive([]);
    let usedCoupons = common_vendor.reactive([]);
    let expiredCoupons = common_vendor.reactive([]);
    let onClickItem = ({ currentIndex }) => {
      current.value = currentIndex;
      if (currentIndex === 0) {
        getAllCoupons(3);
      } else if (currentIndex === 1) {
        getAllCoupons(2);
      } else {
        getAllCoupons(1);
      }
    };
    let getAllCoupons = async (useStatus) => {
      let { data } = await api_coupon.getCoupons(useStatus);
      if (useStatus === 3) {
        willUseCoupons.length = 0;
        willUseCoupons.push(...data.data);
      } else if (useStatus === 1) {
        expiredCoupons.length = 0;
        expiredCoupons.push(...data.data);
      } else {
        usedCoupons.length = 0;
        usedCoupons.push(...data.data);
      }
    };
    common_vendor.onMounted(() => {
      getAllCoupons(3);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: `我的优惠券`
        }),
        b: common_vendor.o(common_vendor.unref(onClickItem)),
        c: common_vendor.p({
          current: common_vendor.unref(current),
          values: common_vendor.unref(items),
          ["style-type"]: `text`,
          ["active-color"]: `#2B9F6F`
        }),
        d: common_vendor.unref(current) === 0
      }, common_vendor.unref(current) === 0 ? common_vendor.e({
        e: common_vendor.unref(willUseCoupons).length === 0
      }, common_vendor.unref(willUseCoupons).length === 0 ? {} : {
        f: common_vendor.f(common_vendor.unref(willUseCoupons), (item, k0, i0) => {
          return {
            a: "b028f880-2-" + i0,
            b: common_vendor.p({
              info: item,
              itemCoverage: "品类券",
              useStatus: 3
            })
          };
        })
      }) : {}, {
        g: common_vendor.unref(current) === 1
      }, common_vendor.unref(current) === 1 ? common_vendor.e({
        h: common_vendor.unref(usedCoupons).length === 0
      }, common_vendor.unref(usedCoupons).length === 0 ? {} : {
        i: common_vendor.p({
          itemCoverage: "品类券",
          useStatus: 2
        })
      }) : {}, {
        j: common_vendor.unref(current) === 2
      }, common_vendor.unref(current) === 2 ? common_vendor.e({
        k: common_vendor.unref(expiredCoupons).length === 0
      }, common_vendor.unref(expiredCoupons).length === 0 ? {} : {
        l: common_vendor.p({
          itemCoverage: "品类券",
          useStatus: 1
        })
      }) : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b028f880"], ["__file", "D:/Lydia/NOTE/lydia_note3/zhailijia-uni/pages/my/myCoupon/myCoupon.vue"]]);
wx.createPage(MiniProgramPage);
