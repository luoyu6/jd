<template>
	<div class="lll">
		<!--<navbar :backpath='path'></navbar>-->
		<navbar :backpath='path'></navbar>
		<div class="b_left fl" >
			<div class="radio-group" v-model="tabView" style="height:600px; overflow-y: auto;">
				<span v-for="(tab ,index) in tabs"  @click="displayView(index)">{{tab.name}}</span>
			</div>
		</div>
		<div class="b_r fl">
			<keep-alive>
				<component v-bind:is="tabView"></component>
			</keep-alive>
		</div>

	</div>
</template>

<script>
	import navbar from '@/components/navbar/Navbar';
	import select1 from '@/components/market/select01.vue';
	import select2 from '@/components/market/select02.vue';
	import select3 from '@/components/market/select03.vue';

	export default {
		name: 'page-tabbar',
		data() {
			return {
				tabView: 'select1',
				
				path:'/Market',
				
				tabs: [
				{
					name: "休闲零食"
				}, {
					name: "水饮冲调"
				}, {
					name: "粮油调味"
				},{
					name: "进口食品"
				},{
					name: "奶粉辅食"
				},{
					name: "尿裤湿巾"
				},{
					name: "用品玩具"
				},{
					name: "中外名酒"
				},{
					name: "清洁用品"
				},{
					name: "个人护理"
				},{
					name: "休闲零食"
				}, {
					name: "水饮冲调"
				}, {
					name: "粮油调味"
				},{
					name: "进口食品"
				},{
					name: "奶粉辅食"
				},{
					name: "尿裤湿巾"
				},{
					name: "用品玩具"
				},{
					name: "中外名酒"
				},{
					name: "清洁用品"
				},{
					name: "个人护理"
				}],
				iscur: 0
			};
			
		},
		components: {
			navbar,
			select1,
			select2,
			select3
		},
		methods: {
//			tabChange: function(tab) {
//				this.tabView = tab;
//			},
			displayView: function(index) {
				console.log(index)
				this.iscur=index;
//				this.tabChange('select' + (index + 1))
				this.tabView = ('select' + (index + 1))
			}
		}
	}
</script>

<style>
	@import url("../../../static/css/goodlist.css");
	
	
</style>