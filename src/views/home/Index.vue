<template>
  <div>登录后的页面</div>
</template>

<script setup lang="ts">
import useUserStore from 'src/store/modules/user';

const userStore = useUserStore();
console.log('userStore: ', userStore);
</script>

<style lang="scss" scoped></style>
