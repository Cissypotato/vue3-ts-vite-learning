<template>
  <div>
    <!-- <el-input placeholder="Please input" class="my-input" /> -->
    111
    <slot></slot>
  </div>
  <div class="box"></div>
</template>

<script setup lang="ts"></script>
<style scoped>
/* .my-input {
  margin: 200px;
  width: 300px;
}
.my-input :deep(.el-input__inner)  {
    background: red;
  } */
:slotted(.a) {
  color: red;
}

:global(.box) {
  width: 200px;
  height: 200px;
  border: 1px solid;
}
</style>
