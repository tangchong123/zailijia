<template>
	<view class="completedDetail_box global">
		<TopBar title="售后订单详情"></TopBar>
		<detail>
			<template #top>
				<view class="top_box">
					<view class="title">
						<image src="../../static/imgs/state/已完成@2x.png"></image>
						<text>已完成</text>
					</view>
					<view class="order_time">
						<text>您的售后订单已完成，期待下次为您服务!</text>
					</view>
				</view>
			</template>
		</detail>
		<masterProfile></masterProfile>
		<bottomController></bottomController>
	</view>
</template>

<script setup>
	import {reactive, ref} from "vue"
	
	
</script>

<style lang="scss" scoped>
.completedDetail_box {
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
		>.order_time {
			margin-top: 20rpx;
			font-size: 14px;
			text {
				&:nth-of-type(2) {
					margin-left: 15rpx;
					font-weight: 600;
				}
			}
		}
	}
}
</style>
