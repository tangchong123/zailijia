"use strict";
const utils_request = require("../utils/request.js");
function saveFeedback(data) {
  return utils_request.request({
    method: "POST",
    url: `/zhailijia/wechat/feedback/save`,
    data
  });
}
exports.saveFeedback = saveFeedback;
