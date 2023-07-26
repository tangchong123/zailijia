<template>
	<view class="couponCard_box">
		<view class="coupon_item" :class="useStatus===3?'':'beGray'">
			<!-- 左边 -->
			<view class="c1">
				<!-- <text>{{info.couponDetail.type==='DISCOUNT'?'折扣券':info.couponDetail.type==='FULL_REDUC'?'满减券':'抵扣券'}}</text> -->
				<text>{{type}}</text>
			</view>
			
			<!-- 中间 -->
			<view class="money_info" v-if="type==='满减券'">
				<view class="money">
					<text>￥</text>
					<text>{{JSON.parse(info.couponDetail.ruleInfo).reduceMoney}}</text>
				</view>
				<text class="discount_info">满{{JSON.parse(info.couponDetail.ruleInfo).fullMoney}}元可用</text>
			</view>
			<view class="money_info" v-if="type==='抵扣券'">
				<view class="money">
					<text>￥</text>
					<text>{{JSON.parse(info.couponDetail.ruleInfo).deductionMoney}}</text>
				</view>
			</view>
			<view class="money_info" v-if="type==='折扣券'">
				<view class="money">
					<text style="font-size: 24px;">{{JSON.parse(info.couponDetail.ruleInfo).discount}}折</text>
				</view>
			</view>
			
			<!-- 右边 -->
			<view class="detail">
				<text class="c2">{{info.couponDetail.itemCoverage==='CATEGORY'?'品类券':'通用券'}}</text>
				<text class="detail_info">{{info.couponDetail.name}}</text>
				<view>
					<text>2022.03.04~2022.04.03</text>
					<view class="use" v-if="useStatus===3" @tap="gotoUseCoupon">去使用</view>
					<view class="use" v-if="useStatus===1">已过期</view>
					<view class="use" v-if="useStatus===2">已使用</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import {onMounted,ref,computed}  from "vue"

let props = defineProps({
	itemCoverage: {
		type: String,
		required: true
	},
	useStatus: {
		type: Number,
		required: true,
	},
	info: {
		type: Object
	}
})

let type = computed(()=>{
	return props.info.couponDetail.type==='DISCOUNT'?'折扣券':props.info.couponDetail.type==='FULL_REDUCE'?'满减券':'抵扣券'
})
let fullMoney = computed(()=> {
	return JSON.parse(props.info.couponDetail.ruleInfo).fullMoney
})

let gotoUseCoupon = ()=> {
	// console.log("去使用优惠券");
	uni.navigateTo({
		url:"/pages/category/category"
	})
}

onMounted(()=>{
	// console.log(props.info);
	// console.log(fullMoney.value);
})
</script>

<style lang="scss">
.couponCard_box {
	margin-bottom: 20rpx;
	.beGray {
		-webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
		filter: grayscale(100%);
	}
	.coupon_item {
		// -webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
		// filter: grayscale(100%);
		width: 100%;
		height: 200rpx;
		border-radius: 20rpx;
		overflow: hidden;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		.c1 {
			width: 40rpx;
			height: 100%;
			display: flex;
			align-items: center;
			// padding: 5rpx;
			font-size: 12px;
			background-color: #BBE5C0;
			color: #8c7c67;
		}
		.money_info {
			width: 160rpx;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			background-color: #FBF8EB;
			.money {
				color: #F1B25D;
				margin-bottom: 10rpx;
				
				text {
					&:nth-of-type(1) {
						font-size: 14px;
						margin-right: 5rpx;
					}
					&:nth-of-type(2) {
						font-size: 28px;
					}
				}
			}
			.discount_info {
				color: #B6A185;
				font-size: 12px;
			}
		}
		
		.detail {
			width: 70%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			// align-items: start;
			margin-left: 20rpx;
			.c2 {
				width: 120rpx;
				height: 40rpx;
				line-height: 40rpx;
				border-radius: 30rpx;
				background-color: #FBF8EB;
				color: #B6A185;
				font-size: 12px;
				margin-bottom: 10rpx;
			}
			.detail_info {
				font-weight: 600;
				font-size: 18px;
				color: #333;
				text-align: left;
			}
			>view {
				display: flex;
				justify-content: space-between;
				align-items: flex-end;
				// margin-top: 10rpx;
				text {
					font-size: 12px;
					color: #aaa;
				}
				.use {
					width: 150rpx;
					height: 60rpx;
					margin-right: 20rpx;
					line-height: 60rpx;
					border-radius: 40rpx;
					background: linear-gradient(to left,#F3BE7A,#FED3A3);
				}
			}
		}
	}
}
</style>