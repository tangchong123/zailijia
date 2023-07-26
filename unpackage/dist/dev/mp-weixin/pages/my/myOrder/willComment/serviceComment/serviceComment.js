"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const utils_multiUpload = require("../../../../../utils/multiUpload.js");
const api_comment = require("../../../../../api/comment.js");
require("../../../../../utils/request.js");
require("../../../../../utils/config.js");
if (!Array) {
  const _easycom_TopBar2 = common_vendor.resolveComponent("TopBar");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_TopBar2 + _easycom_uni_rate2 + _easycom_uni_icons2)();
}
const _easycom_TopBar = () => "../../../../../components/TopBar/TopBar.js";
const _easycom_uni_rate = () => "../../../../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_icons = () => "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_TopBar + _easycom_uni_rate + _easycom_uni_icons)();
}
const _sfc_main = {
  __name: "serviceComment",
  setup(__props) {
    let masterInfo = common_vendor.ref({});
    let isAnonymous = common_vendor.ref(0);
    let masterStar = common_vendor.ref(0);
    let platformStar = common_vendor.ref(0);
    let masterContent = common_vendor.ref("");
    let platformContent = common_vendor.ref("");
    common_vendor.reactive([]);
    let imgs = common_vendor.reactive([]);
    let imgUrls = common_vendor.reactive([]);
    let masterCom = common_vendor.computed(() => {
      let tmp = "";
      switch (masterStar.value) {
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
      switch (platformStar.value) {
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
    let changeAnonymous = ({ detail }) => {
      isAnonymous.value = detail.value - 0;
    };
    let changeMasterStar = (e) => {
      masterStar.value = e.value;
    };
    let changePlatformStar = (e) => {
      platformStar.value = e.value;
    };
    let uploadPhoto = () => {
      common_vendor.index.chooseImage({
        success: async (res) => {
          imgs.push(...res.tempFilePaths);
          let data = await utils_multiUpload.multiUpload(imgs);
          imgUrls.push(...data.map((item) => item.data));
        }
      });
    };
    let submitComment = async () => {
      console.log(isAnonymous.value);
      let params = {
        "anonymous": isAnonymous.value,
        "content": masterContent.value,
        "imgs": JSON.stringify(imgUrls),
        "label": '[{"id": 9, "name": "风雨无阻", "status": 1, "checked": true, "createTime": "2022/04/12 23:37:23", "createUser": null, "updateTime": "2022/04/12 23:37:23", "updateUser": null, "createUserName": null, "updateUserName": null}, {"id": 10, "name": "上门准时", "status": 1, "checked": true, "createTime": "2022/04/12 23:37:42", "createUser": null, "updateTime": "2022/04/12 23:37:42", "updateUser": null, "createUserName": null, "updateUserName": null}, {"id": 11, "name": "兢兢业业", "status": 1, "createTime": "2022/04/12 23:38:45", "createUser": null, "updateTime": "2022/04/12 23:38:45", "updateUser": null, "createUserName": null, "updateUserName": null}, {"id": 12, "name": "勤勤恳恳", "status": 1, "checked": true, "createTime": "2022/04/12 23:38:58", "createUser": null, "updateTime": "2022/04/23 11:09:23", "updateUser": null, "createUserName": null, "updateUserName": null}, {"id": 13, "name": "1111", "status": 1, "createTime": "2022/04/20 10:14:47", "createUser": null, "updateTime": "2022/04/23 11:09:19", "updateUser": null, "createUserName": null, "updateUserName": null}, {"id": 14, "name": "经验非常", "status": 1, "createTime": "2022/04/21 10:20:15", "createUser": null, "updateTime": "2022/04/23 11:09:13", "updateUser": null, "createUserName": null, "updateUserName": null}, {"id": 17, "name": "11", "status": 1, "createTime": "2022/04/22 09:34:55", "createUser": null, "updateTime": null, "updateUser": null, "createUserName": null, "updateUserName": null}, {"id": 18, "name": "11", "status": 1, "createTime": "2022/04/22 09:48:16", "createUser": null, "updateTime": null, "updateUser": null, "createUserName": null, "updateUserName": null}, {"id": 19, "name": "工作认", "status": 1, "createTime": "2022/04/22 18:24:12", "createUser": null, "updateTime": "2022/04/24 15:21:51", "updateUser": null, "createUserName": null, "updateUserName": null}, {"id": 20, "name": "踏踏实实", "status": 1, "createTime": "2022/04/22 18:24:32", "createUser": null, "updateTime": "2022/04/23 11:09:07", "updateUser": null, "createUserName": null, "updateUserName": null}]',
        "platformContent": platformContent.value,
        "platformScore": platformStar.value,
        "score": masterStar.value
      };
      let { data } = await api_comment.saveComment("20230722122707860206", params);
      console.log(data);
      if (data.code === "200") {
        common_vendor.index.showToast({
          title: "评价成功!"
        });
      }
    };
    common_vendor.onMounted(() => {
      masterInfo.value = common_vendor.index.getStorageSync("curOrderInfo").xcxEngineer;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "服务评价"
        }),
        b: common_vendor.p({
          readonly: true,
          value: "4",
          size: "18"
        }),
        c: common_vendor.o(common_vendor.unref(changeMasterStar)),
        d: common_vendor.o(($event) => common_vendor.isRef(masterStar) ? masterStar.value = $event : masterStar = $event),
        e: common_vendor.p({
          size: "18",
          modelValue: common_vendor.unref(masterStar)
        }),
        f: common_vendor.t(common_vendor.unref(masterCom)),
        g: common_vendor.unref(masterContent),
        h: common_vendor.o(($event) => common_vendor.isRef(masterContent) ? masterContent.value = $event.detail.value : masterContent = $event.detail.value),
        i: common_vendor.p({
          type: "camera-filled",
          size: "30"
        }),
        j: common_vendor.o((...args) => common_vendor.unref(uploadPhoto) && common_vendor.unref(uploadPhoto)(...args)),
        k: common_vendor.f(common_vendor.unref(imgs), (img, k0, i0) => {
          return {
            a: img
          };
        }),
        l: common_vendor.o(common_vendor.unref(changePlatformStar)),
        m: common_vendor.o(($event) => common_vendor.isRef(platformStar) ? platformStar.value = $event : platformStar = $event),
        n: common_vendor.p({
          size: "18",
          modelValue: common_vendor.unref(platformStar)
        }),
        o: common_vendor.t(common_vendor.unref(platformCom)),
        p: common_vendor.unref(platformContent),
        q: common_vendor.o(($event) => common_vendor.isRef(platformContent) ? platformContent.value = $event.detail.value : platformContent = $event.detail.value),
        r: common_vendor.o((...args) => common_vendor.unref(changeAnonymous) && common_vendor.unref(changeAnonymous)(...args)),
        s: common_vendor.o((...args) => common_vendor.unref(submitComment) && common_vendor.unref(submitComment)(...args))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Lydia/NOTE/lydia_note3/zhailijia-uni/pages/my/myOrder/willComment/serviceComment/serviceComment.vue"]]);
wx.createPage(MiniProgramPage);
