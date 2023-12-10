<template>
  <div class="box">
    <button @click="flag = !flag">switch</button>
    <transition
      @before-enter="enterFrom"
      @enter="enterActive"
      @leave="leaveActive"
    >
      <div v-if="flag" class="item"></div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { gsap } from "gsap";
const flag = ref(true);
const enterFrom = (el: Element) => {
  gsap.set(el, { width: 0, height: 0,  });
};
const enterActive = (el: Element, done: gsap.Callback) => {
  gsap.to(el, { width: 200, height: 200, onComplete: done });
};

const leaveActive = (el: Element, done: gsap.Callback) => {
  gsap.to(el, { width: 0, height: 0, onComplete: done });
};
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
</style>
