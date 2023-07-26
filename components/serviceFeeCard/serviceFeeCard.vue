<template>
	<view class="serviceFeeCard_box global">
		<view class="box">
			<view class="content_box">
				<view class="fee_box">
					<text class="title">服务费用</text>
					<text class="fee_info_box">{{curOrderInfo.mainPayMoney}}元起</text>
				</view>
				<view class="coupon_box">
					<text class="title">优惠券</text>
					<text class="coupon_info_box">-{{curOrderInfo.mainReduceMoney}}</text>
				</view>
			</view>
			<view class="total_box">
				<text class="title">应付金额:</text>
				<text class="total_info_box">￥{{curOrderInfo.payMoney-curOrderInfo.mainReduceMoney}}</text>
			</view>
		</view>
	</view>
</template>

<script setup>
import { computed, onMounted,ref } from "vue";

let curOrderInfo = ref({})
let orderDetailInfo = ref({})
let goodsItem = ref({})

onMounted(()=>{
  // console.log(props.curOrderInfo);
  curOrderInfo.value = uni.getStorageSync("curOrderInfo")
  orderDetailInfo.value = JSON.parse(curOrderInfo.value.orderDetailInfo)
  goodsItem.value = JSON.parse(orderDetailInfo.value.goodsItem)
  // console.log(curOrderInfo.value);
})
	
</script>

<style lang="scss">
.serviceFeeCard_box {
	width: 100vw;
	height: 235rpx;
	// margin-bottom: 100rpx;
	.box {
		background-color: #fff;
		width: 92vw;
		// height: 240rpx;
		margin: 0 auto;
		border-radius: 20rpx;
		padding: 10rpx;
		.content_box {
			border-bottom: 1px solid #ddd;
			>view{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 10rpx;
				font-size: 15px;
				.title {
					font-weight: 600;
				}
			}
			.coupon_box {
				.coupon_info_box {
					color: #aaa;
				}
			}
		}
		.total_box {
			padding: 20rpx 10rpx;
			font-size: 15px;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			.title {
				font-weight: 600;
				margin-right: 50rpx;
			}
			.total_info_box {
				color: #c00;
			}
		}
	}
}
</style>