<template>
	<div class="">
		<navbar :backpath="path"></navbar>
		<div class="wrapper" ref="foodsWrapper" style="">
		<ul class="mui-table-view">
			<li class=" mui-media" v-for="item in list">
					<router-link :to="suffix + item.cid">
						<div class="itemsbox"><img class=" mui-pull-left" v-lazy="item.imgSrc"></div>
						<!--:src="item.imgSrc"-->
						<div class="mui-media-body" style="width:50%;float:left;text-align:left;">
							<p>{{item.title}}</p>
							<p class='mui-ellipsis'>{{item.kind}}</p>
							<p class='mui-ellipsis'>￥{{item.price}}</p>
							<p class='mui-ellipsis'>
								<span>{{item.number}}</span>
							</p>
						</div>
						<div style="clear: both;"></div>
					</router-link>
					<span class="ico"><!--<img :src="item.simgSrc">--></span>
				</li>
				
				
				
				
			</ul>
		</div>
	</div>
</template>

<script>
	import navbar from "@/components/navbar/Navbar";
//	import BScroll from 'better-scroll';
	export default {
	
		components: {
			navbar
		},
		data() {
			return {
				path:'/',
				list: [],
				suffix:'detail/'
			}
		},
		created() {
	
		},
		mounted() {
			this.newsList();
			/*this.$nextTick(() => {
				this._initScroll(); //绑定滚动dom
			});*/
		},

		methods: {
			newsList() {
				var tempList = [];
				var self = this;
				this.http.get('/static/data/goods.data').then(function(response) {
					console.log(response)
					self.list = response.data;
					/*self.$nextTick(() => {
						self._initScroll(); //绑定滚动dom
					});*/
				}).catch(function(error) {
					console.log(error);
				})

			},
			_initScroll() {
//				this.menuScroll = new BScroll(this.$refs.foodsWrapper, {})
//				console.log(this.menuScroll)
				//console.log(this.$refs.foodsWrapper)

			}

		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.itemsbox {
		width: 25%;
	}
	
	.itemsbox img {
		width: 100%;
	}
	
	.ico {
		float: left;
		width: 39px;
		height: 39px;
		overflow: hidden;
		background: url(../../../static/icons/add-house.png) no-repeat;
		background-size: 240px 200px;
		background-position: 7px 7px;
		position: relative;
		top: 100px;
		left: 3rem;
	}
	
	image[lazy=loading] {
		width: 300px;
	}
	.mui-table-view {
		position: relative;
		margin-top: 0;
		margin-bottom: 0;
		padding-left: 0;
		list-style: none;
		background-color: #fff;
		height: 672px;
		overflow: hidden;
	}
li{list-style: none;}	
</style>