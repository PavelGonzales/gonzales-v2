<template>
  <footer ref="footer" class="bye-screen container">
    <p class="contact-text">Contact me</p>
    <div class="copyright">
      <span class="copyright__inner">
        {{ new Date().getFullYear() }} &copy; Pavel Gonzales
      </span>
    </div>
    <p ref="chiao" class="bye-text">Chiao!</p>
  </footer>
</template>

<script>
import { TimelineMax } from 'gsap';

export default {
  name: 'ByeScreen',

  data() {
    return {
      controller: null,
      scene1: null
    }
  },

  async mounted() {
    const Splitting = await import('splitting')
    const result = Splitting.default({ target: this.$refs.chiao, by: 'chars' })[0]

    const tlFooter = new TimelineMax({ paused: true });

    tlFooter
      .from(this.$refs.footer, 1, { opacity: 0 }, 0)
      .staggerFrom(result.chars, 0.001, { opacity: 0 }, Math.random() / 5, 0)

    this.controller = new this.$scrollmagic.Controller();

    new this.$scrollmagic.Scene({
      triggerElement: this.$refs.footer,
      offset: -(this.$refs.footer.clientHeight / 2)
    })
      .on('progress', () => {
        tlFooter.play()
      })
      .addTo(this.controller)
      // .addIndicators({ name: 'bye screen' })
  }
}
</script>

<style scoped>
  .bye-screen {
    padding: 150px 16px 0;
    color: #fff;
    text-align: center;
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .copyright {
    font-weight: 300;
    width: 100%;
    color: #ddd;
    position: relative;
    display: flex;
    justify-content: center;
  }

  .copyright::before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: #666;
    position: absolute;
    top: 50%;
  }

  .copyright__inner {
    background-color: var(--background-color);
    position: relative;
    padding: 0 6px;
  }

  .contact-text {
    font-size: 186px;
    font-weight: 600;
    margin: 0;
  }

  .bye-text {
    font-size: 300px;
    font-weight: 900;
    text-transform: uppercase;
    margin: 0;
  }

  @media (max-width: 1280px) {
    .text {
      font-size: 54px;
    }

    .bye-text {
      font-size: 230px;
    }

    .contact-text {
      font-size: 144px;
    }
  }

  @media (max-width: 960px) {
    .text {
      font-size: 36px;
    }

    .bye-text {
      font-size: 150px;
    }

    .contact-text {
      font-size: 95px;
    }
  }

  @media (max-width: 640px) {
    .bye-screen {
      padding-bottom: 75px;
    }

    .bye-text {
      font-size: 75px;
    }

    .contact-text {
      font-size: 47px;
    }

    .copyright {
      margin: 15px 0;
    }
  }
</style>
