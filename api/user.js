import request from "../utils/request.js"

// 获取用户个人信息
export function getUserInfo() {
	return request({
		url: `/zhailijia/wechat/xcxUser/me`
	})
}

// 保存用户更新信息
export function saveUserInfo(data) {
	return request({
		method: "POST",
		url: `/zhailijia/wechat/xcxUser/save`,
		data,
	})
}