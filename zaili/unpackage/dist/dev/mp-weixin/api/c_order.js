"use strict";
const utils_request = require("../utils/request.js");
function getAllData(data) {
  return utils_request.request({
    url: "/zhailijia/wechat/goodsOrder/pageQuery",
    method: "POST",
    data
  });
}
exports.getAllData = getAllData;
