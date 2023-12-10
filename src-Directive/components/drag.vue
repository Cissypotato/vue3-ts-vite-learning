<template>
  <!--自定义指令之拖拽-->
  <div class="box" v-move>
    <div class="header"></div>
    <div class="content"></div>
  </div>
</template>

<script setup lang="ts">
import {Directive, DirectiveBinding } from "vue";

const vMove: Directive = (el: HTMLElement, binding: DirectiveBinding) => {
  const moveElement: HTMLDivElement = el.firstElementChild as HTMLDivElement;
  const down = (ev: MouseEvent) => {
    var ev = ev || window.event;
    // 获取鼠标相对于元素的位置
    const disX = ev.clientX - el.offsetLeft;
    const disY = ev.clientY - el.offsetTop;
    // 鼠标移动事件
    const move = (ev) => {
      var ev = ev || window.event;
      // 计算元素的位置
      let l = ev.clientX - disX;
      let t = ev.clientY - disY;
      // 判断元素是否碰到了边界
      if (l < 0) {
        l = 0;
      } else if (l > document.documentElement.clientWidth - el.offsetWidth) {
        l = document.documentElement.clientWidth - el.offsetWidth;
      }
      if (t < 0) {
        t = 0;
      } else if (t > document.documentElement.clientHeight - el.offsetHeight) {
        t = document.documentElement.clientHeight - el.offsetHeight;
      }
      // 设置元素的位置
      el.style.left = l + "px";
      el.style.top = t + "px";
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", move);
    });
  };
  moveElement.addEventListener("mousedown", down);
};
</script>
<style scoped>
.box {
  width: 200px;
  height: 200px;
  border: 1px solid #000;
  position: fixed;
  top: 50%;
  left: 50%;
  .header {
    height: 15%;
    background-color: #000;
  }
}
</style>
