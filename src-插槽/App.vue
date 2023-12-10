<script setup lang="ts">

import MessageDialog from './components/MessageDialog.vue';
</script>

<template>

<MessageDialog>
  <div>i'm header</div>
  <template v-slot:main>
    <div>
      hello i'm main
    </div>
  </template>
  <div ></div>
</MessageDialog>
</template>

<style scoped>

</style>
