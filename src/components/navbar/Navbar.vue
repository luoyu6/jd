<template>
	<div class="nav">
		<!--	<header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">导航栏</h1>
		<a class="mui-icon mui-icon-bars mui-pull-right"></a></header>-->
		<div class="clearfix"><span class="back fl">
			<router-link :to=backpath>返回</router-link>			
		</span>
			
		</div>
		

	</div>
</template>

<script>
	export default {
//		name: 'Navbar',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
			,
			props:['backpath']
				
			
		
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
	@import url("../../../static/css/global.css");
	/*@import url("@/static/css/global.css");*/
	
	.nav {
		max-width: 640px;
		min-width: 340px;
		;
	}
	
	header#header {
		max-width: 640px;
		POSITION: static;
	}
</style>