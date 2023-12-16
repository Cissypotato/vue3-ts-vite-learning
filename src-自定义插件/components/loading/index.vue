<template>

<div class="box" v-if="isShow">
    <div>Loading</div>
</div>

</template>

<script setup lang='ts'>

import { ref,reactive} from 'vue'
 const isShow =ref<boolean>(false)
 const show=()=>isShow.value=true
 const hide=()=>isShow.value=false
 defineExpose({
    show,
    hide,
    isShow
 })
</script>
<style scoped>

.box{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    opacity: 0.8;
    color: aliceblue;
}
</style>