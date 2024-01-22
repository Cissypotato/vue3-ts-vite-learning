<template>
  <div>
    <svg :style="{ width, height }">
      <use :href="prex + name" :fill="color"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps({
  prex: {
    type: String,
    default: '#icon-',
  },
  name: String,
  color: {
    type: String,
    default: '#333',
  },
  width: {
    type: String,
    default: '10px',
  },
  height: {
    type: String,
    default: '10px',
  },
})
</script>
<style scoped></style>
