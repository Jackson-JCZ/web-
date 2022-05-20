<template>
  <div>
    <div class="footer_wrap">
      <router-link>发现音乐</router-link>
      <router-link>我的音乐</router-link>
      <router-link to="/part?name=小传">朋友-小传</router-link>
      <router-link to="/part/小智">朋友-小智</router-link>
    </div>
    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// 目标: 声明式导航 - 传值
// 方式1:
// to="/path?参数名=值"
// 接收: $route.query.参数名

// 方式2:
// (1): 路由规则path上 定义 /path/:参数名
// (2): to="/path/值"
// 接收: $route.params.参数名
export default {
    
}
</script>

<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap a:hover {
  background-color: #555;
}
.top {
  padding-top: 62px;
}
</style>