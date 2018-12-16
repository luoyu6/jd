<template>
	<div class="">
		<navbar :backpath="path"></navbar>
		<!--<tabbar></tabbar>-->
		<mt-navbar v-model="selected">
			<mt-tab-item id="1">商品</mt-tab-item>
			<mt-tab-item id="2">详情</mt-tab-item>
			<mt-tab-item id="3">评价</mt-tab-item>
		</mt-navbar>

		<!-- tab-container -->
		<mt-tab-container v-model="selected" style="margin-top:-41px;text-align:left;">
			<mt-tab-container-item id="1">
				<!--<mt-cell v-for="n in 10" :title="'内容 ' + n" />-->

				<div><img :src="info.imgSrc" style="width:100%"></div>
				<p>
					<img :src="info.mIg" style="height:14px;width:auto;"> {{info.title}}
				</p>
				<p style="color:#E13032">￥{{info.price}}</p>
			</mt-tab-container-item>
			
			<mt-tab-container-item id="2">
				<mt-cell v-for="n in 4" :title="'测试 ' + n" />
			</mt-tab-container-item>
			
			<mt-tab-container-item id="3">
				<div class="tm_2017" style="height:50px;border-bottom:1px solid #CCC">
					<!--<mt-cell v-for="n in 6" :title="'选项 ' + n" />-->
					<p class="tm_10" style="float:left;">
						<img :src="info.userimg"><span>用户1</span><img src="../../../static/icons/plus-icon.png">
					</p>
					<p style="float:right;">2017-11-10</p>
				</div>
				<div class="tm_comment_list">
					<div class="tm_comment_star"></div>
					<div>{{info.comment}}</div>
					<div v-for="item in imglist" style="float:left;">
						<img v-lazy="item">
						<!--:src="item" -->
					</div>
					<div style="clear:both;"></div>
					<div>购买日期： {{info.buytime}}</div>
					<div>颜色：奶香鸡蛋糕1kg</div>
				</div>
			</mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>

<script>
	import navbar from '@/components/navbar/Navbar';
	//	import tabbar from '@/components/tabbar/tabbar';

	export default {
		data() {
			return {
				id: 0,
				selected: "",
				info: {},
				imglist: [],
				path: '/Market'
			}
		},

		created() {
			this.id = this.$route.params.goodid;
			this.getNewsDetail(this.id)
		},
		methods: {
			getNewsDetail(id) {
				var _this = this;
				_this.http.get("static/data/detail.data", {
					params: {
						id: id
					}
				}).then(function(response) {
					var temp = [];
					temp = response.data;

					console.log(temp)

					for(var o in temp) {
						if(temp[o].cid == id) { //路由传来的id
							_this.info = temp[o];
							_this.imglist = temp[o].thumbImg;
							console.log(_this.imglist)
							break;
						}
					}

				}).catch(function(error) {
					console.log(error);
				});
			}
		},
		components: {
			navbar
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.mint-navbar {
		background-color: #fff;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		text-align: center;
		/*position: relative;*/
		top: -48px;
		left: 0;
	}
	
	.tm_10 {
		height: 20px;
	}
	
	.tm_10 img {
		height: 100%;
		width: auto;
		padding: 0 8px;
		vertical-align: middle;
	}
	
	.tm_comment_list div {
		margin: 10px 0;
		color: #555;
		font-size: 0.8rem;
		line-height: 20px;
	}
	
	.tm_2017 p {
		margin-top: 14px;
	}
	
	.tm_comment_star {
		width: 96px;
		height: 13px;
		background: url(../../../static/icons/comment-star.png);
		background-size: 19px 27px;
	}
	
	image[lazy=loading] {
		width: 40px;
		height: 300px;
		margin: auto;
	}
	.mint-tab-container{
		margin-top: 3px !important;
	}
</style>