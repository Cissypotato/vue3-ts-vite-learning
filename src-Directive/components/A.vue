<template>
  <h2>自定义指令</h2>
  <p><button @click="isShow = !isShow">switch</button></p>
  <div class="area-box">
    <p v-if="isShow" v-word-color="'red'">v-word-color 就IOHOCASUVIUSBVIS</p>
  </div>
</template>

<script setup lang="ts">
import { ref, Directive, DirectiveBinding } from "vue";
const isShow = ref(true);
const vWordColor: Directive = {
  created(){
    console.log(" created");
  },
  beforeMount() {
    console.log(" beforeMount");
  },
  // mounted(...args:Array<any>){
  //   console.log('mounted',args )
  // },
  mounted(el: HTMLElement, dir: DirectiveBinding) {
    el.style.color=dir.value
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>
<style scoped>
.area-box {
  width: 300px;
  height: 300px;
  border: 1px solid #000;
}
</style>
