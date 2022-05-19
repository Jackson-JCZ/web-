<template>
  <div>
    <h1>1.动态dynamic组件使用</h1>
    <UseDynamic></UseDynamic>
    <hr>
    <h1>2.组件缓存</h1>
    <UseDynamic2></UseDynamic2>
    <hr>
    <h1>3.组件-插槽</h1>
    <UseSlot></UseSlot>
    <hr>
    <h1>4.组件-具名插槽</h1>
    <UseSlot2></UseSlot2>
    <hr>
    <h1>5.组件-作于域插槽</h1>
    <UseSlot3></UseSlot3>
    <hr>
    <h1>6.作用域插槽-使用场景</h1>
    <p>组件内标签可以随意定义和数据使用</p>
    <UseTable></UseTable>
    <hr>
    <h1>7.自定义指令</h1>
    <UseDirective></UseDirective>

  </div>
</template>

<script>
import UseDynamic from './views/01_UseDynamic'
import UseDynamic2 from './views/02_UseDynamic'
import UseSlot from './views/03_UseSlot'
import UseSlot2 from './views/04_UseSlot'
import UseSlot3 from './views/05_UseSlot'
import UseTable from './views/06_UseTable'
import UseDirective from './views/07_UseDirective'
export default {
  components: {
    UseDynamic,
    UseDynamic2,
    UseSlot,
    UseSlot2,
    UseSlot3,
    UseTable,
    UseDirective
  }
}
</script>

<style>

</style>
