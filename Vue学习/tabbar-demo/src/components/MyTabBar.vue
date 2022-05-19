<template>
    <div class="my-tab-bar">
        <div
            class="tab-item"
            v-for="(obj, index) in arr"
            :key="index"
            @click="btn(index, obj)"
            :class="{ current: index === selIndex }"
        >
            <span class="iconfont" :class="obj.iconText"></span>
            <span>{{ obj.text }}</span>
        </div>
    </div>
</template>

<script>
// 目标: 点谁谁亮
// 1. 绑定点击事件 - 传入索引值
// 2. 循环索引 - 保存索引 对比
// 3. 点击把索引值同步给selIndex变量上, 引发上面判断的更新
export default {
    props: {
        arr: {
            type: Array,
            require: true,
            //自定义校验规则
            validator(value) {
                //value就是街道数组
                if(value.length >= 2 && value.length <= 5) {
                    return true;
                } else {
                    console.log('数据源必须再2-5项');
                    return false;
                }
            }
        },
    },
    data() {
        return {
            selIndex: 0, //默认第一个高亮
        }
    },
    methods: {
        btn(index, theObj) {
            this.selIndex = index;  //保存索引值
            this.$emit("changeCom", theObj.componentName);  //要切换的组件名传App.vue进行切换
        },
    }
}
</script>

<style lang="less" scoped>
.my-tab-bar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    cursor: pointer;
    .tab-item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

.current {
    color: #1d7bff;
}
</style>