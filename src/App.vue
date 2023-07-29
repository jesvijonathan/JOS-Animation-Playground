<script setup>
import Loader from "@/components/loader.vue";
import Navbar from "@/components/navbar.vue";
import Hud from "@/components/hud.vue";

import Home from "@/views/home.vue";
import Intro from "@/views/intro.vue";
import Footer from "@/views/footer.vue";
import { ref } from "vue";

const loader = ref(false);
onload = () => {
  setTimeout(() => {
    document.querySelector(".con").style.opacity = 0;
    document.getElementById("loader_text").classList.add("loader_anime");
    setTimeout(() => {
      document.querySelector(".loader").style.opacity = 0;
      setTimeout(() => {
        loader.value = false;
      }, 500);
    }, 1500);
  }, 1000);
};

document.body.classList.add("dark");
const isDark = ref(true);
</script>

<template>
  <!-- <img
    alt="Vue logo"
    class="logo"
    src="https://cdn.jsdelivr.net/gh/jesvijonathan/JOS-Animation-Library@master/res/logo/jos_default_white.svg"
    height="300"
    width="300"
  /> -->

  <Loader v-show="loader" />
  <Navbar :isDark="isDark" />
  <Hud />

  <Home />
  <Intro />
  <Footer />
</template>

<style scoped></style>
