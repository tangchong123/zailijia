<template>
	<view class="login_box">
		<view class="top">
			<image src="../../static/imgs/login/宅狸家logo@2x.png" mode=""></image>
			<text>一键焕新家，就找宅狸家</text>
			<text>宅狸家，维修改造真透明</text>
		</view>
		<view class="bottom">
			<button open-type="getPhoneNumber" @getphonenumber="handlePhone" class="loginBtn active"
				v-if="confine">微信授权一键登录</button>
		
			<button class="loginBtn" v-else @tap="handleUnCheck">微信授权一键登录</button>
			<checkbox-group @change="handleSure" class="check_box">
				<label>
					<checkbox :value="confine" />
					<text>
						<!-- 我已阅读并同意<uni-link href="https://uniapp.dcloud.io/" text="《用户协议》" color="#007BFF" showUnderLine="false"></uni-link>和<uni-link href="https://uniapp.dcloud.io/" text="《隐私政策》" color="#007BFF" showUnderLine="false"></uni-link> -->
						
						我已阅读并同意《用户协议》和《隐私政策》
					</text>
				</label>
			</checkbox-group>
		
			<!-- 普通弹窗 -->
			<uni-popup ref="popup" type="bottom">
				<view class="popup-content">
					<view>
					   小程序要获取你头像和昵称，请点击同意!
					</view>
					<view>
						<button size="mini" type="primary" @tap="handleUserInfo">同意</button>
					</view>
				</view>
			</uni-popup>
		
		</view>
	</view>
</template>

<script setup>
	import {ref,reactive} from "vue";
	import {storeToRefs} from "pinia"
	import {getPhoneNumber,authLogin} from "@/api/login.js";
	import {useUserStore} from "../../store/user.js"

	let userInfo = useUserStore()
	let {nickName,avatar,phoneNumber} = storeToRefs(userInfo)

	let confine = ref(false);
	let popup = ref()

	// 登录的接口参数
	let params = reactive({
		"avatar": "",
		"code": "",
		"nickName": "",
		"phoneNumber": ""
	})

	// 拿手机号的回调
	const handlePhone = async ({ detail }) => {
		let { data } = await getPhoneNumber(detail.code)
		params.phoneNumber = data.data.phoneNumber;
		phoneNumber.value = data.data.phoneNumber
		uni.setStorageSync("phoneNumber",data.data.phoneNumber)
		// console.log(data);
		
		if (!data.data.register) { // 没有注册
			// 拿头像和昵称
			popup.value.open('bottom')
		}else {
			getLogin()
			uni.redirectTo({
				url:"/pages/home/home"
			})
		}
	}
	
	// 拿用户信息的回调
	// const handleGetUserInfo = async () => {
	// 	uni.getUserProfile({
	// 		desc:"用于登录使用",
	// 		success({userInfo}){
	// 			nickName.value = userInfo.nickName
	// 			avatar.value = userInfo.avatarUrl
	// 			// console.log(userInfo);
	// 			// 存入storage
	// 			uni.setStorageSync("userInfo",JSON.stringify({
	// 				nickName: userInfo.nickName,
	// 				avatar: userInfo.avatarUrl,
	// 			}))
	// 		}
	// 	})
	// 	getLogin()
	// }
	
	const getLogin = ()=>{
	
		uni.login({
			provider:"weixin", //指定平台
			async success({code}){
				// 后端的登录注册接口
				params.code = code;

				let {data} = await authLogin(params);
				uni.setStorageSync("token",data.data);
				
				uni.redirectTo({
					url:"/pages/home/home"
				})
				
			}
		})
		
	}
	
	const handleUserInfo = ()=>{
		 
		 uni.getUserProfile({
		 	desc:"用于注册使用",
			success({userInfo}){
				//console.log(userInfo);
				//拿到头像和昵称
				params.avatar = userInfo.avatarUrl;
				params.nickName = userInfo.nickName;
				
				// 存入store
				nickName.value = userInfo.nickName
				avatar.value = userInfo.avatarUrl
				
				popup.value.close()//关掉弹出
				getLogin()
			}
		 })
		
	}
	
	//处理勾选回调
	const handleSure = ({
		detail
	}) => {
		confine.value = !!detail.value.length
	}

	// 没有勾选
	const handleUnCheck = () => {
		uni.showToast({
			title: "请先勾选用户协议!",
			icon: "error"
		})
	}
</script>

<style lang="scss" scoped>
.login_box {
	height: 750rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin-top: 200rpx;
		
	.top {
		display: flex;
		flex-direction: column;
		align-items: center;
		image {
			width: 226rpx;
			height: 59rpx;
			margin-bottom: 60rpx;
		}
		text {
			margin-bottom: 20rpx;
		}
	}
	.bottom {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
		.loginBtn {
			width: 538rpx;
			height: 94rpx;
			background: #999999;
			border-radius: 47rpx;
			color: #FFFEFE;
			font-size: 36rpx;
			font-family: PingFang SC;
			font-weight: 500;
			margin-bottom: 40rpx;
		}
		
		.loginBtn.active {
			background: #F4FFF2;
			color: #2B9F6F;
			border: 1px solid #2B9F6F;
		}

		.check_box {
			color: gray;
			font-size: 15px;
		}
		
		@mixin flex {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: column;
		}
		
		.popup-content {
			@include flex;
			align-items: center;
			justify-content: center;
			padding: 15px;
			height: 100px;
			background-color: #fff;
			border-top-left-radius: 20rpx;
			border-top-right-radius: 20rpx;
				
			button {
				margin-top: 40rpx;
			}
		}
	}
}
	
</style>