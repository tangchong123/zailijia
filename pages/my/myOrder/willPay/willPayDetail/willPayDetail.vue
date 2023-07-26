<template>
	<view class="willPayDetail_box global">
		<TopBar title="我的订单"></TopBar>
		
		<detail :cur-order-info="curOrderInfo">
			<template #top>
				<view class="top_box">
					<view class="title">
						<image src="../../../../../static/imgs/my/等待支付@2x.png"></image>
						<text>等待支付</text>
					</view>
					<view class="order_time">
						<view class="price_box">
							<text>应付金额:</text>
							<text>￥ {{curOrderInfo.mainPayMoney}}</text>
						</view>
						<view class="time_box">
							<text>支付剩余时间:</text>
							<!-- <text>14 分钟 53 秒</text> -->
              <uni-countdown @timeup="timeUp" :font-size="12" :show-day="false" :minute="restMinutTime" :second="restSecondTime" :show-colon="false" />
						</view>
					</view>
					<button class="toPay_btn" size="mini">去支付</button>
				</view>
			</template>
		</detail>
		
		<serviceFeeCard></serviceFeeCard>
		
		<!-- <feeDetailCard></feeDetailCard> -->
		
		<bottomController title="待支付" :showToPayBtn="true" :isContactMaster="false"></bottomController>
	</view>
</template>

<script setup>
import {getOrdersById} from "../../../../../api/order.js"
import { computed, onMounted, reactive, ref } from "vue";

let curOrderId = ref(0)
let curOrderInfo = ref({})
let restTime = ref(0)

// 剩余分钟数
let restMinutTime = computed(()=>{
  return restTime.value/60%60 
})
// 剩余秒数
let restSecondTime = computed(()=>{
  return restTime.value%60
})

let timeUp = ()=>{
  console.log("支付时间已过期!");
}

// 获取当前订单的信息
let getCurOrderInfo = async ()=>{
  let {data} = await getOrdersById(curOrderId.value)
  // console.log(JSON.parse(data.data.orderDetailInfo));
  curOrderInfo.value = data.data
  uni.setStorageSync("curOrderInfo",data.data)
  let pastTime = ((new Date())-(new Date(curOrderInfo.value.createTime)))/1000  // 过去时间的秒数
  restTime.value = 30*60 - pastTime  // 剩余秒数
}

onMounted(()=>{
  curOrderId.value = uni.getStorageSync("curOrderId")
  getCurOrderInfo()
})

</script>

<style lang="scss">
.willPayDetail_box {
	.top_box {
		height: 220rpx;
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
				color: #c00;
			}
		}
		.order_time {
			margin-top: 20rpx;
			font-size: 14px;
			display: flex;
			justify-content: space-between;
			font-size: 12px;
      .time_box {
        display: flex;
      }
			.price_box {
				margin-right: 40rpx;
			}
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
