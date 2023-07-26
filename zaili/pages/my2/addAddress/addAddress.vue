<template>
	<view>
		<view class="containerBox">
			<view class="container">
				<text>联系人:</text>
				<input type="text" placeholder="请输入联系人姓名" :value="addressInfo.name" @input="handleInput($event,'name')">
			</view>
			<view class="container">
				<text>手机号码:</text>
				<input class="uni-input" placeholder="请输入电话号码" :value="addressInfo.phoneNumber" @input="handleInput($event,'phoneNumber')" />
			</view>
			<view class="container">
				<text>所在区域:</text>
				<input type="text" placeholder="请填写省/市/区/街道" :value="addressInfo.address">
			</view>
			<view class="container">
				<text>小区名字:</text>
				<input type="text" placeholder="请选择所在小区" :value="addressInfo.option">
			</view>
			<view class="container">
				<text>具体地址:</text>
				<input type="text" placeholder="例:1栋二单元301" :value="addressInfo.specificAddress" @input="handleInput($event,'specificAddress')">
			</view>
		</view>
		<pickerAddress></pickerAddress>
	</view>
</template>

<script setup>
	import {
		reactive,
		ref
	} from "vue"
	let showClearIcon = ref(false)
	let addressInfo = reactive({
		"name": "",
		"phoneNumber": "",
		"address": "",
		"option": "",
		"specificAddress": ""
	})
	let handleInput = (e,type)=>{
		// console.log(type)
		addressInfo[type] = e.detail.value
		console.log(addressInfo)
	}
</script>

<style lang="scss">
	.containerBox {
		padding: 30rpx;
		box-sizing: border-box;
	}

	.container {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin: 40rpx 0rpx;

		>text {
			width: 160rpx;
			// background-color: lightpink;
			// letter-spacing: 4rpx;
			font-size: 32rpx;
		}
	}
</style>