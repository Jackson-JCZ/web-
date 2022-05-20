<template>
    <div>
        <div class="footer_wrap">
            <!-- 将a标签替换为router-link标签 -->
            <router-link to="/find">发现音乐</router-link>
            <router-link to="/my">我的音乐</router-link>
            <router-link to="/part">朋友</router-link>
        </div>
        <div class="top">
            <router-view></router-view>
        </div>
  </div>
</template>

<script>
// 目标: 声明式导航 - 基础使用
// 本质: vue-router提供的全局组件 "router-link"替代a标签
// 1. router-link 替代a标签
// 2. to属性      替代href属性
// 好处: router-link自带高亮的类名(激活时类名)
// 3. 对激活的类名做出样式的编写
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

/*激活时样式 */
.footer_wrap .router-link-active{
  color: white;
  background: black;
}
</style>