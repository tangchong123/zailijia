"use strict";
const utils_request = require("../utils/request.js");
function getOrders(data) {
  return utils_request.request({
    method: "POST",
    url: `/zhailijia/wechat/goodsOrder/pageQuery`,
    data
  });
}
function getOrdersById(id) {
  return utils_request.request({
    method: "POST",
    url: `/zhailijia/wechat/goodsOrder/get/${id}`
  });
}
function getOrderByOrderNum(orderNum) {
  return utils_request.request({
    method: "POST",
    url: `/zhailijia/wechat/goodsOrder/getByOrderNum/${orderNum}`
  });
}
function getOrderStatistics() {
  return utils_request.request({
    method: "POST",
    url: `/zhailijia/wechat/goodsOrder/statistics`
  });
}
function getAfterSaleOrders(data) {
  return utils_request.request({
    method: "POST",
    url: `/zhailijia/wechat/goodsOrder/queryRepair/pageQuery`,
    data
  });
}
function sendRepair(orderNum, data) {
  return utils_request.request({
    method: "POST",
    url: `/zhailijia/wechat/goodsOrder/open/repair/${orderNum}`,
    data
  });
}
function cancelOrderByOrderNum(orderNum, data) {
  return utils_request.request({
    method: "POST",
    url: `/zhailijia/wechat/goodsOrder/cancel/${orderNum}`,
    data
  });
}
function cancelAfterSaleOrder(orderNum) {
  return utils_request.request({
    method: "POST",
    url: `/zhailijia/wechat/goodsOrder/cancel/repair/${orderNum}`
  });
}
exports.cancelAfterSaleOrder = cancelAfterSaleOrder;
exports.cancelOrderByOrderNum = cancelOrderByOrderNum;
exports.getAfterSaleOrders = getAfterSaleOrders;
exports.getOrderByOrderNum = getOrderByOrderNum;
exports.getOrderStatistics = getOrderStatistics;
exports.getOrders = getOrders;
exports.getOrdersById = getOrdersById;
exports.sendRepair = sendRepair;
