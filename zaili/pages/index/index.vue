<template>
	<view class="content">
		<fui-tabs :tabs="tabs" @change="changeTabs"></fui-tabs>
		<homeContainer></homeContainer>
	</view>
</template>

<script setup>
	import fuiTabs from "../../node_modules/firstui-uni/firstui/fui-tabs/fui-tabs.vue"
	import {getData} from "../../api/master-home.js"
	import {ref,reactive} from "vue"
	import {onLoad} from '@dcloudio/uni-app'
	let allData = reactive()
	let tabs = reactive(['新订单', '已完成', '未完成'])
	let tabsIndex = ref(0)
	onLoad(async ()=>{
		let res = await getData()
		allData = res.data.data
		console.log(allData,"b")
	})
	let changeTabs = (e)=>{
		tabsIndex.value = e.index
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
