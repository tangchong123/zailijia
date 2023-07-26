<template>
	<view class="addressCard_box">
		<view class="detail_box">
			<view class="left_box">
				<text class="fuzzy_address">{{addressInfo.region}}</text>
				<text class="detail_address">{{addressInfo.address}}</text>
				<text class="user_info">{{addressInfo.linkMan}} ({{getMobile}})</text>
			</view>
			<view class="right_box" @tap="gotoEdit">
				<uni-icons color="#aaa" class="icon" type="compose" size="24"></uni-icons>
			</view>
		</view>
		<view class="controller_box">
			<checkbox-group class="check_box_group" @change="changeDefaultAddress" >
				<label>
					<checkbox class="check_box" :checked="isDefault"/><text> 设为默认地址</text>
				</label>
			</checkbox-group>
			<button class="del_btn" size="mini" @tap="removeAddress">删除</button>
		</view>
	</view>
</template>

<script setup>
import {computed, onMounted, ref,reactive} from "vue"
import {delAddress,getAddressById,saveAddress} from "../../api/address.js"

let isDefault = ref(true)

let props = defineProps({
	addressInfo: {
		type: Object
	}
})
let emit = defineEmits(["getUserAddress"])

// 删除地址
let removeAddress = async ()=>{
	// console.log("id: ",props.addressInfo.id);
	let {data} = await delAddress(props.addressInfo.id)
	if(data.code==="200") {
		uni.showToast({
			title: "删除地址成功！"
		})
		emit("getUserAddress")
	}
}

let getMobile = computed(()=>{
	return props.addressInfo.mobile.slice(0,3)+"****"+props.addressInfo.mobile.slice(-4)
})

// 修改地址
let gotoEdit = ()=> {
	uni.navigateTo({
		url: "/pages/my/addressManage/toEditAddress/toEditAddress",
		success() {
			uni.setStorageSync("curAddressInfo",props.addressInfo)
			
		}
	})
}

// 设为默认地址
let changeDefaultAddress = async ({detail})=>{
	isDefault.value = detail.value.length?false:true
	let params = reactive({
		// "address": detailAddress.value,
		// "communityId": 0,
		// "communityName": community.value,
		// "createTime": "",
		// "createUser": 0,
		// "createUserName":0,
		"defaultFlag": detail.value.length,
		"id": props.addressInfo.id,
		// "lat": 0,
		// "linkMan": userName.value,
		// "lon": 0,
		// "mobile": phoneNumber.value,
		// "region": fuzzyAddress[0]+fuzzyAddress[1]+fuzzyAddress[2],
		// "status": 0,
		// "updateTime": "",
		// "updateUser": 0,
		// "updateUserName": 0,
	})
	let data = await saveAddress(params)
	console.log(data);
}

onMounted(()=>{
	isDefault.value = props.addressInfo.defaultFlag===1?true:false
})

</script>

<style lang="scss">
.addressCard_box {
	background-color: #fff;
	// margin-bottom: 10rpx;
	border-bottom: 10rpx solid #ddd;
	padding: 20rpx;
	.detail_box {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #eee;
		margin-bottom: 20rpx;
		.left_box {
			display: flex;
			flex-direction: column;
			margin-bottom: 40rpx;
			.fuzzy_address {
				font-size: 13px;
				margin-bottom: 10rpx;
				color: #666;
			}
			.detail_address {
				font-size: 15px;
				// font-weight: 600;
				margin-bottom: 10rpx;
			}
			.user_info {
				font-size: 13px;
				color: #666;
			}
		}
		.right_box {
			margin-bottom: 40rpx;
			.icon {
				&:hover {
					color: #2B9F6F;
				}
			}
		}
	}
	
	.controller_box {
		display: flex;
		align-items: center;
		margin-left: -30rpx;
		.check_box_group {
			transform: scale(.72);
		}
		.del_btn {
			height: 55rpx;
			line-height: 50rpx;
			border-radius: 30rpx;
			border: 1px solid #ff0000;
			color: #ff0000;
			background-color: #fff;
			margin-right: 0rpx;
		}
	}
	
}
</style>