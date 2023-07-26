<template>
	<view class="box">
		<view class="order-state">
			<view>
				<fui-icon name="order-fill" size="55" color="skyblue"></fui-icon>
				<span class="state">{{detail.order_state}}</span>
			</view>
			<view>
				您预约的时间:{{detail.order_appointment}}
			</view>
		</view>
		<view class="order-address">
			<view class="box">
				<view class="time">
					<view>
						预约时间 :
					</view>
					<view>
						您预约的时间:{{detail.order_appointment}}
					</view>
				</view>
				<view class="time">
					<view>
						服务地址 :
					</view>
					<view>
						{{detail.order_address}}
					</view>
				</view>
			</view>
		</view>
		<view class="info">
			<view>
				<image src="../../../static/imgs/售后.png"></image>
				<view class="container">
					<view>{{detail.order_title}}</view>
					<view>{{detail.order_price}}</view>
					<view>上次服务时间:{{detail.order_beforeTime}}</view>
				</view>
				<view>
					X1
				</view>
			</view>
			<view class="descript">故障描述:</view>
			<view class="des">{{detail.order_descript}}</view>
			<view class="descript">上传图片:</view>
			<view class="imageBox">
				<image src="../../../static/imgs/售后.png"></image>
				<image src="../../../static/imgs/售后.png"></image>
				<image src="../../../static/imgs/售后.png"></image>
				<image src="../../../static/imgs/售后.png"></image>
				<image src="../../../static/imgs/售后.png"></image>
			</view>
			
		</view>
		<view class="order-info">
			<view class="title">订单信息</view>
			<view class="number">
				<view>
					订单编号:
				</view>
				<view>
					{{detail.order_id}}
				</view>
			</view>
			<view class="number">
				<view>
					提交时间:
				</view>
				<view>
					{{detail.order_createTime}}
				</view>
			</view>
		</view>
		<view class="master">
			<view class="header">
				<image src="../../../static/imgs/头像.png"></image>
			</view>
			<view class="tobody">
					<view class="a">
						<view class="b">
							<text>{{detail.order_master.name}}</text>
							<view class="e">
								<fuiIcon v-for="(item,index) in ['red','red','red','gray','gray']" name="star" size="40" :color="item" :key="index"></fuiIcon>
							</view>
						</view>
						<view class="c">师傅介绍</view>
					</view>
			</view>
			<view class="connect">
				<fui-icon name="mobile" size="50" color="green"></fui-icon>
				<text>联系师傅</text>
			</view>
		</view>
		<view class="fixed">
			<view>
				<view>
					<fuiIcon name="kefu" color="green" size="50"></fuiIcon>
					<text>客服</text>
				</view>
				<view>
					<fuiIcon name="mobile" size="50" color="green"></fuiIcon>
					<text>联系师傅</text>
				</view>
			</view>
			<view>
				取消售后
			</view>
		</view>
	</view>
</template>
<script setup>
	import fuiIcon from "../../../node_modules/firstui-uni/firstui/fui-icon/fui-icon.vue"
	import {onLoad} from '@dcloudio/uni-app'
import { reactive, ref } from "vue";
let {orderData}  = require("../../../utils/order.js")
	let detail = ref({})
	onLoad((options)=>{
		console.log(JSON.parse(options.list))
		let a = JSON.parse(options.list)
		console.log(options.list,"-----------")
		detail.value = a
	})
	console.log(detail);
</script>

<style lang="scss">
	page {
		padding: 20rpx 30rpx 20rpx 30rpx;
		box-sizing: border-box;
		background-color: rgba(240, 240, 240, 1);
	}

	.box {
		>.order-state {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			border-radius: 20rpx;
			background-color: white;
			box-sizing: border-box;
			font-size: 36rpx;

			>view:nth-of-type(1) {
				margin: 20rpx 0;

				>.state {
					margin-left: 20rpx;
				}
			}

			>view:nth-of-type(2) {
				font-size: 24rpx;
				margin-bottom: 20rpx;
			}

		}
		>.order-address {
			margin: 30rpx 0;
			background-color: white;
			padding: 20rpx;
			box-sizing: border-box;
			border-radius: 20rpx;
			font-size: 24rpx;

			>.box {
				>.time {
					display: flex;
					justify-content: space-between;
					margin: 20rpx;
					border-bottom: 1rpx solid rgb(157, 157, 157);
					padding-bottom: 20rpx;
					box-sizing: border-box;

					>view:nth-of-type(1) {
						color: rgb(157, 157, 157);
					}
				}
			}
		}
		>.info{
			border-radius: 20rpx;
			background-color: white;
			padding: 20rpx;
			box-sizing: border-box;
			>view:nth-of-type(1){
				display: flex;
				justify-content: space-around;
				align-items: center;
				margin-bottom: 20rpx;
				> image{
					width: 100rpx;
					height: 100rpx;
				}
				> .container{
					width: calc(100% - 240rpx);
					>view:nth-of-type(1){
						font-size: 40rpx;
						font-weight: 600;
						margin-bottom: 20rpx;
					}
					>view:nth-of-type(2){
						color: red;
						margin-bottom: 12rpx;
					}
					>view:nth-of-type(3){
						color: rgb(180, 180, 180);
					}
				}
			}
			>.descript{
				font-size: 32rpx;
			}
			>.des{
				width: calc(100% - 60rpx);
				min-height: 200rpx;
				margin:  20rpx 30rpx;
				border-radius: 20rpx;
				// background-color: skyblue;
				border: 1rpx solid darkgrey;
				box-sizing: border-box;
				padding: 20rpx;
				color: gray;
			}
			.imageBox{
				display: flex;
				flex-wrap: wrap;
				margin: 12rpx 0;
				> image{
					width: 140rpx;
					height: 140rpx;
					margin: 12rpx;
				}
			}
		}
		>.order-info{
			border-radius: 20rpx;
			background-color: white;
			padding: 30rpx;
			box-sizing: border-box;
			margin: 20rpx 0;
			>.title{
				font-size: 32rpx;
				// margin: 20rpx;
			}
			>.number{
				display: flex;
				justify-content: space-between;
				margin: 12rpx ;
				color: darkgray;
				font-size: 28rpx;
			}
		}
		>.master{
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-radius: 20rpx;
			background-color: white;
			padding: 30rpx;
			box-sizing: border-box;
			margin-bottom: 120rpx;
			>.header {
				>image{
					width: 120rpx;
					height: 120rpx;

				}
			}
			.tobody{
				>.a{
					>.b{
						display: flex;
						justify-content: center;
						align-items: center;
					}
				}
			}
			>.connect{
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				>text{
					font-size: 26rpx;
				}
			}
		}
	}
	.fixed{
		position: fixed;
		width: 100vw;
		height: 100rpx;
		font-weight: 200;
		background-color: white;
		bottom: 0rpx;
		left: 0rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		padding: 20rpx;
		>view{
			display: flex;
			justify-content: center;
			align-items: center;
		}
		>view:nth-of-type(1){
			>view{
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				margin:0 30rpx;
				font-size: 24rpx;
			}
		}
		>view:nth-of-type(2){
			padding: 12rpx 20rpx;
			box-sizing: border-box;
			background-color: white;
			border: 1rpx solid greenyellow;
			border-radius: 20rpx;
			height: 100%;
		}
	}
</style>