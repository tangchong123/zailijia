"use strict";
const common_vendor = require("../../common/vendor.js");
const store_location = require("../../store/location.js");
const utils_qqmapJssdk_min = require("../../utils/qqmap-jssdk.min.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_TabBar2 = common_vendor.resolveComponent("TabBar");
  (_easycom_uni_icons2 + _easycom_uni_easyinput2 + _easycom_TabBar2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_TabBar = () => "../../components/TabBar/TabBar.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_easyinput + _easycom_TabBar)();
}
const _sfc_main = {
  __name: "home",
  setup(__props) {
    let searchValue = common_vendor.ref("");
    let locationStore = store_location.useLocationStore();
    let { locationInfo } = common_vendor.storeToRefs(locationStore);
    let qqmapsdk = new utils_qqmapJssdk_min.QQMapWX({
      key: "LLRBZ-GE6KL-BHOPJ-MPR7A-JTZ5Q-LBF5X"
      // 必填
    });
    let getLocation = () => {
      common_vendor.index.getLocation({
        success(res) {
          qqmapsdk.reverseGeocoder({
            location: {
              latitude: res.latitude,
              longitude: res.longitude
            },
            success(res2) {
              locationInfo.value = res2.result.address_component;
            }
          });
        }
      });
    };
    let iconClick = () => {
      console.log("iconClicked");
    };
    common_vendor.onMounted(() => {
      getLocation();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          color: "#2B9F6F",
          type: "location-filled",
          size: "22"
        }),
        b: common_vendor.t(common_vendor.unref(locationInfo).street),
        c: common_vendor.o((...args) => common_vendor.unref(getLocation) && common_vendor.unref(getLocation)(...args)),
        d: common_vendor.o(common_vendor.unref(iconClick)),
        e: common_vendor.o(($event) => common_vendor.isRef(searchValue) ? searchValue.value = $event : searchValue = $event),
        f: common_vendor.p({
          inputBorder: false,
          prefixIcon: "search",
          placeholder: "管道疏通",
          modelValue: common_vendor.unref(searchValue)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-07e72d3c"], ["__file", "D:/Lydia/NOTE/lydia_note3/zhailijia-uni/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
