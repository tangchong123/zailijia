<template>
	<view class="box">
		<view class="a">
			<view>
				头像
			</view>
			<image :src="userInfo.avatar"></image>
		</view>
		<view class="a">
			<view class="">
				昵称
			</view>
			<view>
				{{userInfo.nickName}}
			</view>
		</view>
	</view>
</template>

<script setup>
	import {reactive, ref} from "vue"
	import {onLoad} from "@dcloudio/uni-app"
	let userInfo  = reactive({
		nickName:"",
		avatar:""
	})
	onLoad(()=>{
		let {nickName,avatar} = uni.getStorageSync("userInfo")
		userInfo.nickName = nickName
		userInfo.avatar = avatar
	})
</script>

<style lang="scss">
.box{
	width: 100%;
	// background-color: white;
	>.a{
		height: 140rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0rpx 40rpx;
		background-color: white;
		// border: 1rpx solid grey;
		margin: 30rpx 0;
		font-size: 32rpx;
		>image{
			width: 70rpx;
			height: 70rpx;
		}
	}
}
</style>
