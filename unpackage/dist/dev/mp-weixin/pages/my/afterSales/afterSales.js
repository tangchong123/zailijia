"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_user = require("../../../api/user.js");
const api_order = require("../../../api/order.js");
require("../../../utils/request.js");
require("../../../utils/config.js");
if (!Array) {
  const _easycom_TopBar2 = common_vendor.resolveComponent("TopBar");
  const _easycom_uni_segmented_control2 = common_vendor.resolveComponent("uni-segmented-control");
  const _easycom_afterSaleCard2 = common_vendor.resolveComponent("afterSaleCard");
  (_easycom_TopBar2 + _easycom_uni_segmented_control2 + _easycom_afterSaleCard2)();
}
const _easycom_TopBar = () => "../../../components/TopBar/TopBar.js";
const _easycom_uni_segmented_control = () => "../../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.js";
const _easycom_afterSaleCard = () => "../../../components/afterSaleCard/afterSaleCard.js";
if (!Math) {
  (_easycom_TopBar + _easycom_uni_segmented_control + _easycom_afterSaleCard)();
}
const _sfc_main = {
  __name: "afterSales",
  setup(__props) {
    let createUser = common_vendor.ref("");
    let items = common_vendor.reactive(["待上门", "进行中", "已完成"]);
    let current = common_vendor.ref(0);
    let allAfterSaleOrderList = common_vendor.reactive([]);
    let willToDoorList = common_vendor.reactive([
      {
        status: "待上门",
        // 待上门
        content: {
          orderNum: "20220201020983120",
          imgUrl: ""
        }
      }
    ]);
    let ongoingList = common_vendor.reactive([
      {
        status: "进行中",
        content: {
          orderNum: "20220201020983120",
          imgUrl: ""
        }
      }
    ]);
    let completedList = common_vendor.reactive([
      {
        status: "已完成",
        content: {
          orderNum: "20220201020983120",
          imgUrl: ""
        }
      }
    ]);
    let onClickItem = ({ currentIndex }) => {
      current.value = currentIndex;
    };
    let getUserInfos = async () => {
      let { data } = await api_user.getUserInfo();
      createUser.value = data.data.createUser;
    };
    let params = common_vendor.reactive({
      createUser: createUser.value,
      pageNum: 1,
      pageSize: 20
    });
    let getAllAfterSaleOders = async () => {
      let { data } = await api_order.getAfterSaleOrders(params);
      console.log("售后订单: ", data.data.list);
      allAfterSaleOrderList.length = 0;
      allAfterSaleOrderList.push(...data.data.list);
    };
    common_vendor.onMounted(() => {
      getUserInfos();
      getAllAfterSaleOders();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "售后订单"
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
        e: !common_vendor.unref(willToDoorList)
      }, !common_vendor.unref(willToDoorList) ? {} : {
        f: common_vendor.p({
          status: `待上门`
        })
      }) : {}, {
        g: common_vendor.unref(current) === 1
      }, common_vendor.unref(current) === 1 ? common_vendor.e({
        h: !common_vendor.unref(ongoingList)
      }, !common_vendor.unref(ongoingList) ? {} : {
        i: common_vendor.p({
          status: `进行中`
        })
      }) : {}, {
        j: common_vendor.unref(current) === 2
      }, common_vendor.unref(current) === 2 ? common_vendor.e({
        k: !common_vendor.unref(completedList)
      }, !common_vendor.unref(completedList) ? {} : {
        l: common_vendor.p({
          status: `已完成`
        })
      }) : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Lydia/NOTE/lydia_note3/zhailijia-uni/pages/my/afterSales/afterSales.vue"]]);
wx.createPage(MiniProgramPage);
