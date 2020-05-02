<template>
  <ol ref="nav" :class="[$style.nav, $style.container]">
    <li :class="$style.navItem">
      <nuxt-link :class="$style.navLink" to="/">Main</nuxt-link>
    </li>
    <li :class="$style.navItem">
      <nuxt-link :class="$style.navLink" to="/about">About</nuxt-link>
    </li>
    <li :class="$style.navItem">
      <nuxt-link :class="$style.navLink" to="/experience">Experience</nuxt-link>
    </li>
    <li :class="$style.navItem">
      <nuxt-link :class="$style.navLink" to="/contacts">Contacts</nuxt-link>
    </li>
  </ol>
</template>

<script>
import { TimelineMax, CSSPlugin } from 'gsap';

export default {
  name: 'Nav',

  mounted() {
    // eslint-disable-next-line no-unused-vars
    const plugins = [CSSPlugin];

    const tlEntry = new TimelineMax({ paused: true });
    tlEntry
      .from(this.$refs.nav, 1, { opacity: 0 }, 0)
      .staggerFrom(this.$refs.nav.children, 0.3, { scaleY: 0 }, 0.05, 0)

    setTimeout(() => {
      tlEntry.play();
    }, 300)
  }
}
</script>

<style module>
@import '~/assets/styles/main.css';

.nav {
  display: flex;
  padding: 0;
  list-style: none;
  position: relative;
  justify-content: center;
  padding: 25px 0;
}

.nav::before {
  content: '';
  display: block;
  width: calc(100% - 32px);
  height: 1px;
  background-color: var(--dark-gray-color);
  position: absolute;
  top: 50%;
  left: 16px;
}

.navItem {
  padding: 0 6px;
  margin: 0 28px;
  background-color: var(--black-color);
  position: relative;
}

.navLink {
  color: var(--white-color);
  text-decoration: none;
}

@media (max-width: 640px) {
  .navItem {
    margin: 0 12px;
  }
}

@media (max-width: 400px) {
  .navItem {
    margin: 0 6px;
  }
}
</style>
