
//vite内置了postcss，无需自己安装
import { Plugin } from "postcss"

interface Options{
    viewPortwidth?:number
}
const defaultOpt={viewPortwidth:375}

export const PostcssPxToViewport=(options:Options=defaultOpt):Plugin=>{
   
    return{
        postcssPlugin:'postcss-px-to-viewport',
        Declaration(node){
            if(node.value.includes('px')){
                const val=parseFloat(node.value)
                node.value=`${((val/options.viewPortwidth)*100).toFixed(2)}vw`
            }
        }
    }
}