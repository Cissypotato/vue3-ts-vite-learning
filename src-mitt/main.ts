import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import Mitt from 'mitt'

const Bus=Mitt()

declare module 'vue'{
    export interface ComponentCustomProperties{
        $Bus: typeof Bus
    }
}
const app =createApp(App)
app.config.globalProperties.$Bus = Bus
app.mount('#app')
