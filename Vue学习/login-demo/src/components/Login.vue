<template>
  <div class="login_container">
    <div class="login_box">
      <el-form
          ref="loginFormRef"
          :model="loginForm"
          :rules="loginRules"
          class="login_form"
          label-width="0px"
      >
        <el-form-item prop="username">
          <el-input
              v-model="loginForm.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
              v-model="loginForm.password"
              type="password"
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="info" @click="resetLoginForm" style="width: 90px"> 重    置 </el-button>
          <el-button type="info" @click="login">用 户 登 录</el-button>
        </el-form-item>
      </el-form>
    
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "user",
        password: "123456",
      },
      loginRules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 8, message: "长度在 2 到 8 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 2, max: 8, message: "密码为 2~8 位", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    resetLoginForm() {
      //重置函数方法
      this.$refs.loginFormRef.resetFields();
    },

    async login() {
        const { data: res } = await this.$http.delete(`/doLogin?username=${this.loginForm.username}&password=${this.loginForm.password}`);
        if (res !== "error") {
          // window.sessionStorage.setItem("flag", "ok"); // session 放置
          this.$message.success("登陆成功！！！");
          // this.$router.push({ path: "/admin/home" }); //跳转指令
        } else {
          this.$message.error("登录失败！！！");
        }
    },
  },
};
</script>

<style lang="less" scoped>
// 跟节点样式
.login_container {
  // background-color: #2b4b6b;
  // background-image: image();
  // background-image: url(../assets/loginmain.jpg);
  height: 100%;
}
// 登录框
.login_box {
  width: 450px;
  height: 300px;
  background-color: rgb(182, 197, 201);
  // background-image: url(../assets/loginmain.jpg);
  border-radius: 3px; // 圆角
  position: absolute; // 绝对定位
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); // 根据自己位置 以自己为长度位移
  // 头像框
  .avatar_box {
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    border-radius: 50%; // 加圆角
    padding: 10px;
    box-shadow: 0 0 10px #ddd; // 盒子阴影
    position: absolute;
    opacity: 0.8; //透明属性
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(66, 152, 202);
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%; // 加圆角
      background-color: #eee;
    }
  }
  .loginRem {
    color: black;
    font-weight: 900;
  }
  .btns {
    display: flex; // 弹性布局
    border-radius: 30px;
    padding: 5px 85px 0 8px;
    justify-content: flex-end; // 尾部对齐
    .bt1 {
      opacity: 0;
      width: 50px;
    }
  }
  .login_form {
    position: absolute;
    bottom: 0%;
    width: 100%;
    padding: 0 50px 0 50px;
    box-sizing: border-box; // 设置边框
  }
}
</style>
