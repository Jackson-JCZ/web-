<template>
    <div>
        <p>{{ reverseMessage }}</p>
        <p>{{ reverseMessage }}</p>
        <p>{{ reverseMessage }}</p>
        <p>{{ getMessage() }}</p>
        <p>{{ getMessage() }}</p>
        <p>{{ getMessage() }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "Hello, Vue"
        }
    },
    // 计算属性优势：
    // 1.带缓存
    // 2.计算属性对应函数执行后会把return值缓存起来
    // 3.依赖项不变，多次调用都是从缓存取值
    // 4.依赖项值-变化，函数会”自动“重新执行-并缓存新的值
    computed: {
        reverseMessage() {
            console.log("计算属性执行了");
            return this.msg.split("").reverse().join("")
        }

    },
    // 完整语法:
    // computed: {
    //     "计算属性名" (){},
    //     "计算属性名": {
    //         set(值){

    //         },
    //         get(){
    //             return 值
    //         }
    //     }
    // }
    methods: {
        getMessage() {
            console.log("函数执行了");
            return this.msg.split("").reverse().join("")
        }
    }
}
</script>