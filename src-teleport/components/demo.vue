<template>
  <div class="f">
    <teleport to="#app" :disabled="false" >
      <Children></Children>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import Children from "./children.vue";
import { ref, reactive } from "vue";
</script>
<style scoped>
.f {
  height: 50vh;
  background-color: pink;
  position: relative;
}
</style>
