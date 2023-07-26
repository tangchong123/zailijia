"use strict";
const common_vendor = require("../../common/vendor.js");
const api_address = require("../../api/address.js");
require("../../utils/request.js");
require("../../utils/config.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "addressCard",
  props: {
    addressInfo: {
      type: Object
    }
  },
  emits: ["getUserAddress"],
  setup(__props, { emit }) {
    const props = __props;
    let isDefault = common_vendor.ref(true);
    let removeAddress = async () => {
      let { data } = await api_address.delAddress(props.addressInfo.id);
      if (data.code === "200") {
        common_vendor.index.showToast({
          title: "删除地址成功！"
        });
        emit("getUserAddress");
      }
    };
    let getMobile = common_vendor.computed(() => {
      return props.addressInfo.mobile.slice(0, 3) + "****" + props.addressInfo.mobile.slice(-4);
    });
    let gotoEdit = () => {
      common_vendor.index.navigateTo({
        url: "/pages/my/addressManage/toEditAddress/toEditAddress",
        success() {
          common_vendor.index.setStorageSync("curAddressInfo", props.addressInfo);
        }
      });
    };
    let changeDefaultAddress = async ({ detail }) => {
      isDefault.value = detail.value.length ? false : true;
      let params = common_vendor.reactive({
        // "address": detailAddress.value,
        // "communityId": 0,
        // "communityName": community.value,
        // "createTime": "",
        // "createUser": 0,
        // "createUserName":0,
        "defaultFlag": detail.value.length,
        "id": props.addressInfo.id
        // "lat": 0,
        // "linkMan": userName.value,
        // "lon": 0,
        // "mobile": phoneNumber.value,
        // "region": fuzzyAddress[0]+fuzzyAddress[1]+fuzzyAddress[2],
        // "status": 0,
        // "updateTime": "",
        // "updateUser": 0,
        // "updateUserName": 0,
      });
      let data = await api_address.saveAddress(params);
      console.log(data);
    };
    common_vendor.onMounted(() => {
      isDefault.value = props.addressInfo.defaultFlag === 1 ? true : false;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.addressInfo.region),
        b: common_vendor.t(__props.addressInfo.address),
        c: common_vendor.t(__props.addressInfo.linkMan),
        d: common_vendor.t(common_vendor.unref(getMobile)),
        e: common_vendor.p({
          color: "#aaa",
          type: "compose",
          size: "24"
        }),
        f: common_vendor.o((...args) => common_vendor.unref(gotoEdit) && common_vendor.unref(gotoEdit)(...args)),
        g: common_vendor.unref(isDefault),
        h: common_vendor.o((...args) => common_vendor.unref(changeDefaultAddress) && common_vendor.unref(changeDefaultAddress)(...args)),
        i: common_vendor.o((...args) => common_vendor.unref(removeAddress) && common_vendor.unref(removeAddress)(...args))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Lydia/NOTE/lydia_note3/zhailijia-uni/components/addressCard/addressCard.vue"]]);
wx.createComponent(Component);
