<template>
 <h2>A component</h2>
 <p> <button @click="handleNum">change num</button></p>
 <div class="area-box">
  {{ num }}
 </div>
</template>

<script setup lang="ts">
import {getCurrentInstance} from 'vue'
import { ref} from "vue";

const instance=getCurrentInstance()

const num=ref(0)
const handleNum=()=>{
  num.value++
  instance?.proxy?.$Bus.emit('changeNum',num.value)
}

</script>
<style scoped>
 .area-box {
  width: 100px;
  height: 100px;
  border: 1px solid #000;
}
</style>
