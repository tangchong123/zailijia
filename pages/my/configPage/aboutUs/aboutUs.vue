<template>
	<view class="aboutUs_box">
		<TopBar title="关于我们"></TopBar>
    
    <rich-text :nodes="aboutUsInfo"></rich-text>
	</view>
</template>

<script setup>
import {getConfigInfos} from "../../../../api/config.js"
import { onMounted, ref } from "vue";

let aboutUsInfo = ref("")

// 获取设置信息
let getConfig = async ()=>{
  let {data} = await getConfigInfos()
  // console.log(JSON.parse(data.data.website));
  aboutUsInfo.value = JSON.parse(data.data.website).aboutMe
}

onMounted(()=>{
  getConfig()
})
</script>

<style lang="scss">
.aboutUs_box {
  
}
</style>
