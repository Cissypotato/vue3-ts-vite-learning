
<template>
    <p>infos:{{ testData.id }}--{{ testData.name }}</p>
    <p>解构:{{ id }}--{{ name }}</p>
    <div><button @click="change"> changeinfo</button></div>
      <A></A>
  </template>


<script setup lang="ts">
import { useTestStore } from './store';
import { storeToRefs } from 'pinia';
import A from './views/A.vue';
const testData=useTestStore()

//const { id ,name}=testData //直接解构是不具有响应式特性的
const { id ,name}=storeToRefs(testData) //可以通过pinia提供的storeToRefs()将解构数据变为响应式数据

const  change=()=>{
    id.value++
    //1.改单独某个属性，直接改
    //testData.id++
    //2.通过$patch方法,对象形式，可以改多个属性。
    // testData.$patch({id:344, name:'jack' })
    //3.通过$patch方法,函数形式，可以改多个属性。
    //  testData.$patch((state)=>{state.id=899;state.name='mary' })
    // 4.通过$state属性，整个state的所有属性都要改
    // testData.$state={id:890,name:'john'}
    //5.通过调用actions中的方法
    // testData.setId(788)
}

</script>



<style scoped>

</style>
