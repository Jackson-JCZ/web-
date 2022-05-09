---
title: Vue组件传值
date: 2022-05-09
cover: false
tag: [Vue, Web前端]
categories:
    - Vue
description: 详细介绍了Vue中的八种组件传值方式并提供案例
---

> vue中每个.vue文件都可以视为一个组件。每个组件之间都有独自的作用域，组件间的数据是无法共享的但实际开发工作中常常需要让组件之间共享数据。组件间通信主要分为这几种：父子间通信，兄弟组件之间的通信，祖孙与后代组件之间的通信，非关系组件间的通信

## 1.父组件向子组件传值
- 适用场景：父组件传递数据给子组件
- 方式：子组件设置`props`属性，定义接收父组件传递过来的参数, 父组件在使用子组件标签中通过属性的方式绑定到子组件上(<span style="color: skyblue">注意：需要驼峰式命名，否则会传值不正确</span>) <br />
样例：
```html
<div id="app">
    <div>{{ pmsg }}</div>
    <menu-item :title='ptitle' content='hello'></menu-item>
</div>
<script type="text/javascript">
    Vue.component('menu-item', {
        //载入子组件并用props属性接收父组件传递过来的数据
        props: ['title', 'content'],
        data: function() {
            return {
                msg: '子组件本身的数据'
            }
        },
        //编写号子组件的模板
        template: '<div>{{msg + "---" + title + "---" + content}}</div>'
    })；
    var vm = new Vue({
        el: '#app',
        data: {
            pmsg: '父组件中的内容',
            ptitle: '动态绑定属性'
        }
    });
</script>
```
## 2.子组件向父组件传值
- 适用场景: 子组件传递数据给父组件
- 子组件通过`$emit()`触发自定义事件，$emit第一个参数为自定义的事件，第二个参数为传递的数值，父组件通过`v-on`监听器获取到子组件的事件
```html
<div id="#app">
    <div :style='{fontSize: fontSize: fontSize + "px"}'> {{pmsg}}</div>
    <menu-item :parr='parr' @enlarge-text='handle($event)'></menu-item>
</div>
<script type="text/javascript" src="js/vue.js"></script>
<script type="text/javascript">
    // 子组件向父组件传值携带参数
    Vue.component('menu-item', {
        props: ['parr'],
        template: `
        <div>
            <ul>
                <li :key='index' v-for='(item, index) in parr'>{{item}}</li>
            </ul>
            <button @click='$emit("enlarge-text", 5')>扩大父组件中字体大小</button>
            <button @click='$emit("enlarge-text", 10')>扩大父组件中字体大小</button>
        </div>
    `
    });
    var vm = new Vue({
        el: '#app',
        data: {
            pmsg: '父组件中内容',
            parr: ['apple', 'orange'],
            fontSize: 10
        },
        methods: {
            handle: function(val) {
                this.fontSize += val;
            }
        }
    })

```
## 3.兄弟组件传值
- 通过事件中心（总线）传递数据
- 传递数据方：hub.$emit(方法名, 传递的数据)
- 接收数据方：通过mounted(){} 钩子中，触发hub.$on()方法名
- 销毁事件：通过hub.$off()，销毁之后无法进行传递数据
```html
<div id="app">
    <div> 父组件 </div>
    <div>
        <button @click='handle'>销毁事件</button>
    </div>
    <test-tom></test-tom>
    <test-jerry></test-jerry>
</div>
<script type="text/javascript" src="js/vue.js"></script>
<script type="text/javascript">
    var hub = new Vue();    //创建事件中心
    //兄弟1：tom
    Vue.component('test-tom', {
        data: function() {
            return {
                num: 0
            }
        },
        template: `
        <div>
            <div>TOM:{{num}}</div>
            <div>
                <button @click='handle'>点击</button>
            </div>
        </div>
        `,
        methods {
            //传递数据方
            handle: function() {
                hub.$emit('jerry-event', 2);
            }
        },
        mounted: function() {
            //接收数据方
            hub.$on('tom-event', (val) => {
                this.num += val;
            });
        }
    });
    //兄弟2：jerry
    Vue.component('test-jerry'), {
        data: function() {
            return {
                num: 0
            }
        },
        template: `
        <div>
            <div>JERRY: {{num}} </div>
            <div>
                <button @click='handle'>点击</button>
            </div>
        </div>
        `,
        methods: {
            handle: function() {
                hub.$emit('tom-event', 1);
            }
        },
        mounted: function() {
            hub.$on('jerry-event', (val)=> {
                this.num += val;
            });
        }
    });
    // 定义vm
    var vm = new Vue({
        el: '#app',
        data: {

        },
        methods: {
            handle: function() {
                hub.$off('tom-event');
                hub.$off('jerry-event');
            }
        }
    });

```
----
> 写不动了....下次遇到再更新
## 4.深层次组件传值

③ref: ref是父组件获取子组件的所有属性，也是一个对象；在使用时父组件在子组件标签上设置ref，父组件通过使用$refs.xxx即可拿到子组件对应的数据
④EventBus: {
				使用场景：兄弟组件传值
				创建一个中央事件总线EventBus
				兄弟组件通过$emit触发自定义事件
				另一个兄弟组件通过$on监听自定义事件
			}

⑥$attrs和$listener: {
					使用场景：祖先传递数据给子孙
					设置批量向下传属性$attrs和$listeners
					$attrs包含了父级作用域中不作为prop被识别的特性绑定（即包含了所有父组件在子组件上设置的属性，除了prop传递的属性，class和style）
					可以通过v-bind=’$attrs’传入内部组件
				  }
	$listener包含了父作用域的v-on事件监听器。通过v-on=’$listeners’传入内部组件——在创建更高层次的组件时非常有用；里面包含了作用在这个组件上所有的监听器，可以通过v-on=’$listeners’将事件监听指向这个组件内的子元素。
Vue-- $attrs与$listeners的详解 - 简书 (jianshu.com)
⑦provide和inject：在祖先组件定义provide属性，返回传递的值
在后代组件通过inject接收组件传递过来的值
⑧vuex：复杂关系的组件数据传递
