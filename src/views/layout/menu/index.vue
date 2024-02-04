<template>
  <template v-for="item in menuList" :key="item.path">
    <template v-if="!item.children">
      <el-menu-item v-if="item.meta?.isShow" :index="item.path">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          {{ item.meta?.title }}
        </template>
      </el-menu-item>
    </template>
    <template v-if="item.children && item.children.length === 1">
      <el-menu-item
        v-if="item.children[0].meta?.isShow"
        :index="item.children[0].path"
      >
        <template #title>
          <el-icon>
            <component :is="item.children[0].meta.icon"></component>
          </el-icon>
          {{ item.children[0].meta?.title }}
        </template>
      </el-menu-item>
    </template>
    <template v-if="item.children && item.children.length > 1">
      <el-sub-menu v-if="item.meta?.isShow" :index="item.path">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          {{ item.meta?.title }}
        </template>
        <MyMenu :menuList="item.children"></MyMenu>
      </el-sub-menu>
    </template>
  </template>
</template>

<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'
// import { ref,reactive} from 'vue'
defineOptions({
  name: 'MyMenu',
})
defineProps<{
  menuList: RouteRecordRaw[]
}>()
</script>

<!-- <script lang="ts">
export default {
  name: 'Menu',
}
</script> -->
<style scoped></style>
