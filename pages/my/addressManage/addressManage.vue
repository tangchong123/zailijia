<template>
	<view class="addressManage_box">
		<TopBar title="地址管理"></TopBar>
		<view class="content" v-if="allAddress.length">
			<view class="card">
				<addressCard @get-user-address="getUserAddress" :address-info="addressItem" v-for="addressItem in allAddress" :key="addressItem.id"></addressCard>
			</view>
			<view class="controller_box">
				<button class="add_btn" @click="gotoAddNewAddress">新增地址</button>
			</view>
		</view>
		<view class="noAddress" v-else>
			<image class="img" src="../../../static/imgs/my/地址@2x.png" mode=""></image>
			<text class="hint">您还没有收货地址哦~</text>
			<button class="toNew_btn" size="mini" @tap="gotoAddAddress">去新建</button>
		</view>
	</view>
</template>

<script setup>
import {onMounted, reactive, ref} from "vue"
import {delAddress,getAddress,getAddressById} from "../../../api/address.js"

let allAddress = reactive([])
let userInfo = reactive({})

// 获取用户地址信息
let getUserAddress = async ()=>{
	let params = reactive({
		// "address": "",
		// "communityId": 0,
		// "communityName": "",
		// "createTime": "",
		"createUser": userInfo.id,
		// "createUserName": userInfo.nickName,
		// "defaultFlag": 1,
		// "id": 0,
		// "lat": 0,
		// "linkMan": "",
		// "lon": 0,
		// "mobile": "",
		// "region": "",
		// "status": 0,
		// "updateTime": "",
		// "updateUser": 0,
		// "updateUserName": 0
	})
	let {data} = await getAddress(params)
	// console.log("address data: ",data.data);
	allAddress.length = 0
	allAddress.push(...data.data)
}

// 新增地址
let gotoAddNewAddress = ()=>{
	uni.navigateTo({
		url: "/pages/my/addressManage/toAddAddress/toAddAddress"
	})
}

onMounted(()=>{
	// 获取用户信息
	userInfo = uni.getStorageSync("userInfo")
	
	getUserAddress()
	// if(allAddress.length===0) {
	// 	uni.navigateTo({
	// 		url: "/pages/my/addressManage/noAddress"
	// 	})
	// }
})

let gotoAddAddress = ()=>{
	uni.navigateTo({
		url: "/pages/my/addressManage/toAddAddress/toAddAddress"
	})
}

</script>

<style lang="scss" scoped>
.addressManage_box {
	height: 100%;
	
	.content {
		height: calc(100vh - 130rpx);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.card {
			// border: 1px solid red;
		}
		.controller_box {
			
			.add_btn {
			  width: 520rpx;
			  height: 80rpx;
			  line-height: 80rpx;
			  border-radius: 40rpx;
			  margin-bottom: 20rpx;
			  border: none;
			  background-color: #C5E4BE;
			  color: #469f71;
			  // position: absolute;
			  // bottom: -120rpx;
			  // left: 50%;
			  // transform: translateX(-50%);
			}
		}
	}
	
	.noAddress {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.img {
			width: 320rpx;
			height: 420rpx;
			margin-top: 160rpx;
			margin-bottom: 20rpx;
		}
		.hint {
			color: #aaa;
			font-size: 15px;
		}
		.toNew_btn {
			margin-top: 40rpx;
			width: 200rpx;
			height: 68rpx;
			line-height: 68rpx;
			border-radius: 30rpx;
			border: 1px solid #00A07A;
			color: #00A07A;
			background-color: #fff;
		}
	}
}
</style>
