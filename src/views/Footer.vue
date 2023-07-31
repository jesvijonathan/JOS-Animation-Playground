<script setup>
function scrollToNext() {
  const next = document.querySelector("#intro");
  next.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <section class="footer">
    <div class="actual_footer_con">
      <div class="footer_content_3">
        <div class="footer_rec1">
          <div class="foot_sec_1">
            <a
              class="circ_lo jos"
              data-jos_invoke="heading"
              data-intro_title="Footer"
              data-jos_animation="flip"
              data-jos_delay="0"
            >
              <i class="fa-brands fa-github"></i
            ></a>
            <a
              class="circ_lo jos"
              data-jos_animation="flip"
              data-jos_delay="0.1"
            >
              <i class="fa-brands fa-codepen"></i
            ></a>
            <a
              class="circ_lo jos"
              data-jos_animation="flip"
              data-jos_delay="0.2"
            >
              <i class="fa-brands fa-npm"></i
            ></a>
          </div>
          <div class="foot_sec_2">
            <div
              class="foot_ser jos"
              data-jos_animation="fade-left"
              data-jos_delay="0"
            >
              <div class="foot_ser_title">About JOS</div>
              <div class="foot_ser_content">
                <ul>
                  <li><a href="" target="_blank">About Us</a></li>
                  <li><a href="" target="_blank">JOS Community</a></li>
                  <li><a href="" target="_blank">Meet The Team</a></li>
                  <li><a href="" target="_blank">Our Services</a></li>
                  <li><a href="" target="_blank">Blog & News</a></li>
                </ul>
              </div>
            </div>
            <div
              class="foot_ser jos"
              data-jos_animation="fade-left"
              data-jos_delay="0.1"
            >
              <div class="foot_ser_title">Useful Links</div>
              <div class="foot_ser_content">
                <ul>
                  <li><a href="" target="_blank">JOS Powered Sites</a></li>
                  <li><a href="" target="_blank">Tutorials Playlist</a></li>
                  <li><a href="" target="_blank">Documentation</a></li>
                  <li><a href="" target="_blank">Download</a></li>
                  <li><a href="" target="_blank">View on Github</a></li>
                </ul>
              </div>
            </div>
            <div
              class="foot_ser jos"
              data-jos_animation="fade-left"
              data-jos_delay="0.2"
              style="margin-right: 2vw"
            >
              <div class="foot_ser_title">Support</div>
              <div class="foot_ser_content">
                <ul>
                  <li><a href="" target="_blank">Terms & Condition</a></li>
                  <li><a href="" target="_blank">Report Issues</a></li>
                  <li><a href="" target="_blank">Privacy Policy</a></li>
                  <li><a href="" target="_blank">Contact Us</a></li>
                  <li><a href="" target="_blank">FAQs</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer_content_2">
        <div class="footer_rec jos" data-jos_animation="stretch">
          <a href="" target="_blank">JOS</a>
          <a class="developer" href="" target="_blank"
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
}
.footer_content_3 {
  height: 22vw;
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
  height: 100vh;
  background-color: var(--color-background);
  position: relative;
  overflow: hidden;
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
