<template>
	<view class="global myCoupon_box">
		<TopBar :title="`我的优惠券`"></TopBar>
		<view class="uni-padding-wrap uni-common-mt">
			<uni-segmented-control :current="current" :values="items" :style-type="`text`" :active-color="`#2B9F6F`" @clickItem="onClickItem" />
		</view>
		<view class="coupon_content">
			<view class="content">
				<view v-if="current === 0">
					<view class="empty" v-if="willUseCoupons.length===0">
						<image src="../../../static/imgs/my/购物车空@2x.png" mode=""></image>
						<text>暂无优惠券</text>
					</view>
					<view class="notEmpty" v-else>
						<couponCard v-for="item in willUseCoupons" :info="item" itemCoverage="品类券" :useStatus="3"></couponCard>
					</view>
				</view>
				<view v-if="current === 1">
					<view class="empty" v-if="usedCoupons.length===0">
						<image src="../../../static/imgs/my/购物车空@2x.png" mode=""></image>
						<text>暂无优惠券</text>
					</view>
					<view class="notEmpty" v-else>
						<couponCard itemCoverage="品类券" :useStatus="2"></couponCard>
					</view>
				</view>
				<view v-if="current === 2">
					<view class="empty" v-if="expiredCoupons.length===0">
						<image src="../../../static/imgs/my/购物车空@2x.png" mode=""></image>
						<text>暂无优惠券</text>
					</view>
					<view class="notEmpty" v-else>
						<couponCard itemCoverage="品类券" :useStatus="1"></couponCard>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script setup>
import {ref,reactive,onMounted, onBeforeMount, nextTick} from "vue"
import {getCoupons} from "../../../api/coupon.js"

let items = reactive(['未使用', '已使用', '已过期'])
let current = ref(0)

let willUseCoupons = reactive([])
let usedCoupons = reactive([])
let expiredCoupons = reactive([])

let onClickItem = ({currentIndex})=>{
	current.value = currentIndex
	if(currentIndex===0) {
		getAllCoupons(3)
		// console.log(willUseCoupons.length);
	}else if(currentIndex===1) {
		getAllCoupons(2)
		// console.log(usedCoupons.length);
	}else {
		getAllCoupons(1)
		// console.log(expiredCoupons.length);
	}
}

// 请求优惠券数据
let getAllCoupons = async(useStatus) => {
	let {data} = await getCoupons(useStatus)
	if(useStatus===3) {
		willUseCoupons.length = 0
		willUseCoupons.push(...data.data)
		// console.log(willUseCoupons);
	}else if(useStatus===1) {
		expiredCoupons.length = 0
		expiredCoupons.push(...data.data)
	}else {
		usedCoupons.length = 0
		usedCoupons.push(...data.data)
	}
	// console.log(data.data);
}

// 初始渲染
onMounted(()=> {
	getAllCoupons(3)
})
</script>

<style lang="scss" scoped>
.myCoupon_box {
	.uni-common-mt {
		// margin-top: 30rpx;
		background-color: #fff;
	}
	
	.uni-padding-wrap {
		// width: 750rpx;
		padding: 0px 30px;
	}
	
	
		
	.coupon_content {
		.content {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			justify-content: center;
			align-items: center;
			margin-top: 25rpx;
			text-align: center;
			
			.empty {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-top: 160rpx;
				image {
					width: 305rpx;
					height: 331rpx;
				}
				text {
					color: #666;
					margin-top: 30rpx;
				}
			}
			
			.notEmpty {
				width: 94vw;
				display: flex;
				flex-direction: column;
				align-items: center;
				// padding: 0 10rpx 20rpx;
			}
		}
		
		.content-text {
			font-size: 14px;
			color: #666;
		}
	}
}
</style>
