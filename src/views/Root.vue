<script setup>
import Home from "@/views/home.vue";
import Brochure from "@/views/brochure.vue";
import About from "@/views/about.vue";
import Intro from "@/views/intro.vue";
import Features from "@/views/features.vue";

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
