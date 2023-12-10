<template>
  <div>
    <button v-has-permission="'manage:add'">新增</button>
    <button v-has-permission="'manage:edit'">编辑</button>
    <button v-has-permission="'manage:delete'">删除</button>
  </div>
</template>

<script setup lang="ts">
import { Directive, DirectiveBinding } from "vue";

localStorage.setItem("usreId", "rose-999");

//mock后台返回的权限数据,一般存储于vuex或pina中
const permission = [
  "rose-999:manage:add",
  "rose-999:manage:edit",
  "rose-999:manage:delete",
];
const userId = localStorage.getItem("usreId");
//Directive 的简写形式
const vHasPermission: Directive = (
  el: HTMLDivElement,
  binding: DirectiveBinding
) => {
  if (!permission.includes(userId + ":" + binding.value)) {
    el.parentNode && el.parentNode.removeChild(el);
  }
};
</script>
<style scoped>
button {
  margin: 20px;
}
</style>
