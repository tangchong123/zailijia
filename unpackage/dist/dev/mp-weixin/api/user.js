"use strict";
const utils_request = require("../utils/request.js");
function getUserInfo() {
  return utils_request.request({
    url: `/zhailijia/wechat/xcxUser/me`
  });
}
function saveUserInfo(data) {
  return utils_request.request({
    method: "POST",
    url: `/zhailijia/wechat/xcxUser/save`,
    data
  });
}
exports.getUserInfo = getUserInfo;
exports.saveUserInfo = saveUserInfo;
