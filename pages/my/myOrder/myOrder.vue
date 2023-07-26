<template>
	<view class="global myOrder_box">
		<TopBar :title="`我的订单`"></TopBar>
		<view class="uni-padding-wrap uni-common-mt">
			<uni-segmented-control :current="current" :values="items" :style-type="`text`" :active-color="`#2B9F6F`" @clickItem="onClickItem" />
		</view>
		<view class="order_content">
			<view class="content">
				<!-- 全部 -->
				<view v-if="current === 0">
					<view class="empty" v-if="!allOrderList.length">
						<image src="../../../static/imgs/my/购物车空@2x.png" mode=""></image>
						<text>暂无订单</text>
					</view>
					<view class="notEmpty" v-else>
						<orderCard :list="item" v-for="(item,index) in allOrderList" :key="index" :status="item.orderStatus===1?'待支付':item.orderStatus===2||item.orderStatus===3?'分配师傅':item.orderStatus===4?'进行中':item.orderStatus===5||item.orderStatus===6||item.orderStatus===8?'已完成':'待评价'"></orderCard>
					</view>
				</view>
				
				<!-- 待支付 -->
				<view v-if="current === 1">
					<view class="empty" v-if="!willPayList.length">
						<image src="../../../static/imgs/my/购物车空@2x.png" mode=""></image>
						<text>暂无订单</text>
					</view>
					<view class="notEmpty" v-else>
						<orderCard :list="item" v-for="(item,index) in willPayList" :key="index" status="待支付"></orderCard>
					</view>
				</view>
				
				<!-- 待上门 -->
				<view v-if="current === 2">
					<view class="empty" v-if="!willToDoorList.length">
						<image src="../../../static/imgs/my/购物车空@2x.png" mode=""></image>
						<text>暂无订单</text>
					</view>
					<view class="notEmpty" v-else>
						<orderCard :list="item" v-for="(item,index) in willToDoorList" :key="index" :status="`分配师傅`"></orderCard>
					</view>
				</view>
				
				<!-- 进行中 -->
				<view v-if="current === 3">
					<view class="empty" v-if="!ongoingList.length">
						<image src="../../../static/imgs/my/购物车空@2x.png" mode=""></image>
						<text>暂无订单</text>
					</view>
					<view class="notEmpty" v-else>
						<orderCard :list="item" v-for="(item,index) in ongoingList" :key="index" :status="`进行中`"></orderCard>
					</view>
				</view>
				
				<!-- 待评价 -->
				<view v-if="current === 4">
					<view class="empty" v-if="!willCommentList.length">
						<image src="../../../static/imgs/my/购物车空@2x.png" mode=""></image>
						<text>暂无订单</text>
					</view>
					<view class="notEmpty" v-else>
						<orderCard :list="item" v-for="(item,index) in willCommentList" :key="index" :status="`待评价`"></orderCard>
					</view>
				</view>
				
				<!-- 已完成 -->
				<view v-if="current === 5">
					<view class="empty" v-if="!completedList.length">
						<image src="../../../static/imgs/my/购物车空@2x.png" mode=""></image>
						<text>暂无订单</text>
					</view>
					<view class="notEmpty" v-else>
						<orderCard :list="item" v-for="(item,index) in completedList" :key="index" :status="`已完成`"></orderCard>
					</view>
				</view>
			
			</view>
		</view>
		
	</view>
</template>

<script setup>
import {ref,reactive,onMounted, computed} from "vue"
import {getOrders,getOrdersById,submitOrder} from "../../../api/order.js"

let items = reactive(['全部', '待支付', '待上门','进行中','待评价','已完成'])
let current = ref(0)

let userInfo = reactive({})

let allOrderList = reactive([])
// 待支付
let willPayList = reactive([])
// 待上门
let willToDoorList = reactive([])
// 进行中
let ongoingList = reactive([])
// 待评价
let willCommentList = reactive([])
// 已完成
let completedList = reactive([])

// 点击item
let onClickItem = ({currentIndex})=>{
	current.value = currentIndex
	uni.setStorageSync("curOrderIndex",current.value)
	getAllOders()
}

let allOrderStatus = computed(()=>{
	let status = "null"
	switch(allOrderList.orderStatus) {
		case 1: 
			status = "待支付"
			break;
		case 2:
		case 3:
			status = "分配师傅"
			break;
		case 4:
			status = "进行中"
			break;
		case 5:
		case 6:
		case 8: 
			status = "已完成"
			break
		case 7:
			status = "待评价"
			break
	}
	return status
})

// 获取该用户的订单信息
let getAllOders = async()=>{
	let params = reactive({
		createUser: userInfo.id,
	})
	let {data} = await getOrders(params)
	console.log("我的订单信息: ",data.data.list);
	allOrderList.length = 0
	allOrderList.push(...data.data.list)
	
	willPayList.length = 0
	willPayList.push(...allOrderList.filter(item=>item.orderStatus===1))
	// console.log("willPayList: ",willPayList);
	
	willToDoorList.length = 0
	willToDoorList.push(...allOrderList.filter(item=>item.orderStatus===2 || item.orderStatus===3))
	// console.log("willToDoorList: ",willToDoorList);
	
	ongoingList.length = 0
	ongoingList.push(...allOrderList.filter(item=>item.orderStatus===4))
	// console.log("ongoingList: ",ongoingList);
	
	willCommentList.length = 0
	willCommentList.push(...allOrderList.filter(item=>item.orderStatus===7))
	// console.log("willCommentList: ",willCommentList);
	
	completedList.length = 0
	completedList.push(...allOrderList.filter(item=>item.orderStatus===5 || item.orderStatus===6 || item.orderStatus===8))
	// console.log("completedList: ",completedList);
}

onMounted(()=> {
	// 获取用户信息
	userInfo = uni.getStorageSync("userInfo")
	
	getAllOders()
	
	// 进入我的订单项时的item选择
	uni.getStorage({
		key:"curOrderIndex",
		success(res) {
			current.value = res.data+1
		}
	})
})
</script>

<style lang="scss">
.myOrder_box {
	// margin-top: 160rpx;
	.uni-common-mt {
		// margin-top: 30rpx;
		background-color: #fff;
	}
	
	.uni-padding-wrap {
		// width: 750rpx;
		padding: 0px 5px;
	}
	
	.beGray {
		-webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
		filter: grayscale(100%);
	}
		
	.order_content {
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

