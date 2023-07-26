"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_feedback = require("../../../api/feedback.js");
const utils_multiUpload = require("../../../utils/multiUpload.js");
require("../../../utils/request.js");
require("../../../utils/config.js");
if (!Array) {
  const _easycom_TopBar2 = common_vendor.resolveComponent("TopBar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_TopBar2 + _easycom_uni_icons2)();
}
const _easycom_TopBar = () => "../../../components/TopBar/TopBar.js";
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_TopBar + _easycom_uni_icons)();
}
const _sfc_main = {
  __name: "feedback",
  setup(__props) {
    let feedbackContent = common_vendor.ref("");
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
    let submit = async () => {
      let params = common_vendor.reactive({
        content: feedbackContent.value,
        imgs: JSON.stringify(imgUrls),
        source: 1,
        user: common_vendor.index.getStorageSync("userInfo")
      });
      let { data } = await api_feedback.saveFeedback(params);
      if (data.code === "200") {
        common_vendor.index.showToast({
          title: "反馈提交成功!"
        });
        feedbackContent.value = "";
        imgs.length = 0;
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "意见反馈"
        }),
        b: common_vendor.unref(feedbackContent),
        c: common_vendor.o(($event) => common_vendor.isRef(feedbackContent) ? feedbackContent.value = $event.detail.value : feedbackContent = $event.detail.value),
        d: common_vendor.t(common_vendor.unref(feedbackContent).length),
        e: common_vendor.p({
          type: "camera-filled",
          size: "46"
        }),
        f: common_vendor.o((...args) => common_vendor.unref(uploadPhoto) && common_vendor.unref(uploadPhoto)(...args)),
        g: common_vendor.f(common_vendor.unref(imgs), (img, k0, i0) => {
          return {
            a: img
          };
        }),
        h: !common_vendor.unref(feedbackContent).trim().length
      }, !common_vendor.unref(feedbackContent).trim().length ? {} : {
        i: common_vendor.o((...args) => common_vendor.unref(submit) && common_vendor.unref(submit)(...args))
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Lydia/NOTE/lydia_note3/zhailijia-uni/pages/my/feedback/feedback.vue"]]);
wx.createPage(MiniProgramPage);
