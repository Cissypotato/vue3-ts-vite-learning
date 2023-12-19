<script setup lang="ts">
import { ref } from "vue";
import { useCssVar } from '@vueuse/core'
const changeSize=(val:number)=>{
    const size = useCssVar('--font-size')
    size.value=val+'px'
    // document.documentElement.style.setProperty('--font-size',`${val}px`)
}
</script>

<template>
  <div>
    <header>
      <div>left</div>
      <div>center</div>
      <div>right</div>
    </header>
    <p>
      字体大小 <button @click="changeSize(32)">大</button>
      <button @click="changeSize(24)" >中</button>
      <button  @click="changeSize(14)">小</button>
    </p>
  </div>
</template>

<style lang="less" >
:root{
    --font-size:14px
}
header {
  display: flex;
  // border: 1px solid;
  // width: 100%;
  div {
    height: 50px;
    line-height: 50px;
    color: #fff;
    text-align: center;
    font-size: var(--font-size);
    &:nth-child(1) {
      background-color: palevioletred;
      width: 100px;
    }
    &:nth-child(2) {
      background-color: rgb(182, 48, 92);
      flex: 1;
    }
    &:nth-child(3) {
      background-color: rgb(133, 10, 51);
      width: 100px;
    }
  }
}
button{
    padding: 10px 60px;
    margin-left: 10px;
}
</style>
