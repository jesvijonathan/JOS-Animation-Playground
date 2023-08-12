<script setup>
import TestArea from "@/views/TestArea.vue";
import { computed, defineProps } from "vue";
import { onMounted } from "vue";
import { ref } from "vue";

import JOS from "jos-animation";

const { loader } = defineProps(["loader"]);
changeCurButton("Home");

const version = ref("0.8.8");

const init = ref(0);
const stop = ref(-1);
const start = ref(-1);
const destroy = ref(1);

function but_stop() {
  JOS.stop(stop.value);
}
function but_start() {
  JOS.start(start.value);
}
function but_destroy() {
  JOS.destroy(destroy.value);
}

const default_option = {
  animation: "flip",
  delay: 0,
  duration: 0.5,
  timingFunction: "ease",
  once: false,
  mirror: true,
  scrollDirection: "none",
  startVisible: false,
  scrollProgressDisable: false,
  animationInverse: "",
  threshold: 0,
  intersectionRatio: 0,

  rootMargin_top: "10%",
  rootMargin_right: 0, //
  rootMargin_bottom: "20%",
  rootMargin_left: 0, //
  rootMargin: "10% 0% 20% 0%",

  invoke: "none",
  invokeOut: "none",
  scroll: "none",

  disable: false,
  debugMode: true,
  passive: false,
};

let option = ref({
  animation: "flip",
  delay: 0,
  duration: 0.5,
  timingFunction: "ease",
  once: false,
  mirror: true,
  scrollDirection: "none",
  startVisible: false,
  scrollProgressDisable: false,
  animationInverse: "", //
  threshold: 0, //
  intersectionRatio: "", //

  rootMargin_top: 10,
  rootMargin_right: 0, //
  rootMargin_bottom: 40,
  rootMargin_left: 0, //
  rootMargin: "10% 0% 40% 0%", //

  invoke: "none",
  invokeOut: "none",
  scroll: "none",

  disable: false,
  debugMode: true,
  passive: false,
});

onMounted(() => {
  JOS.init(default_option);
  //JOS.version();
  console.log(JOS);
  console.log(default_option);
  const scrollContainer = document.getElementById("scroll-container");
});

const playgroundSettings = ref({
  cubeColor: "#ffffff",
  cubeSize: 100,
  backgroundColor: false,
  totalCubes: 7,
  rootmarginVisible: false,
  newCubeOption: true,
});

const refe = ref(true);
function but_init() {
  refe.value = false;

  setTimeout(() => {
    refe.value = true;
    setTimeout(() => {
      if (init.value == 1) {
        JOS.init(option.value);
        console.log(option.value);
      } else {
        JOS.init(default_option);
        option = default_option;

        console.log(default_option);
      }
    }, 100);
  }, 100);
}

let plg_opt = ref("animation");
console.log("Playground Frame Loaded");

function refre() {
  setTimeout(() => {
    JOS.refresh();
  }, 100);
}
window["refree"] = refre;
</script>

<template>
  <section class="mhor">
    <div
      class="cur_set jos"
      data-jos_animation="fade-right"
      data-jos_duration="0.5"
      data-jos_once="false"
      data-jos_delay="0"
      data-jos_animationInverse=""
      data-jos_timingFunction="ease"
      data-jos_mirror="true"
      data-jos_scrollDirection="none"
      data-jos_rootMargin="20% 0% 50% 0%"
      data-jos_rootMargin_top="40%"
      data-jos_rootMargin_bottom="40%"
    >
      <div class="cur_set2">
        <div class="it_dis"><b>JOS Settings</b></div>
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
        <div class="but_flex">
          <button
            class="rest"
            @click="
              init = 1;
              but_init();
            "
          >
            Apply
          </button>

          <button
            class="rest"
            @click="
              init = 0;
              but_init();
            "
          >
            Reset
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="plg_opt == 'animation'"
      class="cur_opt jos"
      data-jos_animation="fade-left"
      data-jos_duration="0.5"
      data-jos_once="false"
      data-jos_delay="0"
      data-jos_animationInverse=""
      data-jos_timingFunction="ease"
      data-jos_mirror="true"
      data-jos_scrollDirection="none"
      data-jos_rootMargin="20% 0% 50% 0%"
      data-jos_rootMargin_top="20%"
      data-jos_rootMargin_bottom="50%"
    >
      <div class="item_title">Animation Properties</div>

      <div class="opt">
        <div class="opt_inside">
          <label for="animation">Animation : </label>
          <!-- select -->
          <select name="animation" id="animation" v-model="option.animation">
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
          <select name="delay" id="delay" v-model="option.delay">
            <option value="0" selected>0</option>
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
          <select name="duration" id="duration" v-model="option.duration">
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
          <select
            name="timingFunction"
            id="timingFunction"
            v-model="option.timingFunction"
          >
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
          <select name="once" id="once" v-model="option.once">
            <option value="false" selected>False</option>
            <option value="true">True</option>
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
          <select name="mirror" id="mirror" v-model="option.mirror">
            <option value="true" selected>True</option>
            <option value="false">False</option>
          </select>
        </div>
      </div>
      <!-- scroll direction -->
      <div class="opt">
        <div class="opt_inside">
          <label for="scrollDirection">Scroll Direction : </label>
          <!-- select -->
          <select
            name="scrollDirection"
            id="scrollDirection"
            v-model="option.scrollDirection"
          >
            <option value="none">none (All)</option>
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
          <select
            name="startVisible"
            id="startVisible"
            v-model="option.startVisible"
          >
            <option value="true">True</option>
            <option value="false" selected>False</option>
          </select>
        </div>
      </div>

      <!-- scroll progress disable -->
      <div class="opt">
        <div class="opt_inside">
          <label for="scrollProgressDisable">Scroll Progress Disable : </label>
          <!-- select -->
          <select
            name="scrollProgressDisable"
            id="scrollProgressDisable"
            v-model="option.scrollProgressDisable"
          >
            <option value="true">True</option>
            <option value="false" selected>False</option>
          </select>
        </div>
      </div>

      <!-- animatioin inverse -->
      <div class="opt">
        <div class="opt_inside">
          <label for="animationInverse">Animation Inverse : </label>
          <!-- select -->
          <select
            name="animationInverse"
            id="animationInverse"
            v-model="option.animationInverse"
          >
            <option value="" selected>none</option>
            <option value="static">static</option>
            <option value="no-transition">no-transition</option>
            <option value="" disabled></option>
            <option value="fade">fade</option>
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
        <div class="opt_inside dis">
          <label for="threshold">Threshold : </label>
          <!-- select -->
          <input
            type="number"
            min="0"
            max="1"
            step="0.1"
            v-model="option.threshold"
            disabled
          />
        </div>
      </div>

      <!-- intersection ratio -->
      <div class="opt">
        <div class="opt_inside dis">
          <label for="intersectionRatio">Intersection Ratio : </label>
          <!-- select -->
          <select
            name="intersectionRatio"
            id="intersectionRatio"
            v-model="option.intersectionRatio"
          >
            <option value="" disabled selected>auto</option>
            <option value="0" disabled>0</option>
            <option value="0.1" disabled>0.1</option>
            <option value="0.2" disabled>0.2</option>
            <option value="0.3" disabled>0.3</option>
            <option value="0.4" disabled>0.4</option>
            <option value="0.5" disabled>0.5</option>
            <option value="0.6" disabled>0.6</option>
            <option value="0.7" disabled>0.7</option>
            <option value="0.8" disabled>0.8</option>
            <option value="0.9" disabled>0.9</option>
            <option value="1" disabled>1</option>
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
              step="10"
              v-model="option.rootMargin_top"
            />
            <input
              type="number"
              class="rootno"
              id="rootMargin_bottom"
              name="rootMargin_bottom"
              min="0"
              max="100"
              step="10"
              v-model="option.rootMargin_bottom"
            />

            <input
              type="number"
              class="rootno"
              id="rootMargin_left"
              name="rootMargin_left"
              min="0"
              max="100"
              step="10"
              v-model="option.rootMargin_left"
            />
            <input
              type="number"
              class="rootno"
              id="rootMargin_right"
              name="rootMargin_right"
              min="0"
              max="100"
              step="10"
              v-model="option.rootMargin_right"
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
        <div class="opt_inside dis">
          <label for="invoke">Invoke : </label>
          <!-- select -->
          <select name="invoke" id="invoke" v-model="option.invoke">
            <option value="none" selected disabled>none</option>
            <option value="alert" disabled>Test Callback (Alert)</option>
            <option value="console" disabled>Test Callback (Console)</option>
          </select>
        </div>
      </div>

      <!-- invoke -->
      <div class="opt">
        <div class="opt_inside dis">
          <label for="invokeOut">Invoke Out : </label>
          <!-- select -->
          <select name="invokeOut" id="invokeOut" v-model="option.invokeOut">
            <option value="none" selected disabled>none</option>
            <option value="alert" disabled>Test Callback (Alert)</option>
            <option value="console" disabled>Test Callback (Console)</option>
          </select>
        </div>
      </div>

      <!-- anchor -->
      <div class="opt">
        <div class="opt_inside dis">
          <label for="anchor">Anchor : </label>
          <!-- select -->
          <select name="anchor" id="anchor">
            <option value="none" disabled selected>none</option>
            <option value="#elementID" disabled>#TestElementID</option>
          </select>
        </div>
      </div>

      <!-- scroll -->
      <div class="opt">
        <div class="opt_inside dis">
          <label for="scroll">Scroll Progress : </label>
          <!-- select -->
          <select name="scroll" id="scroll" v-model="option.scroll">
            <option value="none" selected disabled>none</option>
            <option value="width" disabled>Test Callback (% Text)</option>
            <option value="width" disabled>Test Callback (Opacity)</option>
            <option value="width" disabled>Test Callback (Width)</option>
            <option value="width" disabled>Test Callback (Rotate)</option>
          </select>
        </div>
      </div>
    </div>

    <div v-if="plg_opt == 'init'" class="cur_opt">
      <div class="item_title">Init Properties</div>
      <div class="opt">
        <div class="opt_inside dis">
          <label for="disable">Disable : </label>
          <input
            type="checkbox"
            id="disable"
            name="disable"
            value="disable"
            v-model="option.disable"
            disabled
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
            v-model="option.debugMode"
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
            v-model="option.passive"
          />
        </div>
      </div>
      <!-- version -->
      <div class="opt">
        <div class="opt_inside">
          Version
          <select name="version" id="version" v-model="version">
            <option value="0.3" disabled>0.3</option>
            <option value="0.5" disabled>0.5</option>
            <option value="0.6" disabled>0.6</option>
            <option value="0.7" disabled>0.7</option>
            <option value="0.8.1" disabled>0.8.1</option>
            <option value="0.8.8" selected>0.8.8</option>
          </select>
        </div>
      </div>
    </div>

    <div v-if="plg_opt == 'state'" class="cur_opt">
      <div class="item_title">State Properties</div>
      <!-- inti with reset as select option  -->
      <div class="opt">
        <div class="opt_inside">
          <button class="butt_in" @click="but_init()">Init</button>
          <!-- select -->
          <select name="init" id="init" v-model="init">
            <option value="0">Reset (Init with default options)</option>
            <option value="1" selected>Init (Init with current options)</option>
          </select>
        </div>
      </div>
      <!-- refresh button-->
      <div class="opt">
        <div class="opt_inside">
          <button class="butt_in" @click="JOS.refresh()">Refresh</button>
        </div>
      </div>
      <!-- pause button -->
      <div class="opt">
        <div class="opt_inside">
          <button class="butt_in" @click="but_stop()">Stop</button>
          <!-- select with type of pause -->
          <select name="pause" id="pause" v-model="stop">
            <option value="0">Stop at final state</option>
            <option value="1">Stop at initial state</option>
            <option value="-1" selected>Pause at current state</option>
          </select>
        </div>
      </div>
      <!-- start button -->
      <div class="opt">
        <div class="opt_inside">
          <button class="butt_in" @click="but_start()">Start</button>
          <!-- select with type of start -->
          <select name="start" id="start" v-model="start">
            <option value="0">Normal/Full start</option>
            <option value="-1" selected>Resume from current state</option>
          </select>
        </div>
      </div>

      <!-- destroy -->
      <div class="opt">
        <div class="opt_inside dis">
          <button class="butt_in" @click="but_destroy()" disabled>
            Destroy
          </button>
          <!-- select with type of destroy -->
          <select name="destroy" id="destroy" v-model="destroy">
            <option value="0" disabled>
              Destroy JOS instance excluding stylesheet
            </option>
            <option value="1" disabled selected>
              Full Destroy along with JOS-stylesheet
            </option>
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
          <input
            type="color"
            id="cubeColor"
            name="cubeColor"
            v-model="playgroundSettings.cubeColor"
          />
        </div>
      </div>
      <div class="opt">
        <div class="opt_inside">
          <label for="darkMode">Background Color : </label>
          <!-- color picker -->
          <input
            type="color"
            id="bgColor"
            name="bgColor"
            v-model="playgroundSettings.backgroundColor"
          />
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
            v-model="playgroundSettings.totalCubes"
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
            v-model="playgroundSettings.newCubeOption"
          />
        </div>
      </div>

      <div class="opt">
        <div class="opt_inside">
          <label for="rootm">RootMargin Border : </label>
          <input
            type="checkbox"
            id="rootm"
            name="rootm"
            v-model="playgroundSettings.rootmarginVisible"
          />
        </div>
      </div>
    </div>
  </section>

  <TestArea v-if="refe" :playgroundSettings="playgroundSettings" />
</template>
<style scoped>
.but_flex {
  display: flex;
  gap: 2vw;
}
/* checkbox style */
.rest {
  margin-top: 4vw;
  padding: 1vw 4vw;
  border-radius: 0.5vw;
  cursor: pointer;
  transition: 0.1s ease;

  background-color: var(--color-tertiary);
  color: var(--color-primary);
  border: 0.1vw solid var(--grey);
}
.rest:hover {
  border: 0.1vw solid var(--color-tertiary);
  background-color: var(--grey);
  color: var(--color-primary);
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
  margin: 5vw 0.5vw;
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
.it_div:hover {
  background-color: var(--grey2);
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
  margin: 1vw 10vw;
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
  margin-right: 7vw;
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

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  padding-bottom: 4vw;
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
/* template {
  height: fit-content;
}
section {
  height: fit-content;
} */
</style>
