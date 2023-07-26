"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_myOrder2 = common_vendor.resolveComponent("myOrder");
  _easycom_myOrder2();
}
const _easycom_myOrder = () => "../../../components/myOrder/myOrder.js";
if (!Math) {
  (fuiTabs + _easycom_myOrder + fuiIcon)();
}
const fuiTabs = () => "../../../node-modules/firstui-uni/firstui/fui-tabs/fui-tabs.js";
const fuiIcon = () => "../../../node-modules/firstui-uni/firstui/fui-icon/fui-icon.js";
const _sfc_main = {
  __name: "AfterSales",
  setup(__props) {
    let { orderData } = require("../../../utils/order.js");
    let tabs = common_vendor.reactive(["待上门", "进行中", "已完成"]);
    let tabsIndex = common_vendor.ref(0);
    let dataList = common_vendor.reactive([]);
    common_vendor.reactive([]);
    let changeTabs = (e) => {
      dataList.splice(0);
      tabsIndex.value = e.index;
      getData();
    };
    let getData = () => {
      let a = orderData.filter((item) => {
        return item.order_state === tabs[tabsIndex.value];
      });
      dataList.push(...a);
    };
    let handleDetail = (item) => {
      let a = JSON.stringify(item);
      common_vendor.index.navigateTo({
        url: `/pages/my2/orderDetail/orderDetail?list=${a}`
      });
    };
    common_vendor.onLoad(() => {
      getData();
      console.log(dataList);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(common_vendor.unref(changeTabs)),
        b: common_vendor.p({
          tabs: common_vendor.unref(tabs),
          scroll: true
        }),
        c: common_vendor.unref(dataList).length != 0
      }, common_vendor.unref(dataList).length != 0 ? {
        d: common_vendor.f(common_vendor.unref(dataList), (item, index, i0) => {
          return {
            a: "133c074a-1-" + i0,
            b: common_vendor.p({
              detail: item
            }),
            c: item.order_id,
            d: common_vendor.o(($event) => common_vendor.unref(handleDetail)(item), item.order_id)
          };
        })
      } : {
        e: common_vendor.p({
          name: "receive",
          size: "240",
          color: "skyblue"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/tc/Desktop/zailijia/zaili/pages/my2/AfterSales/AfterSales.vue"]]);
wx.createPage(MiniProgramPage);
