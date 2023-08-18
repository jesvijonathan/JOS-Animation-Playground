<script setup>
import Loader from "@/components/Loader.vue";
import Navbar from "@/components/Navbar.vue";
import Hud from "@/components/Hud.vue";
import ToolTips from "@/components/ToolTips.vue";
import Footer from "@/components/Footer.vue";
// import Noise from "@/components/noise.vue";
import BlackScreen from "@/components/BlackScreen.vue";

// import Home from "@/views/home.vue";
// import Brochure from "@/views/brochure.vue";
// import About from "@/views/about.vue";
// import Intro from "@/views/intro.vue";
// import Features from "@/views/features.vue";
// import Projects from "@/views/projects.vue";

// import Root from "@/views/root.vue";
// import Playground from "@/views/playground.vue";
// import PathNotFound from "@/views/pathnotfound.vue";

import { ref } from "vue";

// Loader
const loader = ref(true);

const HUD = ref(true);
onload = () => {
  const path = window.location.pathname.split("/");
  if (path[1] == "PlaygroundFrame") {
    HUD.value = false;
  }

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

  // if mobile block website
  if (window.innerWidth < 0) {
    document.body.innerHTML = `<div style='
    height: 100%;
        width: 100%;
        font-size: 3vw;
        font-family: Poppins, sans-serif;
        font-weight: 600;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        justify-content: center;

        color: var(--color-text);
        z-index: 10;
        position: fixed;
        flex-direction: column;
        text-align: center;
        background: var(--color-background);
  '>
    Sorry, this website is not available on mobile devices.
    <br/><br/>
    Use a desktop or laptop to view this website.

    <a style="margin-top:14vh" href="https://jesvijonathan.github.io/JOS-Animation-Library/"><u>Click to view JOS Demo (old)</u></a>
  </div>`;
  }
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

// current nav button
const curButton = ref("Playground");
function changeCurButton(e) {
  curButton.value = e;
}
window["changeCurButton"] = changeCurButton;

const msg = ref("Error 404");
</script>

<template>
  <BlackScreen style="z-index: 99999" v-if="$route.path == '/404'" :msg="msg" />

  <div v-if="HUD">
    <Loader v-show="loader" />
    <BlackScreen v-show="loader" />
    <Navbar
      v-show="!loader"
      :isDark="isDark"
      :navTitle="navTitle"
      :curButton="curButton"
    />
    <Hud :moveToID="moveToID" />
    <ToolTips />

    <router-view
      :loader="loader"
      :isDark="isDark"
      :navTitle="navTitle"
      :moveToID="moveToID"
    />

    <Footer FooterNote="It's a response, A work of Art  " />
  </div>

  <div v-if="!HUD">
    <router-view
      :loader="loader"
      :isDark="isDark"
      :navTitle="navTitle"
      :moveToID="moveToID"
    />
  </div>
</template>

<style scoped></style>
