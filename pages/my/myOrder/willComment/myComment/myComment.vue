<template>
  <view class="myComment_box">
    <TopBar title="我的评价"></TopBar>
    
    <view class="comment_box">
      <!-- 师傅信息 -->
      <view class="master_info">
        <view class="left">
          <image :src="masterInfo.avatar" mode=""></image>
          <text class="master_name">{{masterInfo.realName}}</text>
        </view>
        <text class="master_regTime">{{masterInfo.createTime}}</text>
      </view>
      
      <!-- 工程师评价 -->
      <view class="master_comment">
        <view class="comment_box">
          <text class="title">工程师评价</text>
          <uni-rate :readonly="true" :value="masterInfo.avgScore" size="18" />
          <text class="detail">{{masterCom}}</text>
        </view>
        <view class="comment_tag">
          <view class="tag" v-for="item in tag">{{item.name}}</view>
        </view>
        <view class="comment_desc">
          {{commentInfo.content}}
        </view>
        <view class="comment_imgs">
          <image v-for="item in JSON.parse(commentInfo.imgs)" :src="item" mode=""></image>
        </view>
      </view>
      
      <!-- 平台服务评价 -->
      <view class="platform_comment">
        <view class="comment_box">
          <text class="title">平台服务评价</text>
          <uni-rate :readonly="true" :value="commentInfo.platformScore" size="18" />
          <text class="detail">{{platformCom}}</text>
        </view>
        <view class="comment_desc">
          {{commentInfo.platformContent}}
        </view>
      </view>
      
    </view>
  </view>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from "vue";

let commentInfo = ref({})
let masterInfo = ref({})

let tag = computed(()=>{
  return JSON.parse(commentInfo.value.label)
})
let masterCom = computed(()=>{
  let tmp = ""
  switch(masterInfo.value.avgScore) {
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
  switch(commentInfo.value.platformScore) {
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
onMounted(()=>{
  commentInfo.value = uni.getStorageSync("curOrderInfo").xcxGoodsComment
  masterInfo.value = uni.getStorageSync("curOrderInfo").xcxEngineer
  console.log(JSON.parse(commentInfo.value.label));
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
      justify-content: space-between;
      align-items: center;
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
        color: #aaa;
      }
    }
    
    .master_comment {
      background-color: #fff;
      border-bottom: 20rpx solid #eee;
      padding: 30rpx;
      .comment_box {
        display: flex;
        align-items: center;
        .title {
          font-weight: 600;
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
      }
      .comment_imgs {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        image {
          width: 160rpx;
          height: 160rpx;
          border-radius: 8rpx;
		  margin-right: 10rpx;
        }
      }
    }
    
    .platform_comment {
      padding: 30rpx;
      background-color: #fff;
      .comment_box {
        display: flex;
        align-items: center;
        .title {
          font-weight: 600;
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
        padding: 10rpx;
        font-size: 13px;
      }
    }
  }
}
</style>
