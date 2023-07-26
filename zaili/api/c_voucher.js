import request from "../utils/request.js"
export function getAllData(){
	return request({
		url:"/zhailijia/wechat/xcxCouponTemplate/index/coupons",
		method:"POST"
	})
}
export function getPersonVoucher(useStatus){
	return request({
		url:`/zhailijia/wechat/xcxCouponInstance/list/${useStatus}`,
		method:"POST"
	})
}