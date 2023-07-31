<script setup>
import Loader from "@/components/loader.vue";
import Navbar from "@/components/navbar.vue";
import Hud from "@/components/hud.vue";
// import Noise from "@/components/noise.vue";

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

  let clientX = ref("100");
  let clientY = ref("100");
  let tooltips = document.getElementById("mouse-tooltip");
  let tooltipText = document.getElementById("tooltip-text");
  const halfWindowWidth = window.innerWidth / 2;
  const tooltipWidth = tooltips.offsetWidth;
  const tooltipHeight = tooltips.offsetHeight;

  document.addEventListener("mouseover", (e) => {
    if (e.target.dataset.hover_data) {
      tooltips.style.display = "flex";
      tooltipText.textContent = e.target.dataset.hover_data; // Use textContent instead of innerHTML for better performance
    } else {
      tooltips.style.display = "none";
    }
  });

  document.addEventListener("mousemove", (event) => {
    if (
      event.clientX < tooltipWidth / 2 ||
      event.clientX > window.innerWidth - tooltipWidth / 2
    ) {
      tooltips.style.display = "none";
      return;
    }

    const adjustedClientX = event.clientX - tooltipWidth / 2;
    const adjustedClientY = event.clientY + 50;

    clientX.value = adjustedClientX + "px";
    clientY.value = adjustedClientY + "px";

    console.log(clientX.value, clientY.value);

    tooltips.style.transform = `translateX(${clientX.value}) translateY(${clientY.value})`;
  });
};

document.body.classList.add("dark");
const isDark = ref(true);

const navTitle = ref("Home");
function heading(e) {
  navTitle.value = e.dataset.intro_title;
}
window["heading"] = heading;
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
  <Navbar v-show="!loader" :isDark="isDark" :navTitle="navTitle" />
  <Hud />

  <Home v-show="!loader" />
  <Intro />
  <Footer />

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
  transition: 0.2s ease;
  width: fit-content;
  max-width: 20vw;
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
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1vw;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  flex-direction: column;
  white-space: nowrap;
}
</style>
