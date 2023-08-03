<script setup>
import TestArea from "@/views/TestArea.vue";
import DebugMenu from "@/views/DebugMenu.vue";

// get all props from app.vue
import { defineProps } from "vue";
const { loader } = defineProps(["loader"]);

changeCurButton("Home");
</script>

<template>
  <DebugMenu />
  <TestArea />
</template>

<style scoped></style>
