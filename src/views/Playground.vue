<script setup>
import TestArea from "@/views/TestArea.vue";
import { defineProps } from "vue";
import { onMounted } from "vue";
import { ref } from "vue";

import JOS from "jos-animation";

const { loader } = defineProps(["loader"]);
changeCurButton("Home");
/*
 
*/

let option = ref({
  animation: "fade",
});

onMounted(() => {
  // JOS.refresh();
  JOS.version();
  console.log(JOS);
  const scrollContainer = document.getElementById("scroll-container");
});

let plg_opt = ref("animation");
</script>

<template>
  <section>
    <div class="sandbox_try">
      <div class="bold_tes">Play & fiddle with JOS settings</div>
      <div class="sandb_but">
        <a>CodePen Examples</a>
        <a>Try In Sandbox</a>
        <a>Playground <i class="fa fa-1 fa-arrow-down"></i></a>
      </div>
    </div>
  </section>
  <section class="mhor">
    <div class="cur_set">
      <div class="cur_set2">
        <div class="it_dis">JOS Settings</div>
        <!-- on click add it_div-active class-->
        <div
          class="it_div"
          :class="{ it_div_active: plg_opt == 'animation' }"
          @click="plg_opt = 'animation'"
        >
          Animation Properties
        </div>
        <div
          class="it_div"
          :class="{ it_div_active: plg_opt == 'callback' }"
          @click="plg_opt = 'callback'"
        >
          Callback Properties
        </div>
        <div
          class="it_div"
          :class="{ it_div_active: plg_opt == 'init' }"
          @click="plg_opt = 'init'"
        >
          Init Properties
        </div>
        <div
          class="it_div"
          :class="{ it_div_active: plg_opt == 'state' }"
          @click="plg_opt = 'state'"
        >
          State Properties
        </div>
        <div
          class="it_div"
          :class="{ it_div_active: plg_opt == 'playground' }"
          @click="plg_opt = 'playground'"
        >
          Playground Settings
        </div>
        <div style="margin-bottom: 1vw"></div>
      </div>
    </div>

    <div v-if="plg_opt == 'animation'" class="cur_opt">
      <div class="item_title">Animation Properties</div>

      <div class="opt">
        <div class="opt_inside">
          <label for="animation">Animation : </label>
          <!-- select -->
          <select name="animation" id="animation">
            <option value="static">static</option>
            <option value="no-transition">no-transition</option>

            <option value="" disabled></option>
            <option value="fade" selected>fade</option>
            <option value="fade-up">fade-up</option>
            <option value="fade-down">fade-down</option>
            <option value="fade-left">fade-left</option>
            <option value="fade-right">fade-right</option>
            <option value="fade-right-up">fade-up-right</option>
            <option value="fade-left-up">fade-up-left</option>
            <option value="fade-right-down">fade-down-right</option>
            <option value="fade-left-down ">fade-down-left</option>
            <option value="flip">flip</option>
            <option value="flip-up">flip-up</option>
            <option value="flip-down">flip-down</option>
            <option value="flip-left">flip-left</option>
            <option value="flip-right">flip-right</option>
            <option value="slide">slide</option>
            <option value="slide-up">slide-up</option>
            <option value="slide-down">slide-down</option>
            <option value="slide-left">slide-left</option>
            <option value="slide-right">slide-right</option>
            <option value="slide-right-up">slide-up-right</option>
            <option value="slide-left-up">slide-up-left</option>
            <option value="slide-right-down">slide-down-right</option>
            <option value="slide-left-down ">slide-down-left</option>
            <option value="zoom">zoom</option>
            <option value="zoom-in">zoom-in</option>
            <option value="zoom-in-up">zoom-in-up</option>
            <option value="zoom-in-down">zoom-in-down</option>
            <option value="zoom-in-left">zoom-in-left</option>
            <option value="zoom-in-right">zoom-in-right</option>
            <option value="zoom-out">zoom-out</option>
            <option value="zoom-out-up">zoom-out-up</option>
            <option value="zoom-out-down">zoom-out-down</option>
            <option value="zoom-out-left">zoom-out-left</option>
            <option value="zoom-out-right">zoom-out-right</option>
            <option value="grow">grow</option>
            <option value="grow-right">grow-right</option>
            <option value="grow-left">grow-left</option>
            <option value="grow-up">grow-up</option>
            <option value="grow-down">grow-down</option>
            <option value="shrink">shrink</option>
            <option value="shrink-right">shrink-right</option>
            <option value="shrink-left">shrink-left</option>
            <option value="shrink-up">shrink-up</option>
            <option value="shrink-down">shrink-down</option>
            <option value="rotate">rotate</option>
            <option value="rotate-right">rotate-right</option>
            <option value="rotate-left">rotate-left</option>
            <option value="spin">spin</option>
            <option value="spin-right">spin-right</option>
            <option value="spin-left">spin-left</option>
            <options value="revolve">revolve</options>
            <option value="revolve-right">revolve-right</option>
            <option value="revolve-left">revolve-left</option>
            <option value="stretch">stretch</option>
            <option value="stretch-vertical">stretch-vertical</option>
            <option value="stretch-horizontal">stretch-horizontal</option>

            <option value="" disabled></option>
            <option value="slide-play">slide-play</option>
            <option value="slide-horizontal-play">slide-horizontal-play</option>
            <option value="slide-vertical-play">slide-vertical-play</option>
            <option value="zoom-in-play">zoom-in-play</option>
            <option value="pulse-play">pulse-play</option>
            <option value="zoom-play">zoom-play</option>
            <option value="zoom-out-play">zoom-out-play</option>
            <option value="pulse-out-play">pulse-out-play</option>
            <option value="flip-play">flip-play</option>
            <option value="rotate-play">rotate-play</option>
            <option value="spin-play">spin-play</option>
            <option value="revolve-play">revolve-play</option>
            <option value="grow-play">grow-play</option>
            <option value="shrink-play">shrink-play</option>
            <option value="stretch-play">stretch-play</option>
            <option value="stretch-vertical-play">stretch-vertical-play</option>
            <option value="fade-play">fade-play</option>
            <option value="fade-horizontal-play">fade-horizontal-play</option>
            <option value="fade-vertical-play">fade-vertical-play</option>
            <option value="blink-play">blink-play</option>

            <!-- <option value="shake-play">shake-play</option>
            <option value="tada-play">tada-play</option>
            <option value="wobble-play">wobble-play</option>
            <option value="jello-play">jello-play</option>
            <option value="heart-beat-play">heart-beat-play</option>
            <option value="bounce-play">bounce-play</option>
            <option value="flash-play">flash-play</option>
            <option value="rubber-band-play">rubber-band-play</option>
            <option value="head-shake-play">head-shake-play</option>
            <option value="swing-play">swing-play</option> -->

            <!-- <option value="bounce">bounce</option>
            <option value="flash">flash</option>
            <option value="pulse">pulse</option>
            <option value="rubber-band">rubber-band</option>
            <option value="shake">shake</option>
            <option value="head-shake">head-shake</option>
            <option value="swing">swing</option>
            <option value="tada">tada</option>
            <option value="wobble">wobble</option>
            <option value="jello">jello</option>
            <option value="heart-beat">heart-beat</option> -->
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
            <option value="0.5" selected>0.5</option>
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
            <option value="unset">none</option>
            <option value="ease" selected>ease</option>
            <option value="ease-in">ease-in</option>
            <option value="ease-out">ease-out</option>
            <option value="ease-in-out">ease-in-out</option>
            <option value="linear">linear</option>
            <option value="step-start">step-start</option>
            <option value="step-end">step-end</option>
            <option value="steps">steps</option>
            <option value="frames">frames</option>
            <option value="cubic-bezier">cubic-bezier</option>
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
            <option value="false" selected>False</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="" disabled>Any Integer</option>
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
            <option value="none">none (Both)</option>
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
          <label for="scrollProgressDisable">Scroll Progress Disable : </label>
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
            <option value="static">static</option>
            <option value="no-transition">no-transition</option>

            <option value="" disabled></option>
            <option value="fade" selected>fade</option>
            <option value="fade-up">fade-up</option>
            <option value="fade-down">fade-down</option>
            <option value="fade-left">fade-left</option>
            <option value="fade-right">fade-right</option>
            <option value="fade-right-up">fade-up-right</option>
            <option value="fade-left-up">fade-up-left</option>
            <option value="fade-right-down">fade-down-right</option>
            <option value="fade-left-down ">fade-down-left</option>
            <option value="flip">flip</option>
            <option value="flip-up">flip-up</option>
            <option value="flip-down">flip-down</option>
            <option value="flip-left">flip-left</option>
            <option value="flip-right">flip-right</option>
            <option value="slide">slide</option>
            <option value="slide-up">slide-up</option>
            <option value="slide-down">slide-down</option>
            <option value="slide-left">slide-left</option>
            <option value="slide-right">slide-right</option>
            <option value="slide-right-up">slide-up-right</option>
            <option value="slide-left-up">slide-up-left</option>
            <option value="slide-right-down">slide-down-right</option>
            <option value="slide-left-down ">slide-down-left</option>
            <option value="zoom">zoom</option>
            <option value="zoom-in">zoom-in</option>
            <option value="zoom-in-up">zoom-in-up</option>
            <option value="zoom-in-down">zoom-in-down</option>
            <option value="zoom-in-left">zoom-in-left</option>
            <option value="zoom-in-right">zoom-in-right</option>
            <option value="zoom-out">zoom-out</option>
            <option value="zoom-out-up">zoom-out-up</option>
            <option value="zoom-out-down">zoom-out-down</option>
            <option value="zoom-out-left">zoom-out-left</option>
            <option value="zoom-out-right">zoom-out-right</option>
            <option value="grow">grow</option>
            <option value="grow-right">grow-right</option>
            <option value="grow-left">grow-left</option>
            <option value="grow-up">grow-up</option>
            <option value="grow-down">grow-down</option>
            <option value="shrink">shrink</option>
            <option value="shrink-right">shrink-right</option>
            <option value="shrink-left">shrink-left</option>
            <option value="shrink-up">shrink-up</option>
            <option value="shrink-down">shrink-down</option>
            <option value="rotate">rotate</option>
            <option value="rotate-right">rotate-right</option>
            <option value="rotate-left">rotate-left</option>
            <option value="spin">spin</option>
            <option value="spin-right">spin-right</option>
            <option value="spin-left">spin-left</option>
            <options value="revolve">revolve</options>
            <option value="revolve-right">revolve-right</option>
            <option value="revolve-left">revolve-left</option>
            <option value="stretch">stretch</option>
            <option value="stretch-vertical">stretch-vertical</option>
            <option value="stretch-horizontal">stretch-horizontal</option>

            <option value="" disabled></option>
            <option value="slide-play">slide-play</option>
            <option value="slide-horizontal-play">slide-horizontal-play</option>
            <option value="slide-vertical-play">slide-vertical-play</option>
            <option value="zoom-in-play">zoom-in-play</option>
            <option value="pulse-play">pulse-play</option>
            <option value="zoom-play">zoom-play</option>
            <option value="zoom-out-play">zoom-out-play</option>
            <option value="pulse-out-play">pulse-out-play</option>
            <option value="flip-play">flip-play</option>
            <option value="rotate-play">rotate-play</option>
            <option value="spin-play">spin-play</option>
            <option value="revolve-play">revolve-play</option>
            <option value="grow-play">grow-play</option>
            <option value="shrink-play">shrink-play</option>
            <option value="stretch-play">stretch-play</option>
            <option value="stretch-vertical-play">stretch-vertical-play</option>
            <option value="fade-play">fade-play</option>
            <option value="fade-horizontal-play">fade-horizontal-play</option>
            <option value="fade-vertical-play">fade-vertical-play</option>
            <option value="blink-play">blink-play</option>

            <!-- <option value="shake-play">shake-play</option>
            <option value="tada-play">tada-play</option>
            <option value="wobble-play">wobble-play</option>
            <option value="jello-play">jello-play</option>
            <option value="heart-beat-play">heart-beat-play</option>
            <option value="bounce-play">bounce-play</option>
            <option value="flash-play">flash-play</option>
            <option value="rubber-band-play">rubber-band-play</option>
            <option value="head-shake-play">head-shake-play</option>
            <option value="swing-play">swing-play</option> -->

            <!-- <option value="bounce">bounce</option>
            <option value="flash">flash</option>
            <option value="pulse">pulse</option>
            <option value="rubber-band">rubber-band</option>
            <option value="shake">shake</option>
            <option value="head-shake">head-shake</option>
            <option value="swing">swing</option>
            <option value="tada">tada</option>
            <option value="wobble">wobble</option>
            <option value="jello">jello</option>
            <option value="heart-beat">heart-beat</option> -->
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
              value="10"
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
              value="40"
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

    <div v-if="plg_opt == 'callback'" class="cur_opt">
      <div class="item_title">Callback Properties</div>
      <!-- invoke -->
      <div class="opt">
        <div class="opt_inside">
          <label for="invoke">Invoke : </label>
          <!-- select -->
          <select name="invoke" id="invoke">
            <option value="none">none</option>
            <option value="alert">Test Function (Alert)</option>
            <option value="console">Test Function (Console)</option>
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
            <option value="alert">Test Function (Alert)</option>
            <option value="console">Test Function (Console)</option>
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
            <option value="width">Scroll Progress Percent</option>
            <option value="width">Test Callback (Opacity)</option>
            <option value="width">Test Callback (Width)</option>
            <option value="width">Test Callback (Rotate)</option>
          </select>
        </div>
      </div>
    </div>

    <div v-if="plg_opt == 'init'" class="cur_opt">
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
              checked
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

    <div v-if="plg_opt == 'state'" class="cur_opt">
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
            <option value="0">Destroy JOS instance excluding stylesheet</option>
            <option value="1">Full Destroy along with JOS-stylesheet</option>
          </select>
        </div>
      </div>
    </div>

    <div v-if="plg_opt == 'playground'" class="cur_opt">
      <!-- playground settings -->
      <div class="item_title">Playground Settings</div>
      <!-- color -->
      <div class="opt">
        <div class="opt_inside">
          <label for="darkMode">Cube Color : </label>
          <!-- color picker -->
          <input type="color" id="cubeColor" name="cubeColor" value="#ffffff" />
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
          <input type="checkbox" id="newCube" name="newCube" value="newCube" />
        </div>
      </div>
    </div>
  </section>
  <TestArea />
</template>
<style scoped>
/* checkbox style */
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
  background-color: var(--color-tertiary);
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
  width: 30vw;
  height: 40vw;
  flex-shrink: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  scroll-snap-align: center;
  margin-right: 10vw;
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
  height: 100vh;
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
