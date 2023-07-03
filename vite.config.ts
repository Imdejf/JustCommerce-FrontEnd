import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 6060,
  },
  plugins: [
    vue(),
    vueJsx(),

  ],
  resolve: {
    alias: [
      { find: '/@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '/IMG', replacement: fileURLToPath(new URL('./src/assets/images/', import.meta.url)) },
    ],
    extensions: ['.js','.ts','.json','.jsx','.mjs','.tsx','.vue']
  },
  base: '/'
})
