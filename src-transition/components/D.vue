<template>
  <div class="box">
    <!-- <button @click="flag = !flag">switch</button>
    <button @click="isShow = !isShow">show</button> -->
    <button @click="add">add</button>
    <button @click="reduce">reduce</button>

    <div class="item-wrapper">
      <transition-group
        enter-active-class="animate__animated animate__flash"
        leave-active-class="animate__animated animate__backOutDown"
      >
      <!-- <div class="item1" v-if="flag"></div>
      <div class="item2" v-if="isShow"></div> -->
        <div v-for="item in list" :key="item">{{ item }}</div>
      </transition-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

const flag = ref(true);
const isShow = ref(true);
const list = reactive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
const add = () => {
  list.push(list.length + 1);
};
const reduce = () => {
  list.pop();
};
</script>
<style scoped>
.box {
  width: 70vw;
  margin: 10vh auto;
  height: 70vh;
  border: 1px solid #ddd;
}
/* .item {
    width: 200px;
    height: 200px;
    background-color: pink;
  } */
  .item1 {
    width: 200px;
    height: 200px;
    background-color: pink;
  }
  .item2 {
    width: 200px;
    height: 200px;
    background-color: rgb(190, 100, 115);
  }
.item-wrapper {
  display: flex;
  flex-wrap: wrap;
  > div {
    margin-left: 8px;
    border: 1px solid #ddd;
  }
}
</style>
