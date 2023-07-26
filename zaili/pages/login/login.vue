<template>
	<view class="box">
		<view class="container">登陆页面</view>
		<view>
			<view class="loginBox">
				<button v-if="isChecked" class="isAuthorized" open-type="getPhoneNumber"
					@getphonenumber="getPhone">微信授权登陆</button>
				<button v-else disabled>微信授权登陆</button>
				<checkbox-group @change="handleCheck">
					<label>
						<checkbox :value="isChecked" /><text>已阅读并同意用户协议</text>
					</label>
				</checkbox-group>
			</view>
		</view>

		<!-- 弹出框 -->
		<uni-popup ref="popupbottom" type="bottom">
			<view class="popupBox">
				<view class="getNickTitle">小程序想获取你的微信头像和昵称</view>
				<view class="getNickBox">
					<button type="primary" @tap="confirmLogin(false)">同意</button>
					<button type="default">取消</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue"
	import {
		Login,
		getPhoneNumber
	} from "../../api/login.js"
	let isChecked = ref(false) //==>checkBox 绑定值
	let popupbottom = ref() //==>popup绑定值
	let isLogin =ref(false)

	//checkBox 与 isChecked 的值相关联
	let handleCheck = (event) => {
		isChecked.value = !!event.detail.value.length
		console.log(isChecked.value)
	}
	//定义登陆接口参数 
	let LoginParams = ref({
		"phoneNumber": "",
		"nickName": "",
		"code": "",
		"avatar": ""
	})
	//获取用户手机号
	let getPhone = async (content) => {
		//获取小程序中用户的code  后续需要要code请求接口获取phonenumber
		if (content.target.errMsg == "getPhoneNumber:ok") {
			// LoginParams.value.code = content.detail.code
			// console.log(content.detail.code, "bbbbb")
			let {
				data
			} = await getPhoneNumber(content.detail.code)
			//获取真实的电话号码
			if (data.code == "200") {
				LoginParams.value.phoneNumber = data.data.phoneNumber
				if (data.data.register == 0) {
					popupbottom.value.open('bottom')
				} else {
					console.log("----------------------",data.data.token)
					isLogin.value = true
					uni.setStorageSync("token",data.data.token)
					// confirmLogin(true)
					popupbottom.value.open('bottom')
				}

			} else {
				uni.showToast({
					title: "出错了",
					icon: "error"
				})
			}


			// console.log(getPhoneData)
		}
	}
	//用户第一次登陆，确认获取用户信息
	let confirmLogin = async () => {
		uni.getUserProfile({
			desc: "用户获取你的微信昵称和头像",
			success: (res) => {
				if (res.errMsg == "getUserProfile:ok") {
					popupbottom.value.close()
					let {
						userInfo
					} = res
					LoginParams.value.nickName = userInfo.nickName
					LoginParams.value.avatar = userInfo.avatarUrl
					uni.setStorageSync("userInfo",LoginParams.value)
					if(!isLogin.value){
						LoginConfirm()
					}else{
						uni.reLaunch({
							url:"/pages/my2/my2"
						})
					}
				}
			}
		})

	}
	let LoginConfirm = () => {
		uni.login({
			provider: "weixin", //指定平台
			async success(res) {
				// 后端的登录注册接口
				LoginParams.value.code = res.code;
				console.log(res.code, "aaaaaa")
				console.log(LoginParams.value)
				if (LoginParams.value.nickName && LoginParams.value.avatar && LoginParams.value
					.phoneNumber && LoginParams.value.code) {
					let result = await Login(LoginParams.value)
					console.log(result.data.data)
					uni.setStorageSync("token",result.data.data)
					uni.setStorageSync("userInfo",LoginParams.value)
					uni.reLaunch({
						url:"/pages/my/my",
					})
				}

			}
		})
	}
</script>

<style lang="scss">
	.box {
		width: 100vw;
		height: 100vh;

		>.container {
			width: 100%;
			height: 70%;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.loginBox {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}

		checkbox-group {
			margin-top: 14rpx;
		}
	}

	.isAuthorized {
		color: white;
		background-color: skyblue;
		width: 40%;
	}

	.popupBox {
		width: 100%;
		height: 30vh;
		background-color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		>.getNickTitle {
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 40rpx;
			margin-bottom: 30rpx;
		}

		>.getNickBox {
			display: flex;
			width: 100%;
			height: 120rpx;
			justify-content: space-around;
			align-items: center;

			button {
				width: 40%;
				height: 70%;
			}
		}

	}
</style>