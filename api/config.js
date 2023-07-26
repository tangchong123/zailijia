import request from "../utils/request.js"

// 获取普通用户设置信息
export function getConfigInfos() {
  return request({
    url: `/zhailijia/wechat/common/setting`
  })
}