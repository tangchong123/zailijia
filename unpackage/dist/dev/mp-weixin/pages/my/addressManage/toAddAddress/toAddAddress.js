"use strict";
const common_vendor = require("../../../../common/vendor.js");
const api_address = require("../../../../api/address.js");
const api_community = require("../../../../api/community.js");
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
  __name: "toAddAddress",
  setup(__props) {
    let userName = common_vendor.ref("");
    let phoneNumber = common_vendor.ref("");
    let detailAddress = common_vendor.ref("");
    let isDefaultAddress = common_vendor.ref(false);
    let fuzzyAddress = common_vendor.reactive([]);
    let getFuzzyAddress = common_vendor.computed(() => {
      return `${fuzzyAddress[0]}/${fuzzyAddress[1]}/${fuzzyAddress[2]}`;
    });
    let communityList = common_vendor.reactive(["翻斗花园", "花果山", "水帘洞"]);
    let community = common_vendor.ref("");
    let getCommunities = async () => {
      let data = await api_community.getCommunityList();
      console.log(data);
    };
    let getRegion = ({ detail }) => {
      fuzzyAddress.length = 0;
      fuzzyAddress.push(...detail.value);
    };
    let chooseCommunity = () => {
      common_vendor.index.showActionSheet({
        itemList: communityList,
        success(res) {
          community.value = communityList[res.tapIndex];
        }
      });
    };
    let changeDefaultAddress = ({ detail }) => {
      isDefaultAddress.value = detail.value;
    };
    let save = async () => {
      if (!userName.value.trim()) {
        return common_vendor.index.showToast({
          title: "联系人不能为空!",
          icon: "error"
        });
      }
      if (phoneNumber.value.trim().length !== 11) {
        return common_vendor.index.showToast({
          title: "手机号格式错误!",
          icon: "error"
        });
      }
      if (!fuzzyAddress.length) {
        return common_vendor.index.showToast({
          title: "请选择区域",
          icon: "error"
        });
      }
      if (!community.value) {
        return common_vendor.index.showToast({
          title: "请填写小区名称",
          icon: "error"
        });
      }
      let params = common_vendor.reactive({
        "address": detailAddress.value,
        "communityId": 0,
        "communityName": community.value,
        // "createTime": "",
        // "createUser": 0,
        // "createUserName":0,
        "defaultFlag": isDefaultAddress.value ? 1 : 0,
        // "id": 0,
        // "lat": 0,
        "linkMan": userName.value,
        // "lon": 0,
        "mobile": phoneNumber.value,
        "region": fuzzyAddress[0] + fuzzyAddress[1] + fuzzyAddress[2],
        "status": 0
        // "updateTime": "",
        // "updateUser": 0,
        // "updateUserName": 0,
      });
      let data = await api_address.saveAddress(params);
      if (data.data.code === "200") {
        common_vendor.index.showToast({
          title: "保存地址成功!"
        });
        common_vendor.index.navigateTo({
          url: "/pages/my/addressManage/addressManage"
        });
      } else {
        common_vendor.index.showToast({
          title: "保存地址失败！",
          icon: "error"
        });
      }
    };
    common_vendor.onMounted(() => {
      getCommunities();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "添加地址"
        }),
        b: common_vendor.o((...args) => _ctx.getContact && _ctx.getContact(...args)),
        c: common_vendor.unref(userName),
        d: common_vendor.o(($event) => common_vendor.isRef(userName) ? userName.value = $event.detail.value : userName = $event.detail.value),
        e: common_vendor.unref(phoneNumber),
        f: common_vendor.o(($event) => common_vendor.isRef(phoneNumber) ? phoneNumber.value = $event.detail.value : phoneNumber = $event.detail.value),
        g: !common_vendor.unref(fuzzyAddress).length
      }, !common_vendor.unref(fuzzyAddress).length ? {} : {
        h: common_vendor.t(common_vendor.unref(getFuzzyAddress))
      }, {
        i: common_vendor.o((...args) => common_vendor.unref(getRegion) && common_vendor.unref(getRegion)(...args)),
        j: common_vendor.unref(getFuzzyAddress),
        k: !common_vendor.unref(community)
      }, !common_vendor.unref(community) ? {} : {}, {
        l: common_vendor.t(common_vendor.unref(community)),
        m: common_vendor.p({
          type: "forward"
        }),
        n: common_vendor.o((...args) => common_vendor.unref(chooseCommunity) && common_vendor.unref(chooseCommunity)(...args)),
        o: common_vendor.unref(detailAddress),
        p: common_vendor.o(($event) => common_vendor.isRef(detailAddress) ? detailAddress.value = $event.detail.value : detailAddress = $event.detail.value),
        q: common_vendor.o((...args) => common_vendor.unref(changeDefaultAddress) && common_vendor.unref(changeDefaultAddress)(...args)),
        r: common_vendor.unref(isDefaultAddress),
        s: common_vendor.o((...args) => common_vendor.unref(save) && common_vendor.unref(save)(...args))
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-23ab5a70"], ["__file", "D:/Lydia/NOTE/lydia_note3/zhailijia-uni/pages/my/addressManage/toAddAddress/toAddAddress.vue"]]);
wx.createPage(MiniProgramPage);
