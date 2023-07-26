<template>
	<view class="repairSuccess_box">
		<TopBar title="返修成功"></TopBar>
		
		<!-- 返修成功提示 -->
		<view class="success_hint">
			<view class="tick_box">
				<uni-icons color="#00A07A" size="34" type="checkmarkempty"></uni-icons>
			</view> 
			<text class="title">返修提交成功</text>
			<text class="det">抱歉让主人进行返修，工程师接单后将尽快联系主人确认上门服务时间</text>
			<view class="controller_box">
				<button @tap="cacelAfterSale" class="cancel_btn" size="mini">取消售后</button>
				<button @tap="seeRepairSheet" class="see_btn" size="mini">查看返修单</button>
			</view>
		</view>
		
		<!-- 推荐服务 -->
		<view class="recommend_service_box">
			<text class="title">推荐服务</text>
			<view class="recommend_box">
				<view class="recommend">
					<image src="../../../../../static/logo.png" mode=""></image>
					<text class="title">水龙头安装维修</text>
					<view class="info">
						<view class="price">
							<text>￥50.00</text>起
						</view>
						<text class="appointment_btn">立即预约</text>
					</view>
				</view>
				<view class="recommend">
					<image src="../../../../../static/logo.png" mode=""></image>
					<text class="title">水龙头安装维修</text>
					<view class="info">
						<view class="price">
							<text>￥50.00</text>起
						</view>
						<text class="appointment_btn">立即预约</text>
					</view>
				</view><view class="recommend">
					<image src="../../../../../static/logo.png" mode=""></image>
					<text class="title">水龙头安装维修</text>
					<view class="info">
						<view class="price">
							<text>￥50.00</text>起
						</view>
						<text class="appointment_btn">立即预约</text>
					</view>
				</view><view class="recommend">
					<image src="../../../../../static/logo.png" mode=""></image>
					<text class="title">水龙头安装维修</text>
					<view class="info">
						<view class="price">
							<text>￥50.00</text>起
						</view>
						<text class="appointment_btn">立即预约</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { onMounted, ref } from "vue";
import {cancelAfterSaleOrder} from "../../../../../api/order.js"

let orderNum = ref("")

// 取消售后
let cacelAfterSale = async () => {
	let {data} = await cancelAfterSaleOrder(orderNum.value)
	// console.log(data);
	if(data.code==='200') {
		uni.showToast({
			title: "取消售后成功!"
		})
	}
}

// 查看返修单
let seeRepairSheet = ()=> {
	uni.navigateBack()
}

onMounted(()=>{
	orderNum.value = uni.getStorageSync("curOrderNum")
})
</script>

<style lang="scss">
.repairSuccess_box {
	background-color: #f3f3f3;
	.success_hint {
		background-color: #fff;
		padding: 60rpx 20rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		.tick_box {
			width: 120rpx;
			height: 120rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 50%;
			background-color:  #C5E4BE;
			 color: #00A07A;
		}
		.title {
			font-weight: 800;
			margin-top: 15rpx;
		}
		.det {
			font-size: 14px;
			text-align: center;
			margin-top: 20rpx;
			color: #333;
		}
		.controller_box {
			display: flex;
			margin-top: 40rpx;
			button {
				width: 220rpx;
				color: #00A07A;
				background-color: #fff;
				border-radius: 40rpx;
				border: 1px solid #00A07A;
			}
			.see_btn {
				background-color: #C5E4BE;
				border: none;
				margin-left: 20rpx;
			}
		}
	}
	
	.recommend_service_box {
		background-color: #fff;
		width: 90vw;
		margin: 0 auto;
		margin-top: 15rpx;
		border-radius: 15rpx;
		padding: 20rpx;
		padding-right: 0;
		.title {
			font-weight: 600;
		}
		.recommend_box {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			margin-top: 20rpx;
			.recommend {
				display: flex;
				flex-direction: column;
				margin: 0 20rpx 20rpx 0;
				image {
					width: 310rpx;
					height: 310rpx;
				}
				.title{
					font-weight: 600;
					font-size: 14px;
					margin-top: 5rpx;
				}
				.info {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top: 5rpx;
					.price {
						font-size: 12px;
						color: #666;
						text {
							font-size: 16px;
							color: #ECB400;
							margin-right: 4rpx;
						}
					}
					.appointment_btn {
						padding: 8rpx 20rpx;
						background-color: #C5E4BE;
						color: #00A07A;
						font-size: 12px;
						font-weight: 600;
						border-radius: 30rpx;
					}
				}
			}
		}
	}
}
</style>
