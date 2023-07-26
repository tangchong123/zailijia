<template>
	<view class="TopBar_box">
		<view class="content" @tap="goBack">
			<uni-icons type="back" size="26"></uni-icons>
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script setup>
	let props = defineProps({
		title: {
			type: String,
		},
	})
	
	let goBack = ()=> {
		uni.navigateBack()
	}
	
	
</script>

<style lang="scss">
.TopBar_box {
	width: 100vw;
	height: 130rpx;
	// position: fixed;
	// top: 0;
	// left: 0;
	background-color: #fff;
	display: flex;
	align-items: center;
		
	.content {
		display: flex;
		align-items: center;
		margin-top: 30rpx;
		.title {
			// font-size: 18px;
			// font-weight: 600;
			margin-left: 15rpx;
		}
	}
}
</style>