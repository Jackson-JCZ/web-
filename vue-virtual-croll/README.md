# vue-virtual-croll
## 问题引入
在项目中经常会使用到渲染大量列表数据，在常规的列表中可以通过分页进行展示，但是在使用下拉框，搜索结果，表单查看等无法进行分页时，需要每次加载所有的列表，对性能不好的浏览器卡顿明显。

主要原因是无法使用分页功能的长列表首屏渲染加载速度慢等问题，DOM加载过多"无用"元素。

## 解决方法
引入虚拟滚动:
1. 元素监听scroll时间
2. 计算可视化高度一次能装几个列表，然后从总数据中进行中进行slice截取
3. 每一次滚动后根据scrollTop值获取一个可以整除itemH结果进行偏移
> 具体实现看代码部分

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
