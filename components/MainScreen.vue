<template>
  <div ref="main-screen" class="scrollmagic-wrapper">
    <div class="main-screen container">
      <h1 ref="title" class="title">
        Hi. I'm Pavel, a Moscow based <nobr>front-end</nobr> developer and team lead
        <img ref="emoji" class="emoji" src="~/assets/technologist-emoji.png" alt="">
      </h1>
    </div>
  </div>
</template>

<script>
import { TimelineMax, Bounce } from 'gsap';

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
    Splitting.default({ target: this.$refs.title, by: 'chars' })
    const chars = this.$refs.title.querySelectorAll('.char')

    const tl = new TimelineMax({ paused: true, defaults: { duration: 2 } });
    tl.staggerFrom(chars, 1, { opacity: 0 }, 0.015)
      .from(this.$refs.emoji, 0.15, { opacity: 0 }, 1)
      .from(this.$refs.emoji, 1, { y: -100, ease: Bounce.easeOut }, 1)

    setTimeout(() => {
      tl.play();
    }, 300)

    const tlTitleLeave = new TimelineMax({ paused: true });
    tlTitleLeave
      .staggerTo(chars, 1, { y: -30 }, 0.5)
      .staggerTo(chars, 1, { opacity: 0 }, 0.5, 0.1)

    this.controller = new this.$scrollmagic.Controller();

    new this.$scrollmagic.Scene({
      triggerElement: this.$refs['main-screen'],
      offset: window.innerHeight / 2,
      duration: 300
    })
      .setPin(this.$refs['main-screen'])
      .on('progress', (e) => {
        tlTitleLeave.progress(e.progress)
      })
      .addIndicators({ name: 'title' })
      .addTo(this.controller)
  }
}
</script>

<style>
.word {
  white-space: nowrap;
}

.char {
  display: inline-block;
}
</style>

<style scoped>
  .main-screen {
    min-height: 100vh;
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
