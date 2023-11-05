<script setup>
// on update JOS.refresh() during every Dom update
import { ref } from "vue";
import { onMounted, onUpdated } from "vue";

import { useRouter } from "vue-router";
const router = useRouter();

onMounted(() => {
  let fix_elem = document.getElementById("intro_1");
  let section = document.getElementById("features");
  let box = document.getElementById("box2");
  function scroll_rel(e) {
    const scroll = (1 - e.jos.scrollProgress).toFixed(2);
    if (scroll < 0) {
      scroll = 0;
    }
    box.style.transform = "scale(" + scroll + ")";
    box.innerHTML = scroll + "%";
  }

  window["scroll_rel"] = scroll_rel;
});
</script>

<template>
  <section id="demo">
    <div class="intro_cont">
      <div class="intreo">
        <div class="cont">
          <div id="intro_1" class="intro_1">
            <div
              class="box jos"
              data-jos_rootMargin_bottom="20%"
              data-jos_rootMargin_top="20%"
              data-jos_animation="grow"
              data-jos_duration="1"
            >
              Triggered
            </div>
          </div>
          <div
            id="intro_2"
            class="intro_2 jos"
            data-jos_animation="no-transition"
          >
            <div
              class="intro_title jos"
              data-jos_animation="zoom-in"
              data-jos_duration="0.8"
              data-jos_delay="0"
              data-jos_rootMargin_bottom="20%"
            >
              Scroll Trigger Animation
            </div>
            <div
              class="intro_desc jos"
              data-jos_animation="fade-right"
              data-jos_duration="0.5"
              data-jos_delay="0"
              data-jos_rootMargin_bottom="20%"
              data-jos_scrollDirection="down"
            >
              Use JOS to add instant animation to elements of your website via
              scroll intersection, scroll progress, scroll anchors points, etc.
            </div>
            <div
              class="intro_desc jos"
              data-jos_animation="fade-right"
              data-jos_duration="0.5"
              data-jos_delay="0"
              data-jos_rootMargin_bottom="20%"
              data-jos_scrollDirection="down"
              data-jos_invoke="heading"
              data-nextScroll="installation"
              data-intro_title="Demo"
            >
              Scroll trigger work when element intersects a margin in the view
              port. This allows users to to animate an element with reference to
              the view port alone, making it easier for animating
            </div>
            <div
              class="intro_desc jos"
              data-jos_animation="fade-right"
              data-jos_duration="0.5"
              data-jos_delay="0"
              data-jos_rootMargin_bottom="20%"
              data-jos_scrollDirection="down"
            >
              JOS library comes with tons of inbuilt presets that can be used to
              add beautiful animations. You can also customize the animation and
              its function for every element individually for all elements. It
              comes with a lot more customizable attributes and options to tweak
              and fiddle with.
            </div>
            <div
              class="feature_button jos"
              data-jos_duration="0.5"
              data-jos_delay="0"
              data-jos_rootMargin_bottom="10%"
            >
              <button class="button" @click="router.push('/playground')">
                Demo
              </button>
              <a
                class="button"
                href="https://github.com/jesvijonathan/JOS-Animation-Library/wiki"
                target="_blank"
                >Documentation</a
              >
            </div>
          </div>
        </div>
        <div class="cont">
          <div class="intro_1">
            <div
              class="box jos"
              id="box2"
              data-jos_animation="stretch"
              data-jos_rootMargin="20% 0% 20% 0%"
              data-jos_scroll="scroll_rel"
            ></div>
          </div>
          <div id="intro_2" class="intro_2">
            <div
              class="intro_title jos"
              data-jos_animation="zoom-in"
              data-jos_duration="0.8"
              data-jos_delay="0"
              data-jos_rootMargin_bottom="20%"
            >
              Scroll Progress Animation
            </div>
            <div
              class="intro_desc jos"
              data-jos_animation="fade-right"
              data-jos_duration="0.5"
              data-jos_delay="0"
              data-jos_rootMargin_bottom="20%"
              data-jos_scrollDirection="down"
            >
              JOS, on top of scroll trigger animation supports Scroll Progress
              callbacks to handle animation and other function depending on the
              scroll percent of element in the view port
            </div>
            <div
              class="intro_desc jos"
              data-jos_animation="fade-right"
              data-jos_duration="0.5"
              data-jos_delay="0"
              data-jos_rootMargin_bottom="20%"
              data-jos_scrollDirection="down"
            >
              This feature enables the capability for adding scroll based
              animation that works with respect to scroll percent of element.
              This can also be used to add futuristic features in a web app
              using jos animation.
            </div>
            <div
              class="intro_desc jos"
              data-jos_animation="fade-right"
              data-jos_duration="0.5"
              data-jos_delay="0"
              data-jos_rootMargin_bottom="20%"
              data-jos_scrollDirection="down"
              data-jos_invoke="heading"
              data-nextScroll="installation"
              data-intro_title="Demo"
            >
              All features including both the scroll-callback and intersection
              animation features are all packaged into a single library and
              comes in a very light weight (2kb) package...
            </div>
            <div
              class="feature_button jos"
              data-jos_duration="0.5"
              data-jos_delay="0"
              data-jos_rootMargin_bottom="10%"
            >
              <a
                class="button"
                href="https://github.com/jesvijonathan/JOS-Animation-Library/wiki"
                target="_blank"
              >
                Docs
              </a>
              <button class="button" @click="router.push('/playground')">
                Demonstration
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.feature_button {
  margin-top: 2vw;
  display: flex;
  gap: 2vw;
}
.button {
  border: 0.1vw solid var(--color-primary);
  border-radius: 7px;
  background-color: transparent;
  color: var(--color-primary);
  font-size: 1.2vw;
  font-weight: bold;
  padding: 0.5vw 1vw;
  cursor: pointer;
  font-weight: 100;
  transition: 0.3s;
  font-family: "Poppins", sans-serif;
}
.button:hover {
  background: var(--color-primary);
  color: var(--color-background);
}
.gap {
  height: 20vw;
}
.box {
  width: 27vw;
  height: 20vw;
  display: flex;
  text-align: center;
  background-color: rgb(239, 239, 239);
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  font-size: 1.8vw;
  transition: 0s;
}
#box2 {
  margin-top: 0vw;
}
.intreo {
  margin: 10vw 0vw 0vw 0vw;
  display: flex;
  flex-direction: column;
  gap: 8vw;
  /* height: 100%; */
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: nowrap;
  width: 100%;
}
.show_fixed {
  position: fixed;
  top: 50%;
  left: 10%;
  transform: translate(-10%, -50%);
  z-index: 1;
}
.intro_title {
  font-size: 2.8vw;
  color: var(--color-text);
  margin: 0vw 0vw 2vw 0vw;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  letter-spacing: 0.1vw;
  margin-bottom: 5vw;
}
.intro_desc {
  font-size: 1.1vw;
  color: var(--color-text);
  margin: 0vw 0vw 2vw 0vw;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  /* letter-spacing: 0.1vw; */
  line-height: 175%;
  text-align: justify;
}
.intro_tit {
}
.intro_2 {
  width: 43vw;
  height: 35vw;
  margin-right: 5vw;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: flex-start;
}
.marg {
  margin: 10vw 0vw 10vw 35vw;
}
.cont {
  display: flex;
  gap: 7vw;
  /* min-width: 93vw; */
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  align-content: center;
  /* flex-wrap: wrap; */
}
.intro_1 {
  height: 38vw;
  /* padding: 0vw 3vw; */
  padding: 0vw 3vw;
  position: relative;
  margin: 0;
  top: 0;
  left: 0;
  overflow-y: auto;
  overflow: auto;
  background: #151515;
  background: #333333;
  font-size: larger;
  color: black;
  z-index: -1;
  display: flex;
  transition: 0.1s ease;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  align-content: center;
  background-image: url("@/assets/grid.jpg");
  background-position: center;
  background-repeat: repeat;
  background-blend-mode: multiply;
  justify-content: center;
}
.intro_cont {
  /* height: 100%; */
  align-items: flex-start;
  margin: 0vw 6vw 0vw 10vw;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: space-between;
  justify-content: flex-end;
}
#features {
  width: 100vw;
  background-color: var(--color-background);
  position: relative;
  overflow: hidden;
  background-color: var(--grey2);
}
section {
  width: 100vw;
  height: fit-content;
  background-color: var(--color-background);
  position: relative;
  overflow: hidden;
  z-index: 0;
  background-color: var(--color-background);
}
section * {
  transition: all 0s, background-color 0.7s ease;
  transition: 0.1s;
}

.secfic {
  position: fixed !important;
  top: 0;
  left: 0;
  z-index: 2;
  max-height: 100vh;
}
</style>
