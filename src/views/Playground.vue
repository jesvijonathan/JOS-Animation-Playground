<script setup>
import TestArea from "@/views/TestArea.vue";
import { computed, defineProps } from "vue";
import { onMounted } from "vue";
import { ref } from "vue";

import JOS from "jos-animation";

const { loader } = defineProps(["loader"]);
changeCurButton("Home");

// nig = {
//   disable: false,
//   debugMode: true,
//   passive: true,
//-   once: false,
//-   animation: "grow",
//-   animationInverse: "fade",
//-   timingFunction: "ease-in-out",
//-   mirror: true,
//-   threshold: 0,
//-   delay: 0,
//-   duration: 0.5,
//-   startVisible: "false",
//-   scrollDirection: "none",
//-   scrollProgressDisable: false,
//-   intersectionRatio: 0,
//-   rootMargin_top: "0%",
//-   rootMargin_bottom: "-50%",
//-   rootMargin: "0% 0% -50% 0%",
// };

// get animation from name "animation"

// let rootMargin_top = ref(10);
// let rootMargin_right = ref(0);
// let rootMargin_bottom = ref(0);
// let rootMargin_left = ref(40);

onMounted(() => {
  const scrollContainer = document.getElementById("scroll-container");
});

const refe = ref(true);

const marginBorder = ref(false);

let plg_opt = ref("animation");

function change_rootBorder() {
  marginBorder = !marginBorder;
}

window["change_rootBorder_ref"] = change_rootBorder;
</script>

<template>
  <div
    v-if="marginBorder"
    class="rootMargin_Border"
    id="rootMargin_Border"
  ></div>
  <section>
    <div class="sandbox_try">
      <div class="bold_tes">Play & fiddle with JOS settings</div>
      <div
        class="sandb_but jos"
        data-jos_animation="no-transition"
        data-jos_invoke="heading"
        data-nextScroll="dynamicIframe"
        data-intro_title="Playground"
      >
        <a href="https://codepen.io/jesvijonathan/pen/XWyLejd" target="_blank"
          >CodePen Examples</a
        >
        <a>Try In Sandbox</a>
        <a>Playground <i class="fa fa-1 fa-arrow-down"></i></a>
      </div>
    </div>
  </section>
  <iframe
    id="dynamicIframe"
    onload='
    this.style.height = this.contentWindow.document.body.scrollHeight + "px";
    this.contentWindow.document.querySelector("html").style.overflow = "hidden";
  '
    src="./PlaygroundFrame"
  ></iframe>
</template>
<style scoped>
/* checkbox style */
.rootMargin_Border {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80vh;
  /* border-top: 0.2vw solid var(--color-secondary); */
  border-bottom: 0.2vw solid var(--color-secondary);

  z-index: 100;
}
iframe {
  height: 200px;
  width: 100%;
  border: none;
  overflow: hidden;
}
/* html inside iframe */
iframe html {
  overflow: hidden;
}
.dis,
.dis * {
  cursor: not-allowed;
  opacity: 0.7;
}
.butt_in {
  width: 5vw;
  height: 2vw;
  border-radius: 0.2vw;

  background-color: var(--color-tertiary);
  border: 0.1vw solid var(--color-tertiary);
  cursor: pointer;
  font-family: Poppins, sans-serif;
  font-size: 1vw;
  color: var(--color-primary);
}
.butt_in:hover {
  background-color: var(--color-secondary);
}
.butt_in:disabled {
  background-color: var(--color-tertiary);
  color: var(--color-secondary);
  cursor: not-allowed;
}
input[type="checkbox"] {
  width: 1vw;
  height: 1vw;
  border-radius: 0.2vw;
  margin: 0.5vw;
  background-color: var(--color-primary);
  border: 0.1vw solid var(--color-tertiary);
  cursor: pointer;
}
label {
  cursor: pointer;
}
.it_dis {
  width: 25vw; /* background */
  color: var(--color-primary);
  border-radius: 0.4vw;
  padding: 1.5vw 2vw;
  text-align: center;
  /* padding: 0vw 0.2vw; */
  margin: 2vw 0.5vw;
  font-family: Poppins, sans-serif;
  font-size: 2vw;
}
.it_div {
  width: 25vw; /* background */
  color: var(--color-primary);
  border-radius: 0.4vw;
  padding: 1.5vw 2vw;
  text-align: center;
  /* padding: 0vw 0.2vw; */
  border: 0.1vw solid var(--color-tertiary);
  margin: 0.5vw;
  font-size: 1.2vw;
  font-family: Poppins, sans-serif;
  cursor: pointer;
  background: var(--color-tertiary);
}

.it_div:active {
  background: var(--grey);
}
.it_div_active {
  background: var(--color-secondary);
}

.cur_set {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  flex-wrap: nowrap;
  height: 100%;
  /* background-color: var(--color-tertiary); */
  border-radius: 1vw;
}
.cur_set2 {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  flex-wrap: nowrap;
  padding: 1vw;
  width: 100%;
  margin: 10vw;
  border-radius: 1vw;
}
.cur_opt {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  flex-wrap: nowrap;
  overflow-y: hidden;
  width: 100%;
  width: 33vw;
  height: 40vw;
  flex-shrink: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  scroll-snap-align: center;
  margin-right: 6vw;
  flex-direction: column;
  align-content: flex-start;
  flex-wrap: nowrap;
  border-radius: 1vw;
  font-family: Poppins, sans-serif;
  transition: 0.2s ease;
  overflow-y: scroll;
  border-radius: 0;
  border-top: 0.1vw solid transparent;
  border-bottom: 0.1vw solid transparent;
  padding: 2vw 0vw;
}
.cur_opt:hover {
  /* background-color: var(--color-tertiary); */
  /* border-top: 0.1vw solid var(--color-secondary);
  border-bottom: 0.1vw solid var(--color-secondary); */
}
.cur_opt::-webkit-scrollbar {
  background: var(--color-tertiary);

  width: 0.5vw;
}
.cur_opt::-webkit-scrollbar-thumb {
  background: var(--grey);
  border-radius: 0.1vw;
}
.cur_opt::-webkit-scrollbar-thumb:hover {
  background: var(--color-secondary);
}
.sandbox_try {
  display: contents;
}
.mhor {
  height: fit-content;

  margin-bottom: 4vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  height: 100vw;
}
.bold_tes {
  font-size: 6vw;
  font-weight: 900;
  margin-top: 7vw;
  margin-bottom: 3vw;
}
.sandb_but {
  display: flex;
  gap: 4vw;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.sandb_but a {
  margin-top: 4vw;
  padding: 2vw 4vw;
  background-color: var(--grey2);
  color: var(--color-primary);
  border-radius: 1vw;
  border: 0.1vw solid var(--color-tertiary);
  font-size: 1.2vw;
  font-weight: 500;
  font-family: Poppins, sans-serif;
  cursor: pointer;
}
.sandb_but a:hover {
  background-color: var(--color-secondary);
}
select {
  max-width: 5vw;
  /* background */
  background-color: var(--grey2);
  color: var(--color-primary);
  border-radius: 0.4vw;
  padding: 0.3vw 0.3vw;
  /* padding: 0vw 0.2vw; */
  border: 0.1vw solid var(--color-tertiary);
}
select:hover {
  border: 0.1vw solid var(--color-secondary);
}
select:focus {
  outline: none;
  border: 0.1vw solid var(--color-primary);
}
.item_title {
  font-size: 1.5vw;
  font-weight: 600;
  padding: 3vw;
  text-align: center;
  width: 100%;
  color: var(--color-primary);
}
.opt_inside {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1vw;
  min-width: 10vw;
  background-color: var(--color-tertiary);
  padding: 1vw 2vw;
  border-radius: 0.5vw;
  font-family: Poppins, sans-serif;
}
.rootord {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 0vw;
  background-color: var(--grey2);
  border-radius: 0.5vw;
  max-width: 6vw;
  max-width: fit-content;
}
.rootno {
  /* background */

  max-width: 2.8vw;
  background-color: var(--grey2);
  color: var(--color-primary);
  padding: 0vw;
  /* padding: 0vw 0.2vw; */
  border: 0vw solid var(--color-tertiary);
  /* add '%' symbol at the end of text */
}
.opt {
  padding: 1vw;
  font-size: 1vw;
  width: 25vw;
}
.cun_no {
  max-width: 5vw;
  /* background */
  background-color: var(--grey2);
  color: var(--color-primary);
  border-radius: 0.4vw;
  padding: 0.3vw 0.7vw;
  /* padding: 0vw 0.2vw; */
  border: 0.1vw solid var(--color-tertiary);
}
/* scroll bar */

.scroll-container {
  display: flex;
  overflow-x: hidden;
  width: 80vw;
  padding: 1vw;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scroll-snap-align: center;
  scroll-padding-top: 0;
  /* scroll-padding: 0;
  scroll-snap-stop: always;*/
  transition: 0s;
  overflow-x: scroll;
}
.scroll-container:hover {
}

.item {
}
.item:hover {
  background-color: var(--color-tertiary);
  /* box-shadow: 0 0 0.7vw 0.1vw var(--color-secondary); */
}
.item:active {
}

section {
  /* margin: 10vw 0vw 10vw 10vw; */
  width: 100vw;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: relative;
  overflow: hidden;
  flex-wrap: nowrap;
}
.overload_co {
  width: 69vw;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  justify-content: space-evenly;
  align-items: center;
}
</style>
