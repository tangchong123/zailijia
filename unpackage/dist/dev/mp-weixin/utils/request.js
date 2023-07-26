"use strict";
const common_vendor = require("../common/vendor.js");
const utils_config = require("./config.js");
let loadingCount = 0;
function request({
  url,
  method = "GET",
  header,
  data
}) {
  if (!loadingCount) {
    common_vendor.index.showLoading({
      title: "加载中..."
    });
  }
  loadingCount++;
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: utils_config.config.baseUrl + url,
      method,
      header: {
        token: common_vendor.index.getStorageSync("token")
      },
      data,
      success(res) {
        resolve(res);
      },
      fail(error) {
        reject(error);
      },
      complete() {
        loadingCount--;
        if (!loadingCount) {
          common_vendor.index.hideLoading();
        }
      }
    });
  });
}
exports.request = request;
