"use strict";
const utils_request = require("../utils/request.js");
function saveComment(orderNum, data) {
  return utils_request.request({
    method: "POST",
    url: `/zhailijia/wechat/goodsComment/save/${orderNum}`,
    data
  });
}
exports.saveComment = saveComment;
