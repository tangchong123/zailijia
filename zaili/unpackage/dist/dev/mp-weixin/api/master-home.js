"use strict";
const utils_request = require("../utils/request.js");
function getData() {
  return utils_request.request({
    url: "/zhailijia/wechat/common/index/cateAndGoods"
  });
}
exports.getData = getData;
