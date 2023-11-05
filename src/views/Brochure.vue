<script setup>
// on update JOS.refresh() during every Dom update
import { onMounted, onUpdated } from "vue";
import { useRouter } from "vue-router";

onMounted(() => {
  const scrolltext = document.getElementById("scroller2");

  let oldScroll = 0;
  function scrolling_text2(e) {
    const scroll = e.jos.scrollProgress;
    // move and skew with some intertia after scroll
    scrolltext.style.transform = "translateX(" + -scroll * 100 + "vw)";
    // add intertia when stopped
    // console.log(oldScroll.toFixed(2), scroll.toFixed(2));
    // if (oldScroll.toFixed(1) == scroll.toFixed(1)) {
    //   scrolltext.style.transition = "transform 0.1s ease-out";
    // } else {
    // }

    oldScroll = e.jos.scrollProgress;
  }

  const fanc = document.getElementById("fancy_text");

  function fancy_text(e) {
    const scroll = e.jos.scrollProgress * 1.4;
    fanc.style.transform = "translateY(" + e.jos.scrollProgress * 70 + "vh)";
    fanc.style.opacity = 1 - scroll;
    // fanc.innerHTML = scroll;
  }

  window["scrolling_text2"] = scrolling_text2;

  window["fancy_text"] = fancy_text;
});

const router = useRouter();
</script>

<template>
  <section>
    <div
      id="fancy_text"
      class="bold_display jos"
      data-jos_scroll="fancy_text"
      data-jos_animation="static"
      data-jos_rootMargin_top="0%"
      data-jos_rootMargin_bottom="0%"
    >
      <div style="width: 60%; text-align: center; z-index: -1">
        <b>T</b>his is a work of Art, <b>A</b>n In-house library, <b>R</b>eady
        to power your next application ⚡
      </div>
    </div>
    <!-- faetures on why its better  -->

    <!-- very lightweight, the library is less than 2kb -->
    <!-- opensource -->
    <!-- includes features & Does not require plugin addons to gain features -->
    <!-- Customizabilty, you can build really compolex animations and sequences -->
    <!-- Very easy & straight forward to use -->

    <div class="features" id="features">
      <div class="features-container">
        <div class="features-title">Features</div>
        <div
          class="features-list jos"
          data-jos_stagger="skew-left"
          data-jos_stagger_seq="0.1"
          data-jos_stagger_duration="0.6"
          data-jos_stagger_mirror="true"
        >
          <div
            class="features-list-item"
            data-jos_rootMargin_bottom="40%"
            data-jos_scrollDirection="down"
          >
            <!-- box image -->

            <img class="fe_img" src="@/assets/lightweight.jpg" alt="" />
            <div class="features-list-item-title">Lightweight</div>
            <div
              class="features-list-item-text jos"
              data-jos_animation="no-transition"
              data-jos_invoke="heading"
              data-nextScroll="demo"
              data-intro_title="Features"
            >
              <!-- points -->
              <ul>
                <li>Very lightweight, the library is &lt;2kb.</li>
                <li>It does not require plugin addons to gain features.</li>
                <li>Performance oriented & optimized.</li>
              </ul>
            </div>
          </div>

          <div
            class="features-list-item"
            data-jos_rootMargin_bottom="40%"
            data-jos_scrollDirection="down"
          >
            <img class="fe_img" src="@/assets/custom.jpg" alt="" />
            <div class="features-list-item-title">Customizability</div>
            <div class="features-list-item-text">
              <ul>
                <li>You can build really complex animations and sequences.</li>
                <li>Fully customizable to its core</li>
                <li>The only limit is your imagination.</li>
              </ul>
            </div>
          </div>

          <div
            class="features-list-item"
            data-jos_rootMargin_bottom="40%"
            data-jos_scrollDirection="down"
          >
            <img class="fe_img" src="@/assets/easytouse.jpg" alt="" />
            <div class="features-list-item-title">Easy to use</div>
            <div class="features-list-item-text">
              <ul>
                <li>Very easy & straight forward to use.</li>
                <li>
                  Works with HTML/JS, React, Vue, Angular & other frameworks.
                </li>
                <li>Get started in less than 5 minutes.</li>
              </ul>
            </div>
          </div>

          <div
            class="features-list-item"
            data-jos_rootMargin_bottom="40%"
            data-jos_scrollDirection="down"
          >
            <!-- related picture -->
            <img class="fe_img" src="@/assets/opensource.png" alt="" />
            <div class="features-list-item-title">Open Source</div>
            <div
              class="features-list-item-text jos"
              data-jos_animation="no-transition"
              data-jos_invoke="heading"
              data-nextScroll="demo"
              data-intro_title="Features"
            >
              <ul>
                <li>This project is open source</li>
                <li>The library is free to use</li>
                <li>Anyone can contribute to the development.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- on click move to playground route -->
    <div
      id="scrolltext"
      class="scrolling_text jos"
      @click="router.push('/playground')"
    >
      <div
        id="scroller2"
        class="scroller jos"
        data-jos_scroll="scrolling_text2"
        data-hover_data="Click to move to Playground"
      >
        <div class="more_details_title">
          <div class="more_text">Test Demonstration</div>
          <i class="fa-solid fa-arrow-right-long aroh"></i>
        </div>
        <div class="more_details_title">
          <div class="more_text">Test Demonstration</div>
          <i class="fa-solid fa-arrow-right-long aroh"></i>
        </div>
        <div class="more_details_title">
          <div class="more_text">Test Demonstration</div>
          <i class="fa-solid fa-arrow-right-long aroh"></i>
        </div>
        <div class="more_details_title">
          <div class="more_text">Test Demonstration</div>
          <i class="fa-solid fa-arrow-right-long aroh"></i>
        </div>
        <div class="more_details_title">
          <div class="more_text">Test Demonstration</div>
          <i class="fa-solid fa-arrow-right-long aroh"></i>
        </div>
        <div class="more_details_title">
          <div class="more_text">Test it in Playground</div>
          <i class="fa-solid fa-arrow-right-long aroh"></i>
        </div>
        <div class="more_details_title">
          <div class="more_text">Test it in Playground</div>
          <i class="fa-solid fa-arrow-right-long aroh"></i>
        </div>
        <div class="more_details_title">
          <div class="more_text">Test it in Playground</div>
          <i class="fa-solid fa-arrow-right-long aroh"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.line {
  width: 60%;
  height: 0.1vw;
  background: var(--color-secondary);
  opacity: 0.4;
  opacity: 0;
}
.butvon {
  display: flex;
  gap: 2vw;
}
.Button_1 {
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
}
.Button_1:hover {
  color: var(--color-background);
  background-color: var(--color-primary);
}
.started_t {
  font-family: "Poppins", sans-serif;
  font-size: 3vw;
  letter-spacing: normal;
}
.more_details_title {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1vw;
  font-size: 1vw;
  font-weight: 100;
  cursor: pointer;
}
.more_text {
  font-size: 2vw;
  width: 19vw;
  font-weight: 500;
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 0.3s ease;
  flex-wrap: nowrap;
  align-content: center;
  padding: 0vw 1vw;
  gap: 1vw;
  transform: skew(-10deg);
  background-color: var(--grey2);
  background-color: transparent;
  color: var(--color-background);
}
.more_details {
  width: 100%;
  height: fit-content;
  font-size: 1vw;
  display: flex;
  text-align: justify;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
}
.aroh {
  padding: 0vw 1vw;
  margin-right: 1vw;
  font-size: 1.5vw;
  transition: 0.3s ease;
  background-color: transparent;
  color: var(--color-background);
}

.scroller:hover .aroh {
  transform: translateX(25vw);
}
.scroller:hover .more_text {
  transform: translateX(25vw);
}

.scroller {
  width: 150vw;
  height: fit-content;
  background-color: var(--black);
  font-size: 1vw;
  display: flex;
  text-align: justify;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  border: 0.3vw solid transparent;
  padding: 1.4vw 0vw;
  cursor: pointer;
}
.scrolling_text {
  border: none;
  border: 0vw solid var(--color-primary);
  background-color: var(--color-primary);
  transition: 0s ease-out;
  margin: 0vw 0vw;
}

#scroller2 {
  background-color: transparent;
  transition: 0s ease-out;
  margin: 6vw 0vw 3vw 0vw;
}

.line {
  width: 0.1vw;
  height: 17vw;
  background-color: var(--grey2);
}
.features_frameowrk {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
}
.frbramd {
  font-size: 5vw;
}
/* .framework {
  width: 10vw;
  height: 10vw;
  background-color: var(--color-background);
  border-radius: 1vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2vw;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: var(--color-text);
} */
.framework {
  font-size: 1.5vw;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 10vw;
  height: 10vw;
  border-radius: 1vw;
  background-color: var(--color-background);
  transition: 0.2s ease;
  flex-wrap: nowrap;
  align-content: center;
  gap: 1vw;
  padding: 1vw;
  border-top: 0.1vw solid var(--grey2);
  cursor: pointer;
}
.framework:hover {
  background-color: var(--grey2);
  border-top: 0vw solid transparent;
}
section {
  width: 100vw;
  height: fit-content;
  background-color: var(--color-background);
  position: relative;
  overflow: hidden;
  background-color: var(--color-background);
}

.features {
  margin: 10vw 0vw 7vw 0vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--color-background);
  padding-top: 10vw;
  position: relative;
  opacity: 1;
}
.features-container {
  width: 80%;
  height: 80%;
  display: flex;
  gap: 2vw;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.features-title {
  font-size: 3vw;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 5vw;
}
.features-list {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 90vw;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: row;
  /* overflow-x: scroll;*/
}
.features-list-item {
  width: 18vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2vw 0vw;
  transition: 0.4s ease;
  border-radius: 1vw;
  border: 0.1vw solid var(--grey);
}
.features-list-item * {
  transform: scale(0.9);
}
.features-list-item-title {
  font-size: 1.8vw;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 2vw;
}
.features-list-item-text {
  font-size: 1vw;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  min-height: 10vw;
  color: var(--color-text);
  text-align: center;
  /* background: var(--grey2);
  border-radius: 1vw;
  padding-top: 1vw; */
}
@media screen and (max-width: 768px) {
  .features-list-item {
    width: 40%;
    height: 40%;
  }
}
@media screen and (max-width: 500px) {
  .features-list-item {
    width: 80%;
    height: 80%;
  }
}
.fe_img {
  margin-bottom: 2vw;
  width: 13vw;
  height: 13vw;
  width: 12.5vw;
  height: 12.5vw;
  margin-bottom: 2vw;
  /* mix-blend-mode: multiply; */
  filter: grayscale(1) invert(1);
}
ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
li {
  text-align: center;
  margin-top: 1vw;
  color: var(--color-primary);
  opacity: 0.8;
  list-style: none;
}
.bold_display {
  font-weight: 600;
  font-size: 2.4vw;
  color: var(--color-text);
  width: 100%;
  display: flex;

  margin: 5vw 0vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  transition: 0s;
  /* margin-bottom: -7vw; */
  margin-bottom: 25vw;
  z-index: -1 !important;
}
</style>
