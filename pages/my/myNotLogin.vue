<template>
	<view class="my_box global">
		
		<view class="top">
			<image class="bg_img" src="../../static/imgs/my/椭圆 632@2x.png" mode=""></image>
			<!-- 用户信息 -->
			<view class="user_info_box">
				<view class="avatar_box">
					<image src="../../static/imgs/my/我的@2x.png" mode=""></image>
				</view>
				<!-- <view class="user_info">
					<text class="nickname">昵称{{}}</text>
					<text class="phone">手机号{{}}</text>
				</view> -->
				<view class="go" @tap="goToLogin">登录/注册</view>
			</view>
			
			<!-- 优惠券 -->
			<view class="coupon_info">
				<view class="hint">
					<image src="../../static/imgs/my/优惠券@2x.png" mode=""></image>
					<text>我的优惠券</text>
				</view>
				<image src="../../static/imgs/my/椭圆 632 拷贝@2x.png" mode=""></image>
			</view>
		</view>
		
		<!-- 我的订单 -->
		<view class="order_box">
			<text class="title">我的订单</text>
			<view class="list">
				<view class="order_list" v-for="(item,index) in myOrders" :key="index">
					<view class="order_img">
						<image :src="item.imgUrl" mode=""></image>
					</view>
					<text>{{item.name}}</text>
				</view>
			</view>
		</view>
		
		<!-- 服务与工具-->
		<view class="services_tools">
			<text class="title">服务与工具</text>
			<view class="list">
				<view class="tools_list" v-for="(item,index) in tools" :key="index">
					<view class="tools_img">
						<image :src="item.imgUrl" mode=""></image>
					</view>
					<text>{{item.name}}</text>
				</view>
			</view>
		</view>
		
		<!-- 展示图片 -->
		<view class="show_img_box">
			<image src="../../static/imgs/my/bg.png" mode=""></image>
		</view>
	</view>
	<TabBar></TabBar>
</template>

<script setup>
	import {ref,reactive,onMounted} from "vue"
	
	let myOrders = reactive([
		{
			imgUrl: "../../static/imgs/my/待付款@2x.png",
			name: "待支付"
		},
		{
			imgUrl: "../../static/imgs/my/待上门@2x.png",
			name: "待上门"
		},
		{
			imgUrl: "../../static/imgs/my/进行中@2x.png",
			name: "进行中"
		},
		{
			imgUrl: "../../static/imgs/my/待评价@2x.png",
			name: "待评价"
		},
		{
			imgUrl: "../../static/imgs/my/订单-已完成@2x.png",
			name: "已完成"
		},
	])
	
	let tools = reactive([
		{
			imgUrl: "../../static/imgs/my/售后@2x.png",
			name: "售后",
		},
		{
			imgUrl: "../../static/imgs/my/地址@2x.png",
			name: "地址管理",
		},
		{
			imgUrl: "../../static/imgs/my/3.1 设置@2x.png",
			name: "设置",
		},
		{
			imgUrl: "../../static/imgs/my/投诉建议@2x.png",
			name: "投诉与建议",
		},
		{
			imgUrl: "",
			name: ""
		}
	])
	
	let goToLogin = ()=> {
		uni.redirectTo({
			url: "/pages/login/login"
		})
	}
	
	// 判断是否登录
	
	onMounted(()=> {
		// uni.checkSession({
			
		// })
	})
	
</script>

<style lang="scss" scoped>
	.my_box {
		.top {
			width: 100vw;
			height: 420rpx;
			padding: 0 30rpx;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			position: relative;
			background-color: #fff;
				
			.bg_img {
				width: 416rpx;
				height: 326rpx;
				position: absolute;
				top: 0;
				right: 0;
			}
				
			.user_info_box {
				display: flex;
				align-items: center;
				margin-bottom: 60rpx;
					
				.go {
					font-size: 24px;
					font-weight: 600;
					color: #666;
				}
				
				.avatar_box {
					width: 130rpx;
					height: 130rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 50%;
					border: 10rpx solid #666;
					overflow: hidden;
					margin-right: 20rpx;
					image {
						width: 105rpx;
						height: 105rpx;
					}
				}
				.user_info {
					display: flex;
					flex-direction: column;
					.nickname {
						font-weight: 600;
						margin-bottom: 6rpx;
					}
					.phone {
						font-size: 14px;
					}
				}
			}
				
			.coupon_info {
				width: 92%;
				position: relative;
				height: 110rpx;
				
				border-top-left-radius: 20rpx;
				border-top-right-radius: 20rpx;
				background: linear-gradient(to right,#FFE7CD,#FFC789);
				
				.hint {
					display: flex;
					justify-content: center;
					align-items: center;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%,-50%);
					z-index: 2;
					image {
						width: 42rpx;
						height: 42rpx;
						margin-right: 20rpx;
					}
				}
				
				>image {
					width: 328rpx;
					height: 190rpx;
					position: absolute;
					bottom: -93rpx;
					right: 0;
				}
			}
		}
		
		// 标题
		.title {
			position: relative;
			padding:0 30rpx 30rpx;
			&::before {
				content: "";
				width: 8rpx;
				height: 40rpx;
				background: linear-gradient(to bottom,#00B08F,#fff);
				position: absolute;
				top: 10rpx;
				left: 0;
			}
		}
		
		.order_box {
			border-top: 1px solid #ddd;
			border-top-left-radius: 20rpx;
			border-top-right-radius: 20rpx;
			box-shadow: 0 10rpx 10 0 #000;
		}
		// 订单, 服务与工具
		.order_box,.services_tools {
			background-color: #fff;
			margin-bottom: 10rpx;
			padding: 30rpx;
			
			.list {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 30rpx;
				.order_list,.tools_list {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: center;
					>text {
						font-size: 14px;
					}
					
					.order_img {
						width: 80rpx;
						height: 80rpx;
						border-radius: 50%;
						display: flex;
						justify-content: center;
						align-items: center;
						background-color: rgba(0,176,143,.1);
						margin-bottom: 6rpx;
						image {
							width: 47rpx;
							height: 47rpx;
						}
					}
					.tools_img {
						width: 39rpx;
						height: 39rpx;
						margin-bottom: 6rpx;
						image {
							width: 39rpx;
							height: 39rpx;
						}
					}
				}
			}
			
		}
		
		.show_img_box {
			width: 100%;
			height: 260rpx;
			padding: 40rpx;
			margin: 0 auto;
			background-color: #fff;
			image {
				// width: 85%;
				height: 220rpx;
				border-radius: 20rpx;
			}
		}
	}

</style>
