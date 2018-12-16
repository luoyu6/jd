<template>
	<div class="mark">
		<navbar :backpath='path'></navbar>

		<div class="searchWrap">
			<router-link to="/goodVue">
				<img src="../../../static/icons/594117d9N6d86e498.png" width="100%" />
			</router-link>
			<mt-search v-model="value" :result.sync="result"></mt-search>
			
			<router-link to="/goodVue">
				<img src="../../../static/icons/599d49b2Nb61b547a.png" width="100%" />
			</router-link>
			<div style="clear: both;"></div>
		</div>
			<div>
				<mt-swipe :auto="4000">
					<mt-swipe-item><img src="../../../static/icons/1.jpg"></mt-swipe-item>
					<mt-swipe-item><img src="../../../static/icons/2.jpg"></mt-swipe-item>
					<mt-swipe-item><img src="../../../static/icons/2.jpg"></mt-swipe-item>
				</mt-swipe>
			</div>

	</div>
</template>

<script>
	//	import Good_sort from '@/components/market/Good_sort';
	//	import new_file from '@/components/market/new_file';
	import navbar from '@/components/navbar/Navbar';
	export default {
		name: 'HelloWorld',
		data() {
			return {
				path: '/'
			}
		},
		
		components: {
			navbar
		}
	}
</script>

<style>
	@import url("../../../static/css/component.css");
</style>