<template>
  <div class="box">
    <button @click="flag = !flag">switch</button>
    <transition
      enter-active-class="animate__animated animate__flash"
      leave-active-class="animate__animated animate__backOutDown"
      @before-enter="enterFrom"
      @enter="enterActive"
      @after-enter="enterTo"
      @enter-cancelled="enterCancel"
      @before-leave="leaveFrom"
      @leave="leaveActive"
      @after-leave="leaveTo"
      @leave-cancelled="leaveCancel"
    >
      <div v-if="flag" class="item"></div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
const flag = ref(true);
const enterFrom = (el:Element) => {
  console.log("进入之前");
};
const enterActive = (el:Element,done:Function) => {
  console.log("动画曲线");
  setTimeout(()=>{
    done()
  },3000)//动画3秒之后完这时执行enter-to
};
const enterTo = (el:Element) => {
  console.log("过渡完成之后");
};
const enterCancel = (el:Element) => {
  console.log("进入过渡效果被打断");
};
const leaveFrom = (el:Element) => {
  console.log("leave-From");
};
const leaveActive = (el:Element) => {
  console.log("leave-active");
};
const leaveTo = (el:Element) => {
  console.log("leave-to");
};
const leaveCancel = (el:Element) => {
  console.log("离开入过渡效果被打断");
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
