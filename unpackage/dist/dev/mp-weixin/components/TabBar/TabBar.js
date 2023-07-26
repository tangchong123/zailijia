"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "TabBar",
  setup(__props) {
    let data = common_vendor.reactive({
      selected: 0,
      color: "#000",
      selectedColor: "#2B9F6F",
      list: [
        {
          "pagePath": "/pages/home/home",
          "text": "首页",
          "iconPath": "../../static/imgs/tabbar/首页.png",
          "selectedIconPath": "../../static/imgs/tabbar/首页绿.png"
        },
        {
          "pagePath": "/pages/category/category",
          "text": "分类",
          "iconPath": "../../static/imgs/tabbar/分类.png",
          "selectedIconPath": "../../static/imgs/tabbar/分类绿.png"
        },
        {
          "pagePath": "/pages/FastOffer/FastOffer",
          "text": "一键报修"
        },
        {
          "pagePath": "/pages/cart/cart",
          "text": "购物车",
          "iconPath": "../../static/imgs/tabbar/购物车.png",
          "selectedIconPath": "../../static/imgs/tabbar/购物车绿.png"
        },
        {
          "pagePath": "/pages/my/my",
          "text": "我的",
          "iconPath": "../../static/imgs/tabbar/我的.png",
          "selectedIconPath": "../../static/imgs/tabbar/我的绿.png"
        }
      ]
    });
    let switchTab = (e) => {
      const res = e.currentTarget.dataset;
      common_vendor.index.navigateTo({
        url: res.path
      });
      data.selected = res.index;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(data).list, (item, index, i0) => {
          return {
            a: common_vendor.unref(data).selected === index ? item.selectedIconPath : item.iconPath,
            b: common_vendor.t(item.text),
            c: common_vendor.unref(data).selected === index ? common_vendor.unref(data).selectedColor : common_vendor.unref(data).color,
            d: index,
            e: item.text === "一键报修" ? 1 : "",
            f: item.pagePath,
            g: index,
            h: common_vendor.o((...args) => common_vendor.unref(switchTab) && common_vendor.unref(switchTab)(...args), index)
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Lydia/NOTE/lydia_note3/zhailijia-uni/components/TabBar/TabBar.vue"]]);
wx.createComponent(Component);
