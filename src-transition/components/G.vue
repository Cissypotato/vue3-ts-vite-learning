<template>
  <input type="number" step="20" v-model="num.currentNum" />
  <div>{{ num.currentNum2.toFixed(0) }}</div>
</template>

<script setup lang="ts">
import { ref, watch, reactive } from "vue";
import gsap from "gsap";

const num = reactive({
  currentNum: 0,
  currentNum2: 0,
});

watch(
  () => num.currentNum,
  (newVal, oldVal) => {
    gsap.to(num, { 
        duration:1,
        currentNum2: newVal
     });
  }
);
</script>
<style scoped></style>
