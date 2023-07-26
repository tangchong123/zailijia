<template>
	<view class="box">
		<view class="text-area">
			<textarea name="" id="" cols="24" rows="10" @input="handleChange" maxlength="240"
				placeholder="请输入反馈内容,我们会更好为你服务"></textarea>
			<text>{{textValue.length}} / 240</text>
		</view>
		<view class="imageBox">
			<view v-if="imgList.length<4" class="camera">
				<view class="a" @tap="handleImg">
					<fui-icon name="camera-fill" size="80" color="white"></fui-icon>
					<fui-icon name="plus" size="65" color="white"></fui-icon>
				</view>
			</view>
			<view v-for="(item,index) in imgList" :key="index" class="b">
				<fui-icon name="close" size="50" class="fixedicon" color="white" @tap="removeImg(index)"></fui-icon>
				<image :src="item"></image>
			</view>
		</view>
		<view class="confirm" :class="{all:isAll}" >
			提交反馈
		</view>
	</view>
</template>
<script setup>
	import fuiIcon from "../../../node_modules/firstui-uni/firstui/fui-icon/fui-icon.vue"
	import {
		reactive,
		ref
	} from "vue"
	let textValue = ref("")
	let imgList = reactive([])
	let isAll = ref(false)
	let handleChange = (e) => {
		textValue.value = e.detail.value
		if(imgList.length != 0 && textValue.value != ""){
			isAll.value = true
		}
	}
	let removeImg = (index)=>{
		imgList.splice(index,1)
	}
	let handleImg = () => {
		if (imgList.length >=4) {
			uni.showToast({
				title: "最多上传4张图",
				icon: "error"
			})
		} else {
			uni.chooseImage({
				success: (chooseImageRes) => {
					if(chooseImageRes.tempFilePaths.length + imgList.length > 4){
						uni.showToast({
							title:"最多上传4张图",
							icon:"error"
						})
					}else{
					imgList.push(...chooseImageRes.tempFilePaths)
					if(imgList.length != 0 && textValue.value!=""){
						isAll.value = true
					}
					}
				}
			})
		}
	}
</script>

<style lang="scss">
	.box {
		padding: 30rpx;
		box-sizing: border-box;

		>.text-area {
			margin: 20rpx auto;
			margin-bottom: 0rpx;
			width: 100%;
			border-radius: 20rpx 20rpx 0 0;
			background-color: white;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			align-items: flex-end;

			>textarea {
				width: 100%;
				padding: 20rpx;
				box-sizing: border-box;
			}
		}

		>.imageBox {
			background-color: white;
			border-radius: 0 0 20rpx 20rpx;
			// overflow: hidden;
			display: flex;
			flex-wrap: nowrap;
			justify-content: flex-start;
			align-items: center;
			padding: 20rpx;
			box-sizing: border-box;

			>.camera {
				width: 150rpx;
				height: 150rpx;
				background-color: grey;

				>.a {
					width: 100%;
					height: 100%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				}
			}

			>.b {
				width: 150rpx;
				height: 150rpx;
				background-color: skyblue;
				margin-left: 10rpx;
				position: relative;
				>image {
					width: 100%;
					height: 100%;
				}
				>.fixedicon{
					position: absolute;
					top: 0rpx;
					right: 0rpx;
				}
			}
		}

		>.confirm {
			margin: 50rpx auto;
			width: 50vw;
			background-color: grey;
			padding: 20rpx;
			border-radius: 20rpx;
			text-align: center;
			font-size: 34rpx;
		}
	}

	.all {
		background-color: skyblue !important; 
	}
</style>