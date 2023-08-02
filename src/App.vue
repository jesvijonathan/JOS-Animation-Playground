<script setup>
import Loader from "@/components/loader.vue";
import Navbar from "@/components/navbar.vue";
import Hud from "@/components/hud.vue";
import ToolTips from "@/components/toolTips.vue";
import Footer from "@/components/footer.vue";
// import Noise from "@/components/noise.vue";

import Home from "@/views/home.vue";
import About from "@/views/about.vue";
import Intro from "@/views/intro.vue";
import Features from "@/views/features.vue";
import Projects from "@/views/projects.vue";

import { ref } from "vue";

// Loader
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

  // ToolTip
  let clientX = ref("100");
  let clientY = ref("100");
  let tooltips = document.getElementById("mouse-tooltip");
  let tooltipText = document.getElementById("tooltip-text");
  const halfWindowWidth = window.innerWidth / 2;

  document.addEventListener("mouseover", (e) => {
    let mose_data = e.target.dataset.hover_data;
    if (!mose_data) {
      let parent = e.target.parentElement;
      while (parent) {
        if (parent.dataset.hover_data) {
          mose_data = parent.dataset.hover_data;
          break;
        }
        parent = parent.parentElement;
      }
    }
    if (mose_data) {
      e.target.dataset.hover_data;
      tooltips.style.display = "flex";
      tooltipText.textContent = mose_data;
    } else {
      tooltips.style.display = "none";
    }
  });

  document.addEventListener("mousemove", (event) => {
    const tooltipWidth = tooltips.offsetWidth;
    const tooltipHeight = tooltips.offsetHeight;
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

    tooltips.style.transform = `translateX(${clientX.value}) translateY(${clientY.value})`;
  });
};

// Theme
document.body.classList.add("dark");
const isDark = ref(true);

// moveTo
const moveToID = ref("features");

// Header
const navTitle = ref("Home");
function heading(e) {
  navTitle.value = e.dataset.intro_title;
  moveToID.value = e.dataset.nextscroll;
}
window["heading"] = heading;
function alertt() {
  alert("Asd");
}
window["alertt"] = alertt;
</script>

<template>
  <Loader v-show="loader" />
  <Navbar v-show="!loader" :isDark="isDark" :navTitle="navTitle" />
  <Hud :moveToID="moveToID" />
  <ToolTips />

  <Home v-show="!loader" />
  <Features />
  <Intro v-show="!loader" />
  <About />

  <!-- <Projects /> -->

  <Footer v-show="!loader" />
</template>

<style scoped></style>
