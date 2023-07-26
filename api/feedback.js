import request from "../utils/request.js"

// 用户端反馈
export function saveFeedback(data) {
  return request({
    method: "POST",
    url: `/zhailijia/wechat/feedback/save`,
    data,
  })
}