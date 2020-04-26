<template>
  <div>
    <div ref="cursor" :class="$style.cursor" />

    <Nav />

    <nuxt />
  </div>
</template>

<script>
import { TweenLite } from 'gsap'
import Nav from '@/components/Nav.vue'

export default {
  components: {
    Nav
  },

  mounted () {
    TweenLite.set(this.$refs.cursor, {
      xPercent: -50,
      yPercent: -50
    });

    window.addEventListener('mousemove', this.moveCircle);
  },

  destroyed () {
    window.removeEventListener('mousemove', this.moveCircle);
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

<style module>
.cursor {
  display: none;
}

/* mouse, touch pad */
@media (hover: hover) and (pointer: fine) {
  /* * {
    cursor: none;
  } */

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
    opacity: 0.2;
  }
}
</style>
