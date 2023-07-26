<template>
	<view class="box">
		<view class="title">
			{{title}}
		</view>
		<view class="containerBox">
			<view v-for="(item,index) in dataList" @click="handleClick(item.url)" class="container" :key="index">
				<uni-icons :type="item.icon" size="40" class="icon"></uni-icons>
				<span>{{item.title}}</span>
			</view>
		</view>
		<view class="">
			<view class="">
				<span>
					
				</span>
			</view>
		</view>
	</view>
</template>
<script setup>
	import {
		ref,
		reactive,
		defineEmits,
		defineProps,
	} from "vue"
	let props = defineProps({
		dataList: Array,
		title:String
	})
	// let title = ref("title")
	let handleClick = (url)=>{
		uni.navigateTo({
			url:`${url}`
		})
	}
</script>

<style lang="scss">
.box{
	width: 100%;
	border-radius: 20rpx;
	background-color: white;
	padding: 20rpx 12rpx;
	// margin: 0px 12rpx;
	box-sizing: border-box;
	.title{
		margin: 20rpx 0rpx 20rpx 20rpx;
		font-size: 32rpx;
	}
	.containerBox{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: flex-start;
		.container{
			width: 25%;
			color: red;
			margin-top: 12rpx;
			// margin: 0rpx 10rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.icon{
				// margin-right: 20rpx;
				margin-bottom: 6rpx;
			}
		}
	}
}
</style>