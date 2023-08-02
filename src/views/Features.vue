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

    <div class="features">
      <div class="features-container">
        <div class="features-title">Features</div>
        <div class="features-list">
          <div class="features-list-item">
            <!-- box image -->
            <img class="fe_img" src="https://picsum.photos/200/200" alt="" />
            <div class="features-list-item-title">Lightweight</div>
            <div class="features-list-item-text">
              The library is less than 2kb, and it does not require any plugin
              addons to gain features.
            </div>
          </div>
          <div class="features-list-item">
            <img class="fe_img" src="https://picsum.photos/200/200" alt="" />
            <div class="features-list-item-title">Customizability</div>
            <div class="features-list-item-text">
              You can build really complex animations and sequences.
            </div>
          </div>
          <div class="features-list-item">
            <img class="fe_img" src="https://picsum.photos/200/200" alt="" />
            <div class="features-list-item-title">Easy to use</div>
            <div class="features-list-item-text">
              The library is very easy and straight forward to use.
            </div>
          </div>
          <div class="features-list-item">
            <img class="fe_img" src="https://picsum.photos/200/200" alt="" />
            <div class="features-list-item-title">Open Source</div>
            <div class="features-list-item-text">
              The library is open source, you can check the source code on
              github.
            </div>
          </div>
        </div>
      </div>
      <!-- works with html/js, react, vue, angular & other frameworks-->
      <div class="features-container">
        <div class="features-title">Works with</div>
        <!-- place icons of frameworks here -->
        <div class="features_frameowrk">
          <div class="framework">
            <i class="frbramd fa-brands fa-html5"></i>HTML/JS
          </div>
          <div class="framework">
            <i class="frbramd fa-brands fa-vuejs"></i>Vue
          </div>
          <div class="framework">
            <i class="frbramd fa-brands fa-angular"></i>Angular
          </div>
          <div class="framework">
            <i class="frbramd fa-brands fa-react"></i>React
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
  flex-wrap: wrap;
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
  width: 15vw;
  height: 15vw;
  margin-bottom: 2vw;
}
</style>
