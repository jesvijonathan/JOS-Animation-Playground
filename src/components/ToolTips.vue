<script setup>
import { ref } from "vue";
</script>
<template>
  <div id="mouse-tooltip" class="mouse-tooltip">
    <div class="tolltip-arrow"></div>
    <div id="tooltip-text">Empty</div>
  </div>
</template>

<style scoped>
.tolltip-arrow {
  width: 4vw;
  height: 4vw;
  background-color: rgb(255, 255, 255);
  top: -35%;
  margin: 0;
  left: 50%;
  border-top-left-radius: 100vw;
  border-top-right-radius: 100vw;
  position: absolute;
  transform: translateX(-50%);
  display: none;
}
.mouse-tooltip {
  color: black;
  transition: 0.1s ease;
  width: fit-content;
  height: 4vw;
  padding: 0 1vw;
  border-radius: 1vw;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid black;
  top: 0;
  left: 0%;
  transform: translateX(-50%);
  position: fixed;
  z-index: 3;
  display: none;
  align-items: center;
  justify-content: center;
  font-size: 1vw;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  flex-direction: column;
  white-space: nowrap;
}
</style>
