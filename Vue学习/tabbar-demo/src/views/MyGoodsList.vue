<template>
    <div>
        <MyTable :arr="list">
            <template #header>
                <th>#</th>
                <th>商品名称</th>
                <th>价格</th>
                <th>标签</th>
                <th>操作</th>
            </template>
            <!-- scope的值：{row: obj} -->
            <template #body="scope">
                <td>{{ scope.row.id }}</td>
                <td>{{ scope.row.goods_name }}</td>
                <td>{{ scope.row.goods_price }}</td>
                <td>
                    <input
                    class="tag-input form-control"
                    style="width: 100px;"
                    type="text"
                    v-if="scope.row.inputVisible"
                    v-focus
                    @blur="scope.row.inputVisible = false"
                    @keydown.enter="enterFn(scope.row)"
                    v-model="scope.row.inputValue"
                    @keydown.esc="scope.row.value=''"
                    />
                    <button
                     v-else
                     style="display: block;"
                     class="btn btn-primary btn-sm add-tag"
                     @click="scope.row.inputVisible = true"
                    >+Tag</button>

                    <span v-for="(str, ind) in scope.row.tags"
                    :key="ind"
                    class="badge badge-warning"
                    >
                        {{ str }}
                    </span>
                </td>

                <td>
                    <button class="btn btn-danger btn-sm"
                    @click="removeBtn(scope.row.id)"
                    >删除</button>
                </td>
            </template>
        </MyTable>
    </div>
</template>

<script>
import MyTable from '../components/MyTable'
import axios from "axios"
axios.defaults.baseURL = "https://www.escook.cn"
// 目标: 循环商品列表表格
// 1. 封装MyTable.vue 整体表格组件-一套标签和样式
// 2. axios请求数据
// 3. 传入MyTable组件里循环tr显示数据

// 目标: 展示tags标签
// 1. tags数组 - 某个td循环span使用文字
// 2. span设置bs的样式

// 目标: 删除数据
// 1. 删除按钮 - 点击事件
// 2. 通过作用域插槽拿到id, 实现点击事件方法
// 3. 通过id查找数组里数据, 找到索引

export default {
    components: {
        MyTable,
    },
    data() {
        return {
            list: []
        };
    },
    created() {
        axios({
            url: "/api/goods",
        }).then((res) => {
            console.log(res);
            this.list = res.data.data;
        });
    },
    methods: {
        removeBtn(id) {
            let index = this.list.findIndex(obj => obj.id === id)
            this.list.splice(index, 1)
        },
        enterFn(obj) {
            if(obj.inputValue.trim().length === 0) {
                alert('请输入数据')
                return
            }
            obj.tags.push(obj.inputValue)
            obj.inputValue = ""
        }
    }
}
</script>

<style lang="less" scoped>

</style>