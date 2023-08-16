<script setup>
import { defineProps } from "vue";

let { moveToID } = defineProps(["moveToID"]);

function scrollToNext(e) {
  const next = document.querySelector("#" + e.dataset.hover_data);
  next.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <div
    class="scroll_down jos"
    data-jos_duration="2"
    data-jos_animation="fade-down"
    data-jos_delay="0.9"
    :data-hover_data="moveToID"
    @click="scrollToNext($el)"
  >
    <i class="fa-solid fa-arrow-down"></i>
  </div>
</template>

<style scoped>
.scroll_down {
  background-color: var(--grey);
  height: 3.4vw;
  width: 3.4vw;
  border-radius: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: var(--color-primary);
  font-size: 1.5vw;
  cursor: pointer;
  transition: 0.1s ease;
  position: fixed;
  bottom: 5%;
  right: 3%;
  z-index: 1;
  transition: all 1.4s 0.9s, background-color 0.1s 0s, color 0.1s 0s !important;
}
.scroll_down:hover {
  background-color: var(--color-primary);
  color: var(--color-background);
}
</style>
