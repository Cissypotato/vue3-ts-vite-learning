<template>
  <div class="picture-box">
    <img v-for="item in arr" v-lazy="item" style="width: 100%" alt="" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import type { Directive } from "vue";

import defaultIMage from "../assets/vue.svg";
//vite提供了将一个文件夹里面的图片全部引入的方法
//glob 是懒加载模式
//相当于
// let modules={
//     'xxx':import('xxx')
// }
//globEager是静态加载模式
//相当于
//import xxx from 'xxxx'
// const imageList=import.meta.globEager('../assets/images/*.*')
const imageList: Record<string, { default: string }> = import.meta.glob(
  "../assets/images/*.*",
  { eager: true }
);

const arr = Object.values(imageList).map((item) => item.default);
// console.log('imageList11',imageList)
// console.log('arr',arr)

const vLazy: Directive<HTMLImageElement, string> = (el, binding) => {
  el.src = defaultIMage;

  const observer = new IntersectionObserver((entry) => {
    if (entry[0].intersectionRatio > 0) {
      setTimeout(() => {
        el.src = binding.value;
      }, 2000);

      observer.unobserve(el);
    }
  });
  observer.observe(el);
};
</script>
<style scoped>
.picture-box {
  height: 80vh;
  overflow: auto;
  width: 400px;
  border: 2px solid;
  margin: 0 auto;
}
</style>
