<template>
  <div ref="main-screen" class="main-screen container">
    <h1 ref="title" class="title">
      Hi. I'm Pavel, a Moscow based senior <nobr>front-end</nobr> developer and team lead
      <img ref="emoji" class="emoji" src="~/assets/technologist-emoji.png" alt="emoji">
    </h1>

    <div ref="scroller" class="scroller">
      <div class="scroller-dot" />
    </div>
  </div>
</template>

<script>
import { TimelineMax, Bounce, Power2 } from 'gsap';

export default {
  name: 'MainScreen',

  data() {
    return {
      controller: null,
      scene1: null
    }
  },

  async mounted() {
    const Splitting = await import('splitting')
    const result = Splitting.default({ target: this.$refs.title, by: 'chars' })[0]

    const tlStart = new TimelineMax({ paused: true });
    tlStart
      .staggerFrom(result.chars, 1, { opacity: 0 }, 0.015)
      .from(this.$refs.emoji, 0.15, { opacity: 0 }, 1)
      .from(this.$refs.emoji, 1, { y: -100, ease: Bounce.easeOut }, 1)
      .from(this.$refs.scroller, 1, { y: 100, ease: Power2.easeOut }, 2)

    const tlScrollerLeave = new TimelineMax({ paused: true });
    tlScrollerLeave
      .to(this.$refs.scroller, 0.25, { opacity: 0, ease: Power2.easeOut }, 0)

    setTimeout(() => {
      tlStart.play();
    }, 300)

    this.controller = new this.$scrollmagic.Controller();

    new this.$scrollmagic.Scene({
      triggerElement: this.$refs['main-screen'],
      offset: window.innerHeight / 2 - 60
    })
      .on('enter', () => {
        tlScrollerLeave.play()
      })
      .on('leave', () => {
        tlScrollerLeave.reverse()
      })
      .addTo(this.controller)
      // .addIndicators({ name: 'scroller' })
  }
}
</script>

<style scoped>
  .main-screen {
    min-height: calc(100vh - 68px);
    display: flex;
    align-items: center;
    color: #fff;
    position: relative;
  }

  .title {
    font-size: 140px;
    font-weight: 600;
    text-align: left;
    position: relative;
    width: 100%;
    margin: 0;
    line-height: 0.85em;
  }

  .emoji {
    position: absolute;
    bottom: 10px;
    width: 1.14em;
  }

  .scroller {
    position: absolute;
    bottom: 25px;
    left: 50%;
    width: 20px;
    height: 35px;
    border: 1px solid #999;
    border-radius: 999px;
  }

  .scroller-dot {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #999;
    top: 5px;
    left: calc(50% - 2px);
    animation: scroll-icon 2.2s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
  }

  @keyframes scroll-icon {
    0% {
      transform: translateY(0px);
      opacity: 0;
    }

    30%{
      opacity: 1;
    }

    100% {
      transform: translateY(15px);
      opacity: 0;
    }
  }

  @media (max-width: 1280px) {
    .title {
      font-size: 100px;
    }

    .emoji {
      bottom: 7px;
    }
  }

  @media (max-width: 960px) {
    .title {
      font-size: 65px;
    }

    .emoji {
      bottom: 4px;
    }
  }
</style>
