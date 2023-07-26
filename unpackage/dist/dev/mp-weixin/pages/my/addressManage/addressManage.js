"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_address = require("../../../api/address.js");
require("../../../utils/request.js");
require("../../../utils/config.js");
if (!Array) {
  const _easycom_TopBar2 = common_vendor.resolveComponent("TopBar");
  const _easycom_addressCard2 = common_vendor.resolveComponent("addressCard");
  (_easycom_TopBar2 + _easycom_addressCard2)();
}
const _easycom_TopBar = () => "../../../components/TopBar/TopBar.js";
const _easycom_addressCard = () => "../../../components/addressCard/addressCard.js";
if (!Math) {
  (_easycom_TopBar + _easycom_addressCard)();
}
const _sfc_main = {
  __name: "addressManage",
  setup(__props) {
    let allAddress = common_vendor.reactive([]);
    let userInfo = common_vendor.reactive({});
    let getUserAddress = async () => {
      let params = common_vendor.reactive({
        // "address": "",
        // "communityId": 0,
        // "communityName": "",
        // "createTime": "",
        "createUser": userInfo.id
        // "createUserName": userInfo.nickName,
        // "defaultFlag": 1,
        // "id": 0,
        // "lat": 0,
        // "linkMan": "",
        // "lon": 0,
        // "mobile": "",
        // "region": "",
        // "status": 0,
        // "updateTime": "",
        // "updateUser": 0,
        // "updateUserName": 0
      });
      let { data } = await api_address.getAddress(params);
      allAddress.length = 0;
      allAddress.push(...data.data);
    };
    let gotoAddNewAddress = () => {
      common_vendor.index.navigateTo({
        url: "/pages/my/addressManage/toAddAddress/toAddAddress"
      });
    };
    common_vendor.onMounted(() => {
      userInfo = common_vendor.index.getStorageSync("userInfo");
      getUserAddress();
    });
    let gotoAddAddress = () => {
      common_vendor.index.navigateTo({
        url: "/pages/my/addressManage/toAddAddress/toAddAddress"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "地址管理"
        }),
        b: common_vendor.unref(allAddress).length
      }, common_vendor.unref(allAddress).length ? {
        c: common_vendor.f(common_vendor.unref(allAddress), (addressItem, k0, i0) => {
          return {
            a: common_vendor.o(common_vendor.unref(getUserAddress), addressItem.id),
            b: addressItem.id,
            c: "37af5741-1-" + i0,
            d: common_vendor.p({
              ["address-info"]: addressItem
            })
          };
        }),
        d: common_vendor.o((...args) => common_vendor.unref(gotoAddNewAddress) && common_vendor.unref(gotoAddNewAddress)(...args))
      } : {
        e: common_vendor.o((...args) => common_vendor.unref(gotoAddAddress) && common_vendor.unref(gotoAddAddress)(...args))
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-37af5741"], ["__file", "D:/Lydia/NOTE/lydia_note3/zhailijia-uni/pages/my/addressManage/addressManage.vue"]]);
wx.createPage(MiniProgramPage);
