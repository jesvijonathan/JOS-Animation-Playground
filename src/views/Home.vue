<script setup>
//"@/assets/floating_websites/web1"
</script>

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
      <div
        class="showcase jos"
        data-jos_duration="0.5"
        data-jos_animation="zoom"
      >
        <a href="" target="_blank" class="showcase_it piece_1"></a>

        <a href="" target="_blank" class="showcase_it piece_2"></a>

        <a href="" target="_blank" class="showcase_it piece_3"></a>

        <a href="" target="_blank" class="showcase_it piece_4"></a>

        <a href="" target="_blank" class="showcase_it piece_5"></a>

        <a
          href=""
          target="_blank"
          class="showcase_it piece_1 piece_7"
          style="animation-delay: 5s; bottom: -80%"
        ></a>

        <a
          href=""
          target="_blank"
          class="showcase_it piece_2 piece_6"
          style="animation-delay: 5s; bottom: -36%; left: 10%; width: 16vw"
        ></a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.piece_1 {
  width: 21vw;
  height: 14vw;
  bottom: -20%;
  left: 0%;
  background-image: url("@/assets/floating_websites/web8.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* transform: rotateY(10deg) rotateX(40deg); */

  animation: showcase linear forwards 15s infinite;
}
.piece_2 {
  width: 18vw;
  height: 11vw;
  bottom: -20%;
  left: 40%;
  background-color: #9c9c9c;
  background-image: url("@/assets/floating_websites/web2.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: rotateY(0deg) rotateX(-40deg);

  animation: showcase linear forwards 15s 1s infinite;
}
.piece_3 {
  width: 28vw;
  height: 17vw;
  bottom: -50%;
  left: 20%;
  background-color: #464646;
  background-image: url("@/assets/floating_websites/web6.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: rotateY(0deg) rotateX(-40deg);

  animation: showcase linear forwards 15s 2s infinite;
}
.piece_4 {
  width: 25vw;
  height: 20vw;
  bottom: -90%;
  left: 30%;
  z-index: 1;
  background-color: #9c9c9c;
  background-image: url("@/assets/floating_websites/web5.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: rotateY(0deg) rotateX(-40deg);

  animation: showcase linear forwards 15s 3s infinite;
}
.piece_5 {
  width: 25vw;
  height: 17vw;
  bottom: -133%;
  left: 20%;
  background-image: url("@/assets/floating_websites/web4.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: rotateY(0deg) rotateX(-40deg);

  transition: 0.7s ease;
  animation: showcase linear forwards 15s 4s infinite;
}
.piece_6 {
  height: 10vw;
  width: 42vw;
  background-image: url("@/assets/floating_websites/web3.png");
}
.piece_7 {
  background-image: url("@/assets/floating_websites/web7.png");
}
.showcase_it {
  position: absolute;
  /* box shadow */
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
  border: 0.1vw solid rgb(0, 0, 0, 0.5);
  /* animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 1); */
  animation-duration: 15s;
}
.showcase_it:hover {
  animation-play-state: paused;
  transition: 0.2s ease;
  border: 0.1vw solid rgba(255, 255, 255, 0.8);
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.8)) brightness(1.2);
}
/* scroll animation */
@keyframes showcase {
  0% {
    opacity: 0;
  }
  4% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-100vw);
  }
}
.home_showcase {
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  top: 50%;
  margin-right: 5vw;
  transform: translateY(-50%);
}
.showcase {
  width: 40vw;
  height: 100vh;
  border: 0px solid var(--color-primary);
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
