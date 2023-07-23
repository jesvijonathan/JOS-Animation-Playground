<script setup></script>
<template>
  <div class="navbar">
    <div class="navbar_left">
      <a
        href="#"
        class="jos_title jos"
        data-jos_animation="zoom"
        data-jos_delay="0.8"
        data-jos_duration="0.5"
        data-jos_once="true"
        >JOS</a
      >
      <div
        class="sub_section_title jos"
        data-jos_animation="stretch-vertical"
        data-jos_delay="1"
        data-jos_once="true"
      >
        <div class="jos_navbar_line"></div>
        <a href="#">Introduction</a>
      </div>
    </div>

    <div class="navbar_right">
      <a
        href=""
        target="_blank"
        class="navbutton jos"
        data-jos_animation="zoom-down"
        data-jos_delay="0.2"
        data-jos_once="true"
        >Playground</a
      >
      <a
        href=""
        class="navbutton jos"
        data-jos_animation="zoom-down"
        data-jos_delay="0.3"
        data-jos_once="true"
        >Docs</a
      >
      <a
        href=""
        target="_blank"
        class="navbutton nav_circ jos"
        data-jos_animation="zoom-down"
        data-jos_delay="0.4"
        data-jos_once="true"
        ><i class="fa-solid fa-moon"></i
      ></a>
      <a
        href=""
        target="_blank"
        class="navbutton nav_circ jos"
        style="
          transition: all 0.4s 0.5s, background-color 0.1s 0s, color 0.1s 0s !important;
        "
        data-jos_animation="zoom-down"
        data-jos_delay="0.5"
        data-jos_once="true"
        ><i class="fa-brands fa-github"></i
      ></a>
    </div>
  </div>
</template>
<style scoped>
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
  background-color: var(--color-primary);
  color: black;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 1vw 2vw;
}
.navbutton:hover {
  background-color: #f0f0f0;
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
  padding: 1vw 1vw;
  text-decoration: none;
  /* no delay for background and color */
  transition: all 0.4s 0.4s, background-color 0.1s 0s, color 0.1s 0s !important;
}
.nav_circ:hover {
  background-color: #2d2d2d;
  text-decoration: none;
  color: var(--color-primary);
}
</style>
