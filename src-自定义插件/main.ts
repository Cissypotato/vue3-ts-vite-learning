import { createApp } from 'vue'
import './style.css'
import Loading from './components/loading'

import App from './App.vue'




// declare module 'vue'{
//     export interface ComponentCustomProperties{
//         $env:string,
//         $sayHello:SayHello
//     }
// }

const app =createApp(App)

app.use(Loading)
app.mount('#app')

type Load={
    show:()=>void,
    hide:()=>void
}
//@vue/runtime-core
declare module 'vue' {
    export interface componentCustomProperties{
        $CCLoading:Load
    }
}
