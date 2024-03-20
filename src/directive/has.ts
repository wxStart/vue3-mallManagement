import pinia from 'src/store';
import useUserStore from 'src/store/modules/user';
const userStore = useUserStore(pinia);

export const isHasButton = (app: any) => {
  app.directive('has', {
    mounted(el: any, options: any) {
      if (!userStore.user.buttons.includes(options.value)) {
        el.parentNode.removeChild(el);
      }
    },
  });
};
