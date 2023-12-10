<template>
  <div>
    <!-- <input type="text" @input="getValue" v-debounce /> -->
    <input v-debounce:1000="getValue" />
    <!-- <p>{{ value }}</p> -->
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, Directive, DirectiveBinding ,watch} from "vue";

const vDebounce: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    let timer

    const debounceFunc = (e: Event) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        binding.value(e);
      }, binding.arg || 500); // 500ms为默认的防抖时间
    };

    el.addEventListener('input', debounceFunc);

    el._debounceFunc = debounceFunc; // 在元素上存储函数引用，以便后续可以移除
  },
  beforeUnmount(el: HTMLElement) {
    el.removeEventListener('input', el._debounceFunc); // 在元素卸载前移除事件监听
  },
};

// const vDebounce: Directive = (
//   el: HTMLInputElement,
//   binding: DirectiveBinding
// ) => {
//   //   let timer;
//   //   el.addEventListener("input", () => {
//   //     if (timer) clearTimeout(timer);
//   //     timer = setTimeout(() => {
//   //         el.dispatchEvent(new Event('change'))
//   //     }, binding.value || 500);
//   //   });
//   let timer;
//   el.addEventListener("input", function () {
//     if (timer) {
//       clearTimeout(timer);
//     }
//     timer = setTimeout(() => {
//       el.dispatchEvent(new Event("change"));
//     }, binding.value || 500); // 500ms为默认的防抖时间
//   });
// };

// const value = ref("");
// watch(value,(newVal,oldVal)=>{
//     console.log('newVal',newVal)
// })
const getValue = (e: Event) => {
  console.log("e.target", e.target.value);
};
</script>
<style scoped></style>
