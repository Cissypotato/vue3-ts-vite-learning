<script setup lang="ts">
import { shallowRef, ref, reactive } from "vue";
import A from "./components/A.vue";
import B from "./components/B.vue";
import C from "./components/C.vue";

const componentId = shallowRef(A);
const activeIndex = ref(0);
const activeData =[
  {
    name: "组件A",
    com: A,
  },
  {
    name: "组件B",
    com: B,
  },
  {
    name: "组件C",
    com: C,
  },
]
function handleTab(item, index) {
  componentId.value = item.com;
  activeIndex.value = index;
}
</script>

<template>
  <div class="tab">
    <div
      v-for="(item, index) in activeData"
      class="item"
      :class="[activeIndex === index ? 'active' : '']"
      @click="handleTab(item, index)"
    >
      {{ item.name }}
    </div>
  </div>
  <component :is="componentId"></component>
</template>

<style scoped>
.tab {
  display: flex;
}
.item {
  padding: 10px;
  margin: 20px;
  height: 30px;
  border: 1px solid #ccc;
}
.active {
  background-color: aquamarine;
}
</style>
