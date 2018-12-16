import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import sudoku from '@/components/sudoku'
import Market from '@/components/market/Market'
import GoodVue from '@/components/market/GoodVue'
import goodlist from '@/components/goodlist/goodlist'
import detail from '@/components/goodlist/detail'

//import DetailPage from '@/components/detail'
//import DetailAnaPage from '@/components/detail/analysis'
//import DetailCouPage from '@/components/detail/count'
//import DetailForPage from '@/components/detail/forecast'
//import DetailPubPage from '@/components/detail/publish'

Vue.use(Router)

export default new Router({
	linkExactActiveClass: "#fff",
	routes: [
		{
			path: '/',
			name: 'index',
			component: Home
		},
		
		{
			path: '/Market',
			name: 'Market',
			component: Market
		},
		{
			path: '/GoodVue',
			name: 'GoodVue',
			component: GoodVue
		},
		{
			path: '/goodlist',
			name: 'goodlist',
			component: goodlist
		},
		{
			path: '/detail/:goodid',
			name: 'detail',
			component: detail
		}
		//		{
		//			path: '/detail',
		//			component: DetailPage,
		//			redirect: '/detail/analysis',
		//			children: [{
		//					path: 'analysis',
		//					component: DetailAnaPage
		//				},
		//				{
		//					path: 'count',
		//					component: DetailCouPage
		//				},
		//				{
		//					path: 'forecast',
		//					component: DetailForPage
		//				},
		//				{
		//					path: 'publish',
		//					component: DetailPubPage
		//				}
		//			]
		//		}

	]
})