<template>
    <table class="table table-bordered table-stripped">
        <thead>
            <tr>
                <slot name="header"></slot>
            </tr>
        </thead>
        <!-- 表格主体区域 -->
        <tbody>
            <tr v-for="obj in arr"
             :key="obj.id"
            >
                <slot name="body" :row="obj"></slot>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'MyTable',
    props: {
        arr: Array
    }
}
</script>

<style scoped lang="less">
.my-goods-list {
    .badge {
        margin-right: 5px;
    }
}
</style>