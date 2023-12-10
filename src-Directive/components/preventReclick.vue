<template>
  <div>
    <button @click="clickMe" v-prevent-reclick>click me</button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, Directive, DirectiveBinding } from "vue";

const vPreventReclick: Directive = (
  el: HTMLButtonElement,
  binding: DirectiveBinding
) => {
  el.addEventListener("click", () => {
    if (!el.disabled) {
      el.disabled = true;
      setTimeout(() => {
        el.disabled = false;
      }, binding.value || 2000);
    }
  });
};
const clickMe = () => {
  console.log("1", 1);
};
</script>
<style scoped></style>
