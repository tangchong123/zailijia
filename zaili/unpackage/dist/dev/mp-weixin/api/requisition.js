"use strict";
const utils_request = require("../utils/request.js");
function getData() {
  return utils_request.request({
    url: "/zhailijia/wechat/xcxMaterial/list",
    method: "GET"
  });
}
exports.getData = getData;
