<template>

<div class="child">child</div>

</template>

<script setup lang='ts'>

import { ref,reactive} from 'vue'

</script>
<style scoped>
.child{
    width: 200px;
    height: 200px;
    background-color: bisque;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -100px;
    margin-top: -100px;
}
</style>