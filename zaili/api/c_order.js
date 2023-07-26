import request from "../utils/request.js"
export function getAllData(data){
	return request({
		url:"/zhailijia/wechat/goodsOrder/pageQuery",
		method:"POST",
		data
	})
}