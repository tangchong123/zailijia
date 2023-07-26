"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  fuiIcon();
}
const fuiIcon = () => "../../../node-modules/firstui-uni/firstui/fui-icon/fui-icon.js";
const _sfc_main = {
  __name: "advice",
  setup(__props) {
    let textValue = common_vendor.ref("");
    let imgList = common_vendor.reactive([]);
    let isAll = common_vendor.ref(false);
    let handleChange = (e) => {
      textValue.value = e.detail.value;
      if (imgList.length != 0 && textValue.value != "") {
        isAll.value = true;
      }
    };
    let removeImg = (index) => {
      imgList.splice(index, 1);
    };
    let handleImg = () => {
      if (imgList.length >= 4) {
        common_vendor.index.showToast({
          title: "最多上传4张图",
          icon: "error"
        });
      } else {
        common_vendor.index.chooseImage({
          success: (chooseImageRes) => {
            if (chooseImageRes.tempFilePaths.length + imgList.length > 4) {
              common_vendor.index.showToast({
                title: "最多上传4张图",
                icon: "error"
              });
            } else {
              imgList.push(...chooseImageRes.tempFilePaths);
              if (imgList.length != 0 && textValue.value != "") {
                isAll.value = true;
              }
            }
          }
        });
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o((...args) => common_vendor.unref(handleChange) && common_vendor.unref(handleChange)(...args)),
        b: common_vendor.t(common_vendor.unref(textValue).length),
        c: common_vendor.unref(imgList).length < 4
      }, common_vendor.unref(imgList).length < 4 ? {
        d: common_vendor.p({
          name: "camera-fill",
          size: "80",
          color: "white"
        }),
        e: common_vendor.p({
          name: "plus",
          size: "65",
          color: "white"
        }),
        f: common_vendor.o((...args) => common_vendor.unref(handleImg) && common_vendor.unref(handleImg)(...args))
      } : {}, {
        g: common_vendor.f(common_vendor.unref(imgList), (item, index, i0) => {
          return {
            a: common_vendor.o(($event) => common_vendor.unref(removeImg)(index), index),
            b: "24f090ca-2-" + i0,
            c: item,
            d: index
          };
        }),
        h: common_vendor.p({
          name: "close",
          size: "50",
          color: "white"
        }),
        i: common_vendor.unref(isAll) ? 1 : ""
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/tc/Desktop/zailijia/zaili/pages/my2/advice/advice.vue"]]);
wx.createPage(MiniProgramPage);
