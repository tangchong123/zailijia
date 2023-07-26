<template>
	<view class="box">
		<view class="a">
			<view class="one">满减劵</view>
			<view class="two">
				<span class="price">20¥</span>
				<span class="kind">满60元可用</span>
			</view>
			<view class="three">
				<view class="kind">
					品类卷
				</view>
				<view class="way">极限墙面吊顶使用</view>
				<view class="time">
					<span>2023-7-10到2023-8-20</span>
					<span class="use">去使用</span>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {ref,defineProps,reactive} from "vue"
	let props = defineProps({
		dataList:Array
	})
</script>

<style lang="scss">
.box{
	width: 95%;
	margin:20rpx auto;
	// margin: 20rpx ;
	height: 200rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20rpx 10rpx 10rpx 20rpx;
	border: 2rpx solid rgba(240, 240, 240, 1);
	// padding: 0px 12rpx ;
	// box-sizing: border-box;
	overflow: hidden;
	>.a{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		>.one{
			width: 5%;
			height: 100%;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			background-color: orange;
		}
		>.two{
			height: 100%;
			width: 30%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			background-color: rgba(249, 247, 230, 1);
			>.price{
				font-size: 50rpx;
				margin-bottom: 12rpx;
			}
			>.kind{
				font-size: 28rpx;
				color: #A39480;
			}
		}
		>.three{
			height: 100%;
			width: 65%;
			// background-color: pink;
			>.kind{
				width: 120rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: rgba(253, 253, 248, 1);
				margin: 4rpx 10rpx;
				border-radius: 10rpx;
				color: rgba(289, 180, 123, 1);
			}
			>.way{
				font-size: 42rpx;
				font-weight: 600;
				margin: 12rpx;
			}
			>.time{
				font-size: 26rpx;
				display: flex;
				justify-content: space-around;
				align-items: center;
				margin-top: 20rpx;
				>.use{
					// width: 100rpx;
					padding: 10rpx;
					box-sizing: border-box;
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: rgba(220, 180, 90, 1);
					border-radius: 12rpx;
					font-size: 30rpx;
				}
			}
	}
	
	}
}
</style>