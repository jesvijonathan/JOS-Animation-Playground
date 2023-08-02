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

    <div class="features" id="links">
      <!-- works with html/js, react, vue, angular & other frameworks-->
      <div
        class="features-container jos"
        data-jos_animation="no-transition"
        data-jos_invoke="heading"
        data-nextScroll="footer"
        data-intro_title="Links"
      >
        <div class="features-title">Wider Compatibility</div>
        <!-- place icons of frameworks here -->
        <div class="features_frameowrk">
          <div
            class="framework jos"
            data-jos_duration="0.5"
            data-jos_rootMargin_bottom="80%"
            data-jos_animation="framework-colored"
          >
            <i class="frbramd fa-brands fa-html5"></i>
            <div class="frmt">HTML/JS</div>
          </div>
          <div
            class="framework jos"
            data-jos_duration="0.5"
            data-jos_rootMargin_bottom="76%"
            data-jos_animation="framework-colored"
          >
            <i class="frbramd fa-brands fa-vuejs"></i>
            <div class="frmt">Vue</div>
          </div>
          <div
            class="framework jos"
            data-jos_duration="0.5"
            data-jos_rootMargin_bottom="74%"
            data-jos_animation="framework-colored"
          >
            <i class="frbramd fa-brands fa-angular"></i>
            <div class="frmt">Angular</div>
          </div>
          <div
            class="framework jos"
            data-jos_duration="0.5"
            data-jos_rootMargin_bottom="70%"
            data-jos_animation="framework-colored"
          >
            <i class="frbramd fa-brands fa-react"></i>
            <div class="frmt">React</div>
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
  gap: 2.5vw;
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
  transition: 0.2s ease;
  flex-wrap: nowrap;
  align-content: center;
  cursor: pointer;

  border-top: 1vw solid transparent;
  color: var(--color-primary);
  padding-bottom: 1vw;
  gap: 2vw;
  color: transparent;
}
.frmt {
  /* border-bottom: 0.2vw solid transparent; */
  transition: 0.1s linear;
}

/* every text under framework */
.framework:hover .frmt {
  /* text-decoration: underline; */
  /* border-bottom: 0.2vw solid white; */
}
.framework:hover {
  background-color: var(--grey2);
  color: var(--color-text);
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
  margin: 5vw 0vw 8vw 0vw;
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
  margin-bottom: 8vw;
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
.jos-framework-colored {
  border-top: 0.1vw solid var(--grey2);
  /* background-color: var(--grey2); */
  gap: 1.5vw;
  color: var(--color-primary);
}
</style>
