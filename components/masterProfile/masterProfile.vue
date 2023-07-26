<template>
	<view class="masterProfile_box global">
		<view class="box">
			<image :src="masterInfo.avatar" mode=""></image>
			<view class="profile_box">
				<view class="top">
					<text>{{masterInfo.realName}}</text>
					<!-- 评价 -->
					<uni-rate :readonly="true" :value="masterInfo.avgScore" size="18" />
				</view>
				<text>{{masterInfo.introduce}}</text>
			</view>
			<view class="contact" v-if="showContactMaster">
				<view class="icon">
					<uni-icons color="#00BB95" type="phone-filled" size="24"></uni-icons>
				</view>
				<text>联系师傅</text>
			</view>
		</view>
	</view>
</template>

<script setup>
import { computed, onMounted,ref } from "vue";
import {getOrdersById} from "../../api/order.js"
  
let curOrderInfo = ref({})
let orderDetailInfo = ref({})
let goodsItem = ref({})
let masterInfo = ref({})

let props = defineProps({
  showContactMaster: {
    type: Boolean,
    default: true
  }
})

// 获取当前订单的信息
let getCurOrderInfo = async ()=>{
  let {data} = await getOrdersById(curOrderId.value)
  // console.log(JSON.parse(data.data.orderDetailInfo));
  curOrderInfo.value = data.data
  orderDetailInfo.value = JSON.parse(curOrderInfo.value.orderDetailInfo)
  goodsItem.value = JSON.parse(orderDetailInfo.value.goodsItem)
  masterInfo.value = curOrderInfo.value.xcxEngineer
  // console.log("completedDetail: ",curOrderInfo.value);
  // uni.setStorageSync("curOrderInfo",data.data)
  // let pastTime = ((new Date())-(new Date(curOrderInfo.value.createTime)))/1000  // 过去时间的秒数
  // restTime.value = 30*60 - pastTime  // 剩余秒数
}

onMounted(()=>{
	getCurOrderInfo()
  // console.log(props.curOrderInfo);
  // curOrderInfo.value = uni.getStorageSync("curOrderInfo")
  // orderDetailInfo.value = JSON.parse(curOrderInfo.value.orderDetailInfo)
  // goodsItem.value = JSON.parse(orderDetailInfo.value.goodsItem)
  // console.log("master: ",curOrderInfo.value.xcxEngineer);
  // masterInfo.value = curOrderInfo.value.xcxEngineer
})
</script>

<style lang="scss" scoped>
.masterProfile_box {
	height: 230rpx;
	
	.box {
		height: 230rpx;
		background-color: #fff;
		width: 94vw;
		margin: 0 auto;
		border-radius: 20rpx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		>image {
			width: 150rpx;
			height: 150rpx;
			border-radius: 20rpx;
			margin-left: 20rpx;
		}
		.profile_box {
			width: 46%;
			font-size: 14px;
			// margin-left: 20rpx;
			padding: 0 20rpx;
			.top {
				display: flex;
				align-items: center;
				margin-bottom: 10rpx;
				>text {
          width: 120rpx;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
					font-size: 15px;
					margin-right: 20rpx;
				}
			}
			>text {
				font-size: 13px;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 3;
				overflow: hidden;
				text-overflow: ellipsis;
				color: #333;
			}
		}
		.contact {
			margin-right: 20rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.icon {
				width: 54rpx;
				height: 54rpx;
				border: 1px solid #00BB95;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-bottom: 10rpx;
			}
			text {
				font-size: 14px;
			}
		}
	}
}
</style>