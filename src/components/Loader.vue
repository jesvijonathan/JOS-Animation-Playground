<script setup></script>

<template>
  <div class="loader">
    <div class="con">
      <div class="cubes-container left">
        <div class="cubes cube-1"></div>
      </div>
      <div class="cubes-container right">
        <div class="cubes cube-2"></div>
      </div>
    </div>
    <h1 id="loader_text" class="loader-text">JOS</h1>
  </div>
</template>

<style>
.loader_anime {
  animation: loader_text 1s ease-in-out forwards;
  animation-delay: 0.4s;
}
@keyframes loader_text {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  80% {
    transform: translate(-50%, -50%) scale(1.1);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
.con {
  transition: 0.7s ease;
}
.loader {
  top: 0%;
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: var(--color-background);
  z-index: 9999;
  transition: 0.4s ease-out;
}
:root {
  --color-primary: #2e2e2e;
  --color-secondary: #686868;
  --color-tertiary: #2b2b2b79;
  --color-tertiary2: #3b3b3b79;
  --color-quaternary: #2d2d2d;
}

.cubes-container {
  position: fixed;
  top: 0%;
  height: 100vh;
  filter: blur(200px);
  transition: 0.4s ease;
}

.left {
}

.right {
  right: 0%;
  transform: rotate(180deg);
}

.loader-text {
  font-size: 5vw;
  color: var(--color-primary);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  position: absolute;
  transition: 0.3s ease-in-out;
}

.cubes {
  width: 50vw;
  height: 10vw;
  position: absolute;
  transition: 5s ease-out;
  opacity: 0;
  opacity: 1;
  animation: animate-cubes 10s infinite;
  transform: rotate(60deg);
}

.cube-1 {
  background: var(--color-primary);
}

.cube-2 {
  background: #222222;
}

@keyframes animate-cubes {
  0% {
    height: 0vh;
    width: 100vh;
    transform: rotate(60deg);
  }
  30% {
    height: 120vh;
    width: 120vw;
    transform: rotate(100deg);
  }
  40% {
    height: 120vh;
    width: 100vw;
    transform: rotate(60deg);
  }

  50% {
    height: 10vh;
    width: 30vw;
    transform: rotate(0deg);
  }
  60% {
    height: 100vh;
    width: 30vw;
    transform: rotate(0deg);
  }

  70% {
    height: 100vh;
    width: 100vh;
    transform: rotate(0deg);
  }
  89% {
    width: 100vh;
  }
  90% {
    height: 0vh;
    transform: rotate(0deg);
  }

  100% {
    height: 0vh;
    width: 0vw;
    transform: rotate(60deg);
  }
}
</style>
