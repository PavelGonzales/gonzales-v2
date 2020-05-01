<template>
  <div>
    <div ref="cursor" :class="$style.cursor" />

    <Nav />

    <nuxt />

    <div
      id="transitionBlock"
      ref="transitionBlock"
      :class="[
        $style.transitionBlock,
        {
          [$style.mountedContent]: isMounted
        }
      ]"
    ></div>
  </div>
</template>

<script>
import { TweenLite } from 'gsap'
import Nav from '@/components/Nav.vue'

export default {
  components: {
    Nav
  },

  data() {
    return {
      isMounted: false
    }
  },

  mounted () {
    setTimeout(() => {
      this.isMounted = true;
    }, 300)

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
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--white-color);
  border: 2px solid var(--black-color);
  z-index: 1000;
  opacity: 0.2;
}

.transitionBlock {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--black-color);
  box-shadow: 0 -20px 30px rgba(11, 11, 11, 0.7);
}

.mountedContent {
  top: 100%;
}

/* mouse, touch pad */
@media (hover: hover) and (pointer: fine) {
  .cursor {
    display: block;
  }
}
</style>
