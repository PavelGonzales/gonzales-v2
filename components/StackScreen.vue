<template>
  <div ref="stackScreen" :class="[$style.stackScreen, $style.container]">
    <img :class="$style.logo" :src="require('~/assets/stack/html.svg')" alt="">
    <img :class="$style.logo" :src="require('~/assets/stack/css.svg')" alt="">
    <img :class="$style.logo" :src="require('~/assets/stack/javascript.svg')" alt="">
    <img :class="$style.logo" :src="require('~/assets/stack/typescript.svg')" alt="">
    <img :class="$style.logo" :src="require('~/assets/stack/vue.svg')" alt="">
    <img :class="$style.logo" :src="require('~/assets/stack/nuxt.svg')" alt="">
    <img :class="$style.logo" :src="require('~/assets/stack/pwa.svg')" alt="">
    <img :class="$style.logo" :src="require('~/assets/stack/storybook.svg')" alt="">
    <img :class="$style.logo" :src="require('~/assets/stack/svg.svg')" alt="">
    <img :class="$style.logo" :src="require('~/assets/stack/gsap.svg')" alt="">
    <img :class="$style.logo" :src="require('~/assets/stack/jest.svg')" alt="">
    <img :class="$style.logo" :src="require('~/assets/stack/nodejs.svg')" alt="">
    <img :class="$style.logo" :src="require('~/assets/stack/react.svg')" alt="">
    <img :class="$style.logo" :src="require('~/assets/stack/lodash.svg')" alt="">
    <img :class="$style.logo" :src="require('~/assets/stack/webpack.svg')" alt="">
    <img :class="$style.logo" :src="require('~/assets/stack/jwt.svg')" alt="">
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  name: 'StackScreen',

  data() {
    return {
      controller: null
    }
  },

  mounted() {
    this.controller = new this.$scrollmagic.Controller();

    const tlLogos = gsap.timeline({ paused: true });

    tlLogos.from(this.$refs.stackScreen.children, { duration: 1, opacity: 0, y: 20, stagger: 0.05 }, 0.25)

    new this.$scrollmagic.Scene({
      triggerElement: this.$refs.stackScreen
    })
      .on('enter', () => {
        tlLogos.play()
      })
      .addTo(this.controller)
      // .addIndicators({ name: 'about screen' })
  }
}
</script>

<style module>
@import '~/assets/styles/main.css';

.stackScreen {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 150px;
}

.logo {
  height: 117px;
  margin-right: 25px;
  margin-bottom: 25px;
}

@media (max-width: 1280px) {
  .logo {
    height: 86px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
}

@media (max-width: 960px) {
  .logo {
    height: 54px;
    margin-right: 15px;
    margin-bottom: 15px;
  }
}

@media (max-width: 640px) {
  .stackScreen {
    padding-top: 75px;
  }
}
</style>
