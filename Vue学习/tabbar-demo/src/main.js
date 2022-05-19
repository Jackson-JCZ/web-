import Vue from 'vue'
import App from './App.vue'
import "./assets/fonts/iconfont.css" // 引入字体图标css文件
import "bootstrap/dist/css/bootstrap.css"
Vue.config.productionTip = false

// 全局指令
Vue.directive("focus", {
  inserted(el){
    el.focus()
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
