<template>
  <h2>B component</h2>
  <div><button @click="disconnect">off the Bus</button></div>
  <div class="area-box">
    {{ num1 }}
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";
import { ref } from "vue";
const num1 = ref(0);
const instance = getCurrentInstance();

const fn = (n: number) => {
  num1.value = n;
};
instance?.proxy?.$Bus.on("changeNum", (n) => {
  num1.value = n;
});

const disconnect = () => {
  instance?.proxy?.$Bus.off("changeNum");
};
</script>
<style scoped>
.area-box {
  width: 100px;
  height: 100px;
  border: 1px solid #000;
}
</style>
