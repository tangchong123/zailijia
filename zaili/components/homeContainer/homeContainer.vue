<template>
	<view>
		{{tabsIndex}} aaa
	</view>
</template>

<script setup>
	import {getAllData} from "../../api/c_order.js"
	import {onLoad} from '@dcloudio/uni-app'
	import {
		defineProps
	} from "vue"
	let props = defineProps({
		tabsIndex: Number
	})
	onLoad(async ()=>{
		let res = await getAllData({
			"pageNum":0,
			"pageSize":10,
			"createUser":""
		})
		console.log(res)
	})
</script>

<style>

</style>