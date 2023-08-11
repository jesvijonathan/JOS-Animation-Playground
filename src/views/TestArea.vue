<script setup>
import { ref, onMounted, onUnmounted, onUpdated } from "vue";
import { defineProps } from "vue";

const { playgroundSettings } = defineProps(["playgroundSettings"]);

// const playgroundSettings = ref({
//   cubeColor: "#ffffff",
//   cubeSize: 100,
//   backgroundColor: "#000",
//   totalCubes: 10,
//   rootmarginVisible: false,
//   newCubeOption: true,
// });
</script>
<template>
  <section>
    <!--     <div class="box jos"></div> -->
    <!-- use v-for  -->
    <div v-if="playgroundSettings.rootmarginVisible" class="rootMar"></div>
    <div v-for="setting in playgroundSettings.totalCubes" class="box jos"></div>
    <div v-if="playgroundSettings.newCubeOption" class="addcube">+</div>
  </section>
</template>

<style scoped>
section {
  width: 100vw;
  height: fit-content;
  padding: 10vw;
  position: relative;
  overflow: hidden;
  /* background: linear-gradient(
    180deg,
    var(--color-tertiary) 0%,
    var(--color-background) 100%
  ); */
  display: flex;
  align-items: center;
  align-self: center;
  flex-direction: column;
  justify-content: space-around;
  gap: 7vw;
  background: v-bind(playgroundSettings.backgroundColor);
}

.box {
  width: 10vw;
  height: 10vw;
  background-color: v-bind(playgroundSettings.cubeColor);
}
</style>
