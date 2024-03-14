<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue';
import { reactive } from 'vue';

let loginForm = reactive({
  username: '',
  password: '',
});

const onLogin = () => {
  console.log('onLogin: ');
};
</script>

<template>
  <div class="container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login" :model="loginForm">
          <h1>天选智谷~~~</h1>
          <el-form-item>
            <el-input
              v-model="loginForm.username"
              placeholder="账号"
              :prefix-icon="User"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              v-model="loginForm.password"
              placeholder="密码"
              :prefix-icon="Lock"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login-btn" type="primary" @click="onLogin">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100%;
  background-image: url('../../assets/images/background.jpeg');
  background-color: rgba($color: #fff, $alpha: 0.4);
  background-repeat: no-repeat;
  background-size: cover;
  .login {
    padding: 60px 30px;
    width: 70%;
    position: relative;
    top: 25vh;
    background-color: rgba(0, 0, 0, 0.45);
    color: #e3e3f1;
    .login-btn {
      width: 100%;
    }
  }
}
</style>
