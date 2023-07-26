"use strict";
const utils_request = require("../utils/request.js");
function getAllData(data) {
  return utils_request.request({
    url: "/zhailijia/wechat/xcxAddress/list",
    method: "POST",
    data
  });
}
exports.getAllData = getAllData;
