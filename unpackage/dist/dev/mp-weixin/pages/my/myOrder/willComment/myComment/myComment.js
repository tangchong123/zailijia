"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_TopBar2 = common_vendor.resolveComponent("TopBar");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  (_easycom_TopBar2 + _easycom_uni_rate2)();
}
const _easycom_TopBar = () => "../../../../../components/TopBar/TopBar.js";
const _easycom_uni_rate = () => "../../../../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
if (!Math) {
  (_easycom_TopBar + _easycom_uni_rate)();
}
const _sfc_main = {
  __name: "myComment",
  setup(__props) {
    let commentInfo = common_vendor.ref({});
    let masterInfo = common_vendor.ref({});
    let tag = common_vendor.computed(() => {
      return JSON.parse(commentInfo.value.label);
    });
    let masterCom = common_vendor.computed(() => {
      let tmp = "";
      switch (masterInfo.value.avgScore) {
        case 0:
          tmp = "非常差";
          break;
        case 1:
          tmp = "很差";
          break;
        case 2:
          tmp = "一般";
          break;
        case 3:
          tmp = "良好";
          break;
        case 4:
          tmp = "很好";
          break;
        case 5:
          tmp = "非常好";
          break;
      }
      return tmp;
    });
    let platformCom = common_vendor.computed(() => {
      let tmp = "";
      switch (commentInfo.value.platformScore) {
        case 0:
          tmp = "非常差";
          break;
        case 1:
          tmp = "很差";
          break;
        case 2:
          tmp = "一般";
          break;
        case 3:
          tmp = "良好";
          break;
        case 4:
          tmp = "很好";
          break;
        case 5:
          tmp = "非常好";
          break;
      }
      return tmp;
    });
    common_vendor.onMounted(() => {
      commentInfo.value = common_vendor.index.getStorageSync("curOrderInfo").xcxGoodsComment;
      masterInfo.value = common_vendor.index.getStorageSync("curOrderInfo").xcxEngineer;
      console.log(JSON.parse(commentInfo.value.label));
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "我的评价"
        }),
        b: common_vendor.unref(masterInfo).avatar,
        c: common_vendor.t(common_vendor.unref(masterInfo).realName),
        d: common_vendor.t(common_vendor.unref(masterInfo).createTime),
        e: common_vendor.p({
          readonly: true,
          value: common_vendor.unref(masterInfo).avgScore,
          size: "18"
        }),
        f: common_vendor.t(common_vendor.unref(masterCom)),
        g: common_vendor.f(common_vendor.unref(tag), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name)
          };
        }),
        h: common_vendor.t(common_vendor.unref(commentInfo).content),
        i: common_vendor.f(JSON.parse(common_vendor.unref(commentInfo).imgs), (item, k0, i0) => {
          return {
            a: item
          };
        }),
        j: common_vendor.p({
          readonly: true,
          value: common_vendor.unref(commentInfo).platformScore,
          size: "18"
        }),
        k: common_vendor.t(common_vendor.unref(platformCom)),
        l: common_vendor.t(common_vendor.unref(commentInfo).platformContent)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Lydia/NOTE/lydia_note3/zhailijia-uni/pages/my/myOrder/willComment/myComment/myComment.vue"]]);
wx.createPage(MiniProgramPage);
