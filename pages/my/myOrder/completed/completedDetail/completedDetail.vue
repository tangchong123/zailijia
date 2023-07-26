<template>
	<view class="secondOffer_box global">
		<TopBar title="我的订单"></TopBar>
		
		<detail>
			<template #top>
				<view class="top_box">
					<view class="title">
						<image src="../../../../../static/imgs/my/等待支付@2x.png"></image>
						<text>已完成</text>
					</view>
					<view class="order_time">
						<text>师傅已经完成了订单，期待下次继续为您服务!</text>
						<text></text>
					</view>
				</view>
			</template>
		</detail>
		
		<serviceFeeCard></serviceFeeCard>
		
		<feeDetailCard></feeDetailCard>
		
		<masterProfile :showContactMaster="false"></masterProfile>
		<bottomController :showMyCommentBtn="true" :showRepairBtn="true" :isContactMaster="false" :showCancelOrderBtn="false"></bottomController>
	</view>
</template>

<script setup>
import {getOrdersById} from "../../../../../api/order.js"
import { computed, onBeforeMount, onMounted, reactive, ref } from "vue";

let curOrderId = ref(0)
let curOrderInfo = ref({})

// 获取当前订单的信息
let getCurOrderInfo = async ()=>{
  let {data} = await getOrdersById(curOrderId.value)
  // console.log(JSON.parse(data.data.orderDetailInfo));
  curOrderInfo.value = data.data
  // console.log("completedDetail: ",curOrderInfo.value);
  uni.setStorageSync("curOrderInfo",data.data)
  // let pastTime = ((new Date())-(new Date(curOrderInfo.value.createTime)))/1000  // 过去时间的秒数
  // restTime.value = 30*60 - pastTime  // 剩余秒数
}

onMounted(()=>{
  curOrderId.value = uni.getStorageSync("curOrderId")
  getCurOrderInfo()
})

</script>

<style lang="scss">
.secondOffer_box {
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
