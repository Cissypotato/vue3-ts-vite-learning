<template>
    <div class="box">
      <button @click="flag = !flag">switch</button>
      <transition :duration="1000" enter-active-class="animate__animated animate__bounce" leave-active-class="animate__animated animate__backOutDown">
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
  
  </style>
  