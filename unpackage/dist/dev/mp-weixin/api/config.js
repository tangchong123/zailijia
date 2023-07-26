"use strict";
const utils_request = require("../utils/request.js");
function getConfigInfos() {
  return utils_request.request({
    url: `/zhailijia/wechat/common/setting`
  });
}
exports.getConfigInfos = getConfigInfos;
