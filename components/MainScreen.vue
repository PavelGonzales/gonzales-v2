<template>
  <div ref="mainScreen" :class="[$style.mainScreen, $style.container]">
    <h1 ref="title" :class="$style.title">
      Hi. I'm Pavel, a Moscow based senior <nobr>front-end</nobr> developer and team lead
      <img ref="emoji" :class="$style.emoji" src="~/assets/technologist-emoji.png" alt="emoji">
    </h1>

    <div ref="scroller" :class="$style.scroller">
      <div :class="$style.scrollerDot" />
    </div>
  </div>
</template>

<script>
import { TimelineMax, Bounce, Power2 } from 'gsap';

export default {
  name: 'MainScreen',

  data() {
    return {
      controller: null
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
      triggerElement: this.$refs.mainScreen,
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

<style module>
@import '~/assets/styles/main.css';

.mainScreen {
  min-height: calc(100vh - 68px);
  display: flex;
  align-items: center;
  position: relative;
}

/* mouse, touch pad */
@media (hover: hover) and (pointer: fine) {
  .mainScreen :global(.word):hover {
    color: red;
  }
}

.title {
  font-size: 160px;
  font-weight: var(--font-bold);
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
  border: 1px solid var(--light-gray-color);
  border-radius: 999px;
}

.scrollerDot {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: var(--light-gray-color);
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
    font-size: 126px;
  }

  .emoji {
    bottom: 7px;
  }
}

@media (max-width: 960px) {
  .title {
    font-size: 82px;
  }

  .emoji {
    bottom: 4px;
  }
}

@media (max-width: 640px) {
  .title {
    font-size: 20vw;
  }
}
</style>
