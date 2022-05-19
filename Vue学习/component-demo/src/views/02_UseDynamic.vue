<template>
  <div>
      <button @click="comName = 'UserName'">账号密码填写</button>
      <button @click="comName = 'UserInfo'">个人信息填写</button>

      <p>下面显示注册组件-动态切换:</p>
      <div style="border: 1px solid red;">
          <!-- Vue内置keep-alive组件, 把包起来的组件缓存起来 -->
          <keep-alive>
              <component :is="comName"></component>
          </keep-alive>
      </div>
  </div>
</template>

<script>
import UserName from '../components/02/UserName'
import UserInfo from '../components/02/UserInfo'
export default {
    data(){
        return {
            comName: "UserName"
        }
    },
    components: {
        UserName,
        UserInfo
    }
}
</script>

<style>

</style>