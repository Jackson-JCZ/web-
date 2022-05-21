import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
Vue.config.productionTip = false

import {Tabbar, TabbarItem, NavBar, Col, Row} from 'vant'
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.use(Col)
Vue.use(Row)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
