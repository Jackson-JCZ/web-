import Vue from 'vue'
import App from './01_vue-router基本使用.vue'
import Find from '@/views/Find'
import My from '@/views/My'
import Part from '@/views/Part'
import NotFound from '@/views/NotFound'
import Recommend from '@/views/second/Recommend'
import Ranking from '@/views/second/Ranking'
import SongList from '@/views/second/SongList'
//目标：vue-router基础使用
// 1. 下载vue-router(yarn add vue-router)
// 2. 引入
import VueRouter from 'vue-router'
// 3. 注册全局组件
Vue.use(VueRouter)
// 4. 规则数组
const routes = [
  {
    path: "/",
    redirect: "/find" //重定向到/find
  },
  {
    path: "/find",
    name: "Find",
    component: Find,
    children: [
      {
        path: "recommend",
        component: Recommend
      },
      {
        path: "ranking",
        component: Ranking
      },
      {
        path: "songlist",
        comoponent: SongList
      }
    ]
  },
  {
    path: "/my",
    name: "My",
    component: My
  },
  {
    path: "/part",
    name: "Part",
    component: Part
  },
  {
    path: "/part/:username", //有':'的路径表示要接收具体的值
    component: Part
  },
  {
    path: '*',
    component: NotFound
  }
]
// 5. 生成路由对象
const router = new VueRouter({
  routes,
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
