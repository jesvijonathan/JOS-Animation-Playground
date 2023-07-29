<script setup></script>

<template>
  <section id="home">
    <div class="home_title">
      <div class="jos" data-jos_animation="no-display">
        <div style="display: flex" class="jos" data-jos_animation="fade-right">
          <div class="jos" data-jos_animation="flip-down">So</div>
          <div class="jos" data-jos_animation="flip-down" data-jos_delay="0.5">
            , I built an animation
          </div>
        </div>
        <div
          style="display: flex; flex-direction: column"
          class="jos"
          data-jos_animation="fade-right"
          data-jos_delay="0.7"
        >
          <div class="jos" data-jos_animation="flip-down" data-jos_delay="0.7">
            library that can instantly
          </div>

          <div class="jos" data-jos_animation="flip-down" data-jos_delay="1">
            add life to your websites.
          </div>
        </div>
        <!-- <div></div> -->
        <div
          class="home_but jos"
          data-jos_animation="fade-right"
          data-jos_delay="1"
        >
          <button class="Button_1">Get Started</button>
          <button class="Button_1">Documentation</button>
        </div>
      </div>
    </div>
    <div class="home_showcase">
      <div class="showcase jos"></div>
    </div>
  </section>
</template>

<style scoped>
.home_showcase {
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  top: 50%;
  margin-right: 10vw;
  transform: translateY(-50%);
}
.showcase {
  width: 35vw;
  height: 90vh;
  border: 2px solid var(--color-primary);
}
.home_but {
  display: flex;
  flex-direction: row;
  gap: 2vw;
  margin-top: 5vw;
}
.Button_1 {
  border: 2px solid var(--color-primary);
  border-radius: 10px;
  background-color: transparent;
  color: var(--color-primary);
  font-size: 1.5vw;
  font-weight: bold;
  padding: 0.5vw 1vw;
  cursor: pointer;
  transition: 0.3s;
}

.Button_1:hover {
  background-color: var(--color-primary);
  color: var(--color-background);
}

#home {
  width: 100vw;
  height: 100vh;
  background-color: var(--color-background);
  position: relative;
  overflow: hidden;
}
.box_fill {
  width: 60vw;
  height: 100vh;
  background-color: #ffffff;
  border-radius: 30% 30% 0% 100% / 30% 0% 100% 30%;
  /* move to right side */
  position: absolute;
  top: 0;
  right: 0;
}
.home_title {
  font-size: 8vw;
  font-weight: bold;
  position: absolute;
  color: var(--color-primary);
  top: 50%;
  left: 10%;
  width: fit-content;
  display: block;
  transform: translate(-10%, -50%) scale(0.7);
}
.home_support_title {
  font-size: 10vw;
  font-weight: bold;
  position: absolute;
  top: 50%;
  margin-left: 7vw;
  color: var(--color-background);
  transform: translate(0%, -50%);
}
</style>
