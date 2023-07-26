import request from "../utils/request.js"

// 获取小区列表
export function getCommunityList() {
	return request({
		method:"POST",
		url: `/zhailijia/wechat/xcxCommunity/pageQuery`,
		// data,
	})
}