

type BusClass={
    emit:(name:string)=>void
    on:(name:string,callBack:Function)=>void
    off:(name:string)=>void
}


type ParamsKey= string | number | symbol
type List={
    [key:ParamsKey]:Array<Function>
}

class Bus implements BusClass{
    list:List
    constructor(){
        this.list={}
    }

    emit(name:string,...args:Array<any>){
        if(!this.list[name]) return
        const eventName:Array<Function>=this.list[name]
        eventName.forEach((fn)=>{
            fn.apply(this,args)
        })
    }
    on(name:string,callback:Function){
        const fnArr:Array<Function>=this.list[name] || []
        fnArr.push(callback)
        this.list[name]=fnArr
    }
    off(name:string){
        delete this.list[name]
    }
}


export default new Bus()