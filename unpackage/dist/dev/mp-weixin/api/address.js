"use strict";
const utils_request = require("../utils/request.js");
function getAddress(data) {
  return utils_request.request({
    method: "POST",
    url: `/zhailijia/wechat/xcxAddress/list`,
    data
  });
}
function saveAddress(data) {
  return utils_request.request({
    method: "POST",
    url: `/zhailijia/wechat/xcxAddress/save`,
    data
  });
}
function delAddress(ids) {
  return utils_request.request({
    method: "POST",
    url: `/zhailijia/wechat/xcxAddress/delete?ids=${ids}`
  });
}
exports.delAddress = delAddress;
exports.getAddress = getAddress;
exports.saveAddress = saveAddress;
