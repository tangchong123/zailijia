<template>
	<view class="global afterSales_box">
		<TopBar title="售后订单"></TopBar>
		<view class="uni-padding-wrap uni-common-mt">
			<uni-segmented-control :current="current" :values="items" :style-type="`text`" :active-color="`#2B9F6F`" @clickItem="onClickItem" />
		</view>
		<view class="order_content">
			<view class="content">
				<!-- 待上门 -->
				<view v-if="current === 0">
					<view class="empty" v-if="!willToDoorList">
						<image src="../../../static/imgs/my/购物车空@2x.png" mode=""></image>
						<text>暂无订单</text>
					</view>
					<view class="notEmpty" v-else>
						<afterSaleCard :status="`待上门`"></afterSaleCard>
					</view>
				</view>
				
				<!-- 进行中 -->
				<view v-if="current === 1">
					<view class="empty" v-if="!ongoingList">
						<image src="../../../static/imgs/my/购物车空@2x.png" mode=""></image>
						<text>暂无订单</text>
					</view>
					<view class="notEmpty" v-else>
						<afterSaleCard :status="`进行中`"></afterSaleCard>
					</view>
				</view>
				
				<!-- 已完成 -->
				<view v-if="current === 2">
					<view class="empty" v-if="!completedList">
						<image src="../../../static/imgs/my/购物车空@2x.png" mode=""></image>
						<text>暂无订单</text>
					</view>
					<view class="notEmpty" v-else>
						<afterSaleCard :status="`已完成`"></afterSaleCard>
					</view>
				</view>
			
			</view>
		</view>
	</view>
</template>

<script setup>
import {ref,reactive,onMounted} from "vue"
import {getUserInfo} from "../../../api/user.js"
import {getAfterSaleOrders} from "../../../api/order.js"

let createUser = ref("")

let items = reactive(['待上门','进行中','已完成'])
let current = ref(0)

let allAfterSaleOrderList = reactive([])

let willToDoorList = reactive([
	{
		status: "待上门", // 待上门
		content: {
			orderNum: "20220201020983120",
			imgUrl: "",
		}
	},
])
let ongoingList = reactive([
	{
		status: "进行中",
		content: {
			orderNum: "20220201020983120",
			imgUrl: "",
		}
	},
])
let completedList = reactive([
	{
		status: "已完成",
		content: {
			orderNum: "20220201020983120",
			imgUrl: "",
		}
	},
])


// 点击item
let onClickItem = ({currentIndex})=>{
	current.value = currentIndex
}

// 获取用户个人信息 拿createUser
let getUserInfos = async() => {
	let {data} = await getUserInfo()
	// console.log(data.data);
	createUser.value = data.data.createUser
}

// 获取该用户的订单信息
let params = reactive({
	createUser: createUser.value,
	pageNum: 1,
	pageSize: 20
})
// 获取所有的售后订单
let getAllAfterSaleOders = async()=>{
	let {data} = await getAfterSaleOrders(params)
	console.log("售后订单: ",data.data.list);
	allAfterSaleOrderList.length = 0
	allAfterSaleOrderList.push(...data.data.list)
}

onMounted(()=> {
	getUserInfos()
	getAllAfterSaleOders()
})
</script>

<style lang="scss">
.afterSales_box {
	.uni-common-mt {
		// margin-top: 30rpx;
		background-color: #fff;
	}
	
	.uni-padding-wrap {
		// width: 750rpx;
		padding: 0px 20px;
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


