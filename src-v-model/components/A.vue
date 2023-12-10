<template>
 <h2>Father component</h2>
 <p> <button @click="handleNum">change num</button> &nbsp; <button @click="isShow=!isShow">handle son component</button></p>
 <div class="area-box">
  {{ num }}
 </div>
 <B v-model:num="num" v-model:isShow="isShow"></B>
</template>

<script setup lang="ts">

import { ref} from "vue";
import B from './B.vue'


const num=ref(0)
const isShow=ref(true)
const handleNum=()=>{
  num.value++
}

</script>
<style scoped>
 .area-box {
  width: 100px;
  height: 100px;
  border: 1px solid #000;
}
</style>
