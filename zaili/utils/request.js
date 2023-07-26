import config from "./config"
// 全局loading控制 
let loadingCount = 0;

export default function request({
	url,
	method = "GET",
	header,
	data
}) {
	// 当你的 count为 0 
	if (!loadingCount) {
		uni.showLoading({
			title: '加载中...',
		})
	}
	loadingCount++;
	return new Promise((resolve, reject) => {
		uni.request({
			url: config.baseUrl + url,
			method,
			header:{
				token:uni.getStorageSync("token")
			},
			data,
			success(res) {
				resolve(res)
			},
			fail(error) {
				reject(error)
			},
			complete() {
				loadingCount--;
				if (!loadingCount) {
					uni.hideLoading()
				}
			}
		})
	})
}