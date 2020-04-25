<template>
  <div class="main-screen container">
    <h1 ref="title" class="title">
      Hi. I'm Pavel, a Moscow based <nobr>front-end</nobr> developer and team lead
      <img ref="emoji" class="emoji" src="~/assets/technologist-emoji.png" alt="emoji">
    </h1>
  </div>
</template>

<script>
import { TimelineMax, Bounce } from 'gsap';

export default {
  name: 'MainScreen',

  async mounted() {
    const Splitting = await import('splitting')
    const result = Splitting.default({ target: this.$refs.title, by: 'chars' })[0]

    const tl = new TimelineMax({ paused: true });
    tl
      .staggerFrom(result.chars, 1, { opacity: 0 }, 0.015)
      .from(this.$refs.emoji, 0.15, { opacity: 0 }, 1)
      .from(this.$refs.emoji, 1, { y: -100, ease: Bounce.easeOut }, 1)

    setTimeout(() => {
      tl.play();
    }, 300)
  }
}
</script>

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
