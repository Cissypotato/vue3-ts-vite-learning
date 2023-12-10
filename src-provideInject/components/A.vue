<template>

<h2> 爸爸</h2>
<div>
    <div class="color-box"></div>
</div>
<B></B>
</template>

<script setup lang='ts'>
import B from "./B.vue";
import { ref,reactive,inject,onMounted} from 'vue'

const color =inject('color')
console.log("color 父亲", color);
onMounted(() => {
    console.log("mounted 父亲");
})

</script>
<style scoped>
.color-box {
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  background-color: v-bind(color);
}
</style>
