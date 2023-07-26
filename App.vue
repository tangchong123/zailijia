<script>
	/* 根组件，用处全局初始化 和 app.js的功能一样 */
	export default {
		onLaunch: function() {
			console.log('App Launch');
		
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData:{
			
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	.global {
		width: 100vw;
		height: 100vh;
		// min-height: 100vh;
		background-color: #F3F3F3;
	}
	
</style>
