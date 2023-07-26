<template>
	<view class="btn">
		<button size="mini" @tap="handleCount(-1)">-</button> 
		  {{ count }} 
		<button @tap="handleCount(1)" size="mini">+</button>
	</view>
</template>

<script setup>
	import {
		defineProps,
		defineEmits
	} from "vue";

	const props = defineProps({
		count: Number
	})

	const emit = defineEmits(['change'])

	const handleCount = (type) => {

		emit("change", type)

	}
</script>

<style lang="scss">
	.btn {
		color: $uni-color-primary
	}
</style>