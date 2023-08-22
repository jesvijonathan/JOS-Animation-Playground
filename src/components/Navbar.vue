<script setup>
defineProps(["isDark", "navTitle", "curButton"]);

import { ref } from "vue";

let isDark = true;
function toggleDarkMode(e) {
  isDark = !isDark;
  if (isDark) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }
}

import { useRouter } from "vue-router";
const router = useRouter();

const hamb_open = ref(false);
function hamb() {
  hamb_open.value = !hamb_open.value;
  if (hamb_open.value) {
    document.querySelector(".hamb").classList.add("hamb_open");
    document.querySelector(".hamb_menu").classList.add("hamb_menu_open");
    document
      .querySelector(".sub_section_title")
      .classList.add("sub_section_title_open");
  } else {
    document.querySelector(".hamb").classList.remove("hamb_open");
    document.querySelector(".hamb_menu").classList.remove("hamb_menu_open");
    document.querySelector(".hamb").style.display = "block";
    document
      .querySelector(".sub_section_title")
      .classList.remove("sub_section_title_open");
  }
}
</script>
<template>
  <div class="navbar">
    <div class="navbar_left">
      <a
        href="#"
        @click="router.push('/')"
        class="jos_title jos"
        data-jos_animation="zoom"
        data-jos_delay="0.8"
        data-jos_duration="0.5"
        data-jos_once="true"
        data-hover_data="All the animation you need 🔥"
        >JOS</a
      >
      <div
        class="sub_section_title jos"
        data-jos_animation="stretch-vertical"
        data-jos_delay="1"
        data-jos_once="true"
      >
        <div class="jos_navbar_line"></div>
        <a href="#" id="nav_title">{{ navTitle }}</a>
      </div>
    </div>

    <!-- use variable curButton -->
    <div class="navbar_right">
      <a
        @click="router.push(curButton)"
        class="navbutton jos"
        data-jos_animation="zoom-down"
        data-jos_delay="0.2"
        data-jos_once="true"
        data-hover_data="A playground to test out the animations"
        >{{ curButton }}</a
      >
      <a
        href="https://github.com/jesvijonathan/JOS-Animation-Library/wiki"
        target="_blank"
        class="navbutton jos"
        data-jos_animation="zoom-down"
        data-jos_delay="0.3"
        data-jos_once="true"
        data-hover_data="Check out the docs"
        >Docs</a
      >
      <a
        class="navbutton nav_circ jos"
        data-jos_animation="zoom-down"
        data-jos_delay="0.4"
        data-jos_once="true"
        data-hover_data="Toggle Dark Mode"
        @click="toggleDarkMode()"
        ><i class="fa-solid fa-moon"></i
      ></a>
      <a
        href="https://github.com/jesvijonathan/JOS-Animation-Library"
        target="_blank"
        class="navbutton nav_circ jos"
        style="
          transition: all 0.4s 0.5s, background-color 0.1s 0s, color 0.1s 0s !important;
        "
        data-jos_animation="zoom-down"
        data-jos_delay="0.5"
        data-jos_once="true"
        data-hover_data="Github Repository"
        ><i class="fa-brands fa-github"></i
      ></a>
    </div>

    <div @click="hamb()" class="hamb hamb_open" style="display: none">
      <i v-if="!hamb_open" class="fa-solid fa-bars"></i>
      <i v-if="hamb_open" class="fa-solid fa-xmark"></i>
    </div>
    <div class="hamb_menu" style="display: none">
      <ul>
        <li>
          <a @click="router.push('/#')">Home</a>
        </li>
        <li>
          <a @click="router.push('/Playground')">Playground</a>
        </li>
        <li>
          <a
            href="https://github.com/jesvijonathan/JOS-Animation-Library/wiki"
            target="_blank"
            >Documentation</a
          >
        </li>
        <li>
          <a
            href="https://github.com/jesvijonathan/JOS-Animation-Library"
            target="_blank"
            >Github</a
          >
        </li>
        <li>
          <a @click="toggleDarkMode()">Toggle Dark Mode</a>
        </li>
        <li>
          <a
            href="https://github.com/jesvijonathan/JOS-Animation-Library/wiki#used-in"
            target="_blank"
            >Projects</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.navbutton {
  cursor: pointer;
}
.jos_navbar_line {
  width: 0.1vw;
  height: 2.4vw;
  background-color: var(--color-primary);
  border-radius: 0.1vw;
}
.navbar_right {
  display: flex;
  gap: 2vw;
  letter-spacing: 0.1vw;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
}
.jos_title {
  font-size: 4vw;
}
.sub_section_title {
  gap: 2vw;
  font-size: 2vw;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.navbar_left {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;

  gap: 2vw;
}
.navbutton {
  height: 2vw;
  min-width: 2vw;
  width: max-content;
  border-radius: 2vw;
  display: flex;
  background-color: var(--grey);
  color: var(--color-primary);
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 1.3vw 2vw;
}
.navbutton:hover {
  background-color: var(--milk);
  color: var(--grey);
  transition: 0.5s;
  text-decoration: underline;
}
.navbar {
  width: 100vw;
  height: 10vh;
  padding: 2vw 5vw 0vw 5vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: space-between;
  align-items: center;
  justify-content: space-between;
  font-size: 1.4vw;
}
.nav_circ {
  padding: 1.4vw 1vw;
  text-decoration: none;
  cursor: pointer;
  /* no delay for background and color */
  transition: all 0.4s 0.4s, background-color 0.1s 0s, color 0.1s 0s !important;
}
.nav_circ:hover {
  background-color: var(--color-primary);
  text-decoration: none;
  color: var(--color-background);
}
</style>
