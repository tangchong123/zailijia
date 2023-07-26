<template>
	<view class="cancelOrder_box">
    <TopBar title="取消订单"></TopBar>
    
    <view class="honey_hint">
      <text class="title">温馨提示:</text>
      <text>1. 距离上门时间已小于30分钟，取消订单会扣除上门费</text>
      <text>2. 工程师上门后，因用户个人原因取消订单，上门费不予退还</text>
      <text>3. 距离上门时间大于30分钟，取消订单，订单金额会在24小时内原路退回</text>
    </view>
    
    <view class="form_box">
      <view class="cancel_reason_box">
        <text class="title">取消订单原因:</text>
        <text class="content" @tap="chooseReason">请先选择取消订单的原因</text>
        <!-- <input class="content" type="text" placeholder="请先选择取消订单的原因"> -->
        <!-- <uni-popup class="popup_box" ref="popup" type="bottom"></uni-popup> -->
        <uni-popup ref="popup" background-color="#fff" @change="change">
        	<view class="popup-content">
            <text class="text">取消原因</text>
            <text class="title">请选择取消订单的原因(必选):</text>
            <radio-group class="radio_box" @change="handleReason">
              <label>
                <radio value="师傅没联系我"/><text>师傅没联系我</text>
              </label>
              <label>
                <radio value="问题自行恢复了"/><text>问题自行恢复了</text>
              </label>
              <label>
                <radio value="改约其他事件维修"/><text>改约其他事件维修</text>
              </label>
              <label>
                <radio value="不想修了"/><text>不想修了</text>
              </label>
              <label>
                <radio value="找其他平台修了"/><text>找其他平台修了</text>
              </label>
              <label>
                <radio value="价格不合适"/><text>价格不合适</text>
              </label>
            </radio-group>
            <button class="sure_btn" size="mini">确定</button>
          </view>
        </uni-popup>
      </view>
      <view class="contact_user_box">
        <text class="title">联系人</text>
        <text class="content">{{contactName}}</text>
      </view>
      <view class="contact_way_box">
        <text class="title">联系方式:</text>
        <text class="content">{{contactPhone}}</text>
      </view>
    </view>
    
    <view class="controller_box">
      <button class="cancel_btn" @tap="cancelCurOrder">申请取消</button>
    </view>
	</view>
</template>

<script setup>
import { computed, onMounted,ref } from "vue";
import {cancelOrderByOrderNum} from "../../../../../api/order.js"

// 取消的原因
let cancelReason = ref("")

let curOrderInfo = ref({})
let orderDetailInfo = ref({})
let goodsItem = ref({})

let popup = ref(null)
let contactName = ref("")
let contactPhone = ref("")

let chooseReason = ()=> {
  popup.value.open('bottom')
}

let handleReason = ({detail})=>{
  // console.log(detail.value);
  cancelReason.value = detail.value
}

// 取消订单
let cancelCurOrder = async ()=>{
  if(!cancelReason.value) {
    return uni.showToast({
      title: "请先选择取消订单原因"
    })
  }
  let params = {
    "cancelReason": cancelReason.value,
    "xcxAddress": curOrderInfo.xcxAddress,
    "xcxUser": curOrderInfo.xcxUser,
  }
  let {data} = await cancelOrderByOrderNum(curOrderInfo.value.orderNum,params)
  if(data.code==='200') {
    uni.showToast({
      title: "订单取消成功!"
    })
  }
}

onMounted(()=>{
  curOrderInfo.value = uni.getStorageSync("curOrderInfo")
  orderDetailInfo.value = JSON.parse(curOrderInfo.value.orderDetailInfo)
  goodsItem.value = JSON.parse(orderDetailInfo.value.goodsItem)
  contactName.value = curOrderInfo.value.xcxUser.nickName
  contactPhone.value = curOrderInfo.value.xcxUser.mobile.slice(0,3)+"****"+curOrderInfo.value.xcxUser.mobile.slice(-4)
  console.log(curOrderInfo.value.orderNum);
})
</script>

<style lang="scss">
.cancelOrder_box {
  
  .honey_hint {
    width: 88vw;
    background-color: #eee;
    border-radius: 20rpx;
    margin: 0 auto;
    padding: 20rpx;
    display: flex;
    flex-direction: column;
    font-size: 13px;
    margin-bottom: 30rpx;
    .title {
      font-weight: 600;
      font-size: 14px;
      margin-bottom: 15rpx;
    }
  }
  
  .form_box {
    width: 90vw;
    margin: 0 auto;
    font-size: 14px;
    .cancel_reason_box {
      
      	@mixin flex {
      		/* #ifndef APP-NVUE */
      		display: flex;
      		/* #endif */
      		flex-direction: row;
      	}
      
      	@mixin height {
      		/* #ifndef APP-NVUE */
      		height: 100%;
      		/* #endif */
      		/* #ifdef APP-NVUE */
      		flex: 1;
      		/* #endif */
      	}
      
      	.box {
      		@include flex;
      	}
      
      	.button {
      		@include flex;
      		align-items: center;
      		justify-content: center;
      		flex: 1;
      		height: 35px;
      		margin: 0 5px;
      		border-radius: 5px;
      	}
      
      	.example-body {
      		background-color: #fff;
      		padding: 10px 0;
      	}
      
      	.button-text {
      		color: #fff;
      		font-size: 12px;
      	}
      
      	.popup-content {
      		@include flex;
          flex-direction: column;
      		align-items: flex-start;
      		justify-content: center;
      		padding: 15px;
      		height: 250px;
          border-top-left-radius: 20rpx;
          border-top-right-radius: 20rpx;
      		background-color: #fff;
          .text {
            margin: 0 auto;
          }
          .title {
            font-weight: 600;
            font-size: 13px;
            margin: 10rpx 0;
          }
          .radio_box {
            display: flex;
            flex-direction: column;
            transform: scale(.9);
            label {
              font-size: 14px;
              margin-bottom: 5rpx;
            }
          }
          .sure_btn {
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
      
      	.popup-height {
      		@include height;
      		width: 200px;
      	}
      
      	.text {
      		font-size: 12px;
      		color: #333;
      	}
      
      	.popup-success {
      		color: #fff;
      		background-color: #e1f3d8;
      	}
      
      	.popup-warn {
      		color: #fff;
      		background-color: #faecd8;
      	}
      
      	.popup-error {
      		color: #fff;
      		background-color: #fde2e2;
      	}
      
      	.popup-info {
      		color: #fff;
      		background-color: #f2f6fc;
      	}
      
      	.success-text {
      		color: #09bb07;
      	}
      
      	.warn-text {
      		color: #e6a23c;
      	}
      
      	.error-text {
      		color: #f56c6c;
      	}
      
      	.info-text {
      		color: #909399;
      	}
      
      	.dialog,
      	.share {
      		/* #ifndef APP-NVUE */
      		display: flex;
      		/* #endif */
      		flex-direction: column;
      	}
      
      	.dialog-box {
      		padding: 10px;
      	}
      
      	.dialog .button,
      	.share .button {
      		/* #ifndef APP-NVUE */
      		width: 100%;
      		/* #endif */
      		margin: 0;
      		margin-top: 10px;
      		padding: 3px 0;
      		flex: 1;
      	}
      
      	.dialog-text {
      		font-size: 14px;
      		color: #333;
      	}

    }
    >view {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding:30rpx 10rpx;
      border-bottom: 1px solid #eee;
      .title {
        font-weight: 600;
      }
      .content {
        text-align: left;
        width: 68%;
      }
    }
  }
  
  .controller_box {
    .cancel_btn {
      width: 520rpx;
      height: 80rpx;
      line-height: 80rpx;
      border-radius: 40rpx;
      margin-top: 180rpx;
      border: none;
      background-color: #C5E4BE;
      color: #469f71;
      font-weight: 600;
    }
  }
}
</style>
