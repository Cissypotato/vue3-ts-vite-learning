<template>
  <div class="layout-container">
    <div class="slide-bar">
      <Logo></Logo>
      <el-scrollbar class="scroll-bar">
        <el-menu background-color="#001529" text-color="white" :router="true">
          <Menu :menuList="menuList"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="top-bar">top-bar</div>
    <div class="main-content">
      mian
      <p style="height: 100vh"></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import useUserStore from '@/store/modules/user'
const menuList = useUserStore().constantRoutes
// import { ref,reactive} from 'vue'
</script>
<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100vh;
  background-color: pink;
  display: grid;
  grid-template-columns: $slide-bar-width calc(100% - $slide-bar-width);
  grid-template-rows: $top-bar-height calc(100vh - $top-bar-height);
  .slide-bar {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
    background-color: $base-menu-background;
    .scroll-bar {
      height: calc(100vh - 50px);
      .el-menu {
        border-right: none;
      }
    }
  }
  .top-bar {
    background-color: aquamarine;
  }
  .main-content {
    background-color: royalblue;
    padding: 20px;
    overflow: auto;
    // margin: 20px;
  }
}
</style>
