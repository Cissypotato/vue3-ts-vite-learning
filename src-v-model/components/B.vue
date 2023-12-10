<template>
  <div v-if="isShow">
  <h2>children component</h2>
  <div><button @click="close">close</button></div>
  <div><button @click="changeNum">change num</button></div>
  <div class="area-box">
    {{ num }}
  </div>
</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// type Props={
//   num:number,
//   isShow:boolean
// }
const props=defineProps(['num','isShow'])
const emits=defineEmits(['update:num','update:isShow'])
// let $emit = defineEmits(["update:num", "update:isShow"]);

const close=()=>{
  emits('update:isShow',false)
}
const changeNum=()=>{
  emits('update:num',props.num+1)
}

</script>
<style scoped>
.area-box {
  width: 100px;
  height: 100px;
  border: 1px solid #000;
}
</style>
