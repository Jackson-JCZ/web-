<template>
    <div id="app">
        <!-- 顶部框模块 -->
        <div class="table table-border table table-hover mt-2">
            <thead>
                <tr>
                    <th>编号</th>
                    <th>资产名称</th>
                    <th>价格</th>
                    <th>创建时间</th>
                    <td>操作</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="obj in list" :key="obj.id">
                    <td>{{obj.id}}</td>
                    <td>{{obj.name}}</td>
                    <!-- 价格超过100 有red -->
                    <td :class="{red: obj.price>100}">{{obj.price}}</td>
                    <td>{{formatDate(obj.time)}}</td>
                    <td><a href="#" @click="delFn(obj.id)">删除</a></td>
                </tr>
                <tr v-if="list.length !== 0" style="background-color: #eee">
                    <td>统计：</td>
                    <td colspan="2">总价钱为: {{allPrice}}</td>
                    <td colspan="2">平均价：{{avgPrice}}</td>
                </tr>
            </tbody>
            <tfoot v-show="list.length===0">
                <tr>
                    <td colspan="5" style="text-align:center">暂无数据</td>
                </tr>
            </tfoot>

            <!-- 添加资产 -->
            <form class="form-inline">
                <div class="form-group">
                    <div class="input-group">
                        <input type="text" class="form-control"
                         placeholder="资产名称" v-model="name" />
                    </div>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div class="input-group">
                    <div class="input-group">
                        <input type="text"
                        class="form-group"
                        placeholder="价格"
                        v-model.number="price" />
                    </div>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button class="btn btn-primary" @click.prevent="addFn">添加资产</button>
            </form> 
        </div>
    </div>
</template>

<script>
import moment from "moment";
export default {
    data() {
        return {
            name: "",
            price: 0,
            //侦听器list: 从本地localStorage中取出缓存List
            list: JSON.parse(localStorage.getItem('pList')) || [],
        }
    },
    methods: {
        addFn() {
            if(this.name.trim().length === 0 || this.price === 0) {
                alert("不能为空");
                return;
            }

            let id = this.list.length === 0 ? 100 : this.list[this.list.length-1].id + 1;
            this.list.push({
                id: id,
                name: this.name,
                price: this.price,
                time: new Date(),
            });
        },
        delFn(id) {
            let index = this.list.findIndex(obj => obj.id===id)
            this.list.splice(index, 1)
        },
        formatData(val) {
            return moment(val).format("YYYY-MM-DD");
        }
    },
    computed: {
      allPrice(){
          return this.list.reduce((sum, obj) => sum += obj.price, 0)
      },
      avgPrice(){
          return (this.allPrice / this.list.length).toFixed(2)
      }
  },
  watch: {
    list: {
      handler(){
        // 2. 存入本地
        localStorage.setItem('pList', JSON.stringify(this.list))
      },
      deep: true
    }
  }
}
</script>

<style>
.red {
    color: red;
}
</style>