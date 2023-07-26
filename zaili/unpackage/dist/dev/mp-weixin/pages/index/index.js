"use strict";
const common_vendor = require("../../common/vendor.js");
const api_masterHome = require("../../api/master-home.js");
require("../../utils/request.js");
require("../../utils/config.js");
if (!Array) {
  const _easycom_homeContainer2 = common_vendor.resolveComponent("homeContainer");
  _easycom_homeContainer2();
}
const _easycom_homeContainer = () => "../../components/homeContainer/homeContainer.js";
if (!Math) {
  (fuiTabs + _easycom_homeContainer)();
}
const fuiTabs = () => "../../node-modules/firstui-uni/firstui/fui-tabs/fui-tabs.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let allData = common_vendor.reactive();
    let tabs = common_vendor.reactive(["新订单", "已完成", "未完成"]);
    let tabsIndex = common_vendor.ref(0);
    common_vendor.onLoad(async () => {
      let res = await api_masterHome.getData();
      allData = res.data.data;
      console.log(allData, "b");
    });
    let changeTabs = (e) => {
      tabsIndex.value = e.index;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(common_vendor.unref(changeTabs)),
        b: common_vendor.p({
          tabs: common_vendor.unref(tabs)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/tc/Desktop/zailijia/zaili/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
