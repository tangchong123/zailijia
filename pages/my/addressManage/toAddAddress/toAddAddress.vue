<template>
	<view class="toAddAddress_box global">
		<TopBar title="添加地址"></TopBar>
    
		<view class="form_box">
			<view class="contact_user_box">
				<text class="title" @tap="getContact">联系人</text>
				<input type="text" placeholder="请输入联系人姓名" v-model="userName">
			</view>
			<view class="phone_number_box">
				<text class="title">手机号码</text>
				<input type="number" placeholder="请输入手机号码" v-model="phoneNumber">
				<!-- <input class="uni-input" placeholder="请输入手机号码" @input="clearInput" />
				<text class="uni-icon" v-if="showClearIcon" @click="clearIcon" :value="phoneNumber">&#xe434;</text> -->
			</view>
			<view class="region_box">
				<text class="title">所在区域</text>
				<!-- 请填写省/市/区/街道 -->
				<picker mode="region" @change="getRegion" :value="getFuzzyAddress">
					<view v-if="!fuzzyAddress.length" style="color: #888;">请填写省/市/区/街道</view>
					<view v-else>{{getFuzzyAddress}}</view>
				</picker>
			</view>
			<view class="community_name">
				<text class="title">小区名称</text>
				<view class="choose_community_box" @click="chooseCommunity">
					<!-- <text v-if="!community">请选择所在小区</text>
					<text v-else>{{community}}</text> -->
					<text v-if="!community">请选择所在小区</text>
					<text>{{community}}</text>
					<uni-icons type="forward"></uni-icons>
				</view>
			</view>
			<view class="detail_address_box">
				<text class="title">具体地址</text>
				<input type="text" placeholder="例: 5号楼2单元101" v-model="detailAddress">
			</view>
		</view>
    
		<view class="controller_box">
			<view class="isDefaultAddress_box">
				<text class="title">设为默认地址</text>
				<switch @change="changeDefaultAddress" :checked="isDefaultAddress" color="#aaa" style="transform:scale(0.7)"/>
			</view>
			<button class="save_btn" @click="save">保存</button>
		</view>
	</view>
</template>

<script setup>
import {computed, onMounted, reactive, ref} from "vue"
import {saveAddress} from "../../../../api/address.js"
import {getCommunityList} from "../../../../api/community.js"

let userName = ref("")
let phoneNumber = ref("")
let detailAddress = ref("")
let isDefaultAddress = ref(false)


// 省市区
let fuzzyAddress = reactive([])
let getFuzzyAddress = computed(()=>{
	return `${fuzzyAddress[0]}/${fuzzyAddress[1]}/${fuzzyAddress[2]}`
})

// 小区  需要发请求获取小区数据
let communityList = reactive(['翻斗花园', '花果山', '水帘洞'])
let community = ref("")

// 获取小区信息
let getCommunities = async ()=>{
	// {pageNum: 1,pageSize: 20}
	let data = await getCommunityList()
	console.log(data);
}

// 选择所在区域
let getRegion = ({detail})=> {
	// console.log(detail.value);
	fuzzyAddress.length = 0
	fuzzyAddress.push(...detail.value)
}

// 选择小区
let chooseCommunity = ()=> {
	uni.showActionSheet({
		itemList: communityList,
		success(res) {
			// console.log(communityList[res.tapIndex]);
			community.value = communityList[res.tapIndex]
		}
	})
}

// 改变是否为默认地址
let changeDefaultAddress = ({detail})=> {
	// console.log(detail.value);
	isDefaultAddress.value = detail.value
}


// 保存地址信息
let save = async ()=>{
	// console.log("usereName: ",userName.value);
	// console.log("phoneNumber: ",phoneNumber.value);
	// console.log("fuzzyAddress: ",fuzzyAddress);
	// console.log("community: ",community.value);
	// console.log("detailAddress: ",detailAddress.value);
	// console.log("isDefaultAddress: ",isDefaultAddress.value);
	// 表单验证
	if(!userName.value.trim()) {
		return uni.showToast({
			title: "联系人不能为空!",
			icon: "error",
		})
	}
	if(phoneNumber.value.trim().length!==11) {
		return uni.showToast({
			title: "手机号格式错误!",
			icon: "error",
		})
	}
	if(!fuzzyAddress.length) {
		return uni.showToast({
			title: "请选择区域",
			icon: "error",
		})
	}
	if(!community.value) {
		return uni.showToast({
			title: "请填写小区名称",
			icon: "error",
		})
	}
	
	let params = reactive({
		"address": detailAddress.value,
		"communityId": 0,
		"communityName": community.value,
		// "createTime": "",
		// "createUser": 0,
		// "createUserName":0,
		"defaultFlag": isDefaultAddress.value?1:0,
		// "id": 0,
		// "lat": 0,
		"linkMan": userName.value,
		// "lon": 0,
		"mobile": phoneNumber.value,
		"region": fuzzyAddress[0]+fuzzyAddress[1]+fuzzyAddress[2],
		"status": 0,
		// "updateTime": "",
		// "updateUser": 0,
		// "updateUserName": 0,
	})
	let data = await saveAddress(params)
	// console.log(data);
	if(data.data.code==="200") {
		uni.showToast({
			title: "保存地址成功!"
		})
		uni.navigateTo({
			url: "/pages/my/addressManage/addressManage"
		})
	}else {
		uni.showToast({
			title: "保存地址失败！",
			icon: "error"
		})
	}
	
}

onMounted(()=>{
	getCommunities()
	// console.log(JSON.parse(uni.getStorageSync("userInfo")).nickName);
})
</script>

<style lang="scss" scoped>
.toAddAddress_box {
  .form_box {
    >view {
      padding: 20rpx;
      background-color: #fff;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      input,picker{
        width: 74%;
      }
	  .choose_community_box {
		  width: 71%;
		  display: flex;
		  justify-content: space-between;
		  margin-right: 20rpx;
		  text {
			  color: #777;
		  }
	  }
    }
    .contact_user_box {
      
    }
  }
  .controller_box {
    margin-top: 10rpx;
    background-color: #fff;
    height: 58%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .isDefaultAddress_box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20rpx;
      margin-left: 20rpx;
      .title {
        font-size: 14px;
        margin-left: 10rpx;
      }
    }
    .save_btn {
      width: 520rpx;
      height: 80rpx;
      line-height: 80rpx;
      border-radius: 40rpx;
      margin-bottom: 20rpx;
      border: none;
      background-color: #C5E4BE;
      color: #469f71;
    }
  }
}
</style>
