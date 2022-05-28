
## 1.object.defineProperty ES6提供的原生方法
```js
Object.defineProperty(data, 'name', {
    //访问data.name属性会自动调用get方法，get函数的返回值就是data.name拿到的值
    get() {
        return '小明'
    },
    //设置一个对象属性时自动调用，会把设置的最新的值当成实参传入set函数
    
    set(newVale) {
        //只要数据发生变化就可以做任何设计的事情
        //ajax console.log 操作dom等
        data.name = newVale
    }
})
```
> 响应式的核心API
## 2.数据反应到视图
数据的变化可以引起视图的变化(通过操作dom把数据放到对应的位置 若数据变化则用最新的值再重新run)

- 方式一：命令式操作
1. document.querySelector('#app p).innerText = data.name
2. set函数中重新执行一下document.querySelector('#app p').innerText = data.name
- 方式二：声明式渲染：v-text指令实现
核心逻辑：通过'模板编译'找到标记了v-text的元素，然后把对应的数据通过操作dom Api放上去
```html
<div id="app">
    <p v-text="name"></p>
    <p></p>
</div>
```
> 模板编译流程
> 1. 通过app根元素找到所有的子节点(元素节点，文本节点...) -> dom.nodeChilds
> 2. 通过节点类型筛选出所有元素节点(p) -> nodeType(元素节点，文本节点)
> 3. 通过v-text找到元素需要设置的具体的节点 `<p v-text></p>`
> 4. 找到绑定了v-text标记的元素 拿到它身上所有的属性: id class v-text
> 5. 通过v-text="name"拿到指令类型 'v-text'，拿到需要绑定的数据的属性名'name'
> 6. 判断当前是v-text指令，然后通过操作dom api把name属性对应的值放上去，`node.innerText = data[name]`

## 3.视图的变化反应到数据
v-model的双向绑定 `M->V`和`V->M`