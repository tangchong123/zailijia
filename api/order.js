import request from "../utils/request.js"

// 分页查询用户订单
export function getOrders(data) {
	return request({
		method: "POST",
		url: `/zhailijia/wechat/goodsOrder/pageQuery`,
		data,
	})
}

// 根据id查询用户订单
export function getOrdersById(id) {
	return request({
		method: "POST",
		url: `/zhailijia/wechat/goodsOrder/get/${id}`,
	})
}

// 根据订单编号查询用户订单
export function getOrderByOrderNum(orderNum) {
	return request({
		method: "POST",
		url: `/zhailijia/wechat/goodsOrder/getByOrderNum/${orderNum}`
	})
}

// 获取用户订单统计数据
export function getOrderStatistics() {
	return request({
		method:"POST",
		url: `/zhailijia/wechat/goodsOrder/statistics`
	})
}

// 查询售后订单
export function getAfterSaleOrders(data) {
	return request({
		method:"POST",
		url: `/zhailijia/wechat/goodsOrder/queryRepair/pageQuery`,
		data,
	})
}

// 发起返修
export function sendRepair(orderNum,data){
	return request({
		method: "POST",
		url: `/zhailijia/wechat/goodsOrder/open/repair/${orderNum}`,
		data,
	})
}

// 下单
export function submitOrder(data) {
	return request({
		method: "POST",
		url: `/zhailijia/wechat/goodsOrder/submitOrder`,
		data,
	})
}

// 根据订单编号取消订单
export function cancelOrderByOrderNum(orderNum,data) {
  return request({
    method: "POST",
    url: `/zhailijia/wechat/goodsOrder/cancel/${orderNum}`,
    data,
  })
}

// 取消售后订单
export function cancelAfterSaleOrder(orderNum) {
	return request({
		method: "POST",
		url:`/zhailijia/wechat/goodsOrder/cancel/repair/${orderNum}`
	})
}