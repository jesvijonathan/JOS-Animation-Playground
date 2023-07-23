<script setup></script>

<template>
  <section id="home">
    <!-- <div class="home_title">JOS</div>
    <div class="box_fill">
      <div class="home_support_title">Animation</div>
    </div> -->
  </section>
</template>

<style scoped>
#home {
  width: 100vw;
  height: 100vh;
  background-color: var(--color-background);
  position: relative;
  overflow: hidden;
}
.box_fill {
  width: 60vw;
  height: 100vh;
  background-color: #ffffff;
  border-radius: 30% 30% 0% 100% / 30% 0% 100% 30%;
  /* move to right side */
  position: absolute;
  top: 0;
  right: 0;
}
.home_title {
  font-size: 10vw;
  font-weight: bold;
  position: absolute;
  top: 50%;
  width: 50vw;
  transform: translate(50%, -50%);
}
.home_support_title {
  font-size: 10vw;
  font-weight: bold;
  position: absolute;
  top: 50%;
  margin-left: 7vw;
  color: var(--color-background);
  transform: translate(0%, -50%);
}
</style>
