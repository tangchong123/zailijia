<template>
	<view class="tab-bar">
	  <view class="tab-bar-border"></view>
	  <view v-for="(item,index) in data.list" :key="index" class="tab-bar-item" :class="{bulge: item.text==='一键报修'}" :data-path="item.pagePath" :data-index="index" @tap="switchTab">
	    <image :src="data.selected === index ? item.selectedIconPath : item.iconPath"></image>
	    <view :style="{color: data.selected === index ? data.selectedColor : data.color}">{{item.text}}</view>
	  </view>
	</view>
</template>

<script setup>
import {ref,reactive} from "vue"

	// let props = defineProps({
	// 	curIdx: {
	// 		type: Number,
	// 		required: true,
	// 	}
	// })
	
	let data = reactive({
		selected: 0,
		color: "#000",
		selectedColor: "#2B9F6F",
		list: [
			{
				"pagePath": "/pages/home/home",
				"text": "首页",
				"iconPath": "../../static/imgs/tabbar/首页.png",
				"selectedIconPath": "../../static/imgs/tabbar/首页绿.png"
			}, 
			{
				"pagePath": "/pages/category/category",
				"text": "分类",
				"iconPath": "../../static/imgs/tabbar/分类.png",
				"selectedIconPath": "../../static/imgs/tabbar/分类绿.png"
			},
			{
				"pagePath": "/pages/FastOffer/FastOffer",
				"text": "一键报修",
			},
			{
				"pagePath": "/pages/cart/cart",
				"text": "购物车",
				"iconPath": "../../static/imgs/tabbar/购物车.png",
				"selectedIconPath": "../../static/imgs/tabbar/购物车绿.png"
			},
			{
				"pagePath": "/pages/my/my",
				"text": "我的",
				"iconPath": "../../static/imgs/tabbar/我的.png",
				"selectedIconPath": "../../static/imgs/tabbar/我的绿.png"
			},
		]
	})
	
	let switchTab = (e) => {
	    const res = e.currentTarget.dataset
		uni.navigateTo({
			url:res.path
		})
		data.selected = res.index
		// console.log(data.selected);
	}
</script>

<style lang="scss">
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 48px;
  background: white;
  display: flex;
  padding-bottom: env(safe-area-inset-bottom);
  
}

.tab-bar-border {
  background-color: rgba(0, 0, 0, 0.33);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  transform: scaleY(0.5);
}

.tab-bar-item {
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.tab-bar-item image {
  width: 27px;
  height: 27px;
}

.tab-bar-item view {
  font-size: 10px;
}

.bulge {
	width: 50px;
	height: 50px;
	border-radius: 50%;
	position: relative;
	top: -50%;
	left: 0;
	
	view {
		width: 38px;
		height: 38px;
		padding: 10px;
		border-radius: 50%;
		background-color: #FFBF00;
		border: 6px solid #fff;
		font-size: 15px;
		color: #fff!important;
	}
}

</style>
