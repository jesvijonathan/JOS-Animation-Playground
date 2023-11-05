<script setup>
import { ref } from "vue";

import { defineProps } from "vue";
const { FooterNote } = defineProps(["FooterNote"]);
</script>

<template>
  <section class="footer" id="footer">
    <div
      class="jos byebye"
      data-jos_rootMargin_bottom="60%"
      data-jos_animation="static"
      data-jos_animationInverse="byeanime"
    >
      {{ FooterNote }}
    </div>
    <div class="actual_footer_con">
      <div class="footer_content_3">
        <div class="footer_rec1">
          <div class="foot_sec_1">
            <a
              class="circ_lo jos"
              data-jos_invoke="heading"
              data-intro_title="Links"
              data-nextScroll="introduction"
              data-jos_animation="flip"
              data-jos_delay="0"
              data-jos_rootMargin_bottom="20%"
              href="https://github.com/jesvijonathan/JOS-Animation-Library"
              target="_blank"
            >
              <i class="fa-brands fa-github"></i
            ></a>
            <a
              class="circ_lo jos"
              data-jos_animation="flip"
              data-jos_delay="0.1"
              data-jos_rootMargin_bottom="20%"
              href="https://codepen.io/jesvijonathan/pen/XWyLejd"
              target="_blank"
            >
              <i class="fa-brands fa-codepen"></i
            ></a>
            <a
              class="circ_lo jos"
              data-jos_animation="flip"
              data-jos_delay="0.2"
              data-jos_rootMargin_bottom="20%"
              href="https://www.npmjs.com/package/jos-animation"
              target="_blank"
            >
              <i class="fa-brands fa-npm"></i
            ></a>
          </div>
          <div class="foot_sec_2">
            <div
              class="foot_ser jos"
              data-jos_animation="fade-left"
              data-jos_rootMargin_bottom="20%"
              data-jos_delay="0"
            >
              <div class="foot_ser_title">About JOS</div>
              <div class="foot_ser_content">
                <ul>
                  <li>
                    <a href="https://g.co/kgs/hHcihX" target="_blank"
                      >About Us</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://github.com/jesvijonathan/JOS-Animation-Library/discussions"
                      target="_blank"
                      >JOS Community</a
                    >
                  </li>
                  <li>
                    <a href="https://jesvi.pythonanywhere.com/" target="_blank"
                      >Meet The Team (Me)</a
                    >
                  </li>
                  <li>
                    <a href="https://github.com/jesvijonathan" target="_blank"
                      >What I do</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://github.com/jesvijonathan/JOS-Animation-Library"
                      target="_blank"
                      >Blog & News</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="foot_ser jos"
              data-jos_animation="fade-left"
              data-jos_delay="0.1"
              data-jos_rootMargin_bottom="20%"
            >
              <div class="foot_ser_title">Useful Links</div>
              <div class="foot_ser_content">
                <ul>
                  <li>
                    <a
                      href="https://github.com/jesvijonathan/JOS-Animation-Library/wiki#used-in"
                      target="_blank"
                      >JOS Powered Sites</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=ziR95EKKttc"
                      target="_blank"
                      >Tutorials Playlist</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://github.com/jesvijonathan/JOS-Animation-Library/wiki"
                      target="_blank"
                      >Documentation</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://github.com/jesvijonathan/JOS-Animation-Library/releases/latest"
                      target="_blank"
                      >Download</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://github.com/jesvijonathan/JOS-Animation-Library"
                      target="_blank"
                      >View on Github</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="foot_ser jos"
              data-jos_animation="fade-left"
              data-jos_rootMargin_bottom="20%"
              data-jos_delay="0.2"
              style="margin-right: 2vw"
            >
              <div class="foot_ser_title">Support</div>
              <div class="foot_ser_content">
                <ul>
                  <li>
                    <a
                      href="https://raw.githubusercontent.com/jesvijonathan/JOS-Animation-Library/master/LICENSE.md"
                      target="_blank"
                      >Terms & Condition</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://github.com/jesvijonathan/JOS-Animation-Library/issues"
                      target="_blank"
                      >Report Issues</a
                    >
                  </li>
                  <li>
                    <a
                      href="data:text/html;charset=UTF-8,%3Ch1%3EPrivacy%20Policy%20for%20JOS%20Animation%3C/h1%3E%0A%3Cp%3EAt%20JOS%20Animation%2C%20accessible%20from%20https%3A//jos-animation.vercel.app%2C%20one%20of%20our%20main%20priorities%20is%20the%20privacy%20of%20our%20visitors.%20This%20Privacy%20Policy%20document%20contains%20types%20of%20information%20that%20is%20collected%20and%20recorded%20by%20JOS%20Animation%20and%20how%20we%20use%20it.%3C/p%3E%0A%3Cp%3EIf%20you%20have%20additional%20questions%20or%20require%20more%20information%20about%20our%20Privacy%20Policy%2C%20do%20not%20hesitate%20to%20contact%20us.%3C/p%3E%0A...%0A%3Ch2%3EContact%20Us%3C/h2%3E%0A%3Cp%3EIf%20you%20have%20any%20questions%20or%20suggestions%20about%20our%20Privacy%20Policy%2C%20do%20not%20hesitate%20to%20contact%20us.%3C/p%3E"
                      download="PrivacyPolicy.html"
                      target="_blank"
                      >Privacy Policy</a
                    >
                  </li>
                  <li>
                    <a href="jesvi22j@gmail.com" target="_blank">Contact Us</a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/jesvijonathan/JOS-Animation-Library/discussions"
                      target="_blank"
                      >FAQs</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer_content_2">
        <div
          class="footer_rec jos"
          data-jos_animation="stretch"
          data-jos_rootMargin_bottom="10%"
        >
          <a href="./#">JOS</a>
          <a
            class="developer"
            href="https://jesvi.pythonanywhere.com/"
            target="_blank"
            >Developed By Jesvi Jonathan</a
          >
        </div>
      </div>
      <div class="footer_content_1">
        <div>&copy; 2023</div>
        <div class="line"></div>

        <div>All Rights Reserved</div>
        <div class="line"></div>

        <div>JOS Animation</div>
      </div>
      <div class="footer_bg">
        <div class="actual_footer1"></div>
        <div class="actual_footer2"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.foot_sec_2 {
  display: flex;
  flex-direction: row;
  gap: 7vw;
  margin: 1vw 0vw;
  margin-right: 3.5vw;
}
.foot_ser {
  display: flex;
  flex-direction: column;
  gap: 1vw;
  margin-bottom: 3vw;
}
.foot_ser .foot_ser_title {
  font-size: 2vw;
  font-weight: 900;
  letter-spacing: 0.1vw;
}
.foot_ser .foot_ser_content {
  font-size: 0.8vw;
  font-weight: 100;
  letter-spacing: 0.1vw;
}
.foot_ser .foot_ser_content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.foot_ser .foot_ser_content ul li {
  margin-top: 0.7vw;
  font-weight: 100;
  letter-spacing: initial;
  letter-spacing: 0.1vw;
  font-family: sans-serif;
}
.foot_ser .foot_ser_content ul li a {
  color: var(--color-background);
}
.foot_ser .foot_ser_content ul li a:hover {
  text-decoration: underline;
}
.circ_lo i {
  height: 2vw;
  width: 2vw;
}
.circ_lo {
  height: 2vw;
  width: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2vw;
  font-size: 2vw;
  border-radius: 50%;
  text-decoration: none;
  cursor: pointer;
  background-color: var(--milk);
  color: var(--color-background);
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
}
.circ_lo:hover {
  background-color: var(--color-primary);
  text-decoration: none;
  color: var(--color-background);
}
.foot_sec_1 {
  margin-top: 1vw;
  height: fit-content;
  width: 50vh;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 2vw;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.footer_rec1 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  gap: 1vw;
  background-color: var(--color-primary);
  color: var(--color-background);
  width: 80vw;
  margin-bottom: 2vw;
  border-radius: 50% 50% 0% 0%;
  border-bottom: 0.1vw solid var(--opa-black);
  height: 15vw;
}
.footer_content_3 {
  height: 21vw;
  width: 100vw;
  background-color: var(--color-primary);
  position: relative;
  bottom: 0;
  border-radius: 77% 23% 100% 0% / 60% 100% 0% 40%;
  left: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-end;
  align-content: center;
  gap: 1vw;
  font-size: 4vw;
  color: var(--color-background);
  font-weight: 900;
  z-index: 1;
}
.footer_rec {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  gap: 1vw;
  background-color: var(--color-background);
  color: var(--color-primary);
  width: 80vw;
  padding: 1vw 4vw;
  border-radius: 1vw;
}
.developer {
  font-weight: 100;
  font-size: 1.8vw;
  letter-spacing: 0.1vw;
}
.developer:hover {
  font-weight: 900;
}
.footer_content_2 {
  height: 7vw;
  width: 100vw;
  background-color: var(--color-primary);
  position: relative;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 1vw;
  font-size: 4vw;
  color: var(--color-background);
  font-weight: 900;
  z-index: 1;
}
.line {
  height: 0.8vw;
  width: 0.1vw;
  opacity: 0.5;
  background-color: var(--color-background);
}
.footer_content_1 {
  height: 4vw;
  width: 100vw;
  background-color: var(--color-primary);
  position: relative;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 1vw;
  font-family: sans-serif;
  font-size: 0.8vw;
  color: var(--color-background);
  letter-spacing: 0.08vw;
  z-index: 1;
}
.footer {
  width: 100vw;
  height: 64vh;
  height: 33vw;
  background-color: var(--color-background);
  position: relative;
  overflow: hidden;
}
.byebye {
  font-size: 2.1vw;
  font-family: Poppins, sans-serif;
  font-weight: 900;
  width: fit-content;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  padding: 1vw 1vw;
  text-align: center;
  font-size: 2.1vw;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  display: none;
}

@keyframes bg {
  0% {
  }
  50% {
    letter-spacing: 0.5vw;
  }
}
.jos-byeanime {
  animation: bg 5s infinite;
}

.actual_footer_con {
  position: absolute;
  bottom: 0;
}
.actual_footer1 {
  height: 20vw;
  width: 100vw;
  background: rgb(255, 255, 255);
  /* bottom */
  position: relative;
  display: none;
  border-radius: 77% 23% 100% 0% / 60% 100% 0% 40%;
}
.actual_footer2 {
  height: 10vw;
  width: 100vw;
  background: white;
  /* bottom */
  display: none;
  position: relative;
}
</style>
