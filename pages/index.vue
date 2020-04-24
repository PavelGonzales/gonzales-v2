<template>
  <div class="app">
    <div ref="cursor" class="cursor" />
    <Nav />
    <MainScreen />
    <AboutScreen />
    <ExperienceScreen />
    <ByeScreen />
  </div>
</template>

<script>
/* eslint-disable */
import { TweenLite } from 'gsap'
import MainScreen from '@/components/MainScreen.vue'
import AboutScreen from '@/components/AboutScreen.vue'
import ExperienceScreen from '@/components/ExperienceScreen.vue'
import ByeScreen from '@/components/ByeScreen.vue'
import Nav from '@/components/Nav.vue'

export default {
  mounted () {
    TweenLite.set(this.$refs.cursor, {
      xPercent: -50,
      yPercent: -50
    });

    window.addEventListener('mousemove', this.moveCircle);
  },

  components: {
    MainScreen,
    AboutScreen,
    ExperienceScreen,
    ByeScreen,
    Nav
  },

  mounted() {
    const controller = new this.$scrollmagic.Controller()
    const scene = new this.$scrollmagic.Scene({
      offset: 100, // start scene after scrolling for 100px
      duration: 400, // pin the element for 400px of scrolling
      debug: true
    }).addIndicators()

    controller.addScene(scene);
  },

  methods: {
    moveCircle(e) {
      TweenLite.to(this.$refs.cursor, 0.3, {
        x: e.clientX,
        y: e.clientY
      });
    }
  }
}
</script>
<style>
.app {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
}

.cursor {
  display: none;
}

/* mouse, touch pad */
@media (hover: hover) and (pointer: fine) {
  * {
    cursor: none;
  }

  .cursor {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff;
    border: 2px solid #000;
    z-index: 1000;
    opacity: 0.5;
  }
}
</style>
