<template>
    <button @click="random">random</button>
  <div class="wrapper">
    <transition-group move-class="mmm">
        <div class="item" v-for="item in list" :key="item.id">{{ item.value }}</div>
    </transition-group>
    
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import _ from 'lodash'
import { random } from "gsap";

const list = ref(
  new Array(81).fill().map((_, index) => {
    return { id: index, value: (index % 9) + 1 };
  })
);
const random = () => {
  list.value = _.shuffle(list.value);
}
</script>
<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  width: calc(25px * 9);
  .item {
    box-sizing: border-box;
    width: 25px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    border: 1px solid #ccc;
  }
}
.mmm{
    transition: 1s;
}
</style>
