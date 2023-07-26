<template>
	<view>
		<view  class="empty">
			<fui-icon name="receive" size="240" color="skyblue"></fui-icon>
			<span>{{title}}</span>
		</view>
	</view>
</template>

<script setup>
	import fuiTabs from "../../node_modules/firstui-uni/firstui/fui-tabs/fui-tabs.vue"
	import fuiIcon from "../../node_modules/firstui-uni/firstui/fui-icon/fui-icon.vue"
	import {defineProps} from "vue"
	let props = defineProps(["title"])
</script>

<style lang="scss">
.empty{
	margin-top: 40rpx;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>