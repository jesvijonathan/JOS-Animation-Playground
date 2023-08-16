<script setup>
// on update JOS.refresh() during every Dom update
import { ref } from "vue";
import { onMounted, onUpdated } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

// copy button
const tooltext = document.getElementById("tooltip-text");
function copy(e) {
  const text = e.previousElementSibling.textContent;
  navigator.clipboard.writeText(text);

  e.dataset.hover_data = "*Copied*";
  tooltext.textContent = "*Copied*";
  setTimeout(() => {
    e.dataset.hover_data = "Copy";
    tooltext.textContent = "Copy";
  }, 3000);
}
onMounted(() => {
  const scrolltext = document.getElementById("scroller");

  let oldScroll = 0;
  function scrolling_text(e) {
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

  window["scrolling_text"] = scrolling_text;
});
</script>

<template>
  <section
    class="jos"
    data-jos_rootMargin="-800px 0px 0px 0px"
    data-jos_animation="no-transition"
    data-jos_invoke="hide_fixed"
    id="installation"
  >
    <div class="home_about">
      <!-- <div>* I Got shut by company for being over qualified *</div>
      <div>As a response I built a library, that none of the ppl</div>
      <div>who shut me down could ever build !!</div>
      <div>Fuck AT&T</div>
    <div>Anyway fast forward, i got selected in worldline as a Data Scientist & a CPP transaction Developer</div>
    -->
      <div>
        <br />
        <!-- <div class="">This is a response, a work of art !</div> -->
        <div class="started_t">Get started in few steps</div>
        <div class="steps">
          <div
            class="step1 jos"
            data-jos_animation="fade-right"
            data-jos_scrollDirection="down"
            data-jos_rootMargin_bottom="20%"
          >
            <div
              class="step1_title jos"
              data-jos_animation="no-transition"
              data-jos_invoke="heading"
              data-nextScroll="links"
              data-intro_title="Installation"
            >
              1. Install JOS
            </div>
            <div class="step1_desc">
              JOS can be installed using npm, embeds, tags, etc. In this setup
              we will go with the most basic approach to get JOS up and running
              <br /><br />
            </div>
            <div class="step_code_con">
              <div class="step1_demo_text">
                Add the link inside the head tag :
              </div>
              <div class="step1_demo">
                <pre class="step1_demo_code">
  <code>
    &lt;link id="jos-stylesheet" rel="stylesheet" href="https://unpkg.com/jos-animation/dist/jos.css" crossorigin="anonymous" /&gt;
  </code>
</pre>

                <button
                  class="jos copy_but fa-regular fa-clipboard"
                  data-hover_data="Copy"
                  @click="copy($event.target)"
                ></button>
              </div>
            </div>
            <div class="step_code_con">
              <div class="step1_demo_text">
                Add the script right after the body tag :
              </div>
              <div class="step1_demo">
                <pre class="step1_demo_code">
  <code>
    &lt;script src="https://unpkg.com/jos-animation/dist/jos.min.js"&gt;&lt;/script&gt;
  </code>
                </pre>
                <button
                  class="jos copy_but fa-regular fa-clipboard"
                  data-hover_data="Copy"
                  @click="copy($event.target)"
                ></button>
              </div>
            </div>

            <div class="step_code_con">
              <div class="step1_demo_text">
                <br />
                <br />
                (Or) You can npm install jos and import it in your project :
              </div>
              <div class="step1_demo">
                <pre class="step1_demo_code">
  <code>
    npm i jos-animation
  </code>
                </pre>

                <button
                  class="jos copy_but fa-regular fa-clipboard"
                  data-hover_data="Copy"
                  @click="copy($event.target)"
                ></button>
              </div>
            </div>
          </div>

          <div
            class="step1 jos"
            data-jos_animation="fade-right"
            data-jos_scrollDirection="down"
            data-jos_rootMargin_bottom="35%"
          >
            <div class="step1_title">2. Setup</div>
            <div class="step1_desc">
              Now that we have installed JOS, we need to initialize it to start
              using it.
              <br />
              There are two ways to initialize JOS
              <br /><br />
            </div>
            <div class="step_code_con">
              <div class="step1_demo_text">
                Use JOS.init(); to initialize the library with default settings.
              </div>
              <div class="step1_demo">
                <pre class="step1_demo_code">
  <code>
    &lt;script&gt; JOS.init(); &lt;/script&gt;
  </code>
                </pre>
                <button
                  class="jos copy_but fa-regular fa-clipboard"
                  data-hover_data="Copy"
                  @click="copy($event.target)"
                ></button>
              </div>
            </div>
            <div class="step_code_con">
              <div class="step1_demo_text">
                <br />
                <br />
                (Or) Use JOS.init(options); to overide the default settings with
                your custom settings.
              </div>
              <div class="step1_demo">
                <pre class="step1_demo_code">
  <code>
    &lt;script&gt; JOS.init({ disable:false, debugMode:true, passive:true, once:false, animation:"grow", animationInverse:"fade", timingFunction:"ease-in-out", mirror:true, threshold:0, delay:0, duration:.5, startVisible:"false", scrollDirection:"none", scrollProgressDisable:false, intersectionRatio:0, rootMargin_top:"0%", rootMargin_bottom:"-50%", rootMargin:"0% 0% -50% 0%"}); &lt;/script&gt;
  </code>
                </pre>
                <button
                  class="jos copy_but fa-regular fa-clipboard"
                  data-hover_data="Copy"
                  @click="copy($event.target)"
                ></button>
              </div>
            </div>
          </div>

          <div
            class="step1 jos"
            data-jos_animation="fade-right"
            data-jos_scrollDirection="down"
            data-jos_rootMargin_bottom="35%"
          >
            <div class="step1_title">3. Animate elements</div>
            <div class="step1_desc">
              We now animate elements by adding the class="jos" to the element
              <br /><br />
            </div>
            <div class="step_code_con">
              <div
                class="step1_demo_text jos"
                data-jos_animation="no-transition"
                data-jos_invoke="heading"
                data-nextScroll="links"
                data-intro_title="Installation"
              >
                Set class="jos" to the element you want to animate :
              </div>
              <div class="step1_demo">
                <pre class="step1_demo_code">
  <code>
    &lt;div class="jos"&gt;&lt;/div&gt;
  </code>
                </pre>
                <button
                  class="jos copy_but fa-regular fa-clipboard"
                  data-hover_data="Copy"
                  @click="copy($event.target)"
                ></button>
              </div>
            </div>
            <div class="step_code_con">
              <div class="step1_demo_text">
                <br />
                <br />
                (Or) Set data-jos *attributes to customize the element you want
                to animate, (although these attributes are optional and will
                work without them) :
              </div>
              <div class="step1_demo">
                <pre class="step1_demo_code">
  <code>
    &lt;div class="jos" data-jos_animation="zoom" data-jos_animationInverse="none" data-jos_once="false" data-jos_duration="0.4" data-jos_delay="0" data-jos_timing-function="ease-in-out" data-jos_mirror="true" data-jos_rootMargin="0% 0% -50% 0%" data-jos_rootMargin_top="-10%" data-jos_rootMargin_bottom="-50%" data-jos_scrollDirection="none" data-jos_startVisible="false" data-jos_invoke="myCustomFunction" data-jos_invoke_out="myCustomFunction_onExit" data-jos_scroll="your_scroll_function" data-jos_anchor="#elementID"&gt;&lt;/div&gt;
  </code>
                </pre>
                <button
                  class="jos copy_but fa-regular fa-clipboard"
                  data-hover_data="Copy"
                  @click="copy($event.target)"
                ></button>
              </div>
            </div>
          </div>

          <div class="line"></div>
          <div class="butvon">
            <a
              href="https://www.youtube.com/watch?v=ziR95EKKttc"
              target="_blank"
              class="Button_1"
              >View Tutorials</a
            >
            <a
              href="https://github.com/jesvijonathan/JOS-Animation-Library/wiki#used-in"
              target="_blank"
              class="Button_1"
              >Projects Using JOS</a
            >
            <!-- <button class="Button_1">Feature Website</button> -->
          </div>
        </div>
      </div>
      <div id="scrolltext" class="scrolling_text jos">
        <div
          id="scroller"
          class="scroller jos"
          data-jos_scroll="scrolling_text"
          data-hover_data="Click to move to Playground"
          @click="router.push('/playground')"
        >
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
    </div>
  </section>
</template>

<style scoped>
.line {
  width: 60%;
  height: 0.1vw;
  background: var(--color-secondary);
  opacity: 0.4;
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

#scroller {
  background-color: transparent;
  transition: 0.2s ease-out;
}

/* scrollbar for code */
.step1_demo_code::-webkit-scrollbar {
  width: 0vw;
  height: 0vw;
}
.step1_demo_code:hover::-webkit-scrollbar {
  width: 0vw;
  height: 0.7vw;
}
.step1_demo_code::-webkit-scrollbar-track {
  background-color: var(--grey);
}
.step1_demo_code::-webkit-scrollbar-thumb {
  background-color: rgb(85, 85, 85);
}
.step1_demo_code::-webkit-scrollbar-thumb:hover {
  background-color: var(--color-secondary);
}
/* scrollbar for code */
.step1_demo_code {
  overflow-x: auto;
  white-space: nowrap;
  padding: 0.5vw 0vw;
  /* background-color: var(--opa-black); */
}
.step1_demo_code:hover {
  overflow-x: auto;
  white-space: nowrap;
  /* background-color: var(--color-background); */
}

.step1_demo_code {
  overflow-x: auto; /* Use 'scroll' if you want to always show the scrollbar */
  white-space: nowrap;
}
.copy_but {
  padding: 0.7vw;
  margin-left: 1vw;
  border-radius: 20%;
  border: 0px solid white;
  background-color: var(--grey);
  color: var(--color-primary);
  cursor: pointer;
  font-size: 1vw;
}

.copy_but:hover {
  background-color: var(--grey2);
}
.step_code_con {
  width: 100%;
}
.step1_demo_text {
  font-size: 1vw;
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  text-align: justify;
  width: 100%;
  padding: 1vw;
}
.step1_demo {
  width: 100%;
  height: 4vw;
  background-color: var(--grey);
  font-size: 1vw;
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  text-align: justify;
  padding: 1vw;
}
.step1_desc {
  font-size: 1vw;
  text-align: justify;
  width: 100%;
  padding: 0vw 1vw;
}
.step1_title {
  font-size: 1.8vw;
  width: 100%;
  text-align: left;
  margin-bottom: 2vw;
}
.step1 {
  width: 90%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 1vw;
  background-color: var(--grey2);
  padding: 2vw;
  font-weight: 100;
}
.steps {
  margin-top: 5vw;
  display: flex;
  border: 0.1vw solid var(--grey2);
  padding: 5vw;
  margin: 7vw 10vw;

  min-height: 5vw;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 5vw;
  font-family: "Roboto Mono", monospace;
  letter-spacing: 0vw;
}

.home_about {
  /* title */
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  color: var(--color-text);
  text-align: center;
  margin-top: 10vh;
  margin-bottom: 10vh;
  /* border: 1px solid red; */
}
section {
  width: 100vw;
  height: fit-content;
  background-color: var(--color-background);
  position: relative;
  overflow: hidden;
  background-color: var(--color-background);
}
.fa-clipboard {
}
</style>
