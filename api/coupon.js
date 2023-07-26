import request from "../utils/request.js"

export function getCoupons(useStatus) {
	return request({
		method: "POST",
		url: `/zhailijia/wechat/xcxCouponInstance/list/${useStatus}`
	})
}