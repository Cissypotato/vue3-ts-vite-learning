<template>
  <div class="logo">
    <img :src="setting.logo" alt="" v-if="setting.logoHiden" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
// import { ref, reactive } from 'vue'
import setting from '@/setting'
</script>
<style scoped lang="scss">
.logo {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: white;
  padding: 10px;
  > img {
    height: 40px;
  }
  > p {
    padding-left: 4px;
    font-size: 20px;
  }
}
</style>
