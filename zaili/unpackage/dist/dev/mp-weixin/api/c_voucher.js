"use strict";
const utils_request = require("../utils/request.js");
function getAllData() {
  return utils_request.request({
    url: "/zhailijia/wechat/xcxCouponTemplate/index/coupons",
    method: "POST"
  });
}
function getPersonVoucher(useStatus) {
  return utils_request.request({
    url: `/zhailijia/wechat/xcxCouponInstance/list/${useStatus}`,
    method: "POST"
  });
}
exports.getAllData = getAllData;
exports.getPersonVoucher = getPersonVoucher;
