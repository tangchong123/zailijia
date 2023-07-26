"use strict";
const utils_data = require("../../utils/data.js");
const common_vendor = require("../../common/vendor.js");
let selectVal = ["", "", ""];
const _sfc_main = {
  data() {
    return {
      value: [0, 0, 0],
      array: [],
      index: 0
    };
  },
  created() {
    this.initSelect();
  },
  methods: {
    // 初始化地址选项
    initSelect() {
      this.updateSourceDate().updateAddressDate().$forceUpdate();
    },
    // 地址控件改变控件
    columnchange(d) {
      this.updateSelectIndex(d.detail.column, d.detail.value).updateSourceDate().updateAddressDate().$forceUpdate();
    },
    /**
     * 更新源数据
     * */
    updateSourceDate() {
      this.array = [];
      this.array[0] = utils_data.AllAddress.map((obj) => {
        return {
          name: obj.name
        };
      });
      this.array[1] = utils_data.AllAddress[this.value[0]].city.map((obj) => {
        return {
          name: obj.name
        };
      });
      this.array[2] = utils_data.AllAddress[this.value[0]].city[this.value[1]].area.map((obj) => {
        return {
          name: obj
        };
      });
      return this;
    },
    /**
     * 更新索引
     * */
    updateSelectIndex(column, value) {
      let arr = JSON.parse(JSON.stringify(this.value));
      arr[column] = value;
      if (column === 0) {
        arr[1] = 0;
        arr[2] = 0;
      }
      if (column === 1) {
        arr[2] = 0;
      }
      this.value = arr;
      return this;
    },
    /**
     * 更新结果数据 
     * */
    updateAddressDate() {
      selectVal[0] = this.array[0][this.value[0]].name;
      selectVal[1] = this.array[1][this.value[1]].name;
      selectVal[2] = this.array[2][this.value[2]].name;
      return this;
    },
    /**
     * 点击确定
     * */
    bindPickerChange(e) {
      this.$emit("change", {
        index: this.value,
        data: selectVal
      });
      return this;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.bindPickerChange && $options.bindPickerChange(...args)),
    b: common_vendor.o((...args) => $options.columnchange && $options.columnchange(...args)),
    c: $data.array,
    d: $data.value
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/tc/Desktop/zailijia/zaili/components/pickerAddress/pickerAddress.vue"]]);
wx.createComponent(Component);
