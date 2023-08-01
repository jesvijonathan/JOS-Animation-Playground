<script setup>
// on update JOS.refresh() during every Dom update

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
</script>

<template>
  <section
    class="jos"
    data-jos_rootMargin="-800px 0px 0px 0px"
    data-jos_animation="no-transition"
    data-jos_invoke="hide_fixed"
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
        <div class="">Get started in just a few steps</div>
        <div class="steps">
          <div
            class="step1 jos"
            data-jos_animation="fade-right"
            data-jos_scrollDirection="down"
            data-jos_rootMargin_bottom="35%"
          >
            <div class="step1_title">1. Install JOS</div>
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
    &lt;link
      id="jos-stylesheet"
      rel="stylesheet"
      href="https://unpkg.com/jos-animation/dist/jos.css"
      crossorigin="anonymous"
    /&gt;
  </code>
</pre>

                <button
                  class="jos copy_but"
                  data-hover_data="Copy"
                  @click="copy($event.target)"
                >
                  <i class="fa-regular fa-clipboard"></i>
                </button>
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
                  class="jos copy_but"
                  data-hover_data="Copy"
                  @click="copy($event.target)"
                >
                  <i class="fa-regular fa-clipboard"></i>
                </button>
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
                  class="jos copy_but"
                  data-hover_data="Copy"
                  @click="copy($event.target)"
                >
                  <i class="fa-regular fa-clipboard"></i>
                </button>
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
                  class="jos copy_but"
                  data-hover_data="Copy"
                  @click="copy($event.target)"
                >
                  <i class="fa-regular fa-clipboard"></i>
                </button>
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
                  class="jos copy_but"
                  data-hover_data="Copy"
                  @click="copy($event.target)"
                >
                  <i class="fa-regular fa-clipboard"></i>
                </button>
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
              <div class="step1_demo_text">
                Set class="jos" to the element you want to animate :
              </div>
              <div class="step1_demo">
                <pre class="step1_demo_code">
  <code>
    &lt;div class="jos"&gt;&lt;/div&gt;
  </code>
                </pre>
                <button
                  class="jos copy_but"
                  data-hover_data="Copy"
                  @click="copy($event.target)"
                >
                  <i class="fa-regular fa-clipboard"></i>
                </button>
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
                  class="jos copy_but"
                  data-hover_data="Copy"
                  @click="copy($event.target)"
                >
                  <i class="fa-regular fa-clipboard"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
</style>
