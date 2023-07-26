import request from "../utils/request.js"
export function getData(){
	return request({
		url:"/zhailijia/wechat/common/index/cateAndGoods"
	})
}