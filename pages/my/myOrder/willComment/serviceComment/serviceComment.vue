<template>
  <view class="myComment_box">
    <TopBar title="服务评价"></TopBar>
    
    <view class="comment_box">
      <!-- 师傅信息 -->
      <view class="master_info">
        <view class="left">
          <image src="../../../../../static/logo.png" mode=""></image>
          <text class="master_name">张师傅</text>
        </view>
        <uni-rate class="master_regTime" :readonly="true" value="4" size="18" />
      </view>
      
      <!-- 工程师评价 -->
      <view class="master_comment">
        <text class="question">您对本次维修工程师满意吗</text>
        <view class="comment_box">
          <text class="title">工程师评价</text>
          <uni-rate  v-model="masterStar" @change="changeMasterStar" size="18" />
          <text class="detail">{{masterCom}}</text>
        </view>
        <view class="comment_tag">
          <view class="tag">上门准时</view>
          <view class="tag">风雨无阻</view>
          <view class="tag">兢兢业业</view>
          <view class="tag">兢兢业业</view>
          <view class="tag">兢兢业业</view>
          <view class="tag">兢兢业业</view>
        </view>
        <view class="comment_desc">
          <textarea v-model="masterContent" style="height: 160rpx;" placeholder="告诉师傅,鼓励师傅做得更好"></textarea>
        </view>
        <view class="comment_imgs">
          <view class="upload_box" @tap="uploadPhoto">
            <uni-icons type="camera-filled" size="30"></uni-icons>
            <text>添加照片</text>
          </view>
          <view class="img_show_box">
          	<image v-for="img in imgs" :src="img" mode=""></image>
          </view>
        </view>
      </view>
      
      <!-- 平台服务评价 -->
      <view class="platform_comment">
        <text class="question">您对本次平台服务满意吗</text>
        <view class="comment_box">
          <text class="title">平台服务评价</text>
          <uni-rate v-model="platformStar" @change="changePlatformStar" size="18" />
          <text class="detail">{{platformCom}}</text>
        </view>
        <view class="comment_desc">
          <textarea v-model="platformContent" style="height: 160rpx;" placeholder="告诉我们,鼓励我们为您更好的服务"></textarea>
        </view>
        <view class="comment_anonymous">
          <radio-group style="transform: scale(.88);" @change="changeAnonymous">
            <label>
              <radio :value="1"/><text>匿名评价</text>
            </label>
            <label>
              <radio :value="0"/><text>不匿名评价</text>
            </label>
          </radio-group>
        </view>
      </view>
    </view>
  
    <view class="controller_box">
      <button class="btn" size="mini" @tap="submitComment">提交评价</button>
    </view>
  </view>
</template>

<script setup>
import { onMounted, reactive, ref, computed } from "vue";
import multiUpload from "../../../../../utils/multiUpload.js"
import {saveComment} from "../../../../../api/comment.js"

let masterInfo = ref({})
let isAnonymous = ref(0)
let masterStar = ref(0) // 师傅星星
let platformStar = ref(0) // 平台星星
let masterContent = ref("")
let platformContent = ref("")
let labels = reactive([])

let imgs = reactive([])
let imgUrls = reactive([])

let masterCom = computed(()=>{
  let tmp = ""
  switch(masterStar.value) {
    case 0:
      tmp = "非常差"
      break
    case 1: 
      tmp = "很差"
      break
    case 2:
      tmp = "一般"
      break
    case 3:
      tmp = "良好"
      break
    case 4:
      tmp = "很好"
      break
    case 5:
      tmp = "非常好"
      break
  }
  return tmp
})
let platformCom = computed(()=>{
  let tmp = ""
  switch(platformStar.value) {
    case 0:
      tmp = "非常差"
      break
    case 1: 
      tmp = "很差"
      break
    case 2:
      tmp = "一般"
      break
    case 3:
      tmp = "良好"
      break
    case 4:
      tmp = "很好"
      break
    case 5:
      tmp = "非常好"
      break
  }
  return tmp
})


// 是否匿名
let changeAnonymous = ({detail})=> {
  // console.log(detail.value);
  isAnonymous.value = detail.value-0
}
// 改变师傅星星
let changeMasterStar = (e)=>{
  // console.log(e.value);
  masterStar.value = e.value
}
// 改变平台星星
let changePlatformStar = (e)=> {
  // console.log(e.value);
  platformStar.value = e.value
}

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

let submitComment = async ()=>{
  console.log(isAnonymous.value);
  let params = {
    	"anonymous": isAnonymous.value,
    	"content": masterContent.value,
		"imgs": JSON.stringify(imgUrls),
		"label": "[{\"id\": 9, \"name\": \"风雨无阻\", \"status\": 1, \"checked\": true, \"createTime\": \"2022/04/12 23:37:23\", \"createUser\": null, \"updateTime\": \"2022/04/12 23:37:23\", \"updateUser\": null, \"createUserName\": null, \"updateUserName\": null}, {\"id\": 10, \"name\": \"上门准时\", \"status\": 1, \"checked\": true, \"createTime\": \"2022/04/12 23:37:42\", \"createUser\": null, \"updateTime\": \"2022/04/12 23:37:42\", \"updateUser\": null, \"createUserName\": null, \"updateUserName\": null}, {\"id\": 11, \"name\": \"兢兢业业\", \"status\": 1, \"createTime\": \"2022/04/12 23:38:45\", \"createUser\": null, \"updateTime\": \"2022/04/12 23:38:45\", \"updateUser\": null, \"createUserName\": null, \"updateUserName\": null}, {\"id\": 12, \"name\": \"勤勤恳恳\", \"status\": 1, \"checked\": true, \"createTime\": \"2022/04/12 23:38:58\", \"createUser\": null, \"updateTime\": \"2022/04/23 11:09:23\", \"updateUser\": null, \"createUserName\": null, \"updateUserName\": null}, {\"id\": 13, \"name\": \"1111\", \"status\": 1, \"createTime\": \"2022/04/20 10:14:47\", \"createUser\": null, \"updateTime\": \"2022/04/23 11:09:19\", \"updateUser\": null, \"createUserName\": null, \"updateUserName\": null}, {\"id\": 14, \"name\": \"经验非常\", \"status\": 1, \"createTime\": \"2022/04/21 10:20:15\", \"createUser\": null, \"updateTime\": \"2022/04/23 11:09:13\", \"updateUser\": null, \"createUserName\": null, \"updateUserName\": null}, {\"id\": 17, \"name\": \"11\", \"status\": 1, \"createTime\": \"2022/04/22 09:34:55\", \"createUser\": null, \"updateTime\": null, \"updateUser\": null, \"createUserName\": null, \"updateUserName\": null}, {\"id\": 18, \"name\": \"11\", \"status\": 1, \"createTime\": \"2022/04/22 09:48:16\", \"createUser\": null, \"updateTime\": null, \"updateUser\": null, \"createUserName\": null, \"updateUserName\": null}, {\"id\": 19, \"name\": \"工作认\", \"status\": 1, \"createTime\": \"2022/04/22 18:24:12\", \"createUser\": null, \"updateTime\": \"2022/04/24 15:21:51\", \"updateUser\": null, \"createUserName\": null, \"updateUserName\": null}, {\"id\": 20, \"name\": \"踏踏实实\", \"status\": 1, \"createTime\": \"2022/04/22 18:24:32\", \"createUser\": null, \"updateTime\": \"2022/04/23 11:09:07\", \"updateUser\": null, \"createUserName\": null, \"updateUserName\": null}]",
		"platformContent": platformContent.value,
		"platformScore": platformStar.value,
		"score": masterStar.value,
  }
  let {data} = await saveComment("20230722122707860206",params)
  console.log(data);
  if(data.code==='200') {
    uni.showToast({
      title: "评价成功!"
    })
  }
}

onMounted(()=>{
  masterInfo.value = uni.getStorageSync("curOrderInfo").xcxEngineer
})
</script>

<style lang="scss">
.myComment_box {
  font-size: 15px;
  .comment_box {
    .master_info {
      background-color: #fff;
      padding: 40rpx 60rpx;
      display: flex;
      align-items: center;
      border-bottom: 15rpx solid #eee;
      .left {
        display: flex;
        align-items: center;
        image {
          width: 90rpx;
          height: 90rpx;
          border-radius: 5rpx;
        }
        .master_name {
          font-weight: 600;
          margin-left: 20rpx;
        }
      }
      .master_regTime {
        margin-left: 40rpx;
      }
    }
    
    .master_comment {
      background-color: #fff;
      border-bottom: 15rpx solid #eee;
      padding: 30rpx;
      .question {
        font-size: 16px;
      }
      .comment_box {
        display: flex;
        align-items: center;
        margin-top: 15rpx;
        .title {
          margin-right: 40rpx;
        }
        .detail {
          color: #aaa;
          font-size: 13px;
          margin-left: 40rpx;
        }
      }
      .comment_tag {
        display: flex;
        flex-wrap: wrap;
        .tag {
          width: 153rpx;
          height: 55rpx;
          line-height: 55rpx;
          text-align: center;
          color: #399D6A;
          background-color: #C5E4BE;
          border-radius: 25rpx;
          margin-right: 20rpx;
          margin-top: 20rpx;
        }
      }
      .comment_desc {
        margin-top: 20rpx;
        margin-bottom: 20rpx;
        padding: 10rpx;
        font-size: 13px;
        textarea {
          background-color: #eee;
          border-radius: 20rpx;
          padding: 20rpx;
        }
      }
      .comment_imgs {
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
      			width: 140rpx;
      			height: 140rpx;
      			margin-bottom: 5rpx;
      			margin-right: 5rpx;
      		}
      	}
      }
    }
    .platform_comment {
      background-color: #fff;
      // border-bottom: 15rpx solid #eee;
      padding: 30rpx;
      .question {
        font-size: 16px;
      }
      .comment_box {
        display: flex;
        align-items: center;
        margin-top: 15rpx;
        .title {
          margin-right: 40rpx;
        }
        .detail {
          color: #aaa;
          font-size: 13px;
          margin-left: 40rpx;
        }
      }
      .comment_desc {
        margin-top: 20rpx;
        margin-bottom: 20rpx;
        padding: 10rpx;
        font-size: 13px;
        textarea {
          background-color: #eee;
          border-radius: 20rpx;
          padding: 20rpx;
        }
      }
      .comment_anonymous {
        margin-left: -30rpx;
        radio-group {
          display: flex;
          flex-direction: column;
          label {
            margin-top: 5rpx;
          }
        }
      }
    }
    
  }
  
  .controller_box {
    width: 520rpx;
    margin: 0 auto;
    .btn {
      width: 520rpx;
      height: 80rpx;
      line-height: 80rpx;
      border-radius: 40rpx;
      // margin-top: 180rpx;
      border: none;
      background-color: #C5E4BE;
      color: #469f71;
      font-weight: 600;
    }
  }
}
</style>
