"use strict";
const utils_request = require("../utils/request.js");
function getCommunityList() {
  return utils_request.request({
    method: "POST",
    url: `/zhailijia/wechat/xcxCommunity/pageQuery`
    // data,
  });
}
exports.getCommunityList = getCommunityList;
