<template>
  <div id="app">
    <div class="box" :style="`height:${viewH}px; overflow-y:scroll;`" @scroll="handleScroll">
      <ul>
        <li :style="`transform:translateY(${offsetY}px); height:${itemH}px;`" v-for="i in clist" :key="i">{{i}}</li>
      </ul>
    </div>
  </div>
</template>
<script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.13/vue.min.js"></script>
<script>
let list = []
for (let index = 0; index < 10000; index++) {
    list.push(index)
}
console.log(list)
export default {
  name: 'App',
  data() {
    return {
      list,
      clist: [],
      viewH: 500, //外部box高度
      itemH: 60, //单项高度
      scrollH: '', //整个列表可是高度
      showNum: '', //可视化高度一次能装几个列表
      offsetY: 0  //动态偏移量
    }
  },
  mounted() {
    this.scrollH = this.list.length * this.itemH;
    //计算可视化高度一次能装几个列表，多设置几个防止滚动时直接替换
    this.showNum = Math.floor(this.viewH / this.itemH) + 4;
    //默认展示几个
    this.clist = this.list.slice(0, this.showNum);
    this.lastTime = new Date().getTime()
    console.log(this.lastTime)
  },
  computed: {

  },
  methods: {
    handleScroll(e) {
      if(new Date().getTime() - this.lastTime > 10) {
        let scrollTop = e.target.scrollTop; //滚去的高度
        //每一次滚动后根据scrollTop值获取一个可以整除itemH结果进行偏移
        //例如：滚动的scrollTop = 1220 1220 % this.itemH = 20 offset = 1200
        this.offsetY = scrollTop - (scrollTop % this.itemH);
        //上面卷掉了多少，就要往下平移多少，不然showNum滚出可视区外
        console.log(scrollTop, scrollTop % this.itemH);
        this.clist = this.list.slice(
          Math.floor(scrollTop / this.itemH), //计算卷入了多少条
          Math.floor(scrollTop / this.itemH) + this.showNum
        )
        this.lastNum = new Date.getTime();
      }
    }
  }

}
</script>

<style>
* {
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
}
li {
    text-align: center;
    line-height: 60px;
    border-bottom: 1px solid red;
}
</style>
