<template>
	<view>
		<view class="personInfo">
			<view v-if="isLogin" class="containerBox">
				<view class="avatarImg">
					<img :src="userInfo.avatar" alt="" class="img">
				</view>
				<view class="infoBox">
					<view>
						<span class="nickNameBox">{{userInfo.nickName}}</span> <span
							v-for="item in userInfo.starsCount">*</span>
					</view>
					<view class="phoneBox">
						{{userInfo.phoneNumber}}
					</view>
				</view>
			</view>
			<view v-else class="containerBox">
				<view class="avatarImg nologinBox">
					<uni-icons type="person" size="70"></uni-icons>
				</view>
				<view class="infoBox" @tap="handleLogin">
					<view>
						<span class="nickNameBox">登陆/注册</span>
					</view>

				</view>
			</view>
		</view>
		<view class="kindBox">
			<view>
				<MasterKind :dataList="dataList1" :title="titleList[0]"></MasterKind>
			</view>
			<view>
				<MasterKind :dataList="dataList2" :title="titleList[1]"></MasterKind>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		onLaunch,
		onShow,
		onHide,
		onLoad
	} from '@dcloudio/uni-app'
	import {
		ref,
		reactive
	} from "vue"
	import {
		getPersoData
	} from "../../api/master_my.js"
	//是否登陆
	let isLogin = ref(false)

	//信息
	let userInfo = reactive()
	let getData = async () => {
		console.log(uni.getStorageSync("token"))
		let res = await getPersoData()
		console.log(res)
	}
	let handleLogin = () => {
		uni.navigateTo({
			url: "/pages/login/login"
		})
	}
	onLoad(()=>{
		//获取用户头像昵称信息
		if(uni.getStorageSync("userInfo")){
			console.log(uni.getStorageSync("userInfo").nickName)
			isLogin.value = true
			userInfo = (uni.getStorageSync("userInfo"))
		}else{
			uni.showToast({
				title:"请先登陆",
				icon:"error"
			})
		}
	})
	//组件传递的参数
	let titleList = reactive(["服务与工具", "团队管理"])
	let dataList1 = reactive([{
			"title": "实名认证",
			"icon": "wallet-filled",
			"url": "../../pages/Verified/Verified"
		},
		{
			"title": "设置",
			"icon": "gear",
			"url": "../../pages/setting/setting"
		},
		{
			"title": "我的订单",
			"icon": "bars",
			"url": "../../pages/myOrder/myOrder"
		},

	])
	let dataList2 = reactive([{
			"title": "工人列表",
			"icon": "list",
			"url": "../../pages/workerList/workerList"
		},
		{
			"title": "团队订单",
			"icon": "cart-filled",
			"url": "../../pages/teamOrder/teamOrder"
		},
		{
			"title": "领料",
			"icon": "map",
			"url": "../../pages/requisition/requisition"
		},
		{
			"title": "领料记录",
			"icon": "checkbox",
			"url": "../../pages/requisitionOrder/requisitionOrder"
		}

	])
</script>

<style lang="scss">
	.personInfo {
		width: 92%;
		height: 15vh;
		margin: 20rpx auto;
		border-radius: 20rpx;
		// border: 1rpx solid grey;
		background-color: white;

		>.containerBox {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: flex-start;
			padding-left: 40rpx;
			box-sizing: border-box;
			align-items: center;
			>.avatarImg {
				width: 160rpx;
				height: 160rpx;
				background-color: skyblue;
				border-radius: 80rpx;
				overflow: hidden;
				margin-right: 40rpx;
				display: flex;
				justify-content: center;
				align-items: center;

				>.img {
					width: 100%;
					height: 100%;
				}
			}

			>.nologinBox {
				background-color: gray;
			}

			>.infoBox {
				font-size: 38rpx;

				>.phoneBox {
					font-size: 34rpx;
				}

				.nickNameBox {
					font-size: 48rpx;
					margin-right: 16rpx;
					font-weight: 600;
				}
			}
		}

	}

	.kindBox {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		>view {
			width: 92%;
			margin: 16rpx;
		}
	}
</style>