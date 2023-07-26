<template>
	<view class="box">
		<view class="list">
			<view v-for="(item,index) in List" :key="index" @tap="handle(item.url)">
				{{item.title}}
			</view>
		</view>
		<view class="logout">
			<text @tap="logOut">退出登陆</text>
		</view>
	</view>
</template>

<script setup>
	import {reactive, ref} from "vue"
	let List = reactive([
		{
			"title":"个人资料",
			"url":"../personalInfo/personalInfo"
		},
		{
			"title":"关于我们",
			"url":"../aboutUs/aboutUs"
		},
		{
			"title":"用户协议",
			"url":null
		},
		{
			"title":"隐私政策",
			"url":null
		},
	])
	let handle  = (url)=>{
		if(url){
			uni.navigateTo({
				url:`${url}`
			})
		}
	}
	let logOut = ()=>{
		uni.showModal({
			content:"退出当前用户登陆",
			cancelText:"取消",
			confirmText:"确认退出",
			success() {
				uni.removeStorageSync("userInfo")
				uni.reLaunch({
					url:"/pages/my2/my2"
				})
			}
		})
	}
</script>

<style lang="scss">
	page{
		background-color: rgb(240, 240, 240);
	}
.box{
	>.list{
		margin: 20rpx 0;
		>view{
			height: 100rpx;
			padding-left: 50rpx;
			// padding-bottom: 20rpx;
			font-size: 32rpx;
			font-weight: 400;
			margin: 30rpx;
			background-color: white;
			display: flex;
			align-items: center;
		}
	}
	>.logout{
		display: flex;
		justify-content: center;
		align-items: center;
		>text{
			width: 50vw;
			padding: 20rpx 40rpx;
			border-radius: 20rpx;
			background-color: white;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
}
</style>
