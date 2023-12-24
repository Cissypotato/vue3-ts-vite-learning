
<template>

    <hr>
    <h3>a component</h3>
    <p>infos actions:{{ testData.user.id }}--{{ testData.user.name }}</p>
    <p>getters:{{ testData.newId }}</p><!--getters里面的属性和state里面一样直接使用-->
    <p>getters:{{ testData.newName }}</p>
    <p><button @click="change">change</button></p>
    <p><button @click="reset">reset</button></p>

      
  </template>


<script setup lang="ts">
import { useTestStore } from '../store';

const testData=useTestStore()
 console.log('testData',testData)
const change=()=>{
    testData.setUser()
}
const reset=()=>{
    testData.$reset()
}

</script>



<style scoped>

</style>
