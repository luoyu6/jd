// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '../static/mui/css/mui.css'
import axios from 'axios'
//Vue.prototype.$ajax = axios 
Vue.prototype.http = axios


import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
