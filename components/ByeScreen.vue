<template>
  <footer ref="footer" :class="[$style.byeScreen, $style.container]">
    <nuxt-link
      :class="$style.contactText"
      to="/contacts"
      @click.native="clickOnLink"
    >
      Contact me
    </nuxt-link>
    <div :class="$style.copyright">
      <span :class="$style.copyrightInner">
        {{ new Date().getFullYear() }} &copy; Pavel Gonzales
      </span>
    </div>
    <p ref="chiao" :class="$style.byeText">Chiao!</p>
  </footer>
</template>

<script>
import gsap from 'gsap';

export default {
  name: 'ByeScreen',

  data() {
    return {
      controller: null
    }
  },

  async mounted() {
    const Splitting = await import('splitting')
    const result = Splitting.default({ target: this.$refs.chiao, by: 'chars' })[0]

    const tlFooter = gsap.timeline({ paused: true });

    tlFooter
      .from(this.$refs.footer, { duration: 1, opacity: 0 }, 0)
      .from(result.chars, { duration: 0.1, opacity: 0, stagger: Math.random() / 5 }, 0)

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
  },

  methods: {
    clickOnLink() {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: 'click',
        eventLabel: 'Contact me'
      })
    }
  }
}
</script>

<style module>
@import '~/assets/styles/main.css';

.byeScreen {
  padding: 150px 16px 0;
  text-align: center;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.copyright {
  font-weight: var(--font-regular);
  width: 100%;
  color: var(--white-color);
  position: relative;
  display: flex;
  justify-content: center;
}

.copyright::before {
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  background-color: var(--dark-gray-color);
  position: absolute;
  top: 50%;
}

.copyrightInner {
  background-color: var(--black-color);
  position: relative;
  padding: 0 6px;
}

.contactText {
  font-size: 186px;
  font-weight: var(--font-bold);
  margin: 0;
  color: var(--white-color);
  text-decoration: none;
  position: relative;
}

.contactText::before {
  content: '';
  display: block;
  height: 0.27em;
  background-color: red;
  width: calc(100% + 0.72em);
  position: absolute;
  top: 0.53em;
  left: -0.36em;
  opacity: 0;
  z-index: -1;
}

/* mouse, touch pad */
@media (hover: hover) and (pointer: fine) {
  .contactText:hover  {
    font-style: italic;
  }

  .contactText:hover::before {
    opacity: 1;
  }
}

.byeText {
  font-size: 300px;
  font-weight: var(--font-black);
  text-transform: uppercase;
  margin: 0;
}

@media (max-width: 1280px) {
  .text {
    font-size: 54px;
  }

  .byeText {
    font-size: 230px;
  }

  .contactText {
    font-size: 144px;
  }
}

@media (max-width: 960px) {
  .text {
    font-size: 36px;
  }

  .byeText {
    font-size: 150px;
  }

  .contactText {
    font-size: 95px;
  }
}

@media (max-width: 640px) {
  .byeScreen {
    padding-top: 75px;
    padding-bottom: 75px;
  }

  .byeText {
    font-size: 75px;
  }

  .contactText {
    font-size: 47px;
  }

  .copyright {
    margin: 15px 0;
  }
}
</style>
