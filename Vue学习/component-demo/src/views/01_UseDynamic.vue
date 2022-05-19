<template>
    <div>
        <button @click="comName='UserName'">账号密码填写</button>
        <button @click="comName='UserInfo'">个人信息填写</button>
        <p>显示注册组件-动态切换:</p>
        <div style="border: 1px solid red;">
            <component :is="comName"></component>
        </div>
    </div>
</template>

<script>
import UserName from '../components/01/UserName'
import UserInfo from '../components/01/UserInfo'
export default {
    data() {
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