<script setup>
import { defineProps } from "vue";
defineProps(["msg"]);
</script>

<template>
  <section>
    {{ msg }}
  </section>
</template>
<style scoped>
section {
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  z-index: 2;
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-size: 5vw;
}
</style>
