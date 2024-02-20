import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';


// https://vitejs.dev/config/
export default defineConfig({
  // 注册插件
  plugins: [
    react(),
    visualizer({
      open: false, //注意这里要设置为true，否则无效
      gzipSize: false,
      brotliSize: false,
    })
  ],
  server: {
    // open: true, // 项目启动打开浏览器
    // port: 3000, // 设置服务启动端口号
    // hmr: true, // 自动刷新，热启动
  },
  // 配置路径别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  // 配置全局样式
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/index.scss";`,
        // javascriptEnabled: true,
        // modifyVars: {
        //   'primary-color': '#1DA57A', // 全局主题色变量
        // },
      },
    },
  },
  // 打包配置
  // build: {
  //   target: "modules", //设置最终构建的浏览器兼容目标  //es2015(编译成es5) | modules
  //   outDir: "dist", // 构建得包名  默认：dist
  //   assetsDir: "assets", // 静态资源得存放路径文件名  assets
  //   sourcemap: false, //构建后是否生成 source map 文件
  //   minify: "esbuild", // 项目压缩 :boolean | 'terser' | 'esbuild'
  //   chunkSizeWarningLimit: 1000, //chunk 大小警告的限制（以 kbs 为单位）默认：500
  //   cssTarget: "chrome61", //防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制符号的形式  (要兼容的场景是安卓微信中的 webview 时,它不支持 CSS 中的 #RGBA 十六进制颜色符号)
  // },

})