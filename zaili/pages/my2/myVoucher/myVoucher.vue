<template>
	<view>
		<fui-tabs :tabs="tabs" @change="changeTabs" scroll></fui-tabs>
		<view v-if="unused.length !=0">
			<view class="" v-for="(item,index) in unused" :key="index">
				<Voucher :dataList = "dataList"></Voucher>
			</view>
		</view>
		<view v-else class="empty">
			<fui-icon name="receive" size="240" color="skyblue"></fui-icon>
			<span>暂无优惠卷</span>
		</view>
	</view>
</template>

<script setup>
	import fuiTabs from "../../../node_modules/firstui-uni/firstui/fui-tabs/fui-tabs.vue"
	import fuiIcon from "../../../node_modules/firstui-uni/firstui/fui-icon/fui-icon.vue"
	import {onLoad} from "@dcloudio/uni-app"
	import {ref,reactive} from "vue"
	import {getAllData,getPersonVoucher} from "../../../api/c_voucher.js"
	let tabs = reactive(["未使用","已使用","已过期"])
	let dataList = reactive([1,2,3])
	let voucherType = reactive([3,2,1])
	let unused = reactive([])
	let expired = reactive([])
	let tabsIndex = ref(0)
	let use = reactive([])
	//请求数据
	onLoad(async ()=>{
		console.log(tabsIndex.value)
		// voucherType[tabsIndex.value]
		let {data} = await getPersonVoucher(voucherType[tabsIndex.value])
		let res = await getAllData()
		console.log(res)
		console.log(data.data)
		unused.push(...(data.data))
		// console.log(unused)
		// console.log(uni.getStorageSync("token"))
	})
	//tabs变化
	let changeTabs = (e)=>{
		unused.splice(0)
		tabsIndex.value = e.index
		getData()
	}
	let getData = async ()=>{
		//请求接口获取数据，根据 tabsIndex.value判断类型
		let {data} = await getPersonVoucher(voucherType[tabsIndex.value])
		let res = await getAllData()
		console.log(res)
		console.log(data.data)
		unused.push(...(data.data))
	}
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
