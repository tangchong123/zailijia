"use strict";
const utils_request = require("../utils/request.js");
function getCoupons(useStatus) {
  return utils_request.request({
    method: "POST",
    url: `/zhailijia/wechat/xcxCouponInstance/list/${useStatus}`
  });
}
exports.getCoupons = getCoupons;
