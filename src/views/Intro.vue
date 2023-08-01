<script setup>
// on update JOS.refresh() during every Dom update
import { ref } from "vue";
import { onMounted, onUpdated } from "vue";

onMounted(() => {
  let fix_elem = document.getElementById("intro_1");
  let section = document.getElementById("features");
  let box = document.getElementById("box2");
  function scroll_rel(e) {
    const scroll = (1 - e.jos.scrollProgress).toFixed(2);
    box.style.transform = "scale(" + scroll + ")";
    box.innerHTML = scroll + "%";
  }

  window["scroll_rel"] = scroll_rel;
});
</script>

<template>
  <section id="features">
    <div class="intro_cont">
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
        <div class="gap"></div>
        <div
          class="box jos"
          id="box2"
          data-jos_animation="stretch"
          data-jos_rootMargin="20% 0% 20% 0%"
          data-jos_scroll="scroll_rel"
        ></div>
      </div>
      <div class="intreo">
        <div class="cont">
          <div
            id="intro_2"
            class="intro_2 jos"
            data-jos_animation="no-transition"
          >
            <div class="intro_title">Scroll Trigger Animation</div>
            <div class="intro_desc">
              Use JOS to add instant animation to elements of your website via
              scroll intersection, scroll progress, scroll anchors points, etc.
            </div>
            <div
              class="intro_desc jos"
              data-jos_animation="no-transition"
              data-jos_invoke="heading"
              data-nextScroll="footer"
              data-intro_title="Features"
            >
              Scroll trigger work when element intersects a margin in the view
              port. This allows users to to animate an element with reference to
              the view port alone, making it easier for animating
            </div>
            <div class="intro_desc">
              JOS library comes with tons of inbuilt presets that can be used to
              add beautiful animations. You can also customize the animation and
              its function for every element individually for all elements. It
              comes with a lot more customizable attributes and options to tweak
              and fiddle with.
            </div>
            <div class="feature_button">
              <button class="button">Demo</button>
              <button class="button">Documentation</button>
            </div>
          </div>
        </div>
        <div class="cont">
          <div id="intro_2" class="intro_2">
            <div class="intro_title">Scroll Progress Animation</div>
            <div class="intro_desc">
              JOS, on top of scroll trigger animation supports Scroll Progress
              callbacks to handle animation and other function depending on the
              scroll percent of element in the view port
            </div>
            <div
              class="intro_desc jos"
              data-jos_animation="no-transition"
              data-jos_invoke="heading"
              data-nextScroll="footer"
              data-intro_title="Features"
            >
              This feature enables the capability for adding scroll based
              animation that works with respect to scroll percent of element.
              This can also be used to add futuristic features in a web app
              using jos animation.
            </div>
            <div class="intro_desc jos" data-jos_scroll="scroll_rel">
              All features including both the scroll-callback and intersection
              animation features are all packaged into a single library and
              comes in a very light weight (2kb) package...
            </div>
            <div class="feature_button">
              <button class="button">Docs</button>
              <button class="button">Demonstration</button>
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
  background: transparent;
  color: var(--color-primary);
  padding: 0.5vw 1vw;
  border-radius: 0.5vw;
  font-size: 1.2vw;
  font-weight: 600;
  letter-spacing: 0.1vw;
  cursor: pointer;
  border: 0.1vw solid var(--color-primary);
  transition: 0.2s;
}
.button:hover {
  background: var(--color-primary);
  color: var(--color-background);
}
.gap {
  height: 20vw;
}
.box {
  margin-top: 15vw;
  width: 30vw;
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
  margin: 10vw 0vw 5vw 3vw;
  display: flex;
  flex-direction: column;
  gap: 8vw;
  /* height: 100%; */
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: nowrap;
}
.show_fixed {
  position: fixed;
  top: 50%;
  left: 10%;
  transform: translate(-10%, -50%);
  z-index: 1;
}
.intro_title {
  font-size: 3vw;
  color: var(--color-text);
  margin: 0vw 0vw 2vw 0vw;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  letter-spacing: 0.1vw;
  margin-bottom: 5vw;
}
.intro_desc {
  font-size: 1.2vw;
  color: var(--color-text);
  margin: 0vw 0vw 2vw 0vw;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  letter-spacing: 0.1vw;
}
.intro_tit {
}
.intro_2 {
  width: 50vw;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: flex-start;
  /* margin: 10vw 0vw 10vw 10vw;*/
}
.marg {
  margin: 10vw 0vw 10vw 35vw;
}
.intro_1 {
  width: 40vw;
  height: 100%;
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
  position: absolute;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  align-content: center;

  background-image: url("@/assets/grid.jpg");
  background-position: center;
  background-repeat: repeat;
  background-blend-mode: multiply;
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
