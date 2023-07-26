import request from "../utils/request.js"
 export function getAllData(data){
	 return request({
		 url:"/zhailijia/wechat/xcxAddress/list",
		 method:"POST",
		 data:data
	 })
 }