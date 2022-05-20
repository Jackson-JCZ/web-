---
title: Vue路由
date: 2022-05-09
cover: false
tag: [Vue, Web前端]
categories:
    - Vue
description: 
---
> 路由的本质是一种对应关系，再url地址中输入要访问的url后，url地址和真实的资源之间存在一种对应的关系，就是路由
> 前端路由：依靠hash值(锚链接)的变化进行实现, 主要通过监听事件并分发执行事件处理函数
> 后端路由：服务器实现，性能相对前端路由较低

## 1.Vue Router
- Vue官方提供的路由管理器，结合Vue可以很方便的实现SPA，本质上属于Vue的扩展插件
- 特性：
    1. 支持H5历史模式和hash模式
    2. 支持路由参数
    3. 支持编程式和命名路由
    4. 支持路由导航守卫，过渡动画特效，路由懒加载，滚动行为

## 2.使用步骤
1. npm安装或导入js文件
```js
<script src="lib/vue_2.5.22.js"></script>
<script src="lib/vue-router_3.0.0.js"></script>
```
2. 添加路由链接`<router-link>`，默认会被渲染为a标签，to属性默认为href属性，同时to属性的值会被渲染为#开头的hansh地址
```html
<router-link to="/user">User</router-link>
```
3. 添加路由填充位(路由占位符): `<router-view></router-view>`
4. 配置路由规则并创建路由实例
```js
var myRouter = new VueRouter({
    //routes时路由规则数组
    routes: [
        //每个路由规则都是一个对象，对象中至少包含path和component两个属性
        {path: "/user", component: ()=> import('./user.js')}
        {path: "/login", component: ()=> import('./login.js')}
    ]
})
```
5. 将路由挂载到Vue实例中
```js
new Vue({
    el: "#app",
    router: myRouter //通过router属性挂载路由对象
})
```
6. 路由重定向：可以为页面设置默认展示的组件
```js
var myRouter = new VueRouter({
    //routes时路由规则数组
    routes: [
        {path: "/", redirect: "/user"}, //只需要添加redirect即可
        {path: "/user", component: ()=> import('./user.js')}
        {path: "/login", component: ()=> import('./login.js')}
    ]
})
```

## 3.路由方式
1. 声明式导航
- 使用组件router-link代替a标签，在跳转路由时也可以给路由对应的组件传值
- 传值方式，在router-link的to属性进行传值，格式如下
```js
/path?参数名=值
/path/值    //需要路由对象提前配置path:"/path/参数名"
```
- 对应页面组件接收传递过来的值
```js
$route.query.参数名
$route.params.参数名
```

2. 重定向和模式
- 匹配path后，强制跳转path路径
    - 网页打开url默认hash值是/路径
    - redirect是设置要重定向到哪个路由路径
- 使用方式
```js
routes; [
    {
        path: '/',
        redirect: '/user'   //使用redirect强制切换路由路径
    }
    ...
]
```
- 在VueRouter对象中使用mode可修改路由模式
```js
const router = new VueRouter({
    routes,
    mode: 'history'
})
```

3. 编程式导航
- 用js实现跳转
```js
this.$router.push({
    path: "路由路径", //在router/index.js定义
    name: "路由名"
})
```
- 传参
```js
this.$router.push({
    path: "路由路径",
    name: "路由名",
    query: {
        "参数名": 值
    }
    params: {
        "参数名": 值
    }
})
```
```html
<!-- 使用 -->
<p>人名: {{ $route.query.name }}
    --
    {{ $route.params.username }}
</p>
```

4. 嵌套路由：相当于路由的子路由, 如/login/account，在/login路由下继续添加路由
```js
var count = {template: "<div>啥也不是</div>"}
var myRouter = new VueRouter({
    //routes时路由规则数组
    routes: [
        {path: "/", redirect: "/user"}, //只需要添加redirect即可
        {
            path: "/login",
            component: ()=> import('./login.js'),
            children: [
                {
                    {path: "login/account", component: account}
                }
            ]
        }
    ]
})
```

## 4.路由守卫
- 全局前置守卫：路由跳转之前会触发一个beforeEach函数，next调用跳转，也可以强制修改要跳转的路由，如登录状态未登录回调转到登录页面
>语法
```js
let isLogin = false;    //未登录
router.beforeEach((to, from, next) => {
    if(to.path === '/my' && isLogin === false) {
        alert('请登录')
        next(false) //阻止路由跳转
    } else {
        next()
    }
})
```