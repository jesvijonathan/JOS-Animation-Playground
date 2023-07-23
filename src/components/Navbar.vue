<script setup></script>
<template>
  <div class="navbar">
    <div class="navbar_left">
      <a href="#" class="jos_title">JOS</a>
      <div class="sub_section_title">
        <div class="jos_navbar_line"></div>
        <a href="#">Introduction</a>
      </div>
    </div>

    <div class="navbar_right">
      <a href="" target="_blank" class="navbutton">Playground</a>
      <a href="" class="navbutton">Docs</a>
      <a href="" target="_blank" class="navbutton nav_circ"
        ><i class="fa-solid fa-moon"></i
      ></a>
      <a href="" target="_blank" class="navbutton nav_circ"
        ><i class="fa-brands fa-github"></i
      ></a>
    </div>
  </div>
</template>
<style scoped>
.jos_navbar_line {
  width: 0.1vw;
  height: 2.4vw;
  background-color: white;
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
  background-color: white;
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
  color: black;
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
}
.nav_circ:hover {
  background-color: #2d2d2d;
  color: rgb(255, 255, 255);
  transition: 0.5s;
  text-decoration: none;
}
</style>
