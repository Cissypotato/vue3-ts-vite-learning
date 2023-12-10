<template>

<div class="wrapper">
    <header>
        <slot></slot>
    </header>
    <main>
        <slot name="main"></slot>
    </main>
    <footer>3</footer>
</div>

</template>

<script setup lang='ts'>

import { ref,reactive} from 'vue'

</script>
<style scoped>
.wrapper{
    width: 500px;
    border: 1px solid #000;
}
header{
    height: 20px;
    border-bottom: 1px solid #000;
}
main{
    padding: 20px;
    border-bottom: 1px solid #000;
}
footer{
    height: 20px;
    border-bottom: 1px solid #000;
}
</style>