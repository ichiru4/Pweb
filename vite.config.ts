import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
// https://vite.dev/config/
const svgIconsPlugin = createSvgIconsPlugin({
  iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
  symbolId: 'icon-[dir]-[name]',
});
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    svgIconsPlugin,

  ],
  // server:{
  //   proxy:{
  //     '/api':{
  //       target:'http://localhost:5161',
  //       changeOrigin:true,
  //       rewrite:path => path.replace(/^\/api/, '')
  //     }
  //   }
  // },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})

 

