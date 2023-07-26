<template>
	<view class="orderCard_box">
		<view class="order_item">
			<!-- 上 -->
			<view @tap="gotoDetail" class="top_box">
				<view class="order_num">
					订单号: <text>20220201020983120</text>
				</view>
				<view class="order_status">
					<text :class="status==='待支付'?'active':''">{{status}}</text>
				</view>
			</view>
			
			<!-- 下 -->
			<view class="bottom-box">
				<view @tap="gotoDetail" class="detail_box">
					<view class="detail">
						<image src="../../../static/imgs/tabbar/首页绿@2x.png" mode=""></image>
						<view class="desc">
							<text class="desc_detail">墙面翻修</text>
							<text class="time">预约时间: 2022-02-17 12:30</text>
							<text class="time">保修时间: 2022-02-17 至 2022-05-17</text>
						</view>
					</view>
					<text class="count_box">x 1</text>
				</view>
				<view class="controller">
					<view class="btn_box">
						<button @tap="cancel" class="cancel_btn" size="mini">取消售后</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import {ref} from "vue"
import {cancelAfterSaleOrder} from "../../api/order.js"

let orderNum = ref("")
	
let props = defineProps({
	status: {
		type: String,
		required: true
	}
})

// 一些跳转
let gotoDetail = ()=> {
	if(props.status==='待上门') {
		uni.navigateTo({
			url: "/pages/my/afterSales/willToDoorDetail/willToDoorDetail",
			// success(res) {
			// 	uni.setStorageSync("curAfterSaleOrderId",props.list.orderNum)
			// }
		})
	}else if(props.status==='进行中') {
		uni.navigateTo({
			url: "/pages/my/afterSales/ongoingDetail/ongoingDetail"
		})
	}else {  // 已完成
		uni.navigateTo({
			url: "/pages/my/afterSales/completedDetail/completedDetail"
		})
	}
}

// 取消售后
let cancel = async ()=> {
	let {data} = await cancelAfterSaleOrder(orderNum.value)
	// console.log(data);
	if(data.code==='200') {
		uni.showToast({
			title: "取消售后成功!"
		})
	}
}
</script>

<style lang="scss">
.orderCard_box {
	.order_item {
		width: 90vw;
		height: 340rpx;
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
							font-weight: 600;
							font-size: 18px;
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
						&:nth-of-type(1) {
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