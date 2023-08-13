<script setup>
// import noises from "@/assets/Noise.webp";
</script>
<template>
  <div class="noise-container"></div>
</template>
<style scoped>
.noise-container {
  background-attachment: fixed;
  background-repeat: repeat;
  background-size: auto;
  opacity: 1;
  transition: 1s;
  z-index: 102;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 12;
  background-image: url("@/assets/noise.webp");
  animation: 1s steps(10) infinite noise-animation;
  background-position: 0 0;
  filter: contrast(0.5);
}
@keyframes noise-animation {
  100% {
    background-position: 100% 100%;
  }
}
</style>
