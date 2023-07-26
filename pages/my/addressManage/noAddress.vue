<template>
	<view class="noAddress_box">
		<TopBar title="地址管理"></TopBar>
		<view class="noAddress">
			<image class="img" src="../../../static/imgs/my/地址@2x.png" mode=""></image>
			<text class="hint">您还没有收货地址哦~</text>
			<button class="toNew_btn" size="mini" @tap="gotoAddAddress">去新建</button>
		</view>
	</view>
</template>

<script setup>
import {ref} from "vue"

let gotoAddAddress = ()=>{
	uni.navigateTo({
		url: "/pages/my/addressManage/toAddAddress/toAddAddress"
	})
}
</script>

<style lang="scss" scoped>
.noAddress_box {
	.noAddress {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.img {
			width: 320rpx;
			height: 420rpx;
			margin-top: 160rpx;
			margin-bottom: 20rpx;
		}
		.hint {
			color: #aaa;
			font-size: 15px;
		}
		.toNew_btn {
			margin-top: 40rpx;
			width: 200rpx;
			height: 68rpx;
			line-height: 68rpx;
			border-radius: 30rpx;
			border: 1px solid #00A07A;
			color: #00A07A;
			background-color: #fff;
		}
	}
}
</style>

