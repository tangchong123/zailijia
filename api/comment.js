import request from "../utils/request.js"

// 保存评论
export function saveComment(orderNum,data) {
  return request({
    method: "POST",
    url: `/zhailijia/wechat/goodsComment/save/${orderNum}`,
    data,
  })
} 