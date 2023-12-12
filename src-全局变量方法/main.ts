import { createApp } from 'vue'
import './style.css'

import App from './App.vue'


type SayHello=()=>string
//配合ts使用时则需要声明类型，通过declare在vue上追加
declare module 'vue'{
    export interface ComponentCustomProperties{
        $env:string,
        $sayHello:SayHello
    }
}


const app =createApp(App)
//通过app.config.globalProperties添加全局方法和变量
app.config.globalProperties.$env = 'cat world'
app.config.globalProperties.$sayHello =()=>{
    return 'miao miao'
} 

app.mount('#app')
