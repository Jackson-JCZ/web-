<template>
    <div>
        <ul>
            <li v-for="(val, index) in arr" :key="index">
                {{ val }}
            </li>
        </ul>
        <button @click="revBtn">数组翻转</button>
        <button @click="sliceBtn">截取前三个</button>
        <button @click="updateBtn">更新第一个元素值</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr: [5, 3, 9, 2, 1]
        }
    },
    methods: {
        revBtn() {
            //1.数组翻转可让v-for更新
            this.arr.reverse()
        },
        sliceBtn() {
            //2.数组slice不会造成v-for更新
            //slice()不回改变原始数组
            //解决：覆盖
            this.arr = this.arr.slice(0, 3)
        },
        updateBtn() {
            //在Vue2中
            //3.更新某个值的时候，v-for是无法监测
            //this.arr[0] = 1000;
            //解决: this.$set()使得更新的值变成响应式
            //arg1: 更新目标结构, arg2: 更新位置, arg3: 更新值
            //this.$set(this.arr, 0, 1000) // Vue3已废弃
            
            //Vue3中proxy已经实现对整个对象进行监听，包括更新，删除，增加等
            this.arr[0] = 1000
        }
    }
}
</script>
<style scoped>

</style>