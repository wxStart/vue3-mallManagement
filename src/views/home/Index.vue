<template>
  <div>登录后的页面</div>
</template>

<script setup lang="ts">
import useUserStore from 'src/store/modules/user';
import { onMounted } from 'vue';
import { ElNotification } from 'element-plus';
const userStore = useUserStore();

import type { userInfo } from 'src/api/user/type';

onMounted(async () => {
  await userStore.setUserInfo();
  ElNotification({
    type: 'success',
    message: `${(userStore.user.userInfo as userInfo).userName}`,
    title: '你好',
  });
});
</script>

<style lang="scss" scoped></style>
