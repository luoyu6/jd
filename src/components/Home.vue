<template>
	<div class="del">
		<mt-swipe :auto="100000">
			<mt-swipe-item v-for="items in lists" >
				<router-link to="list"><img :src="items.imgSrc" /></router-link>
			</mt-swipe-item>

		</mt-swipe>
		<div class="actImg">
			<router-link to="act"><img src="../../static/icons/ae.jpg"></router-link>
		</div>
		
		<div class="mui-content">
			<ul class="mui-table-view mui-grid-view mui-grid-9">
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<router-link to="/Market">					
						<!--<span class="mui-icon mui-icon-home"></span>-->
						<img src="../../static/icons/591d9424N068a7ad0.png" width="100%"/>
						<div class="mui-media-body">京东超市</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<router-link to="/detail">
						<!--<span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>-->
						
						<img src="../../static/icons/59eefb97Nb8635dcf.png" width="100%"/>
						<div class="mui-media-body">全球购</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<router-link to="/market">
						<!--<span class="mui-icon mui-icon-chatbubble"></span>-->
						<img src="../../static/icons/591d9456Naa85e195.png" width="100%"/>
						<div class="mui-media-body">服装城</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<a href="#">
						<!--<span class="mui-icon mui-icon-location"></span>-->
						<img src="../../static/icons/59263c71Nc7d16503.png" width="100%"/>
						<div class="mui-media-body">京东生鲜</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<a href="#">
						<!--<span class="mui-icon mui-icon-search"></span>-->
						<img src="../../static/icons/591d9475Na810c2eb.png" width="100%"/>
						
						<div class="mui-media-body">京东到家</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<a href="#">
						<!--<span class="mui-icon mui-icon-phone"></span>-->
						<img src="../../static/icons/591d94a1Nfde63a47.png" width="100%"/>
						<div class="mui-media-body">充值缴费</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<a href="#">
						<!--<span class="mui-icon mui-icon-gear"></span>-->
						<img src="../../static/icons/57aacab9N98edf989.png" width="100%"/>
						
						<div class="mui-media-body">领京豆</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<a href="#">
						<!--<span class="mui-icon mui-icon-info"></span>-->
						<img src="../../static/icons/59e9d8efN5823f489.png" width="100%"/>
						
						<div class="mui-media-body">领券</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<a href="#">
					<!--	<span class="mui-icon mui-icon-more"></span>-->
					<img src="../../static/icons/591d94c6Nc4711ad2.png" width="100%"/>
						<div class="mui-media-body">赚钱</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<a href="#">
						<!--<span class="mui-icon mui-icon-more"></span>-->
						
						<img src="../../static/icons/591d94edNc42fb94d.png" width="100%"/>
						<div class="mui-media-body">物流查询</div>
					</a>
				</li>
			</ul>
		</div>
		<div class="scroll_news">
			<div>
				<ul>
					<li></li>
				</ul>
			</div>
		</div>
		<div class="killList">
			<div class="pct">
				<img src="../../static/icons/57fdff2eNb7cd186f.png" />
			</div>
			<div class="kill_time">2017-10-22</div>
			<div class="more">2232323</div>
		</div>
		<div class="imgBox">

			<img src="../../static/icons/p3.jpg">
			<img src="../../static/icons/p3.jpg">
			<img src="../../static/icons/p3.jpg">
			<img src="../../static/icons/p3.jpg">
			<img src="../../static/icons/p3.jpg">
			<img src="../../static/icons/59e1c416Ne24381be.jp0.jpg">
			<img src="../../static/icons/59e1c416Ne24381be.jp0.jpg">
			<img src="../../static/icons/59e1c416Ne24381be.jp0.jpg">
			<img src="../../static/icons/59e1c416Ne24381be.jp0.jpg">
			<img src="../../static/icons/59e1c416Ne24381be.jp0.jpg">
		</div>
         <!--闪购-->
		<div class="max_width">
			<div class="box_module padl10 padr10">
				<div class="fl">
					<strong>闪购</strong>
					<p>1元也时尚</p>
				</div>
				<div style="width: 80.5px;" class="fr">
					<img class="img1 imgs_mod" src="https://m.360buyimg.com/n1/jfs/t3157/175/4148303001/99337/a71320af/5800bf1eNf6bd6416.jpg!q70.jpg" style="opacity: 1;">
				</div>
			</div>

			<div class="box_module padl10 padr10">
				<div class="fl">
					<strong>闪购</strong>
					<p>1元也时尚</p>
				</div>
				<div style="width: 80.5px;" class="fr">
					<img class="imgs_mod" src="https://m.360buyimg.com/n1/jfs/t3157/175/4148303001/99337/a71320af/5800bf1eNf6bd6416.jpg!q70.jpg" style="opacity: 1;">
				</div>
			</div>
			<div class="clear"></div>

			<div class="box_module padl10 padr10">
				<div class="fl">
					<strong>排行榜</strong>
					<p>实时热卖尖货</p>
				</div>
				<div class="fr">
					<img class="imgs_mod" style="width: 94px;height: 94px;margin-top: 23px;" src="https://m.360buyimg.com/mobilecms/jfs/t8563/181/867974800/20585/b2e8dc4b/59afaf52N9a5fc243.jpg!q70.jpg">
				</div>
			</div>
			<div class="box_module padl10 padr10">
				<div class="fl wth50">
					<strong class="graphic-tit">会买专辑</strong>
					<p class="color_red">美物为你选</p>
					<img class="imgs_mod smallImg" src="https://m.360buyimg.com/mobilecms/jfs/t8269/269/363492359/10270/435f88e2/59a68b68N1d6a4908.jpg!q70.jpg" style="opacity: 1;">
				</div>
				<div class="fl wth50">
					<strong>会买专辑</strong>
					<p class="color_red">美物为你选</p>
					<img class="imgs_mod smallImg" src="https://m.360buyimg.com/mobilecms/jfs/t8269/269/363492359/10270/435f88e2/59a68b68N1d6a4908.jpg!q70.jpg" style="opacity: 1;">
				</div>
			</div>
		</div>
		<div class="clear"></div>
		<!--爱生活-->
		<div class="floor_title"><img src="../../static/icons/5hgfhq70.jpg"></div>
		<div class="max_width">
			<div class="fl wth50 padl10 padr10">
				<div class="fl wth50">
					<strong class="p10">玩3C</strong>
					<p class="color_red">iPhine 8 超低价</p>
					<div class="graphic-btn fl" style="background:#ff4a7d">精选特卖活动</div>
				</div>
				<div class="fl wth50"><img src="../../static/icons/58e63bb0Nd4380.jpg" style="width:100%"></div>
			</div>
			<div class="fl wth50  padr10">
				<div class="fl wth50">
					<strong class="p10">玩3C</strong>
					<p class="color_red">iPhine 8 超低价</p>
					<div class="graphic-btn fl" style="background:#ff4a7d">精选特卖活动</div>
				</div>
				<div class="fl wth50"><img src="../../static/icons/58e63bb0Nd4380.jpg" style="width:100%"></div>
			</div>
		<div class="fl wth50 padl10 padr10"">
				<div class="fl wth50">
					<strong class="p10">玩3C</strong>
					<p class="color_red">iPhine 8 超低价</p>
					<div class="graphic-btn fl" style="background:#ff4a7d">精选特卖活动</div>
				</div>
				<div class="fl wth50"><img src="../../static/icons/58e63bb0Nd4380.jpg" style="width:100%"></div>
			</div>
				</div>
			<div class="fl wth50 padl10 padr10"">
				<div class="fl wth50">
					<strong class="p10">玩3C</strong>
					<p class="color_red">iPhine 8 超低价</p>
					<div class="graphic-btn fl" style="background:#ff4a7d">精选特卖活动</div>
				</div>
				<div class="fl wth50"><img src="../../static/icons/58e63bb0Nd4380.jpg" style="width:100%"></div>
		
		</div>
		<div class="clear"></div>
		<div class="max_width">
			<div class="box_module wth50  padl10 padr10">
				<div class="fl wth50 ">
					<strong class="">爱宝宝</strong>
					<p class="color_red">美物为你选</p>
					<img src="../../static/icons/593e484dN963ccba0.jpg" width="100%" height="100%">
				</div>
				<div class="fl wth50">
					<strong>爱美丽</strong>
					<p class="color_red">美物为你选</p>
					<img src="../../static/icons/591117b5Nf40.jpg" width="100%" height="100%">
				</div>
			</div>
			<div class="box_module wth50 padr10">
				<div class="fl wth50 ">
					<strong class="graphic-tit">爱吃</strong>
					<p class="color_red">美物为你选</p>
					<img src="../../static/icons/5944ca49Nb2539ea4.jp0.jpg" width="100%" height="100%">
				</div>
				<div class="fl wth50">
					<strong>爱穿搭</strong>
					<p class="color_red">美物为你选</p>
					<img src="../../static/icons/59b671e7Ne43f63ec.jp70.jpg" width="100%" height="100%">
				</div>
			</div>
<!--		<market></market>-->			
		</div>
</div>



			


</div>
</template>

<script>

	import market from '@/components/market/Market';
	export default {
		name: 'hello',
		data() {

			return {
				msg: 'Welcome to Your Vue.js App',
				lists: [{
					imgSrc: "../../static/icons/1.jpg"
				}, {
					imgSrc: "../../static/icons/2.jpg"
				}, {
					imgSrc: "../../static/icons/1.jpg"
				}]
			}
		},

		components: {
			 market
		}
	}
	
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	@import url("../../static/css/component.css");


	html {
		font-size: 62.5%;
	}
	
	.mui-media-body {			-
    font-size: 1.2rem;
}
	.mint-swipe-items-wrap {
		height: 140px;
	}
	
	.mint-swipe-item img {
		width: 100%;
	}
	
	.actImg img {
		width: 100%;
	}
	
	li.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3 {
		width: 20%;
	}
	
	.scroll_news {
		height: 2rem;
		background: #ccc;
	}
	
	.killList {
		display: flex;
		background: #aaa;
		height: 30px;
		line-height: 33px;
	}
	
	.killList img {
		width: 73px;
		height: 16px;
	}
	
	.kill_time {
		flex: 1;
		background: #222;
	}
	
	.more {
		background: green;
	}
	
	.imgBox {
		overflow-x: scroll;
		display: flex;
		flex-direction: row;
		/*flex-wrap: nowrap;*/
	}
	
	.imgBox img {
		width: 100%;
	}
	.mui-table-view {
    /* position: relative; */
    height: auto; 
    overflow: hidden;
}
	.box_module {
		width: 50%;
		float: left;
	}
	
	.imgs_mod {
		width: 100%;
	}
	
	.smallImg {
		width: 76px;
		height: 63px;
	}
	
	.p_mod {
		padding: 0 9px;
		margin-left: 9px;
	}
	
	.floor_title {
		background-image: url(../../static/icons/floor-tit.png);
		text-align: center;
	}
	
	@media screen and (min-width: 375px) .graphic-btn {
		color_redt-size: 12px;
	}
	
	@media screen and (max-width: 559px) and (min-width: 414px) .graphic-btn {
		color_redt-size: 14px;
		height: 20px;
		line-height: 20px;
	}
	
	.graphic-btn {
		display: inline-block;
		text-align: center;
		padding: 0 3px;
		color: #fff;
		color_redt-size: 11px;
		height: 16px;
		line-height: 16px;
	}
	
	@media screen and (min-width: 375px) .graphic-btn {
		color_redt-size: 12px;
	}
	
	@media screen and (max-width: 559px) and (min-width: 414px) .graphic-btn {
		color_redt-size: 14px;
		height: 20px;
		line-height: 20px;
	}
	
	.graphic-btn {
		display: inline-block;
		text-align: center;
		padding: 0 3px;
		color: #fff;
		color_redt-size: 11px;
		height: 16px;
		line-height: 16px;
		z-index: 20;
	}
	.mark{ 
		max-width: 640px; 
		min-width: 320px; 
		}
	 .search_bar_module{ 
	 	height:44px; 
	 	margin:60px 0 0 20px;
 
	 	} 
	 .search_bar_module img{  
	 	width:100%
	 	} 
	 .search_bar_module a{ 
	 display:inline-block; 
	 width:22px; 
	 }
	 .mint-swipe-item img {
    width: 100%;
    height: 100%;
}
.search_bar_module {
	margin: 60px 0 0 10px;
}
.mint-swipe-items-wrap {
    height: 174px;
}

</style>