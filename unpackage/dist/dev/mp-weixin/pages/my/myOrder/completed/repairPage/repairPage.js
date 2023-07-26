"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const api_order = require("../../../../../api/order.js");
const utils_multiUpload = require("../../../../../utils/multiUpload.js");
require("../../../../../utils/request.js");
require("../../../../../utils/config.js");
if (!Array) {
  const _easycom_TopBar2 = common_vendor.resolveComponent("TopBar");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_TopBar2 + _easycom_uni_datetime_picker2 + _easycom_uni_icons2)();
}
const _easycom_TopBar = () => "../../../../../components/TopBar/TopBar.js";
const _easycom_uni_datetime_picker = () => "../../../../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_icons = () => "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_TopBar + _easycom_uni_datetime_picker + _easycom_uni_icons)();
}
const _sfc_main = {
  __name: "repairPage",
  setup(__props) {
    let curOrderNum = common_vendor.ref("");
    let curOrderInfo = common_vendor.ref({});
    let masterInfo = common_vendor.ref({});
    let serviceAddress = common_vendor.ref({});
    let orderDetailInfo = common_vendor.ref({});
    let getOrderInfos = async () => {
      let { data } = await api_order.getOrderByOrderNum(curOrderNum.value);
      console.log("repairPage's order: ", data);
      curOrderInfo.value = data.data;
      masterInfo.value = curOrderInfo.value.xcxEngineer;
      serviceAddress.value = curOrderInfo.value.xcxAddress;
      orderDetailInfo.value = JSON.parse(curOrderInfo.value.orderDetailInfo);
      console.log(serviceAddress.value);
    };
    common_vendor.onMounted(() => {
      curOrderNum.value = common_vendor.index.getStorageSync("curOrderNum");
      getOrderInfos();
    });
    common_vendor.ref("11:00");
    let todorTimeTange = common_vendor.ref(["2023-07-03 11:00:0", "2023-07-03 12:00:00"]);
    common_vendor.ref("原订单工程师");
    common_vendor.ref([
      { value: 0, text: "原订单工程师" },
      { value: 1, text: "李师傅" },
      { value: 2, text: "张师傅" },
      { value: 3, text: "杨师傅" }
    ]);
    let faultDesc = common_vendor.ref("");
    let imgs = common_vendor.reactive([]);
    let imgUrls = common_vendor.reactive([]);
    let uploadPhoto = () => {
      common_vendor.index.chooseImage({
        success: async (res) => {
          imgs.push(...res.tempFilePaths);
          let data = await utils_multiUpload.multiUpload(imgs);
          imgUrls.push(...data.map((item) => item.data));
        }
      });
    };
    let changeTodorTime = () => {
    };
    let startRepair = async () => {
      let params = {
        "cancelReason": faultDesc.value,
        "expectServiceEndTime": todorTimeTange[1],
        "expectServiceStartTime": todorTimeTange[0],
        "questionDesc": faultDesc.value,
        "questionImgs": JSON.stringify(imgUrls),
        "repair": 2
      };
      let { data } = await api_order.sendRepair(curOrderInfo.mainOrderNum, params);
      if (data.code === "200") {
        common_vendor.index.navigateTo({
          url: "/pages/my/myOrder/completed/repairSuccess/repairSuccess"
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "发起返修"
        }),
        b: common_vendor.unref(orderDetailInfo).goodsCover,
        c: common_vendor.t(common_vendor.unref(orderDetailInfo).goodsName),
        d: common_vendor.t(common_vendor.unref(curOrderInfo).engineerFinishTime),
        e: common_vendor.unref(masterInfo).avatar,
        f: common_vendor.t(common_vendor.unref(masterInfo).realName),
        g: common_vendor.o(common_vendor.unref(changeTodorTime)),
        h: common_vendor.o(($event) => common_vendor.isRef(todorTimeTange) ? todorTimeTange.value = $event : todorTimeTange = $event),
        i: common_vendor.p({
          type: "datetimerange",
          rangeSeparator: "-",
          modelValue: common_vendor.unref(todorTimeTange)
        }),
        j: common_vendor.p({
          color: "#888",
          type: "info-filled",
          size: "15"
        }),
        k: common_vendor.t(common_vendor.unref(serviceAddress).region),
        l: common_vendor.t(common_vendor.unref(serviceAddress).address),
        m: common_vendor.t(common_vendor.unref(serviceAddress).linkMan),
        n: common_vendor.t(common_vendor.unref(serviceAddress).mobile.slice(0, 3) + "****" + common_vendor.unref(serviceAddress).mobile.slice(-4)),
        o: common_vendor.unref(faultDesc),
        p: common_vendor.o(($event) => common_vendor.isRef(faultDesc) ? faultDesc.value = $event.detail.value : faultDesc = $event.detail.value),
        q: common_vendor.p({
          type: "camera-filled",
          size: "40"
        }),
        r: common_vendor.o((...args) => common_vendor.unref(uploadPhoto) && common_vendor.unref(uploadPhoto)(...args)),
        s: common_vendor.f(common_vendor.unref(imgs), (img, k0, i0) => {
          return {
            a: img
          };
        }),
        t: common_vendor.o((...args) => common_vendor.unref(startRepair) && common_vendor.unref(startRepair)(...args))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Lydia/NOTE/lydia_note3/zhailijia-uni/pages/my/myOrder/completed/repairPage/repairPage.vue"]]);
wx.createPage(MiniProgramPage);
