<template>
  <h2>B component</h2>
    <div><button @click="disconnect">off the Bus</button></div>
  <div class="area-box">
    {{ num1 }}
  </div>
</template>

<script setup lang="ts">
import Bus from "../bus";
import { ref } from "vue";
const num1 = ref(0);

Bus.on("changeNum", (n: number) => {
  num1.value= n;
});
const disconnect=()=>{
    Bus.off("changeNum")
}
</script>
<style scoped>
.area-box {
  width: 100px;
  height: 100px;
  border: 1px solid #000;
}
</style>
