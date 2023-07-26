<template>
	<view class="detail_box global">
		<view class="box">
			<slot name="top"></slot>
			
			<view class="order_basic_info_box">
				<view class="order_time">
					<text class="title">预约时间:</text>
					<text class="time">{{(goodsItem.createTime+"").replaceAll("/","")}}</text>
				</view>
				<view class="service_address_box">
					<view class="info">
						<text class="title">服务地址:</text>
						<text class="address_info">{{serviceAddress}}</text>
					</view>
					<text class="user_info">{{curOrderInfo.xcxAddress.linkMan}}({{curOrderInfo.xcxAddress.mobile.slice(0,3)+"****"+curOrderInfo.xcxAddress.mobile.slice(-4)}})</text>
				</view>
			</view>
			
			<view class="fault_desc_box">
				<view class="fault_detail">
					<image class="fault_detail_img" :src="orderDetailInfo.goodsCover"></image>
					<view class="detail">
						<text class="d1">{{orderDetailInfo.goodsName}}</text>
						<text class="d2">￥{{goodsItem.price}}<text>/{{goodsItem.unit}}</text></text>
						<text class="d3">上次服务完成时间: 2022-03-05</text>
					</view>
					<text class="count">x {{orderDetailInfo.goodsNum}}</text>
				</view>
				<view class="fault_desc">
					<text class="f1">故障描述:</text>
					<text class="f2">{{curOrderInfo.questionDesc}}</text>
				</view>
				<view class="fault_photo">
					<text class="fault_photo_title">照片详情</text>
					<view class="photo_box">
						<image v-for="item in JSON.parse(curOrderInfo.questionImgs)" class="img" :src="item" mode=""></image>
					</view>
				</view>
			</view>
			
			<view class="order_info_box">
				<text class="order_info">订单信息</text>
				<view class="order_num">
					<text class="n1">返修订单编号:</text>
					<text class="n2">{{curOrderInfo.orderNum}}</text>
				</view>
				<view class="submit_time">
					<text class="s1">提交时间:</text>
					<text class="s2">{{(curOrderInfo.createTime+"").replaceAll("/","")}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { computed, onMounted,ref } from "vue";
import {getOrdersById} from "../../api/order.js"

let curOrderId = ref(null)
let curOrderInfo = ref({})
let orderDetailInfo = ref({})
let goodsItem = ref({})

// 服务地址
let serviceAddress = computed(()=>{
  return (curOrderInfo.value.xcxAddress.region+"").replaceAll("/","")+curOrderInfo.value.xcxAddress.address
  // return curOrderInfo.value.xcxAddress.region+curOrderInfo.value.xcxAddress.address
})

// 获取当前订单的信息
let getCurOrderInfo = async ()=>{
  let {data} = await getOrdersById(curOrderId.value)
  // console.log(JSON.parse(data.data.orderDetailInfo));
  curOrderInfo.value = data.data
  orderDetailInfo.value = JSON.parse(curOrderInfo.value.orderDetailInfo)
  goodsItem.value = JSON.parse(orderDetailInfo.value.goodsItem)
  // console.log("completedDetail: ",curOrderInfo.value);
  // uni.setStorageSync("curOrderInfo",data.data)
  // let pastTime = ((new Date())-(new Date(curOrderInfo.value.createTime)))/1000  // 过去时间的秒数
  // restTime.value = 30*60 - pastTime  // 剩余秒数
}

onMounted(()=>{
	curOrderId.value = uni.getStorageSync("curOrderId")
  // console.log(props.curOrderInfo);
  // curOrderInfo.value = uni.getStorageSync("curOrderInfo")
  getCurOrderInfo()
  // orderDetailInfo.value = JSON.parse(curOrderInfo.value.orderDetailInfo)
  // goodsItem.value = JSON.parse(orderDetailInfo.value.goodsItem)
  // console.log(curOrderInfo.value);
})
	
</script>

<style lang="scss" scoped>
.detail_box {
	width: 100vw;
	height: 1340rpx;
	// border: 1px solid pink;
	.box {
		width: 94vw;
		margin: 0 auto;
		
		.order_basic_info_box {
			background-color: #fff;
			margin-top: 15rpx;
			border-radius: 20rpx;
			padding: 20rpx;
			.order_time {
				border-bottom: 1px solid #ddd;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-bottom: 20rpx ;
				font-size: 15px;
				.title {
					font-size: 15px;
					color: #aaa;
					font-size: 14px;
				}
				.time {
					font-size: 15px;
				}
			}
			.service_address_box {
				display: flex;
				flex-direction: column;
				margin-top: 20rpx;
				.info {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 5rpx;
					.title {
						font-size: 15px;
						color: #aaa;
						font-size: 14px;
					}
					.address_info {
						font-size: 15px;
					}
				}
				.user_info {
					font-size: 14px;
					display: flex;
					justify-content: flex-end;
				}
			}
		}
	
		.fault_desc_box {
			margin-top: 15rpx;
			background-color: #fff;
			border-radius: 20rpx;
			padding: 20rpx;
			.fault_detail {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 40rpx;
				.fault_detail_img {
					border-radius: 15rpx;
					width: 130rpx;
					height: 130rpx;
					// margin-right: 10rpx;
				}
				.detail {
					width: 70%;
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					font-size: 14px;
					.d1{
						font-weight: 600;
					}
					.d2 {
						margin-top: 10rpx;
						color: #c00;
						text {
							font-size: 12px;
							margin-left: 4rpx;
						}
					}
					.d3 {
						color: #aaa;
						font-size: 12px;
					}
				}
				.count {
					color: #aaa;
					font-size: 14px;
				}
			}
		
			.fault_desc {
				.f1 {
					display: flex;
					flex-direction: column;
					font-size: 15px;
					font-weight: 600;
					color: #333;
				}
				.f2 {
					display: flex;
					flex-direction: column;
					font-size: 15px;
					height: 160rpx;
					border: 1px solid #eee;
					border-radius: 20rpx;
					color: #aaa;
					padding: 10rpx 20rpx 0;
					font-size: 14px;
					margin-top: 20rpx;
					margin-bottom: 10rpx;
				}
			}
		
			.fault_photo {
				.fault_photo_title {
					font-size: 15px;
					font-weight: 600;
					color: #333;
				}
				.photo_box {
          height: 140rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top: 10rpx;
					.img {
						width: 30%;
						height: 140rpx;
						overflow: hidden;
						margin-bottom: 10rpx;
					}
				}
			}
		}
	
		.order_info_box {
			background-color: #fff;
			margin-top: 15rpx;
			padding: 20rpx;
			border-radius: 20rpx;
			// height: 200rpx;
			.order_info {
				font-size: 15px;
				color: #333;
				font-weight: 600;
			}
			.order_num {
				margin-top: 20rpx;
				font-size: 14px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 10rpx;
				.n1 {
					color: #aaa;
				}
				.n2 {
					color: #333;
				}
			}
			.submit_time {
				margin-top: 20rpx;
				font-size: 14px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 10rpx;
				
				.s1 {
					color: #aaa;
				}
				.s2 {
					color: #333;
				}
			}
		}
	}
}
</style>