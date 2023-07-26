<template>
	<view class="userAgreement_box">
		<TopBar title="关于我们"></TopBar>
    
    <rich-text :nodes="userAgreementInfo"></rich-text>
	</view>
</template>

<script setup>
import {getConfigInfos} from "../../../../api/config.js"
import { onMounted, ref } from "vue";

let userAgreementInfo = ref("")

// 获取设置信息
let getConfig = async ()=>{
  let {data} = await getConfigInfos()
  // console.log(JSON.parse(data.data.website));
  userAgreementInfo.value = JSON.parse(data.data.website).agreement
}

onMounted(()=>{
  getConfig()
})
</script>

<style lang="scss">
.userAgreement_box {
  
}
</style>
