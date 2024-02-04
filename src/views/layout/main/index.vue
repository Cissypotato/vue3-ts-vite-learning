<template>
  <router-view v-slot="{ Component }">
    <Transition name="fade">
      <component :is="Component"></component>
    </Transition>
  </router-view>
</template>

<script setup lang="ts">
// import { ref, reactive } from 'vue'
</script>
<style scoped lang="scss">
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: all 1s;
}
</style>
