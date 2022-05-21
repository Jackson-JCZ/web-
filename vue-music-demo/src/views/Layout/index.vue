<template>
    <div>
        <van-nav-bar :title="activeTitle" fixed />
        <div class="main">
            <!-- 二级路由挂载点 -->
            <router-view></router-view>
        </div>
        <van-tabbar route>
            <van-tabbar-item replace to="/layout/home" icon="home-o"
            >首页</van-tabbar-item>
            <van-tabbar-item replace to="/layout/search" icon="search"
            >搜索</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeTitle: this.$route.meta.title, //默认顶部导航显示的标题
        };
    },
    //路由切换 - 侦听$route对象改变
    watch: {
        $route() {
            this.activeTitle = this.$route.meta.title
        }
    }
}
</script>

<style scoped>
/* 中间内容区域 - 容器样式(留好上下导航所占位置) */
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>