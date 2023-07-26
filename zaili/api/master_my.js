import request from "../utils/request.js"
export function getPersoData(){
	return request({
		url:"/zhailijia/wechat/xcxEngineer/me"
	})
}