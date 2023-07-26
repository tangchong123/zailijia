<template>
	<view>
		
	</view>
</template>

<script setup>
	import {
		onLaunch,
		onShow,
		onHide,
		onLoad
	} from '@dcloudio/uni-app'
	import {ref} from "vue"
	import {getData} from "../../api/requisition.js"
	onLoad(async ()=>{
		if(!uni.getStorageSync("userInfo")){
			uni.showModal({
				content:"请先登陆",
				confirmText:"去登陆",
				cancelText:"返回",
				success() {
					uni.navigateTo({
						url:"/pages/login/login"
					})
				}
			})
		}else{
			let res = await getData()
			console.log(res)
		}
	})
</script>

<style>

</style>
