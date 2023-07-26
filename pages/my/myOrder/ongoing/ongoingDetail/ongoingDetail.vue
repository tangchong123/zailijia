<template>
	<view class="secondOffer_box global">
		<TopBar title="我的订单"></TopBar>
		
		<detail>
			<template #top>
				<view class="top_box">
					<view class="title">
						<image src="../../../../../static/imgs/state/进行中@2x.png"></image>
						<text>服务进行中</text>
					</view>
					<view class="order_time">
						<text>您的订单师傅已提供方案，请尽快确认!</text>
						<text></text>
					</view>
				</view>
			</template>
		</detail>
		
		<serviceFeeCard></serviceFeeCard>
		
		<feeDetailCard></feeDetailCard>
		
		<masterProfile></masterProfile>
		<bottomController :showSureOrderBtn="true" :isContactMaster="true"></bottomController>
	</view>
</template>

<script setup>

</script>

<style lang="scss">
.secondOffer_box {
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
				// color: #c00;
			}
		}
		.order_time {
			margin-top: 20rpx;
			font-size: 14px;
			text {
				&:nth-of-type(2) {
					margin-left: 15rpx;
					font-weight: 600;
				}
			}
		}
		.toPay_btn {
			margin-top: 10rpx;
			width: 240rpx;
			height: 60rpx;
			line-height: 60rpx;
			border-radius: 30rpx;
			border: 1px solid #00A07A;
			color: #00A07A;
			background-color: #fff;
		}
	}
}
</style>
