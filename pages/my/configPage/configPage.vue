<template>
	<view class="global configPage_box">
		<TopBar title="设置"></TopBar>
		
		<view class="config_box">
			<view class="self_profile_box" @tap="gotoSelfProfile">
				<text>个人资料</text>
			</view>
			<view class="about_us_box" @tap="gotoAboutUs">
				<text>关于我们</text>
			</view>
			<view class="agreement_privacy_box">
				<view class="agreement_box" @tap="gotoUserAgreement">用户协议</view>
				<view class="privacy_box" @tap="gotoPrivatePrivacy">隐私政策</view>
			</view>
		</view>
		
		<view class="controller_box">
			<view class="save_btn" @tap="logOut">退出登录</view>
		</view>
	</view>
</template>

<script setup>

// 一些跳转
let gotoSelfProfile = ()=> {
	uni.navigateTo({
		url: "/pages/my/configPage/selfProfile/selfProfile"
	})
}
let gotoAboutUs = ()=>{
	uni.navigateTo({
		url: "/pages/my/configPage/aboutUs/aboutUs"
	})
}
let gotoUserAgreement = ()=>{
	uni.navigateTo({
		url: "/pages/my/configPage/userAgreement/userAgreement"
	})
}
let gotoPrivatePrivacy = ()=>{
	uni.navigateTo({
		url:"/pages/my/configPage/privatePrivacy/privatePrivacy"
	})
}

// 退出登录
let logOut = ()=>{
	// 清缓存
	uni.clearStorage()
	
	// 跳转至登录页
	uni.redirectTo({
		url: "/pages/login/login"
	})
}
</script>

<style lang="scss">
.configPage_box {
	.config_box {
		margin-top: 20rpx;
		>view {
			background-color: #fff;
			height: 90rpx;
			line-height: 90rpx;
			margin-bottom: 8rpx;
			padding: 0 20rpx;
			font-size: 15px;
		}
		.agreement_privacy_box {
			height: 180rpx;
			.agreement_box {
				border-bottom: 1px solid #eee;
			}
		}
	}
	.controller_box {
		.save_btn {
		  width: 560rpx;
		  height: 80rpx;
		  margin: 0 auto;
		  display: flex;
		  justify-content: center;
		  align-items: center;
		  line-height: 80rpx;
		  border-radius: 48rpx;
		  margin-top: 120rpx;
		  background-color: #fff;
		  color: #000;
		  font-weight: 600;
		}
	}
}
</style>
