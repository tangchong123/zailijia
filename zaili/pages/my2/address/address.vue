<template>
	<view>
		<view v-if="dataList.length == 0" >
			<emptyBox :title="title"></emptyBox>
			<view class="emptyBox"><text @tap="handleAdd">去新建</text></view>
		</view>
		<view v-else>
			有数据
		</view>
	</view>
</template>

<script setup>
	import {ref,reactive} from "vue"
	import {onLoad} from "@dcloudio/uni-app"
	import {getAllData } from "../../../api/c_address.js"
	let title = ref("您还没有收货地址")
	let dataList = reactive([])
	onLoad(async()=>{
		//获取数据
		let res  = await getAllData({})
		if(res.statusCode ==200){
			let a = res.data.data
			console.log(a)
			if(a !=[]){
				dataList.push(...a)
			}
		}
		else{
			uni.showToast({
				title:"请求出错了",
				icon:"error"
			})
		}
		// console.log(dataList.value)
	})
	let handleAdd = ()=>{
		uni.navigateTo({
			url:"/pages/my2/addAddress/addAddress"
		})
	}
</script>

<style lang="scss">
.emptyBox{
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 50rpx;
	// background-color: skyblue;
	>text{
		// background-color: skyblue;
		padding: 20rpx 50rpx;
		border-radius: 20rpx;
		border: 1rpx solid limegreen;
		color: limegreen;
	}
	
}
</style>
