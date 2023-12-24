

import {defineStore} from 'pinia'

interface User{
    name:string,
    id:number
}

const result:User={
    name:'rose',
    id:333
}

const login=()=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(result)
        }, 2000);
    })
}

export const useTestStore=defineStore('test',{
    state:()=>{
        return{
            user:<User>{},
            id:444,
            name:'rose jo'
        }
    },
    //相当于computed 修饰一些值
    getters:{
        newId():string{
            return `${this.id}-1`
        },
        newName():string{
            //getters里面的属性也可以相互使用
            return this.newId + '-' +this.name
        }

    },
    //相当于methods，同步异步都可
    actions:{
        setId(id:number){
            this.id=id
        },
       async setUser(){
            // this.user=result
            const res=await login()
            this.user=res
            //action中的方法还可以互相调用
            this.setId(999)
        }
    }
})