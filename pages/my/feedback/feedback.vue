<template>
	<view class="global feedback_box">
		<TopBar title="意见反馈"></TopBar>
    
    <view class="feedback_content_box">
      <view class="feedback_box">
        <textarea maxlength="200" v-model="feedbackContent" placeholder="请输入反馈内容,我们会为您更好的服务"></textarea>
        <text class="hint">{{feedbackContent.length}}/200</text>
        <view class="photo_box">
        	<view class="upload_box" @tap="uploadPhoto">
        	  <uni-icons type="camera-filled" size="46"></uni-icons>
        	  <text>照片</text>
        	</view>
        	<view class="img_show_box">
        		<image v-for="img in imgs" :src="img" mode=""></image>
        	</view>
        </view>
      </view>
    </view>
    
    <view class="controller_box">
    	<view class="save_btn" v-if="!feedbackContent.trim().length">提交反馈</view>
    	<view class="save_btn save_btn2" @tap="submit" v-else>提交反馈</view>
    </view>
	</view>
</template>

<script setup>
import { reactive, ref } from "vue";
import {saveFeedback} from "../../../api/feedback.js"
import multiUpload from "../../../utils/multiUpload.js"
  
let feedbackContent = ref("")
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

let submit = async ()=>{
  let params = reactive({
    content: feedbackContent.value,
    imgs: JSON.stringify(imgUrls),
    source: 1,
    user: uni.getStorageSync("userInfo")
  })
  let {data} = await saveFeedback(params)
  if(data.code==="200") {
	  uni.showToast({
	  	title: "反馈提交成功!"
	  })
	  feedbackContent.value = ""
	  imgs.length = 0
  }
}
</script>

<style lang="scss">
.feedback_box {
	.feedback_content_box {
		.feedback_box {
			width: 87vw;
			margin-left: 4vw;
			margin-top: 20rpx;
			border-radius: 20rpx;
			background-color: #fff;
			padding: 30rpx;
			textarea {
				font-size: 12px;
			}
			.hint {
				position: absolute;
				top: 440rpx;
				right: 90rpx;
				font-size: 12px;
				color: #666;
			}
			.photo_box {
				display: flex;
				justify-content: space-between;
				.upload_box {
					width: 160rpx;
					height: 160rpx;
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
  	  margin-top: 60rpx;
  	  background-color: #ccc;
  	  color: #fff;
  	  font-weight: 600;
  	}
    .save_btn2 {
      color: #00A07A;
      background-color: #C5E4BE;
    }
  }
}
</style>
