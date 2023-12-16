<template>
  <div>
    <!-- <Loading></Loading> -->
  </div>
</template>

<script setup lang="ts">
// import Loading from './loading/index.vue'
import { getCurrentInstance } from "vue";
const instance = getCurrentInstance();
instance?.proxy?.$CCLoading.show();

setTimeout(() => {
  instance?.proxy?.$CCLoading.hide();
}, 5000);

//js中使用则需要先获取实例，然后再通过实例的proxy获取
</script>
<style scoped></style>
