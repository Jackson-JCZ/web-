import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios';

// Vue.config.productionTip = false
// Vue.prototype.$http = axios
// 设置请求的根路径
axios.defaults.baseURL = "http://localhost:8081/"
axios.interceptors.request.use(config => {
  console.log(config);
  // 请求头挂载信息
  config.headers.Authorization = window.sessionStorage.getItem("flag");
  // 在最后必须return config
  return config;
})

createApp(App).use(router).use(ElementPlus).mount('#app')
