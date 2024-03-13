<script setup lang="ts">
import { ElConfigProvider } from 'element-plus';
import { ref } from 'vue';
import { Menu } from '@element-plus/icons-vue';
import zhCn from 'element-plus/dist/locale/zh-cn';

const size = ref<'default' | 'large' | 'small'>('default');
const time = ref('');
const locale = zhCn;
</script>

<template>
  <div>
    <el-config-provider :locale="locale">
      <el-button type="primary" :icon="Menu">Primary</el-button>
      <el-date-picker
        v-model="time"
        type="date"
        placeholder="Pick a day"
        :size="size"
      />
      <SvgIcon name="car" width="30px" height="30px" />
      <SvgIcon name="motuo" color="red" />
    </el-config-provider>

    <h3>测试scss的全局变量</h3>
  </div>
</template>

<style scoped lang="scss">
h3 {
  color: $redColor;
}
</style>
