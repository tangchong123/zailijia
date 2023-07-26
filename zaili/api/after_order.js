import request from "../utils/request.js"
export function getAllData({pageNum=0,pageSize=10}){
	return request(
		{
			url:"/zhailijia/wechat/goodsOrder/queryRepair/pageQuery",
			method:"POST",
			data:{
				pageSize,
				pageNum
			}
		}
	)
}