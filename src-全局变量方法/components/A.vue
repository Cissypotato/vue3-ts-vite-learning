<template>
  <div>
    <!--template中可以直接使用-->
   <h1>{{$env}}</h1>
   <p>{{ $sayHello() }}</p>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";
const app=getCurrentInstance()
console.log(app?.proxy?.$sayHello());
//js中使用则需要先获取实例，然后再通过实例的proxy获取
</script>
<style scoped></style>
