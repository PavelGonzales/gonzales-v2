<template>
  <div ref="about-screen" class="scrollmagic-wrapper">
    <div class="position-fixed">
      <div class="about-screen container">
        <p ref="text" class="text">Since 2015, I have been engaged in front-end development and managed to participate in many projects and work in several large companies.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineMax } from 'gsap';

export default {
  name: 'AboutScreen',

  data() {
    return {
      controller: null,
      scene1: null
    }
  },

  async mounted() {
    const Splitting = await import('splitting')
    const result = Splitting.default({ target: this.$refs.text, by: 'lines' })[0]

    const tlText = new TimelineMax({ paused: true });

    result.lines.forEach((item, index) => {
      tlText
        .from(item, 1, { y: 30 }, index)
        .from(item, 1, { opacity: 0 }, index + 0.1)
        .to(item, 1, { y: -30 }, index + result.lines.length)
        .to(item, 1, { opacity: 0 }, index + result.lines.length + 0.1)
    });

    this.controller = new this.$scrollmagic.Controller();

    new this.$scrollmagic.Scene({
      triggerElement: this.$refs['about-screen'],
      offset: 0,
      duration: 600
    })
      .setPin(this.$refs['about-screen'])
      .on('progress', (e) => {
        tlText.progress(e.progress)
      })
      // .addIndicators({ name: 'about screen' })
      .addTo(this.controller)
  }
}
</script>

<style scoped>
  .scrollmagic-wrapper {
    min-height: 600px;
  }
  .about-screen {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .text {
    font-size: 72px;
    color: #fff;
    font-weight: 600;
    text-align: left;
    position: relative;
    width: 100%;
    margin: 0;
  }

  @media (max-width: 1280px) {
    .text {
      font-size: 54px;
    }
  }

  @media (max-width: 960px) {
    .text {
      font-size: 36px;
    }
  }
</style>
