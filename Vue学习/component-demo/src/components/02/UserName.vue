<template>
  <div>
      <div>
          <span>用户名:</span>
          <input type="text">
      </div>
      <div>
          <span>密码:</span>
          <input type="password">
      </div>
  </div>
</template>

<script>
export default {
    created(){
        console.log("02-UserName-创建");
    },
    destroyed(){
        console.log("02-UserName-销毁");
    },
    // 组件缓存下 - 多了2个钩子函数
    activated(){
        console.log("02-UserName-激活");
    },
    deactivated(){
        console.log("02-UserName-失去激活");
    }
}
</script>

<style>

</style>