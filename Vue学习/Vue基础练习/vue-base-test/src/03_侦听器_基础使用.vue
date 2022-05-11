<template>
    <div>
        <input type="text" v-model="name">
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: ""
        }
    },
    //目标：侦听到name值的改变
    /* 语法
        watch: {
            变量名(newVal, oldVal) {
                //变量名对应值改变在这里自动触发
            }
        }
    */
   watch: {
       name(newVal, oldVal) {
           console.log(newVal, oldVal);
       }
   }
}
</script>

<style scoped>

</style>