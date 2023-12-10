<template>
  <div>ref:{{ fairy1.name }}</div>
  <div>shallowRef:{{ fairy2.name }}</div>
  <br />
  <button @click="change">change fairy</button>
  <button @click="shallowChange">change shallow</button>

  <div ref="dom1">I’m dom</div>
  <div>{{ dom1 }}</div>
</template>

<script setup lang="ts">
import { ref, isRef,shallowRef,triggerRef,onMounted } from "vue";


// const dom1=ref<HTMLDivElement>() 
  const dom1=undefined

onMounted(() => {
  // const dom1=ref<HTMLDivElement>() 

  console.log('dom.value',dom1)
  // console.log('dom.value?.innerHTML',dom1.value?.innerText)
})



const change = () => {
  if (isRef(fairy1)) {
    fairy1.value.name = "xx";
    console.log("fairy1", fairy1);
  }
};
const fairy1 = ref({
  name: "cc",
});
const fairy2= shallowRef({
  name: "cici",
});

const shallowChange = () => {
  if (isRef(fairy2)) {
    triggerRef(fairy2)
    fairy2.value.name = "cci";
    // fairy1.value.name = "cci";//由于触发了triggerRef()，所以fairy2视图得以改变
   
    // console.log("fairy1", fairy1);
    // console.log("fairy2", fairy2);
   

  }
};


// const shallowChange = () => {
//     //fairy2.value.name = "cci";//视图层不会发生变化
//     fairy2.value={
//         name:'cci'
//     }//视图层变化

// };
</script>
<style scoped></style>
