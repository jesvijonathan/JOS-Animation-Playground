<script setup></script>

<template>
  <div
    class="scroll_down jos"
    data-jos_duration="2"
    data-jos_animation="fade-down"
    data-jos_delay="0.9"
  >
    <i class="fa-solid fa-arrow-down"></i>
  </div>
</template>

<style scoped>
.scroll_down {
  background-color: white;
  height: 3vw;
  width: 3vw;
  border-radius: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: black;
  font-size: 1.5vw;
  cursor: pointer;
  transition: 0.1s ease;
  position: fixed;
  bottom: 5%;
  right: 3%;
  z-index: 1;
}
.scroll_down:hover {
  background-color: var(--grey);
  color: white;
}
</style>
