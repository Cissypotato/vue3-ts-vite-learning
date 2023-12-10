<template>
<div>raw cat:{{cat}}</div>
<div>toRef cat's age:{{catAge}}</div>
<div @click="changeCat"> <button>change cat</button></div>
<hr>
<br>
<div>reactive person:{{person}}</div>

<div>
    {{ name0 }}  
</div>
<div>toRef:{{ name1 }}</div>
<div>toRefs:{{ name}}--{{ age }}--{{ gender }}</div>

<br>
<button @click="chnage">change person</button>
</template>

<script setup lang='ts'>
import { toRef,toRefs,reactive} from 'vue'

const cat={
    name:'mimi',
    age:2
}
const catAge=toRef(cat,'age')//toRef原生对象不会起作用,只能对响应式数据起作用
function changeCat(){
    cat.age++
    console.log('cat',cat)
}



const person=reactive({
    name:'rose',
    age:19,
    gender:'male'
})

const name0=person.name//单独将响应式数据的属性取出来用readonly once
const name1=toRef(person,'name') //要想将响应式数据的某个属性单独提出来响应式使用
const {name,age,gender}=toRefs(person)//解构响应式数据，并且解构出来的数据是响应式和原数据相关联
function chnage(){
    person.name='mary'
    person.age++
    gender.value='female'//结构出来的值是ref对象，要用.value获取值
}

// const person1=toRaw(person)
</script>
<style scoped>

</style>