<template>
	<view class="orderCard_box">
		<view class="order_item">
			<!-- 上 -->
			<view class="top_box" @tap="gotoDetailPage">
				<view class="order_num">
					订单号: <text>{{list.orderNum}}</text>
				</view>
				<view class="order_status">
					<text :class="status==='待支付'?'active':''">{{status}}</text>
				</view>
			</view>
			
			<!-- 下 -->
			<view class="bottom-box">
				<view class="detail_box" @tap="gotoDetailPage">
					<view class="detail">
						<image :src="orderDetailInfo.goodsCover" mode=""></image>
						<view class="desc">
							<text class="desc_detail">{{orderDetailInfo.goodsName}}</text>
							<text class="time">预约时间: {{goodsItem.createTime}}</text>
						</view>
					</view>
					<text class="count_box">x {{orderDetailInfo.goodsNum}}</text>
				</view>
				<view class="compute_box">
					<view>共 {{orderDetailInfo.goodsNum}} 项服务 合计: <text>￥{{orderDetailInfo.goodsPrice}}</text></view>
				</view>
				<view class="controller">
					<view class="more" v-if="status==='待评价'">
						<view class="tooltip" v-if="isShowToolTips" @tap="toComplaint">
							订单投诉
							<view class="triangle"></view>
						</view>
						<text @tap="toMore">更多</text>
					</view>
					<view class="btn_box">
						<button @tap="cancelOrder" class="cancel_btn" size="mini" v-if="status==='待支付'|| status==='分配师傅' || status==='待上门'">取消订单</button>
						<button class="toPay_btn" size="mini" v-if="status==='待支付'">去支付</button>
						<button @tap="toRepair" class="repair_btn" size="mini" v-if="status==='待评价' || status==='已完成'">发起返修</button>
						<button class="comment_btn" size="mini" v-if="status==='待评价'">去评价</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import {onMounted, reactive, ref} from "vue"
import {getOrdersById} from "../../api/order.js"

let curOrderIndex = ref(0)
let orderMinuteTimeSpan = ref(30)

let isShowToolTips = ref(false)
let orderDetailInfo = reactive(JSON.parse(props.list.orderDetailInfo))
let goodsItem = reactive(JSON.parse(orderDetailInfo.goodsItem))
	
let props = defineProps({
	status: {
		type: String,
		required: true
	},
	list: {
		type: Object
	},
})

// 点击更多
let toMore = ()=> {
	isShowToolTips.value = !isShowToolTips.value
}

// 去投诉
let toComplaint = () => {
	
}

// 前往详情页
let gotoDetailPage = ()=>{
	if(props.status==='待支付') {
		uni.navigateTo({
			url: "/pages/my/myOrder/willPay/willPayDetail/willPayDetail",
			success:async ()=> {
				uni.setStorageSync("curOrderId",props.list.id)
				uni.setStorageSync("curOrderNum",props.list.orderNum)
			}
		})
	}else if(props.status==='分配师傅') {
		let url = "/pages/my/myOrder/willToDoor/willToDoorDetail/willToDoorDetail" // 待上门
		if(props.list.xcxEngineer===null) {
		  url = "/pages/my/myOrder/willToDoor/distributeMaster/distributeMaster" // 待分配师傅
		}
		uni.navigateTo({
			url,
		  success:async ()=> {
			uni.setStorageSync("curOrderId",props.list.id)
			uni.setStorageSync("curOrderNum",props.list.orderNum)
		  }
		})
	}else if(props.status==='进行中') {
		uni.navigateTo({
			url: "/pages/my/afterSales/ongoingDetail/ongoingDetail",
		  success:async ()=> {
			uni.setStorageSync("curOrderId",props.list.id)
			uni.setStorageSync("curOrderNum",props.list.orderNum)
		  }
		})
	}else if(props.status==='待评价') {
		uni.navigateTo({
			url: "/pages/my/myOrder/willComment/willCommentDetail/willCommentDetail",
			success:async ()=> {
				uni.setStorageSync("curOrderId",props.list.id)
				uni.setStorageSync("curOrderNum",props.list.orderNum)
			}
		})
	}else {  // 已完成
		uni.navigateTo({
			url: "/pages/my/myOrder/completed/completedDetail/completedDetail",
			success:async ()=> {
				uni.setStorageSync("curOrderId",props.list.id)
				uni.setStorageSync("curOrderNum",props.list.orderNum)
				let currentPage = getCurrentPages().pop(); //当前页面
				if (currentPage  == undefined || currentPage == null) return;
				currentPage.onLoad(); //页面存在刷新当前页面
			}
		})
	}
}

// 取消订单
let cancelOrder = ()=>{
  if(props.status==='待支付') {
    uni.navigateTo({
      url: "/pages/my/myOrder/willToDoor/cancelOrder/cancelOrder"
    })
  }else if(props.status==='分配师傅') {
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

// 发起返修
let toRepair = ()=>{
	uni.navigateTo({
		url: "/pages/my/myOrder/completed/repairPage/repairPage",
		success() {
			uni.setStorageSync("curOrderNum",props.list.orderNum)
		}
	})
}


onMounted(()=>{
	// console.log("list: ",props.list);
})
</script>

<style lang="scss">
.orderCard_box {
	.order_item {
		width: 90vw;
		height: 400rpx;
		border-radius: 20rpx;
		overflow: hidden;
		padding: 20rpx;
		background-color: #fff;
		margin-bottom: 10rpx;
		.top_box {
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #eee;
			margin-top: 10rpx;
			padding-bottom: 30rpx;
			font-size: 14px;
			.order_num {
				text {
					color: #aaa;
					margin-left: 10rpx;
				}
			}
			.order_status {
				.active {
					color: #c00;
				}
			}
		}
		
		.bottom-box {
			// position: relative;
			margin-top: 30rpx;
			.detail_box {
				display: flex;
				justify-content: space-between;
				align-items: center;
				.detail {
					display: flex;
					align-items: center;
					image {
						width: 120rpx;
						height: 120rpx;
					}
					.desc {
						display: flex;
						flex-direction: column;
						align-items: flex-start;
						margin-left: 20rpx;
						.desc_detail {
							width: 400rpx;
							text-align: left;
							font-weight: 600;
							font-size: 18px;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
						}
						.time {
							font-size: 12px;
							color: #aaa;
							margin-top: 10rpx;
						}
					}
				}
				.count_box {
					font-size: 12px;
					color: #aaa;
				}
			}
		
			.compute_box {
				display: flex;
				justify-content: flex-end;
				align-items: center;
				margin-top: 30rpx;
				font-size: 14px;
				text {
					color: #c00;
				}
			}
			
			.controller {
				height: 80rpx;
				position: relative;
				margin-top: 30rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.btn_box {
					position: absolute;
					right: 0rpx;
					bottom: 0rpx;
					button {
						height: 68rpx;
						line-height: 68rpx;
						margin-left: 20rpx;
						border-radius: 30rpx;
						border: 1px solid #ccc;
						background-color: #fff;
						&:nth-of-type(2) {
							border: 1px solid #00A07A;
							color: #00A07A;
						}
					}
				}
				.more {
					color: #aaa;
					position: relative;
					margin-left: 40rpx;
					.tooltip {
						width: 180rpx;
						height: 80rpx;
						display: flex;
						justify-content: center;
						align-items: center;
						border-radius: 20rpx;
						box-shadow: 0 0 10rpx 0 #aaa;
						position: absolute;
						top: -100rpx;
						left: 0rpx;
						color: #000;
						.triangle {
							width: 30rpx;
							height: 30rpx;
							border-radius: 8rpx;
							background-color: #fff;
							box-shadow: 15rpx 15rpx 15rpx -10rpx #aaa;
							// border-top-left: 1px solid red ;
							transform: rotate(45deg) translateX(-50%);
							position: absolute;
							bottom: -20rpx;
							left: 30%;
							z-index: 2;
						}
					}
					text {
						&:hover {
							color: #00A07A;
						}
					}
				}
			}
		}
	}
}
</style>