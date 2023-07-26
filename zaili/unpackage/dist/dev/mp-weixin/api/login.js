"use strict";
const utils_request = require("../utils/request.js");
function getPhoneNumber(data) {
  return utils_request.request({
    url: `/zhailijia/wechat/xcxUser/getPhoneNumber?code=${data}`
  });
}
function Login(data) {
  return utils_request.request({
    url: "/zhailijia/wechat/xcxUser/auth/login",
    method: "POST",
    data
  });
}
exports.Login = Login;
exports.getPhoneNumber = getPhoneNumber;
