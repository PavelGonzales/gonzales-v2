<template>
  <div ref="bye-screen" class="scrollmagic-wrapper">
    <div class="position-fixed">
      <footer ref="footer" class="bye-screen container">
        <p class="contact-text">Contact me</p>
        <div class="copyright">
          <span class="copyright__inner">
            {{ new Date().getFullYear() }} &copy; Pavel Gonzales
          </span>
        </div>
        <p class="bye-text">Chiao!</p>
      </footer>
    </div>
  </div>
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

  mounted() {
    const tlFooter = new TimelineMax({ paused: true });
    const experienceScreen = document.querySelector('#experience-screen');

    tlFooter
      .from(this.$refs.footer, 1, { opacity: 0, y: 300 }, 0)
      .to(experienceScreen, 1, { opacity: 0, y: -300 }, 0)

    this.controller = new this.$scrollmagic.Controller();

    new this.$scrollmagic.Scene({
      triggerElement: this.$refs['bye-screen'],
      offset: -(window.innerHeight / 2),
      duration: 300
    })
      .setPin(this.$refs['bye-screen'])
      .on('progress', (e) => {
        tlFooter.progress(e.progress)
      })
      // .addIndicators({ name: 'bye screen' })
      .addTo(this.controller)
  }
}
</script>

<style scoped>
  .scrollmagic-wrapper {
    min-height: 300px;
  }

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
