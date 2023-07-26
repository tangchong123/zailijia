<template>
	<view class="repairPage_box">
		<TopBar title="发起返修"></TopBar>
		
		<view class="repair_box">
			<!-- 订单及师傅基本信息 -->
			<view class="base_box">
				<view class="order_info_box">
					<image :src="orderDetailInfo.goodsCover" mode=""></image>
					<view class="det">
						<text class="title">{{orderDetailInfo.goodsName}}</text>
						<text class="time">服务完成时间: {{curOrderInfo.engineerFinishTime}}</text>
					</view>
				</view>
				<view class="master_info_box">
					<text class="title">服务工程师</text>
					<view class="master_info">
						<image :src="masterInfo.avatar" mode=""></image>
						<text>{{masterInfo.realName}}</text>
					</view>
				</view>
			</view>
			
			<!-- 返修信息表单 -->
			<view class="repair_info_box">
				<!-- 预约上门时间 -->
				<view class="todor_time_box">
					<view class="todor_time">
						<text class="title">预约上门时间</text>
						<!-- <picker mode="time" :value="todorTime" @change="bindDateChange">
							<view class="uni-input">今天{{todorTime}}</view>
						</picker> -->
						<uni-datetime-picker @change="changeTodorTime" v-model="todorTimeTange" type="datetimerange" rangeSeparator="-" />
					</view>
					<view class="hint">
						<uni-icons color="#888" type="info-filled" size="15"></uni-icons>
						<text>已为您选择上门服务时间，点击可修改期望上门时间</text>
					</view>
				</view>
				
				<!-- 服务地址 -->
				<view class="service_address_box">
					<text class="title">服务地址</text>
					<view class="address">
						<text class="fuzzy_addr">{{serviceAddress.region}}</text>
						<text class="detail_addr">{{serviceAddress.address}}</text>
						<text class="contact_user">{{serviceAddress.linkMan}}({{serviceAddress.mobile.slice(0,3)+"****"+serviceAddress.mobile.slice(-4)}})</text>
					</view>
				</view>
				
				<!-- 工程师 -->
				<view class="master_box">
					<text class="title">工程师</text>
					<!-- <uni-data-select
					    v-model="master"
					    :localdata="masterList"
					    @change="changeMaster"
						placeholder="原订单工程师"
						style="width: 400rpx;font-size: 14px;"
					></uni-data-select> -->
					<text style="color: #3A987E; font-size: 15px;">原订单工程师</text>
				</view>
				
				<!-- 故障描述 -->
				<view class="fault_desc_box">
					<text class="title">故障描述</text>
					<textarea v-model="faultDesc" style="height: 200rpx;" placeholder="您可以将您需要维修的具体情况描述一下,或者需要帮忙代购的配件等,方便维修工程师姮好的为您服务."></textarea>
				</view>
				
				<!-- 上传图片 -->
				<view class="photo_box">
					<view class="upload_box" @tap="uploadPhoto">
					  <uni-icons type="camera-filled" size="40"></uni-icons>
					  <text>照片</text>
					</view>
					<view class="img_show_box">
						<image v-for="img in imgs" :src="img" mode=""></image>
					</view>
				</view>
			</view>
		
		</view>
		
		<!-- 温馨提示 -->
		<view class="honey_hint">
			温馨提示：提交返修后，工程师会与您电话沟通，请保持手机畅通
		</view>
		
		<view class="controller_box">
			<button @tap="startRepair" class="btn">发起返修</button>
		</view>
	</view>
</template>

<script setup>
import { onMounted, ref, reactive } from "vue";
import {getOrderByOrderNum} from "../../../../../api/order.js"
import multiUpload from "../../../../../utils/multiUpload.js"
import {sendRepair} from "../../../../../api/order.js"

let curOrderNum = ref("")
let curOrderInfo = ref({}) // 订单信息
let masterInfo = ref({})  // 师傅信息
let serviceAddress = ref({}) // 服务地址
let orderDetailInfo = ref({})

// 根据orderNum获取订单信息
let getOrderInfos = async ()=>{
	let {data} = await getOrderByOrderNum(curOrderNum.value)
	console.log("repairPage's order: ",data);
	curOrderInfo.value = data.data
	masterInfo.value = curOrderInfo.value.xcxEngineer
	serviceAddress.value = curOrderInfo.value.xcxAddress
	orderDetailInfo.value = JSON.parse(curOrderInfo.value.orderDetailInfo)
	console.log(serviceAddress.value);
}

onMounted(()=>{
	curOrderNum.value = uni.getStorageSync("curOrderNum")
	getOrderInfos()
})


let todorTime = ref("11:00")
let todorTimeTange = ref(["2023-07-03 11:00:0","2023-07-03 12:00:00"])

let master = ref("原订单工程师")
let masterList = ref([
	{value: 0,text: "原订单工程师"},
	{value: 1,text: "李师傅"},
	{value: 2,text: "张师傅"},
	{value: 3,text: "杨师傅"},
])

let faultDesc = ref("") // 故障描述

let imgs = reactive([])
let imgUrls = reactive([])

// 上传图片
let uploadPhoto = ()=>{
  // 选择 并 上传图片
	uni.chooseImage({
		success: async (res) => {
			// 存储图片的临时路径
			imgs.push(...res.tempFilePaths)
			
			let data = await multiUpload(imgs)
			imgUrls.push(...data.map(item=>item.data))
		}
	});
}

// 修改上门时间
let changeTodorTime = ()=> {
	// console.log(todorTimeTange.value[0].replaceAll("-","/"));
}

// 发起返修
let startRepair = async ()=> {
	let params = {
		"cancelReason": faultDesc.value,
		"expectServiceEndTime": todorTimeTange[1],
		"expectServiceStartTime": todorTimeTange[0],
		"questionDesc": faultDesc.value,
		"questionImgs": JSON.stringify(imgUrls),
		"repair": 2,
	}
	let {data} = await sendRepair(curOrderInfo.mainOrderNum,params)
	// console.log(data);
	if(data.code==='200') {
		uni.navigateTo({
			url: "/pages/my/myOrder/completed/repairSuccess/repairSuccess"
		})
	}
}


</script>

<style lang="scss">
.repairPage_box {
	background-color: #f3f3f3;
	.repair_box {
		width: 94vw;
		margin: 0 auto;
		font-size: 15px;
		.base_box {
			background-color: #fff;
			border-radius: 20rpx;
			padding: 20rpx;
			margin-top: 15rpx;
			.order_info_box {
				display: flex;
				align-items: center;
				border-bottom: 1px solid #eee;
				padding-bottom: 20rpx;
				image {
					width: 140rpx;
					height: 140rpx;
					border-radius: 10rpx;
				}
				.det {
					margin-left: 30rpx;
					display: flex;
					flex-direction: column;
					.title{
						font-weight: 600;
						margin-bottom: 6rpx;
					}
					.time {
						font-size: 13px;
						color: #888;
					}
				}
			}
			.master_info_box {
				margin-top: 20rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.title {
					font-size: 14px;
				}
				.master_info {
					display: flex;
					align-items: center;
					image {
						width: 60rpx;
						height: 60rpx;
						border-radius: 10rpx;
					}
					text {
						font-size: 13px;
						margin-left: 20rpx;
					}
				}
			}
		}
		
		.repair_info_box {
			background-color: #fff;
			border-radius: 20rpx;
			padding: 20rpx;
			margin-top: 15rpx;
			
			.todor_time_box {
				padding-bottom: 10rpx;
				border-bottom: 1px solid #eee;
				.todor_time {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 10rpx;
					.title {
						font-size: 13px;
						color: #888;
					}
				}
				.hint {
					font-size: 12px;
					color: #888;
					display: flex;
					align-items: center;
					text {
						margin-left: 10rpx;
					}
				}
			}
			
			.service_address_box {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 20rpx 0;
				border-bottom: 1px solid #eee;
				.title {
					color: #888;
					font-size: 14px;
				}
				.address {
					display: flex;
					flex-direction: column;
					align-items: flex-end;
				}
			}
			
			.master_box {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 20rpx 0;
				border-bottom: 1px solid #eee;
				.title{
					color: #888;
					font-size: 14px;
				}
			}
			
			.fault_desc_box {
				padding: 20rpx 0;
				.title{
					font-size: 14px;
					color: #888;
				}
				textarea {
					background-color: #eee;
					padding: 15rpx;
					border-radius: 20rpx;
					margin-top: 15rpx;
					font-size: 14px;
				}
			}
			
			.photo_box {
				display: flex;
				justify-content: space-between;
				.upload_box {
					width: 140rpx;
					height: 140rpx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					background-color: #eee;
					border-radius: 10rpx;
					margin-right: 30rpx;
					text {
					  font-size: 12px;
					  color: #888;
					}
					
				}
				.img_show_box {
					width: 470rpx;
					display: flex;
					flex-wrap: wrap;
					justify-content: flex-start;
					align-items: center;
					image {
						width: 150rpx;
						height: 150rpx;
						margin-bottom: 5rpx;
						margin-right: 5rpx;
					}
				}
			}
		}
		
	}
	
	.honey_hint{
		color: #888;
		font-size: 12px;
		text-align: center;
		margin: 20rpx 0 40rpx;
	}
	
	.controller_box {
		margin-bottom: 20rpx;
		.btn {
		  width: 560rpx;
		  height: 80rpx;
		  margin: 0 auto;
		  display: flex;
		  justify-content: center;
		  align-items: center;
		  line-height: 80rpx;
		  border-radius: 48rpx;
		  color: #00A07A;
		  background-color: #C5E4BE;
		  font-weight: 600;
		}
	}
}
</style>
