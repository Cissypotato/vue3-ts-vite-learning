<template>
  <div class="box">
    <button @click="flag = !flag">switch</button>
    <transition name="fade">
      <div v-if="flag" class="item"></div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

const flag = ref(true);
</script>
<style scoped>
.box {
  width: 70vw;
  margin: 10vh auto;
  height: 70vh;
  border: 1px solid #ddd;
}
.item {
  width: 200px;
  height: 200px;
  background-color: pink;
}
.fade-enter-from {
  width: 0;
  height: 0;
}
.fade-enter-active {
  transition: all 2s ease;
}

.fade-enter-to {
  width: 200px;
  height: 200px;
  transform: rotate(360deg);
}

.fade-leave-from {
  width: 200px;
  height: 200px;
}
.fade-leave-active {
  transition: all 2s ease;
}
.fade-leave-to {
  width: 0;
  height: 0;
  transform: rotate(360deg);
}


</style>
