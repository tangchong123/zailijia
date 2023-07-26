<template>
	<view class="willToDoorDetail_box global">
		<TopBar title="我的订单"></TopBar>
		<detail>
			<template #top>
				<view class="top_box">
					<view class="title">
						<image src="../../../../../static/imgs/state/分配师傅@2x.png"></image>
						<text>分配师傅</text>
					</view>
					<view class="order_time">
						<text>您的订单已经被接单，正在为您分配师傅，稍后师傅会电话联系您，请保持电话畅通</text>
						<text></text>
					</view>
				</view>
			</template>
		</detail>
		
		<serviceFeeCard></serviceFeeCard>
		
		<bottomController title="待上门" :isContactMaster="false"></bottomController>
	</view>
</template>

<script setup>
import {reactive, ref} from "vue"

	
</script>

<style lang="scss" scoped>
.willToDoorDetail_box {
	.top_box {
		height: 200rpx;
		margin-top: 15rpx;
		border-radius: 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #fff;
		margin-top: 10px;
		.title {
			display: flex;
			align-items: center;
			image {
				width: 44rpx;
				height: 45rpx;
				margin-right: 20rpx;
			}
			text {
				font-weight: 600;
			}
		}
		.order_time {
			width: 540rpx;
			text-align: center;
			margin-top: 20rpx;
			font-size: 14px;
			text {
				color: #666;
			}
		}
	}
}
</style>
