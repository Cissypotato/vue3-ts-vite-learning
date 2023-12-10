<template>
  <h2>孙子</h2>
  <div>
    <button @click="changeColor">change color</button>
  </div>
  <div>
    <div class="color-box"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, inject ,onMounted} from "vue";
import type { Ref } from "vue";

const color = inject<Ref<string>>("color");
console.log("color 孙子", color);
onMounted(() => {
    console.log("mounted 孙子");
})

const changeColor = () => {
  color!.value = "cadetblue";
};
</script>
<style scoped>
.color-box {
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  background-color: v-bind(color);
}
</style>
