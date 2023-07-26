<template>
	<view class="privatePrivacy_box">
		<TopBar title="关于我们"></TopBar>
    
    <rich-text :nodes="privatePrivacyInfo"></rich-text>
	</view>
</template>

<script setup>
import {getConfigInfos} from "../../../../api/config.js"
import { onMounted, ref } from "vue";

let privatePrivacyInfo = ref("")

// 获取设置信息
let getConfig = async ()=>{
  let {data} = await getConfigInfos()
  // console.log(JSON.parse(data.data.website));
  privatePrivacyInfo.value = JSON.parse(data.data.website).policy 
}

onMounted(()=>{
  getConfig()
})
</script>

<style lang="scss">
.privatePrivacy_box {
  
}
</style>
