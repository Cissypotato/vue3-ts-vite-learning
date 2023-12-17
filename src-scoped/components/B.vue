<template>
  <div>
    <p class="b-p">cat cata</p>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
// const color = ref("red");
const style= ref({color:"red"});
setTimeout(() => {
//   color.value = "pink";
style.value.color='green'
}, 3000);
</script>
<style scoped>
.b-p {
  /* color: v-bind(color); */
  color: v-bind('style.color');/**对象的话要加单引号 */
}
</style>
