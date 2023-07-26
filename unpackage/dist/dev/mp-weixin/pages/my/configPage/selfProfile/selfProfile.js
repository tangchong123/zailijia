"use strict";
const common_vendor = require("../../../../common/vendor.js");
const api_user = require("../../../../api/user.js");
require("../../../../utils/request.js");
require("../../../../utils/config.js");
if (!Array) {
  const _easycom_TopBar2 = common_vendor.resolveComponent("TopBar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_TopBar2 + _easycom_uni_icons2)();
}
const _easycom_TopBar = () => "../../../../components/TopBar/TopBar.js";
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_TopBar + _easycom_uni_icons)();
}
const _sfc_main = {
  __name: "selfProfile",
  setup(__props) {
    let userInfo = common_vendor.reactive({});
    let avatar = common_vendor.ref("");
    let nickName = common_vendor.ref("");
    let modifyAvatar = () => {
      common_vendor.index.chooseImage({
        success: (res) => {
          common_vendor.index.uploadFile({
            url: "http://49.234.215.103:7000/zhailijia/wechat/xcxUser/upload",
            //仅为示例，非真实的接口地址
            filePath: res.tempFilePaths[0],
            name: "file",
            header: {
              "token": common_vendor.index.getStorageSync("token")
            },
            // formData: {
            // 	'user': 'test'
            // },
            success: (uploadFileRes) => {
              console.log(JSON.parse(uploadFileRes.data).data);
              avatar.value = JSON.parse(uploadFileRes.data).data;
            }
          });
        }
      });
    };
    let modifyNickName = ({ detail }) => {
      nickName.value = detail.value;
    };
    let save = async () => {
      let params = common_vendor.reactive({
        avatar: avatar.value,
        couponList: userInfo.couponList,
        createTime: userInfo.createTime,
        createUser: userInfo.createUser,
        id: userInfo.id,
        mobile: userInfo.mobile,
        nickName: nickName.value,
        openId: userInfo.openId,
        status: userInfo.status
        // updateTime: userInfo.updateTime,
        // updateUser: userInfo.updateUser,
        // updateUserName: userInfo.updateUserName,
      });
      let { data } = await api_user.saveUserInfo(params);
      console.log(data);
      if (data.code == "200") {
        common_vendor.index.showToast({
          title: "保存成功！"
        });
        common_vendor.index.navigateTo({
          url: "/pages/my/my"
        });
      } else {
        common_vendor.index.showToast({
          title: "保存失败!"
        });
      }
    };
    common_vendor.onMounted(() => {
      userInfo = common_vendor.index.getStorageSync("userInfo");
      nickName.value = userInfo.nickName;
      avatar.value = userInfo.avatar;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "个人资料"
        }),
        b: common_vendor.unref(avatar),
        c: common_vendor.p({
          type: "forward"
        }),
        d: common_vendor.o((...args) => common_vendor.unref(modifyAvatar) && common_vendor.unref(modifyAvatar)(...args)),
        e: common_vendor.unref(nickName),
        f: common_vendor.o((...args) => common_vendor.unref(modifyNickName) && common_vendor.unref(modifyNickName)(...args)),
        g: common_vendor.p({
          type: "forward"
        }),
        h: common_vendor.o((...args) => common_vendor.unref(modifyNickName) && common_vendor.unref(modifyNickName)(...args)),
        i: common_vendor.o((...args) => common_vendor.unref(save) && common_vendor.unref(save)(...args))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Lydia/NOTE/lydia_note3/zhailijia-uni/pages/my/configPage/selfProfile/selfProfile.vue"]]);
wx.createPage(MiniProgramPage);
