<template>
  <div>
      <table border="1">
          <thead>
              <tr>
                  <th>序号</th>
                  <th>姓名</th>
                  <th>年龄</th>
                  <th>头像</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(obj, index) in arr" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ obj.name }}</td>
                  <td>{{ obj.age }}</td>
                  <td>
                      <slot :row="obj">
                          <!-- 默认值给上,如果使用组件不自定义标签显示默认文字 -->
                          {{ obj.headImgUrl}}
                      </slot>
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
export default {
    props: {
        arr: Array
    }
}
</script>