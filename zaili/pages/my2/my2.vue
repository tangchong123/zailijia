<template>
	<view>
		<view class="personInfo">
			<view v-if="isLogin" class="containerBox">
				<view class="avatarImg">
					<img :src="userInfo.avatar" alt="" class="img">
				</view>
				<view class="infoBox">
					<view>
						<span class="nickNameBox">{{userInfo.nickName}}</span> <span
							v-for="(item,index) in userInfo.starsCount" :key="index">*</span>
					</view>
					<view class="phoneBox">
						{{userInfo.phoneNumber}}
					</view>
				</view>
			</view>
			<view v-else class="containerBox">
				<view class="avatarImg nologinBox">
					<uni-icons type="person" size="70"></uni-icons>
				</view>
				<view class="infoBox" @tap="handleLogin">
					<view>
						<span class="nickNameBox">登陆/注册</span>
					</view>
				</view>
			</view>
			<view class="voucherBox" @tap="handlevouch">
				<image  src="../../static/imgs/优惠券.png" alt="" style="width: 35rpx;height: 35rpx;margin-right: 20rpx;"></image>
				<span>我的优惠卷</span>
			</view>
			
		</view>
		<view class="myOrder" @tap="handleOrder">
			<view class="title">我的订单</view>
			<view class="containerBox">
				<view v-for="(item,index) in myOrderData " :key="item.order_id" @tap = "handleChange(item.url,item.tabsIndex)" class="container">
					<image :src="item.icon" style="width: 55rpx;height: 55rpx;margin-bottom: 12rpx;"></image>
					<span>{{item.title}}</span>
				</view>
			</view>
		</view>
		<view class="myOrder">
			<view class="title">服务与工具</view>
			<view class="containerBox">
				<view v-for="(item,index) in myOrderData2 " :key="index" @tap = "handleChange(item.url)" class="container">
					<image :src="item.icon" style="width: 55rpx;height: 55rpx;margin-bottom: 12rpx;"></image>
					<span>{{item.title}}</span>
				</view>
			</view>
		</view>
		<view class="kefufixed">
			<fui-icon name="kefu" size="70" color="white"></fui-icon>
		</view>
	</view>
</template>

<script setup>
	import fuiIcon from "../../node_modules/firstui-uni/firstui/fui-icon/fui-icon.vue"
	import {
		onLaunch,
		onShow,
		onHide,
		onLoad
	} from '@dcloudio/uni-app'
	import {
		ref,
		reactive
	} from "vue"
	let isLogin = ref(false)
	let imgUrl = ref("../../../static/imgs/优惠卷.png")
	//信息
	let userInfo = reactive()
	
	//我的订单
	let myOrderData = reactive([
		{
			title:"待支付",
			icon:"../../static/imgs/待付款@2x.png",
			url:"./classification/classificationt",
			tabsIndex:1
		},
		{
			title:"待上门",
			icon:"../../static/imgs/待上门@2x.png",
			url:"./classification/classification",
			tabsIndex:2
		},
		{
			title:"进行中",
			icon:"../../static/imgs/进行中@2x.png",
			url:"./classification/classification",
			tabsIndex:3
		},
		{
			title:"待评价",
			icon:"../../static/imgs/待评价@2x.png",
			url:"./classification/classification",
			tabsIndex:4
		},
		{
			title:"已完成",
			icon:"../../static/imgs/订单-已完成@2x.png",
			url:"./classification/classification",
			tabsIndex:5
		},
	])
	let myOrderData2 = reactive([
		{
			title:"售后",
			icon:"../../static/imgs/售后@2x.png",
			url:"./AfterSales/AfterSales"
		},
		{
			title:"地址管理",
			icon:"../../static/imgs/地址@2x.png",
			url:"./address/address"
		},
		{
			title:"设置",
			icon:"../../static/imgs/3.1 设置@2x.png",
			url:"./setting/setting"
		},
		{
			title:"投诉建议",
			icon:"../../static/imgs/投诉建议@2x.png",
			url:"./advice/advice"
		}
	])
	onLoad(()=>{
		//获取用户头像昵称信息
		console.log(uni.getStorageSync("userInfo"))
		if(uni.getStorageSync("userInfo")){
			console.log(uni.getStorageSync("userInfo").nickName)
			isLogin.value = true
			userInfo = (uni.getStorageSync("userInfo"))
		}else{
			uni.showToast({
				title:"请先登陆",
				icon:"error"
			})
		}
	})
	//跳转到对应页面
	let handleChange = (url,tabsIndex)=>{
		console.log(tabsIndex)
		wx.navigateTo({
			url:`${url}?i=${tabsIndex}`
		})
	}
	//跳转到订单分类页面
	let  handleOrder = ()=>{
		uni.navigateTo({
			url:"/pages/my2/classification/classification?i=0"
		})
	}
	let handlevouch = ()=>{
		uni.navigateTo({
			url:"/pages/my2/myVoucher/myVoucher"
		})
	}
	let handleLogin = ()=>{
		uni.navigateTo({
			url:"/pages/login/login"
		})
	}
</script>

<style lang="scss">
	.personInfo {
		width: 100%;
		// height: 20vh;
		// margin: 20rpx auto;
		// border-radius: 20rpx;
		// border: 1rpx solid grey;
		background-color: white;

		>.containerBox {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: flex-start;
			padding: 20rpx 0rpx 20rpx 40rpx;
			box-sizing: border-box;
			align-items: center;
			>.avatarImg {
				width: 160rpx;
				height: 160rpx;
				background-color: skyblue;
				border-radius: 80rpx;
				overflow: hidden;
				margin-right: 40rpx;
				display: flex;
				justify-content: center;
				align-items: center;

				>.img {
					width: 100%;
					height: 100%;
				}
			}

			>.nologinBox {
				background-color: gray;
			}

			>.infoBox {
				font-size: 38rpx;

				>.phoneBox {
					font-size: 34rpx;
				}

				.nickNameBox {
					font-size: 48rpx;
					margin-right: 16rpx;
					font-weight: 600;
				}
			}
		}
		>.voucherBox{
			margin: 20rpx auto;
			width: 80%;
			background-color: rgba(255, 216, 170, 0.9);
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 20rpx;
			box-sizing: border-box;
			border-radius: 20rpx 20rpx 0 0 ;
			color: rgba(116, 110, 60, 1);
		}
	}
.myOrder{
	margin-top: 12rpx;
	// margin-bottom: 40rpx;
	background-color: white;
	box-shadow: 10px 0 0 10  black;
	border-radius: 20rpx 20rpx 0 0 ;
	border-bottom: 12rpx solid rgba(240, 240, 240, 1);
	padding: 20rpx 0 ;
	box-sizing: border-box;
	>.title{
		margin: 20rpx 0 20rpx 40rpx;
		font-size: 32rpx;
	}
	>.containerBox{
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-wrap: wrap;
		>.container{
			width: 20%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 4rpx 12rpx ;
			box-sizing: border-box;
		}
	}
}
.kefufixed{
	position: fixed;
	right: 30rpx;
	bottom: 30vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #00C957;
	border-radius: 20rpx;
}
</style>
