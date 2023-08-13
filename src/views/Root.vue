<script setup>
import Home from "@/views/Home.vue";
import Brochure from "@/views/Brochure.vue";
import About from "@/views/About.vue";
import Intro from "@/views/Intro.vue";
import Features from "@/views/Features.vue";

// get props from app.vue
import { defineProps } from "vue";
const { loader } = defineProps(["loader"]);
changeCurButton("Playground");
</script>

<template>
  <Home v-show="!loader" />
  <Brochure v-show="!loader" />
  <Intro v-show="!loader" />
  <About />

  <!-- <Projects /> -->

  <Features />
</template>

<style scoped></style>
