<template>
    <div class="my-header"
        :style="{backgroundColor: background, color: fontColor}"
    >{{ title }}</div>

</template>

<script>
export default {
    props: {
        background: String,
        fontColor: {
            type: String,
            default: "#fff"
        },
        title: {
            type: String,
            required: true  //使用这个变量必须传入值
        }
    }
}
</script>

<style lang="less" scoped>
.my-header {
    height: 45px;
    line-height: 45px;
    text-align: center;
    background-color: #1d7bff;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
}
</style>