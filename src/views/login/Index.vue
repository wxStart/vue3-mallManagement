<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue';
import { reactive, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { ElNotification } from 'element-plus';
import type { FormInstance, FormRules } from 'element-plus';

import useUserStore from 'src/store/modules/user';
let loginForm = reactive({
  username: 'admin',
  password: '111111',
});
const loginLoading = ref(false);

const $router = useRouter();
const $route = useRoute();
console.log('$route: ', $route);
const userStore = useUserStore();

interface RuleForm {
  username: string;
  password: string;
}
const ruleFormRef = ref<FormInstance>();

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'));
  } else {
    if (value.length < 6) {
      callback(new Error('密码长度必须大于6位'));
      return;
    }

    callback();
  }
};

const rules = reactive<FormRules<RuleForm>>({
  username: [
    {
      required: true,
      min: 4,
      max: 10,
      message: '用户名长度应该为4到10位',
      trigger: 'change',
    },
  ],
  password: [
    {
      validator: validatePass,
      trigger: ['blur', 'change'],
    },
  ],
});

const onLogin = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  // 表单验证
  formEl.validate(async (valid) => {
    if (!valid) {
      return false;
    }
    loginLoading.value = true;

    try {
      await userStore.handleLogin(loginForm);
      ElNotification({
        type: 'success',
        message: '登录成功',
      });
      const redirect: string =
        ($route.query && ($route.query.redirect as string)) || '';
      $router.push(redirect || '/');
    } catch (error) {
      console.log('error: ', error);
      ElNotification({
        type: 'error',
        message: (error as Error).message,
      });
    }
    loginLoading.value = false;
  });
};
</script>

<template>
  <div class="container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login"
          ref="ruleFormRef"
          :model="loginForm"
          :rules="rules"
        >
          <h1>天选智谷~~~</h1>
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              placeholder="账号"
              :prefix-icon="User"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="loginForm.password"
              placeholder="密码"
              :prefix-icon="Lock"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="login-btn"
              type="primary"
              :loading="loginLoading"
              @click="onLogin(ruleFormRef)"
            >
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
    h1 {
      margin-bottom: 20px;
      font-size: 22px;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
