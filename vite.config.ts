import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// svg 图标需要使用的插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
// mock 插件
import { viteMockServe } from 'vite-plugin-mock';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log('command: ', command);
  const env = loadEnv(mode, process.cwd());
  console.log('env: ', env);
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        mockPath: 'mock',
        enable: command == 'serve',
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        src: path.resolve('./src'),
      },

      // alias: [
      //   {
      //     find: '@',
      //     replacement: path.resolve(__dirname, 'src'),
      //   },
      // ],
      // extensions: ['.js', '.ts', '.vue', '.json'],
    },
    // scss 全局变量配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";', //分号很重要
        },
      },
    },
    server: {
      proxy: {
        /**
         * {
         *  /api:{
         *   target:'http://地址'
         *  }
         * }
         */
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_APP_SEVER,
          changeOrigin: true,
          rewrite: (pathName) => pathName.replace(/^\/api/, ''),
        },
      },
    },
  };
});
