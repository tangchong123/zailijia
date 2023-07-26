<template>
	<view class="home_box global">
		<view class="search_box">
			<view class="location_box" @tap="getLocation">
				<uni-icons color="#2B9F6F" type="location-filled" size="22"></uni-icons>
				<text>{{locationInfo.street}}</text>
				<view class="stick">
					
				</view>
			</view>
			<uni-easyinput :inputBorder="false" prefixIcon="search" v-model="searchValue" placeholder="管道疏通" @iconClick="iconClick">
			</uni-easyinput>
		</view>
		
		<TabBar></TabBar>
	</view>
</template>

<script setup>
	import {ref, onMounted, reactive} from "vue"
	import {storeToRefs} from "pinia"
	import {useLocationStore} from "../../store/location.js"
	import QQMapWX from "../../utils/qqmap-jssdk.min.js"
	
	let searchValue = ref("")
	let locationStore = useLocationStore()
	let {locationInfo} = storeToRefs(locationStore)
	// 实例化API核心类
	let qqmapsdk = new QQMapWX({
		key: 'LLRBZ-GE6KL-BHOPJ-MPR7A-JTZ5Q-LBF5X' // 必填
	}); 
	
	// 获取当前地址信息 并存入pinia仓库
	let getLocation = ()=> {
    uni.getLocation({
    	success(res) {
    		// 逆地址解析 回去地址信息
    		qqmapsdk.reverseGeocoder({
    		  location: {
    		    latitude: res.latitude,
    		    longitude: res.longitude
    		  },
    		  success(res) {
            locationInfo.value = res.result.address_component
    		  }
    		})
    	}
    })
	}
	
	let iconClick = ()=> {
		console.log("iconClicked");
	}

  onMounted(()=>{
    getLocation()
  })
	
</script>

<style lang="scss" scoped>
	.home_box {
		// width: 100vw;
		// height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20rpx;
		// background-color: #F3F3F3;
			
		.search_box {
			width: 620rpx;
			height: 76rpx;
			padding: 0 20rpx;
			border-radius: 38rpx;
			overflow: hidden;
			background-color: #fff;
			
			display: flex;
			justify-content: space-between;
			align-items: center;
				
			.location_box {
				display: flex;
				justify-content: space-between;
				align-items: center;
					
				text {
					width: 150rpx;
					font-size: 14px;
					color: #363636;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					&:hover {
						color: #2B9F6F;
					}
				}
				
				.stick {
					width: 1rpx;
					height: 20rpx;
					border-right: 1px solid #ccc;
				}
			}
				
			
		}
	}
</style>