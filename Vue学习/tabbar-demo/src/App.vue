<template>
  <div>
    <MyHeader 
      :background="'blue'"
      :fontColor="'white'"
      title="TabBar案例"
    ></MyHeader>
    <div class="main">
      <component :is="comName"></component>
    </div>
    <MyTabBar
      :arr="tabList"
      @changeCom="changeComFn"
    ></MyTabBar>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'

// 目标: 完成底部封装
// 1. MyTabBar.vue 组件标签+样式 准备
// 2. 字体图标引入
// 3. 准备底部数据
// 4. 使用MyTabBar组件, 传入数据(父->子), 循环产生底部导航
// 5. 子组件内props自定义检验规则(2-5项)
// 6. 子组件内循环产生底部导航
import MyTabBar from './components/MyTabBar'
import MyGoodsList from './views/MyGoodsList'
export default {
  data() {
    return {
      comName: "MyGoodsList", //显示默认的组件
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList",
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch",
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo",
        },
      ]
    }
  },
  components: {
    MyHeader,
    MyTabBar,
    MyGoodsList
  },
  methods: {
    changeComFn(cName) {
      this.comName = cName;
    }
  }
}
</script>

<style>
.main {
  padding-top: 45px;
  padding-bottom: 51px;
}
</style>
