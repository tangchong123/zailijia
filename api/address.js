import request from "../utils/request.js"

// 列表查询用户收货地址
export function getAddress(data) {
	return request({
		method: "POST",
		url: `/zhailijia/wechat/xcxAddress/list`,
		data
	})
}

// 根据id查询用户收货地址
export function getAddressById(id) {
	return request({
		url: `/zhailijia/wechat/xcxAddress/get/${id}`,
	})
}

// 保存收货地址
export function saveAddress(data) {
	return request({
		method: "POST",
		url: `/zhailijia/wechat/xcxAddress/save`,
		data,
	})
}

// 删除用户收货地址 ids
export function delAddress(ids) {
	return request({
		method:"POST",
		url: `/zhailijia/wechat/xcxAddress/delete?ids=${ids}`,
	})
}