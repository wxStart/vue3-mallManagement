import { defineStore } from 'pinia';
import { ref } from 'vue';

const useSettingStore = defineStore('setting', () => {
  const fold = ref(false);
  return {
    fold,
    changeFold() {
      fold.value = !fold.value;
    },
  };
});

export default useSettingStore;
