import { createApp } from 'vue'
// import './style.css'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//@ts-expect-error 没有ts声明文件忽略ts类型检查
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import globalComponents from './plugins/globalComponents'
import './styles/index.scss'
import router from '@/router'
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(globalComponents)
app.use(router)

app.mount('#app')
