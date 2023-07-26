import request from "../utils/request.js"

// 添加购物车
export function addCart() {
	return request({
		method: "POST",
		url:`/zhailijia/wechat/shoppingCart/save`
	})
}