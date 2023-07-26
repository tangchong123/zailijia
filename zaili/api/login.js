import request from "@/utils/request.js"

/* 获取手机号接口 */
export function getPhoneNumber(data){
	return request({
		url:`/zhailijia/wechat/xcxUser/getPhoneNumber?code=${data}`
	})
}

// 登录
export function Login(data){
	return request({
		url:"/zhailijia/wechat/xcxUser/auth/login",
		method:"POST",
		data
	})
}