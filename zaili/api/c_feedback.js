import request from "../utils/request.js"
export function uploadFeedback(data){
	return request({
		url:"/zhailijia/wechat/feedback/save",
		method:"POST",
		data:data
	})
}