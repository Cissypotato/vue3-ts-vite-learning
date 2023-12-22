
import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'



// https://vitejs.dev/config/
export default ({mode})=>{
console.log(loadEnv(mode,process.cwd()) )
  return defineConfig({
    plugins: [vue()],
  })
}