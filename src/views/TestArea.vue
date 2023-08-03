<script setup>
import { ref, onMounted, onUnmounted, onUpdated } from "vue";
import { defineProps } from "vue";
import JOS from "jos-animation";

onMounted(() => {
  const boxes = document.querySelectorAll(".box");
  const boxee = document.querySelector(".box");
  boxes.forEach((box) => {
    box.classList.add("jos");
    box.setAttribute("data-jos_animation", "grow");
    box.setAttribute("data-jos_duration", "0.7");
    box.setAttribute("data-jos_rootMargin_bottom", "40%");
    box.setAttribute("data-jos_rootMargin_top", "20%");
  });
  JOS.refresh();
});

// onUpdated(() => {
//   JOS.refresh();
// });
</script>
<template>
  <section>
    <div class="box jos"></div>
    <div class="box jos"></div>
    <div class="box jos"></div>
    <div class="box jos"></div>
  </section>
</template>

<style scoped>
section {
  width: 100vw;
  height: fit-content;
  padding: 10vw;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    var(--color-tertiary) 0%,
    var(--color-background) 100%
  );
  display: flex;
  align-items: center;
  align-self: center;
  flex-direction: column;
  justify-content: space-around;
  gap: 7vw;
}

.box {
  width: 10vw;
  height: 10vw;
  background-color: var(--color-primary);
}
</style>
