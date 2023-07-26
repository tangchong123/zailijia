<template>
	<view class="box">
		<view class="order">
			<span>
				订单号：{{detail.order_id}}
			</span>
			<span>
				{{detail.order_state}}
			</span>
		</view>
		<view class="containerBox">
			<image src="../../static/imgs/售后.png" class="img"></image>
			<view class="container">
				<span class="a">{{detail.order_title}}</span>
				<span>预约时间:{{detail.order_appointment}}</span>
			</view>
			<span class="number">x1</span>
		</view>
		<view class="handleBox">
			<!-- <span class="handle" v-if="detail.order_state != '已完成'">取消订单</span> -->
			<span class="handle" v-if="['已完成','待评价'].indexOf(detail.order_state) < 0">取消订单</span>
			<!-- <span class="handle" v-if="detail.order_state != ''">取消订单</span> -->
			<span  class="handle" v-if="['待支付'].indexOf(detail.order_state) > -1">去支付</span>
			<span  class="handle" v-if="['已完成'].indexOf(detail.order_state) > -1">发起返修</span>
			<span  class="handle" v-if="['待评价'].indexOf(detail.order_state) > -1">去评价</span>
		</view>
	</view>
</template>

<script setup>
	import {defineProps} from "vue"
	import {onLoad} from '@dcloudio/uni-app'
	const props = defineProps({
		detail:Object
	})
	let detail = props.detail
	onLoad(()=>{
		console.log(detail,"---------------------")
	})
</script>

<style lang="scss">
.box{
	width: 95%;
	margin: 20rpx auto;
	background-color: white;
	border-radius: 20rpx;
	padding: 20rpx;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	>.order{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 12rpx 0rpx;
	}
	>.containerBox{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 12rpx 0rpx;
		>.img{
			width: 130rpx;
			height: 130rpx;
		}
		>.container{
			width: calc(100% - 210rpx);
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			>.a{
				font-size: 36rpx;
				font-weight: 800;
			}
		}
		>.number{
			width: 60rpx;
			font-size: 36rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			
		}
	}
	>.handleBox{
		display: flex;
		justify-content: flex-end;
		align-items: center;
		>.handle{
			margin-right: 20rpx;
			width: 140rpx;
			padding: 10rpx;
			box-sizing: border-box;
			display: flex;
			justify-content: center;
			align-items: center;
			// background-color: orange;
			border: 2rpx solid seagreen;
			border-radius: 20rpx;
			color: seagreen;
			font-size: 28rpx;
		}
	}
}
</style>