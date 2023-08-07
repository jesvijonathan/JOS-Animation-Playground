<script setup>
import TestArea from "@/views/TestArea.vue";
import { defineProps } from "vue";
import { onMounted } from "vue";

import JOS from "jos-animation";

const { loader } = defineProps(["loader"]);
changeCurButton("Home");

// const options = {

// };
/*
these are the available options for jos :

init()	Initialize/Reset JOS	options = {} (refer JOS.Init(options) )
refresh()	Refresh JOS	none
stop()	Stop/Pause JOS	state = (0 - Stop at final state, 1 - Stop at initial state, -1 - Pause at current state)
start()	Start/Resume JOS Service	state = (0 - Normal/Full start, -1 - Resume from current state)
destroy()	Destroy JOS Instance	state = (0 - Destroy JOS instance excluding stylesheet, 1 - Full Destroy along with JOS-stylesheet)
*/

onMounted(() => {
  // JOS.refresh();
  JOS.version();

  const scrollContainer = document.getElementById("scroll-container");
  // let inside = false;
  // addScrollListener(scrollContainer);

  // scrollContainer.addEventListener("mouseenter", () => {
  //   inside = true;
  // });

  // scrollContainer.addEventListener("mouseleave", () => {
  //   inside = false;
  // });

  // function addScrollListener(scrollContainer) {
  //   scrollContainer.addEventListener(
  //     "wheel",
  //     (e) => {
  //       if (inside) {
  //         // console.log(scrollContainer.scrollLeft, " : ", e.deltaY);

  //         scrollContainer.scrollLeft += e.deltaY;
  //       }
  //       e.preventDefault();
  //     },
  //     {
  //       passive: false,
  //     }
  //   );
  // }
});

// global jos settings for container
</script>

<template>
  <section class="mhor">
    <div id="scroll-container" class="scroll-container">
      <!-- <div class="item" style="opacity: 0"></div> -->

      <div class="item overload_co">
        <div class="item_title">Animation Properties</div>
        <!-- animation -->
        <div class="opt">
          <div class="opt_inside">
            <label for="animation">Animation : </label>
            <!-- select -->
            <select name="animation" id="animation">
              <option value="grow">grow</option>
              <option value="fade">fade</option>
              <option value="fade-up">fade-up</option>
              <option value="fade-down">fade-down</option>
              <option value="fade-left">fade-left</option>
              <option value="fade-right">fade-right</option>
              <option value="fade-up-right">fade-up-right</option>
              <option value="fade-up-left">fade-up-left</option>
              <option value="fade-down-right">fade-down-right</option>
              <option value="fade-down-left">fade-down-left</option>
              <option value="slide-up">slide-up</option>
              <option value="slide-down">slide-down</option>
              <option value="slide-left">slide-left</option>
              <option value="slide-right">slide-right</option>
            </select>
          </div>
        </div>
        <!-- delay -->
        <div class="opt">
          <div class="opt_inside">
            <label for="delay">Delay : </label>
            <!-- select -->
            <select name="delay" id="delay">
              <option value="0">0</option>
              <option value="0.1">0.1</option>
              <option value="0.2">0.2</option>
              <option value="0.3">0.3</option>
              <option value="0.4">0.4</option>
              <option value="0.5">0.5</option>
              <option value="0.6">0.6</option>
              <option value="0.7">0.7</option>
              <option value="0.8">0.8</option>
              <option value="0.9">0.9</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <!-- duration -->
        <div class="opt">
          <div class="opt_inside">
            <label for="duration">Duration : </label>
            <!-- select -->
            <select name="duration" id="duration">
              <option value="0">0</option>
              <option value="0.1">0.1</option>
              <option value="0.2">0.2</option>
              <option value="0.3">0.3</option>
              <option value="0.4">0.4</option>
              <option value="0.5">0.5</option>
              <option value="0.6">0.6</option>
              <option value="0.7">0.7</option>
              <option value="0.8">0.8</option>
              <option value="0.9">0.9</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <!-- timing function -->
        <div class="opt">
          <div class="opt_inside">
            <label for="timingFunction">Timing Function : </label>
            <!-- select -->
            <select name="timingFunction" id="timingFunction">
              <option value="ease">ease</option>
              <option value="ease-in">ease-in</option>
              <option value="ease-out">ease-out</option>
              <option value="ease-in-out">ease-in-out</option>
              <option value="linear">linear</option>
              <option value="step-start">step-start</option>
              <option value="step-end">step-end</option>
              <option value="steps(4, end)">steps(4, end)</option>
              <option value="steps(4, start)">steps(4, start)</option>
              <option value="steps(4, jump-end)">steps(4, jump-end)</option>
              <option value="steps(4, jump-start)">steps(4, jump-start)</option>
              <option value="cubic-bezier(0.1, 0.7, 1.0, 0.1)">
                cubic-bezier(0.1, 0.7, 1.0, 0.1)
              </option>
              <option value="cubic-bezier(0.1, 0.7, 1.0, 0.1)">
                cubic-bezier(0.1, 0.7, 1.0, 0.1)
              </option>
              <option value="cubic-bezier(0.1, 0.7, 1.0, 0.1)">
                cubic-bezier(0.1, 0.7, 1.0, 0.1)
              </option>
              <option value="cubic-bezier(0.1, 0.7, 1.0, 0.1)">
                cubic-bezier(0.1, 0.7, 1.0, 0.1)
              </option>
            </select>
          </div>
        </div>
        <!-- once -->
        <div class="opt">
          <div class="opt_inside">
            <label for="once">Once : </label>
            <!-- select -->
            <select name="once" id="once">
              <option value="true">True</option>
              <option value="false">False</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
        <!-- mirror -->
        <div class="opt">
          <div class="opt_inside">
            <label for="mirror">Mirror : </label>
            <!-- select -->
            <select name="mirror" id="mirror">
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
        </div>
        <!-- scroll direction -->
        <div class="opt">
          <div class="opt_inside">
            <label for="scrollDirection">Scroll Direction : </label>
            <!-- select -->
            <select name="scrollDirection" id="scrollDirection">
              <option value="none">none</option>
              <option value="up">up</option>
              <option value="down">down</option>
            </select>
          </div>
        </div>
        <!-- start visible -->
        <div class="opt">
          <div class="opt_inside">
            <label for="startVisible">Start Visible : </label>
            <!-- select -->
            <select name="startVisible" id="startVisible">
              <option value="false">False</option>
              <option value="true">True</option>
            </select>
          </div>
        </div>

        <!-- scroll progress disable -->
        <div class="opt">
          <div class="opt_inside">
            <label for="scrollProgressDisable"
              >Scroll Progress Disable :
            </label>
            <!-- select -->
            <select name="scrollProgressDisable" id="scrollProgressDisable">
              <option value="false">False</option>
              <option value="true">True</option>
            </select>
          </div>
        </div>

        <!-- animatioin inverse -->
        <div class="opt">
          <div class="opt_inside">
            <label for="animationInverse">Animation Inverse : </label>
            <!-- select -->
            <select name="animationInverse" id="animationInverse">
              <option value="grow">grow</option>
              <option value="fade">fade</option>
              <option value="fade-up">fade-up</option>
              <option value="fade-down">fade-down</option>
              <option value="fade-left">fade-left</option>
              <option value="fade-right">fade-right</option>
              <option value="fade-up-right">fade-up-right</option>
              <option value="fade-up-left">fade-up-left</option>
              <option value="fade-down-right">fade-down-right</option>
              <option value="fade-down-left">fade-down-left</option>
              <option value="slide-up">slide-up</option>
              <option value="slide-down">slide-down</option>
              <option value="slide-left">slide-left</option>
              <option value="slide-right">slide-right</option>
            </select>
          </div>
        </div>

        <!-- threshold -->
        <div class="opt">
          <div class="opt_inside">
            <label for="threshold">Threshold : </label>
            <!-- select -->
            <select name="threshold" id="threshold">
              <option value="0">0</option>
              <option value="0.1">0.1</option>
              <option value="0.2">0.2</option>
              <option value="0.3">0.3</option>
              <option value="0.4">0.4</option>
              <option value="0.5">0.5</option>
              <option value="0.6">0.6</option>
              <option value="0.7">0.7</option>
              <option value="0.8">0.8</option>
              <option value="0.9">0.9</option>
              <option value="1">1</option>
            </select>
          </div>
        </div>

        <!-- intersection ratio -->
        <div class="opt">
          <div class="opt_inside">
            <label for="intersectionRatio">Intersection Ratio : </label>
            <!-- select -->
            <select name="intersectionRatio" id="intersectionRatio">
              <option value="0">0</option>
              <option value="0.1">0.1</option>
              <option value="0.2">0.2</option>
              <option value="0.3">0.3</option>
              <option value="0.4">0.4</option>
              <option value="0.5">0.5</option>
              <option value="0.6">0.6</option>
              <option value="0.7">0.7</option>
              <option value="0.8">0.8</option>
              <option value="0.9">0.9</option>
              <option value="1">1</option>
            </select>
          </div>
        </div>

        <!-- rootMargin -->
        <div class="opt">
          <div class="opt_inside">
            <label for="rootMargin">Root Margin : </label>

            <div class="rootord">
              <input
                type="number"
                class="rootno"
                id="rootMargin_top"
                name="rootMargin_top"
                min="0"
                max="100"
                value="0"
                step="10"
              />
              <input
                type="number"
                class="rootno"
                id="rootMargin_bottom"
                name="rootMargin_bottom"
                min="0"
                max="100"
                step="10"
                value="0"
              />

              <input
                type="number"
                class="rootno"
                id="rootMargin_left"
                name="rootMargin_left"
                min="0"
                max="100"
                value="0"
                step="10"
              />
              <input
                type="number"
                class="rootno"
                id="rootMargin_right"
                name="rootMargin_right"
                min="0"
                max="100"
                step="10"
                value="0"
              />
            </div>
          </div>
        </div>

        <!-- inv -->
        <div class="opt">
          <div class="opt_inside"></div>
        </div>
        <!-- inv -->
        <div class="opt">
          <div class="opt_inside"></div>
        </div>
      </div>

      <div class="item">
        <div class="item_title">Callback Properties</div>
        <!-- invoke -->
        <div class="opt">
          <div class="opt_inside">
            <label for="invoke">Invoke : </label>
            <!-- select -->
            <select name="invoke" id="invoke">
              <option value="none">none</option>
              <option value="myCustomFunction">myCustomFunction</option>
            </select>
          </div>
        </div>

        <!-- invoke -->
        <div class="opt">
          <div class="opt_inside">
            <label for="invokeOut">Invoke Out : </label>
            <!-- select -->
            <select name="invokeOut" id="invokeOut">
              <option value="none">none</option>
              <option value="myCustomFunction">myCustomFunction</option>
            </select>
          </div>
        </div>

        <!-- anchor -->
        <div class="opt">
          <div class="opt_inside">
            <label for="anchor">Anchor : </label>
            <!-- select -->
            <select name="anchor" id="anchor">
              <option value="none">none</option>
              <option value="#elementID">#elementID</option>
            </select>
          </div>
        </div>

        <!-- scroll -->
        <div class="opt">
          <div class="opt_inside">
            <label for="scroll">Scroll Progress : </label>
            <!-- select -->
            <select name="scroll" id="scroll">
              <option value="none">none</option>
              <option value="ScrollCallbackFunction">
                ScrollCallbackFunction
              </option>
            </select>
          </div>
        </div>
      </div>

      <div class="item">
        <div class="item_title">Init Properties</div>
        <div class="opt">
          <div class="opt">
            <div class="opt_inside">
              <label for="disable">Disable : </label>
              <input
                type="checkbox"
                id="disable"
                name="disable"
                value="disable"
              />
            </div>
          </div>
          <div class="opt">
            <div class="opt_inside">
              <label for="debugMode">Debug Mode : </label>
              <input
                type="checkbox"
                id="debugMode"
                name="debugMode"
                value="debugMode"
              />
            </div>
          </div>
          <div class="opt">
            <div class="opt_inside">
              <label for="passive">Passive : </label>
              <input
                type="checkbox"
                id="passive"
                name="passive"
                value="passive"
              />
            </div>
          </div>
          <!-- version -->
          <div class="opt">
            <div class="opt_inside">
              Version
              <select name="version" id="version">
                <option value="0" disabled>0.3</option>
                <option value="0.1" disabled>0.5</option>
                <option value="0.2" disabled>0.6</option>
                <option value="0.2" disabled>0.7</option>
                <option value="0.2" disabled>0.8.1</option>
                <option value="0.2">0.8.8</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="item">
        <div class="item_title">State Properties</div>
        <!-- inti with reset as select option  -->
        <div class="opt">
          <div class="opt_inside">
            <button @click="JOS.init(initWithReset)">Init</button>
            <!-- select -->
            <select name="initWithReset" id="initWithReset">
              <option value="Reset">Reset</option>
              <option value="options">Custom Options</option>
            </select>
          </div>
        </div>
        <!-- refresh button-->
        <div class="opt">
          <div class="opt_inside">
            <button @click="JOS.refresh()">Refresh</button>
          </div>
        </div>
        <!-- pause button -->
        <div class="opt">
          <div class="opt_inside">
            <button @click="JOS.stop(-1)">Pause</button>
            <!-- select with type of pause -->
            <select name="pause" id="pause">
              <option value="0">Stop at final state</option>
              <option value="1">Stop at initial state</option>
              <option value="-1">Pause at current state</option>
            </select>
          </div>
        </div>
        <!-- start button -->
        <div class="opt">
          <div class="opt_inside">
            <button @click="JOS.start(0)">Start</button>
            <!-- select with type of start -->
            <select name="start" id="start">
              <option value="0">Normal/Full start</option>
              <option value="-1">Resume from current state</option>
            </select>
          </div>
        </div>

        <!-- destroy -->
        <div class="opt">
          <div class="opt_inside">
            <button @click="JOS.destroy(0)">Destroy</button>
            <!-- select with type of destroy -->
            <select name="destroy" id="destroy">
              <option value="0">
                Destroy JOS instance excluding stylesheet
              </option>
              <option value="1">Full Destroy along with JOS-stylesheet</option>
            </select>
          </div>
        </div>
      </div>

      <div class="item">
        <!-- playground settings -->
        <div class="item_title">Playground Settings</div>
        <!-- color -->
        <div class="opt">
          <div class="opt_inside">
            <label for="darkMode">Cube Color : </label>
            <!-- color picker -->
            <input
              type="color"
              id="cubeColor"
              name="cubeColor"
              value="#ffffff"
            />
          </div>
        </div>
        <div class="opt">
          <div class="opt_inside">
            <label for="darkMode">Background Color : </label>
            <!-- color picker -->
            <input type="color" id="bgColor" name="bgColor" value="#000" />
          </div>
        </div>
        <!-- number of cubes -->
        <div class="opt">
          <div class="opt_inside">
            <label for="numOfCubes">No. of Cubes : </label>
            <input
              class="cun_no"
              type="number"
              id="numOfCubes"
              name="numOfCubes"
              min="1"
              value="10"
            />
          </div>
        </div>

        <!-- dynamic new cube button as last -->
        <div class="opt">
          <div class="opt_inside">
            <label for="newCube">New Cube Option : </label>
            <input
              type="checkbox"
              id="newCube"
              name="newCube"
              value="newCube"
            />
          </div>
        </div>
      </div>
      <!-- Add more items here -->
    </div>
  </section>
  <TestArea />
</template>
<style scoped>
/* set max width of selection */

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
  width: 20vw;
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

.scroll-container::-webkit-scrollbar {
  width: 0.3vw;
  height: 0.5vw;
  background: var(--grey2);
}
.scroll-container::-webkit-scrollbar-thumb {
  background: var(--grey);
  border-radius: 0.1vw;
}
.scroll-container::-webkit-scrollbar-thumb:hover {
  background: var(--color-secondary);
}
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
  width: 25vw;
  height: 77vh;
  margin-top: 4vw;
  flex-shrink: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  scroll-snap-align: center;
  background-color: rgb(30, 30, 30);
  margin-right: 3vw;
  flex-direction: column;
  align-content: flex-start;
  flex-wrap: nowrap;
  background-color: var(--color-tertiary);
  border-radius: 1vw;
  font-family: Poppins, sans-serif;
}
.item:hover {
  box-shadow: 0 0 0.7vw 0.1vw var(--color-secondary);
}
.item:active {
  box-shadow: 0 0 0.7vw 0.8vw var(--color-secondary);
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
