"use strict";
const common_vendor = require("../../../../common/vendor.js");
const api_config = require("../../../../api/config.js");
require("../../../../utils/request.js");
require("../../../../utils/config.js");
if (!Array) {
  const _easycom_TopBar2 = common_vendor.resolveComponent("TopBar");
  _easycom_TopBar2();
}
const _easycom_TopBar = () => "../../../../components/TopBar/TopBar.js";
if (!Math) {
  _easycom_TopBar();
}
const _sfc_main = {
  __name: "aboutUs",
  setup(__props) {
    let aboutUsInfo = common_vendor.ref("");
    let getConfig = async () => {
      let { data } = await api_config.getConfigInfos();
      aboutUsInfo.value = JSON.parse(data.data.website).aboutMe;
    };
    common_vendor.onMounted(() => {
      getConfig();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "关于我们"
        }),
        b: common_vendor.unref(aboutUsInfo)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Lydia/NOTE/lydia_note3/zhailijia-uni/pages/my/configPage/aboutUs/aboutUs.vue"]]);
wx.createPage(MiniProgramPage);
