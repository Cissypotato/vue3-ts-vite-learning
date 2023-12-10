<template>
  <div>
    <img
      src="../assets/images/zyl.jpg"
      id="myImg"
      width="300"
      height="300"
      alt=""
      srcset=""
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import useBase64 from "../hooks";

onMounted(() => {
  console.log(" I'm A ");
});
const imgUrl = useBase64({ el: "#myImg" }).then((res) => {
  console.log("res.cl", res.base64Url);
});
</script>
<style scoped></style>
