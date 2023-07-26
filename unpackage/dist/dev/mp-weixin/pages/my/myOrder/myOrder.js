"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_order = require("../../../api/order.js");
require("../../../utils/request.js");
require("../../../utils/config.js");
if (!Array) {
  const _easycom_TopBar2 = common_vendor.resolveComponent("TopBar");
  const _easycom_uni_segmented_control2 = common_vendor.resolveComponent("uni-segmented-control");
  const _easycom_orderCard2 = common_vendor.resolveComponent("orderCard");
  (_easycom_TopBar2 + _easycom_uni_segmented_control2 + _easycom_orderCard2)();
}
const _easycom_TopBar = () => "../../../components/TopBar/TopBar.js";
const _easycom_uni_segmented_control = () => "../../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.js";
const _easycom_orderCard = () => "../../../components/orderCard/orderCard.js";
if (!Math) {
  (_easycom_TopBar + _easycom_uni_segmented_control + _easycom_orderCard)();
}
const _sfc_main = {
  __name: "myOrder",
  setup(__props) {
    let items = common_vendor.reactive(["全部", "待支付", "待上门", "进行中", "待评价", "已完成"]);
    let current = common_vendor.ref(0);
    let userInfo = common_vendor.reactive({});
    let allOrderList = common_vendor.reactive([]);
    let willPayList = common_vendor.reactive([]);
    let willToDoorList = common_vendor.reactive([]);
    let ongoingList = common_vendor.reactive([]);
    let willCommentList = common_vendor.reactive([]);
    let completedList = common_vendor.reactive([]);
    let onClickItem = ({ currentIndex }) => {
      current.value = currentIndex;
      common_vendor.index.setStorageSync("curOrderIndex", current.value);
      getAllOders();
    };
    common_vendor.computed(() => {
      let status = "null";
      switch (allOrderList.orderStatus) {
        case 1:
          status = "待支付";
          break;
        case 2:
        case 3:
          status = "分配师傅";
          break;
        case 4:
          status = "进行中";
          break;
        case 5:
        case 6:
        case 8:
          status = "已完成";
          break;
        case 7:
          status = "待评价";
          break;
      }
      return status;
    });
    let getAllOders = async () => {
      let params = common_vendor.reactive({
        createUser: userInfo.id
      });
      let { data } = await api_order.getOrders(params);
      console.log("我的订单信息: ", data.data.list);
      allOrderList.length = 0;
      allOrderList.push(...data.data.list);
      willPayList.length = 0;
      willPayList.push(...allOrderList.filter((item) => item.orderStatus === 1));
      willToDoorList.length = 0;
      willToDoorList.push(...allOrderList.filter((item) => item.orderStatus === 2 || item.orderStatus === 3));
      ongoingList.length = 0;
      ongoingList.push(...allOrderList.filter((item) => item.orderStatus === 4));
      willCommentList.length = 0;
      willCommentList.push(...allOrderList.filter((item) => item.orderStatus === 7));
      completedList.length = 0;
      completedList.push(...allOrderList.filter((item) => item.orderStatus === 5 || item.orderStatus === 6 || item.orderStatus === 8));
    };
    common_vendor.onMounted(() => {
      userInfo = common_vendor.index.getStorageSync("userInfo");
      getAllOders();
      common_vendor.index.getStorage({
        key: "curOrderIndex",
        success(res) {
          current.value = res.data + 1;
        }
      });
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: `我的订单`
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
        e: !common_vendor.unref(allOrderList).length
      }, !common_vendor.unref(allOrderList).length ? {} : {
        f: common_vendor.f(common_vendor.unref(allOrderList), (item, index, i0) => {
          return {
            a: index,
            b: "fcc15fec-2-" + i0,
            c: common_vendor.p({
              list: item,
              status: item.orderStatus === 1 ? "待支付" : item.orderStatus === 2 || item.orderStatus === 3 ? "分配师傅" : item.orderStatus === 4 ? "进行中" : item.orderStatus === 5 || item.orderStatus === 6 || item.orderStatus === 8 ? "已完成" : "待评价"
            })
          };
        })
      }) : {}, {
        g: common_vendor.unref(current) === 1
      }, common_vendor.unref(current) === 1 ? common_vendor.e({
        h: !common_vendor.unref(willPayList).length
      }, !common_vendor.unref(willPayList).length ? {} : {
        i: common_vendor.f(common_vendor.unref(willPayList), (item, index, i0) => {
          return {
            a: index,
            b: "fcc15fec-3-" + i0,
            c: common_vendor.p({
              list: item,
              status: "待支付"
            })
          };
        })
      }) : {}, {
        j: common_vendor.unref(current) === 2
      }, common_vendor.unref(current) === 2 ? common_vendor.e({
        k: !common_vendor.unref(willToDoorList).length
      }, !common_vendor.unref(willToDoorList).length ? {} : {
        l: common_vendor.f(common_vendor.unref(willToDoorList), (item, index, i0) => {
          return {
            a: index,
            b: "fcc15fec-4-" + i0,
            c: common_vendor.p({
              list: item,
              status: `分配师傅`
            })
          };
        })
      }) : {}, {
        m: common_vendor.unref(current) === 3
      }, common_vendor.unref(current) === 3 ? common_vendor.e({
        n: !common_vendor.unref(ongoingList).length
      }, !common_vendor.unref(ongoingList).length ? {} : {
        o: common_vendor.f(common_vendor.unref(ongoingList), (item, index, i0) => {
          return {
            a: index,
            b: "fcc15fec-5-" + i0,
            c: common_vendor.p({
              list: item,
              status: `进行中`
            })
          };
        })
      }) : {}, {
        p: common_vendor.unref(current) === 4
      }, common_vendor.unref(current) === 4 ? common_vendor.e({
        q: !common_vendor.unref(willCommentList).length
      }, !common_vendor.unref(willCommentList).length ? {} : {
        r: common_vendor.f(common_vendor.unref(willCommentList), (item, index, i0) => {
          return {
            a: index,
            b: "fcc15fec-6-" + i0,
            c: common_vendor.p({
              list: item,
              status: `待评价`
            })
          };
        })
      }) : {}, {
        s: common_vendor.unref(current) === 5
      }, common_vendor.unref(current) === 5 ? common_vendor.e({
        t: !common_vendor.unref(completedList).length
      }, !common_vendor.unref(completedList).length ? {} : {
        v: common_vendor.f(common_vendor.unref(completedList), (item, index, i0) => {
          return {
            a: index,
            b: "fcc15fec-7-" + i0,
            c: common_vendor.p({
              list: item,
              status: `已完成`
            })
          };
        })
      }) : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Lydia/NOTE/lydia_note3/zhailijia-uni/pages/my/myOrder/myOrder.vue"]]);
wx.createPage(MiniProgramPage);
