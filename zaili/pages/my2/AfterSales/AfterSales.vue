<template>
	<view>
		<fui-tabs :tabs="tabs" @change="changeTabs" scroll></fui-tabs>
		<view v-if="dataList.length !=0">
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
	import {getAllData} from "../../../api/after_order.js"
	import {
		ref,
		reactive
	} from "vue"
	import {
		onLoad
	} from '@dcloudio/uni-app'
	let {orderData} = require("../../../utils/order.js")
	let tabs = reactive(["待上门", "进行中", "已完成"])
	let tabsIndex = ref(0)
	let dataList = reactive([])
	let dataList1 = reactive([])
	let changeTabs = (e) => {
		dataList.splice(0)
		tabsIndex.value = e.index
		getData()
	}
	let getData = () => {
		//获取数据，根据tabsIndexs进行赛选
		let a = orderData.filter((item)=>{
			return item.order_state === tabs[tabsIndex.value]
		})
		dataList.push(...a)
	}
	let handleDetail = (item)=>{
		let a = JSON.stringify(item)
		uni.navigateTo({
			url:`/pages/my2/orderDetail/orderDetail?list=${a}`
		})
	}
	onLoad( ()=>{
		getData()
		console.log(dataList)
		// let res = await getAllData({})
		// if(res.statusCode == 200){
		// 	console.log(res.data.data.list)
		// 	let a = res.data.data.list
		// 	dataList.push(...a)
		// 	dataList1.push(...[1,2,3,4])
		// }else{
		// 	wx.showToast(
		// 	{
		// 		title:"请求出错了",
		// 		icon:"error"
		// 	})
			
		// }
	})
</script>

<style lang="scss">
.empty{
	margin-top: 40rpx;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>