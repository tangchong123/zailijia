<template>
	<view class="global selfProfile_box">
		<TopBar title="个人资料"></TopBar>
		
		<view class="content_box">
			<view class="avatar_box" @tap="modifyAvatar">
				<text>头像</text>
				<view class="modify_avatar_box">
					<image :src="avatar" mode=""></image>
					<uni-icons type="forward"></uni-icons>
				</view>
			</view>
			<view class="nickName_box" @tap="modifyNickName">
				<text>昵称</text>
				<view class="modify_nickName_box">
					<input type="text" :value="nickName" @change="modifyNickName">
					<uni-icons type="forward"></uni-icons>
				</view>
			</view>
		</view>
		
		<view class="controller_box">
			<view class="save_btn" @tap="save">保存</view>
		</view>
	</view>
</template>

<script setup>
import {onMounted, reactive, ref} from "vue"
import {saveUserInfo,getUserInfo} from "../../../../api/user.js"

let userInfo = reactive({})
let avatar = ref("")
let nickName = ref("")

// 修改头像
let modifyAvatar = ()=>{
	// 选择 并 上传图片
	uni.chooseImage({
		success: (res) => {
      uni.uploadFile({
      			url: 'http://49.234.215.103:7000/zhailijia/wechat/xcxUser/upload', //仅为示例，非真实的接口地址
      			filePath: res.tempFilePaths[0],
      			name: 'file',
            header:{
                "token":uni.getStorageSync("token")
            },
      			// formData: {
      			// 	'user': 'test'
      			// },
      			success: (uploadFileRes) => {
              console.log(JSON.parse(uploadFileRes.data).data);
      				// console.log(JSON.parse(uploadFileRes.data).data);
              avatar.value = JSON.parse(uploadFileRes.data).data
              // getUserInfos()
              
      			}
      		});
		}
	});
}

  // let getUserInfos = async ()=>{
  //   // 获取用户个人信息 拿createUser
  //   let {data} = await getUserInfo()
  //   // console.log("data: ",data.data);
  //   userInfo.nickName = data.data.nickName
  //   userInfo.avatar = data.data.avatar
  //   // 存入storage
  //   uni.setStorageSync("userInfo",data.data)
  // }

// 修改昵称
let modifyNickName = ({detail})=>{
	nickName.value = detail.value
}

// 保存修改
let save = async ()=> {
	let params = reactive({
		avatar: avatar.value,
		couponList: userInfo.couponList,
		createTime: userInfo.createTime,
		createUser: userInfo.createUser,
		id: userInfo.id,
		mobile: userInfo.mobile,
		nickName: nickName.value,
		openId: userInfo.openId,
		status: userInfo.status,
		// updateTime: userInfo.updateTime,
		// updateUser: userInfo.updateUser,
		// updateUserName: userInfo.updateUserName,
	})
	let {data} = await saveUserInfo(params)
  console.log(data);
	if(data.code=="200") {
		uni.showToast({
			title: "保存成功！"
		})
    uni.navigateTo({
      url: "/pages/my/my"
    })
	}else {
		uni.showToast({
			title: "保存失败!"
		})
	}
}

onMounted(()=>{
	userInfo = uni.getStorageSync("userInfo")
	nickName.value = userInfo.nickName
	avatar.value = userInfo.avatar
})
</script>

<style lang="scss">
.selfProfile_box {
	.content_box {
		margin-top: 20rpx;
		>view {
			background-color: #fff;
			padding: 30rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.avatar_box {
			// padding: 30rpx;
			border-bottom: 1px solid #ddd;
			.modify_avatar_box {
				display: flex;
				align-items: center;
				image {
					width: 100rpx;
					height: 100rpx;
					border-radius: 50%;
					margin-right: 10rpx;
				}
			}
		}
		.nickName_box {
			.modify_nickName_box {
				display: flex;
				input {
					color: #888;
					text-align: right;
				}
				uni-icons {
					margin-left: 10rpx;
				}
			}
		}
	}
	.controller_box {
		.save_btn {
		  width: 560rpx;
		  height: 80rpx;
		  margin: 0 auto;
		  display: flex;
		  justify-content: center;
		  align-items: center;
		  line-height: 80rpx;
		  border-radius: 48rpx;
		  margin-top: 120rpx;
		  background-color: #fff;
		  color: #000;
		  font-weight: 600;
		}
	}
}
</style>
