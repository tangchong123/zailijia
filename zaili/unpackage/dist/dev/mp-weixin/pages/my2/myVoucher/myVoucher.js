"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_c_voucher = require("../../../api/c_voucher.js");
require("../../../utils/request.js");
require("../../../utils/config.js");
if (!Array) {
  const _easycom_Voucher2 = common_vendor.resolveComponent("Voucher");
  _easycom_Voucher2();
}
const _easycom_Voucher = () => "../../../components/Voucher/Voucher.js";
if (!Math) {
  (fuiTabs + _easycom_Voucher + fuiIcon)();
}
const fuiTabs = () => "../../../node-modules/firstui-uni/firstui/fui-tabs/fui-tabs.js";
const fuiIcon = () => "../../../node-modules/firstui-uni/firstui/fui-icon/fui-icon.js";
const _sfc_main = {
  __name: "myVoucher",
  setup(__props) {
    let tabs = common_vendor.reactive(["未使用", "已使用", "已过期"]);
    let dataList = common_vendor.reactive([1, 2, 3]);
    let voucherType = common_vendor.reactive([3, 2, 1]);
    let unused = common_vendor.reactive([]);
    common_vendor.reactive([]);
    let tabsIndex = common_vendor.ref(0);
    common_vendor.reactive([]);
    common_vendor.onLoad(async () => {
      console.log(tabsIndex.value);
      let { data } = await api_c_voucher.getPersonVoucher(voucherType[tabsIndex.value]);
      let res = await api_c_voucher.getAllData();
      console.log(res);
      console.log(data.data);
      unused.push(...data.data);
    });
    let changeTabs = (e) => {
      unused.splice(0);
      tabsIndex.value = e.index;
      getData();
    };
    let getData = async () => {
      let { data } = await api_c_voucher.getPersonVoucher(voucherType[tabsIndex.value]);
      let res = await api_c_voucher.getAllData();
      console.log(res);
      console.log(data.data);
      unused.push(...data.data);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(common_vendor.unref(changeTabs)),
        b: common_vendor.p({
          tabs: common_vendor.unref(tabs),
          scroll: true
        }),
        c: common_vendor.unref(unused).length != 0
      }, common_vendor.unref(unused).length != 0 ? {
        d: common_vendor.f(common_vendor.unref(unused), (item, index, i0) => {
          return {
            a: "1c345690-1-" + i0,
            b: index
          };
        }),
        e: common_vendor.p({
          dataList: common_vendor.unref(dataList)
        })
      } : {
        f: common_vendor.p({
          name: "receive",
          size: "240",
          color: "skyblue"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/tc/Desktop/zailijia/zaili/pages/my2/myVoucher/myVoucher.vue"]]);
wx.createPage(MiniProgramPage);
