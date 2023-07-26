<template>
	<view class="bottomController_box global">
		<view class="box">
			<view class="controller">
				<view class="left_box">
					<view class="customer_service">
						<image src="../../static/imgs/my/客服咨询绿@2x.png" mode=""></image>
						<text>客服</text>
					</view>
					<view class="contact" v-if="isContactMaster">
						<view class="icon">
							<uni-icons color="#00BB95" type="phone-filled" size="20"></uni-icons>
						</view>
						<text>联系师傅</text>
					</view>
				</view>
				<view class="cancel_btn" v-if="showBtn">
					<button class="cancel_order_btn" size="mini" v-if="showCancelOrderBtn" @tap="cancelOrder">取消订单</button>
					<button size="mini" v-if="showSureOrderBtn">确认订单</button>
					<button size="mini" v-if="showToPayBtn" @tap="toPay">去支付</button>
					<button size="mini" v-if="showToCommentBtn">去评价</button>
					
					<button class="cancel_order_btn" size="mini" v-if="showMyCommentBtn" @tap="seeMyComment">我的评价</button>
					<button size="mini" v-if="showRepairBtn" @tap="toRepair">发起返修</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import {ref} from "vue"
  
let orderMinuteTimeSpan = ref(0)

let props = defineProps({
	title: {
		type: String,
	},
	isContactMaster: {
		type: Boolean,
		default: true,
	},
	showBtn: {
		type: Boolean,
		default: true
	},
	showCancelOrderBtn: {
		type: Boolean,
		default: true
	},
	showToPayBtn: {
		type: Boolean,
		default: false
	},
	showSureOrderBtn: {
		type: Boolean,
		default: false
	},
	showToCommentBtn: {
		type: Boolean,
		default: false
	},
	showMyCommentBtn: {
		type: Boolean,
		default: false
	},
	showRepairBtn: {
		type: Boolean,
		default: false
	},
})

// 取消订单
let cancelOrder = ()=>{
  if(props.title==='待支付') {
    uni.navigateTo({
      url: "/pages/my/myOrder/willToDoor/cancelOrder/cancelOrder"
    })
  }else if(props.title==='待上门') {
    if(orderMinuteTimeSpan.value>30) {  // 预约时间超过30分钟
      uni.showModal({
      	title: '取消订单',
      	content: '距离您预约的上门时间已小于30分钟，取消订单会扣除上门费用，请问您是否取消?',
      	success: function (res) {
      		if (res.confirm) {
      			uni.navigateTo({
      			  url: "/pages/my/myOrder/willToDoor/cancelOrder/cancelOrder"
      			})
      		} else if (res.cancel) {
      			// console.log('用户点击取消');
      		}
      	}
      });
    }else {  // 预约时间没超过30分钟
      uni.showModal({
      	title: '取消订单',
      	content: '订单一旦取消，无法恢复，请问您是否取消?',
      	success: function (res) {
      		if (res.confirm) {
      			uni.navigateTo({
      			  url: "/pages/my/myOrder/willToDoor/cancelOrder/cancelOrder"
      			})
      		} else if (res.cancel) {
      			// console.log('用户点击取消');
      		}
      	}
      });
    }
    
  }
}

// 去支付
let toPay = ()=>{
  console.log("前往支付页面");
}

// 发起返修
let toRepair = ()=>{
	uni.navigateTo({
		url: "/pages/my/myOrder/completed/repairPage/repairPage"
	})
}

// 查看我的评价
let seeMyComment = ()=>{
  uni.navigateTo({
    url: "/pages/my/myOrder/willComment/myComment/myComment"
  })
}

</script>

<style lang="scss">
.bottomController_box {
	width: 100%;
	height: 130rpx;
	.box {
		width: 100%;
		height: 120rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		.controller {
			width: 100%;
			height: 100%;
			box-shadow: 10rpx 0 10rpx 0 #ccc;
			background-color: #fff;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.left_box {
				display: flex;
				align-items: center;
				margin-left: 40rpx;
				.customer_service {
					display: flex;
					flex-direction: column;
					align-items: center;
					image {
						width: 48rpx;
						height: 48rpx;
					}
					text {
						font-size: 14px;
					}
				}
				.contact {
					margin-left: 60rpx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					.icon {
						width: 48rpx;
						height: 48rpx;
						border: 1px solid #00BB95;
						border-radius: 50%;
						display: flex;
						justify-content: center;
						align-items: center;
					}
					text {
						font-size: 14px;
					}
				}
			}
			.cancel_btn {
				display: flex;
				justify-content: flex-end;
				align-items: center;
				button {
					height: 68rpx;
					line-height: 68rpx;
					margin-right: 40rpx;
					border-radius: 30rpx;
					border: 1px solid #00A07A;
					color: #00A07A;
					background-color: #fff;
				}
				.cancel_order_btn {
					border: 1px solid #aaa;
					color: #000;
				}
			}
		}
	}
}
</style>