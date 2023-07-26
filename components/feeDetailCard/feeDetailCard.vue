<template>
	<view class="global feeDetailCard_box">
		<view class="box">
			<text class="title">维修收费明细</text>
			<view class="fee_detail_box">
				<view class="controller_box" @tap="toggle">
					<text>服务收费</text>
					<uni-icons color="#aaa" :type="iconType"></uni-icons>
				</view>
				<view class="detail_box" v-show="show">
					<view class="item">
						<text click="title">墙面诊断</text>
						<text>30元/次</text>
					</view>
					<view class="item">
						<text click="title">墙面局部修补</text>
						<text>48元/平米</text>
					</view>
					<view class="item">
						<text click="title">墙面局部翻新</text>
						<text>80元/平米</text>
					</view>
					<view class="item">
						<text click="title">墙面全部翻新</text>
						<text>88元平米</text>
					</view>
					<view class="item">
						<text click="title">墙面全部修补</text>
						<text>50元/平米</text>
					</view>
				</view>
			</view>
			<view class="total_box">
				<text class="title">应付金额</text>
				<text class="total_info">￥249.00</text>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue";
	
let iconType = ref("top")
let show = ref(true)

let toggle = ()=>{
	iconType.value = iconType.value==='top'?'bottom':'top'
	show.value = !show.value
}
	
</script>

<style lang="scss">
.feeDetailCard_box {
	height: 230px;
	.box {
		height: 420rpx;
		width: 92vw;
		padding: 10rpx;
		background-color: #fff;
		border-radius: 20rpx;
		margin: 0 auto;
		font-size: 15px;
		>.title {
			font-size: 16px;
			font-weight: 600;
			padding: 10rpx;
		}
		.fee_detail_box {
			padding: 10rpx;
			.controller_box {
				height: 80rpx;
				background-color: #eee;
				line-height: 80rpx;
				padding:0 20rpx;
				display: flex;
				justify-content: space-between;
				text {
					font-weight: 600;
				}
			}
			.detail_box {
				.item {
					display: flex;
					justify-content: space-between;
					padding:2rpx 10rpx;
					font-size: 14px;
				}
			}
		}
		.total_box {
			display: flex;
			justify-content: flex-end;
			margin-top: 20rpx;
			.title {
				font-weight: 600;
				margin-right: 50rpx;
			}
			.total_info {
				color: #c00;
			}
		}
	}
}
</style>