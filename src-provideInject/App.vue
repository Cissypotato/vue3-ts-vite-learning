<script setup lang="ts">
import A from "./components/A.vue";

import { ref, reactive, provide,readonly } from "vue";

const color = ref("red");

provide("color",readonly( color));
</script>

<template>
  <h2>爷爷</h2>
  <div>
    <label for="">
      red <input type="radio" value="red" v-model="color" />
    </label>
    <label for="">
      green <input type="radio" value="green" v-model="color" />
    </label>
    <label for="">
      pink <input type="radio" value="pink" v-model="color" />
    </label>
  </div>

  <div class="color-box"></div>

  <A></A>
</template>

<style scoped>
.color-box {
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  background-color: v-bind(color);
}
</style>
