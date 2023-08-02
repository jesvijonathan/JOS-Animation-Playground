<script setup>
// on update JOS.refresh() during every Dom update
</script>

<template>
  <section>
    <!-- faetures on why its better  -->

    <!-- very lightweight, the library is less than 2kb -->
    <!-- opensource -->
    <!-- includes features & Does not require plugin addons to gain features -->
    <!-- Customizabilty, you can build really compolex animations and sequences -->
    <!-- Very easy & straight forward to use -->

    <div class="features" id="features">
      <div class="features-container">
        <div class="features-title">Features</div>
        <div class="features-list">
          <div
            class="features-list-item jos"
            data-jos_delay="0"
            data-jos_duration="0.7"
            data-jos_rootMargin_bottom="20%"
            data-jos_scrollDirection="down"
            data-jos_animation="flip"
          >
            <!-- box image -->

            <img class="fe_img" src="@/assets/lightweight.jpg" alt="" />
            <div class="features-list-item-title">Lightweight</div>
            <div
              class="features-list-item-text jos"
              data-jos_animation="no-transition"
              data-jos_invoke="heading"
              data-nextScroll="demo"
              data-intro_title="Features"
            >
              <!-- points -->
              <ul>
                <li>Very lightweight, the library is &lt;2kb.</li>
                <li>It does not require plugin addons to gain features.</li>
                <li>Performance oriented & optimized.</li>
              </ul>
            </div>
          </div>
          <div class="line"></div>
          <div
            class="features-list-item jos"
            data-jos_delay="0.2"
            data-jos_duration="0.7"
            data-jos_rootMargin_bottom="20%"
            data-jos_scrollDirection="down"
            data-jos_animation="flip"
          >
            <img class="fe_img" src="@/assets/custom.jpg" alt="" />
            <div class="features-list-item-title">Customizability</div>
            <div class="features-list-item-text">
              <ul>
                <li>You can build really complex animations and sequences.</li>
                <li>Fully customizable to its core</li>
                <li>The only limit is your imagination.</li>
              </ul>
            </div>
          </div>
          <div class="line"></div>
          <div
            class="features-list-item jos"
            data-jos_delay="0.4"
            data-jos_duration="0.7"
            data-jos_rootMargin_bottom="20%"
            data-jos_scrollDirection="down"
            data-jos_animation="flip"
          >
            <img class="fe_img" src="@/assets/easytouse.jpg" alt="" />
            <div class="features-list-item-title">Easy to use</div>
            <div class="features-list-item-text">
              <ul>
                <li>Very easy & straight forward to use.</li>
                <li>
                  Works with HTML/JS, React, Vue, Angular & other frameworks.
                </li>
                <li>Get started in less than 5 minutes.</li>
              </ul>
            </div>
          </div>
          <div class="line"></div>
          <div
            class="features-list-item jos"
            data-jos_delay="0.5"
            data-jos_duration="0.7"
            data-jos_rootMargin_bottom="20%"
            data-jos_scrollDirection="down"
            data-jos_animation="flip"
          >
            <!-- related picture -->
            <img class="fe_img" src="@/assets/opensource.png" alt="" />
            <div class="features-list-item-title">Open Source</div>
            <div
              class="features-list-item-text jos"
              data-jos_animation="no-transition"
              data-jos_invoke="heading"
              data-nextScroll="demo"
              data-intro_title="Features"
            >
              <ul>
                <li>This project is open source</li>
                <li>The library is free to use</li>
                <li>Anyone can contribute to the development.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.line {
  width: 0.1vw;
  height: 17vw;
  background-color: var(--grey2);
}
.features_frameowrk {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
}
.frbramd {
  font-size: 5vw;
}
/* .framework {
  width: 10vw;
  height: 10vw;
  background-color: var(--color-background);
  border-radius: 1vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2vw;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: var(--color-text);
} */
.framework {
  font-size: 1.5vw;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 10vw;
  height: 10vw;
  border-radius: 1vw;
  background-color: var(--color-background);
  transition: 0.2s ease;
  flex-wrap: nowrap;
  align-content: center;
  gap: 1vw;
  padding: 1vw;
  border-top: 0.1vw solid var(--grey2);
  cursor: pointer;
}
.framework:hover {
  background-color: var(--grey2);
  border-top: 0vw solid transparent;
}
section {
  width: 100vw;
  height: fit-content;
  background-color: var(--color-background);
  position: relative;
  overflow: hidden;
  background-color: var(--color-background);
}

.features {
  margin: 7vw 0vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.features-container {
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.features-title {
  font-size: 3vw;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 5vw;
}
.features-list {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 90vw;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: row;
  /* overflow-x: scroll;*/
}
.features-list-item {
  width: 16vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2vw;
}
.features-list-item-title {
  font-size: 1.8vw;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 2vw;
}
.features-list-item-text {
  font-size: 1vw;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  min-height: 10vw;
  color: var(--color-text);
  text-align: center;
}
@media screen and (max-width: 768px) {
  .features-list-item {
    width: 40%;
    height: 40%;
  }
}
@media screen and (max-width: 500px) {
  .features-list-item {
    width: 80%;
    height: 80%;
  }
}
.fe_img {
  width: 13vw;
  height: 13vw;
  margin-bottom: 2vw;
  width: 13vw;
  height: 13vw;
  margin-bottom: 2vw;
  /* mix-blend-mode: multiply; */
  filter: grayscale(1) invert(1);
}
ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
li {
  text-align: center;
  margin-top: 1vw;
  color: var(--color-primary);
  opacity: 0.8;
  list-style: none;
}
</style>
