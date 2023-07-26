"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_c_address = require("../../../api/c_address.js");
require("../../../utils/request.js");
require("../../../utils/config.js");
if (!Array) {
  const _easycom_emptyBox2 = common_vendor.resolveComponent("emptyBox");
  _easycom_emptyBox2();
}
const _easycom_emptyBox = () => "../../../components/emptyBox/emptyBox.js";
if (!Math) {
  _easycom_emptyBox();
}
const _sfc_main = {
  __name: "address",
  setup(__props) {
    let title = common_vendor.ref("您还没有收货地址");
    let dataList = common_vendor.reactive([]);
    common_vendor.onLoad(async () => {
      let res = await api_c_address.getAllData({});
      if (res.statusCode == 200) {
        let a = res.data.data;
        console.log(a);
        if (a != []) {
          dataList.push(...a);
        }
      } else {
        common_vendor.index.showToast({
          title: "请求出错了",
          icon: "error"
        });
      }
    });
    let handleAdd = () => {
      common_vendor.index.navigateTo({
        url: "/pages/my2/addAddress/addAddress"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(dataList).length == 0
      }, common_vendor.unref(dataList).length == 0 ? {
        b: common_vendor.p({
          title: common_vendor.unref(title)
        }),
        c: common_vendor.o((...args) => common_vendor.unref(handleAdd) && common_vendor.unref(handleAdd)(...args))
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/tc/Desktop/zailijia/zaili/pages/my2/address/address.vue"]]);
wx.createPage(MiniProgramPage);
