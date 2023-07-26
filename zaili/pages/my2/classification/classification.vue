<template>
	<view>
		<fui-tabs :tabs="tabs" @change="changeTabs" scroll :current="tabsIndex"></fui-tabs>
		<!-- :current="tabsIndex" -->
		<view class="" v-if="dataList.length !=0">
			<view class="" v-for="(item,index) in dataList" :key="item.order_id" @tap="handleDetail(item)">
				<myOrder :detail = "item"></myOrder>
			</view>
		</view>
		<view v-else class="empty">
			<fui-icon name="receive" size="240" color="skyblue"></fui-icon>
			<span>暂无订单</span>
		</view>
	</view>
</template>

<script setup>
import fuiTabs from "../../../node_modules/firstui-uni/firstui/fui-tabs/fui-tabs.vue"
import fuiIcon from "../../../node_modules/firstui-uni/firstui/fui-icon/fui-icon.vue"
let {orderData}  = require("../../../utils/order.js")
	import {ref,reactive} from "vue"
	import {onLoad} from '@dcloudio/uni-app'
	// import {getAllData} from "../../../api/c_order.js"
import order from "../../../utils/order.js"
	let tabs = reactive(["全部","待支付","待上门","进行中","待评价","已完成"])
	let tabsIndex = ref(0)
	let dataList = reactive([])
	let changeTabs = (e)=>{
		tabsIndex.value = e.index
		dataList.splice(0)
		getData()
	}
	let getData = ()=>{
		//获取数据，根据tabsIndexs进行赛选
		if(tabsIndex.value !=0 ){
			let a = orderData.filter((item)=>{
				return item.order_state === tabs[tabsIndex.value]
			})
			dataList.push(...a)
		}else{
			dataList.push(...orderData)
		}
	}
	//跳转详情页
	let handleDetail = (item)=>{
		let a = JSON.stringify(item)
		wx.navigateTo(
		{
			url:`/pages/my2/orderDetail/orderDetail?list=${a}`
		}
		)
	}
	//取参
	onLoad((options)=>{
		let {i} = options
		console.log(i)
		tabsIndex.value = i
		getData()
		// let res = getAllData()
		// dataList.push(...orderData)
		// console.log(dataList)
	})
</script>

<style lang="scss">
page{
	background-color: rgb(240, 240, 240);
}
.empty{
	margin-top: 40rpx;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>
