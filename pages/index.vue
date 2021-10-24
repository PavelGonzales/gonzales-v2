<template>
  <div :class="$style.app">
    <MainScreen />
    <AboutScreen />
    <!-- <ExperienceScreen /> -->
    <ByeScreen />
  </div>
</template>

<script>
import MainScreen from '@/components/MainScreen.vue'
import AboutScreen from '@/components/AboutScreen.vue'
// import ExperienceScreen from '@/components/ExperienceScreen.vue'
import ByeScreen from '@/components/ByeScreen.vue'
import mixinTransition from '@/mixins/transition'
import { getMeta } from '@/helpers/meta'
import jsonLd from '@/seo/index.json'

export default {
  components: {
    MainScreen,
    AboutScreen,
    // ExperienceScreen,
    ByeScreen
  },

  mixins: [
    mixinTransition
  ],

  computed: {
    meta() {
      return {
        text: 'Hi. I\'m Pavel, a Moscow based senior front-end developer and team lead',
        url: this.$route.fullPath
      }
    }
  },

  head() {
    return {
      title: this.meta.text,
      meta: getMeta(this.meta),
      script: [
        { type: 'application/ld+json', innerHTML: JSON.stringify(jsonLd) }
      ],
      __dangerouslyDisableSanitizers: ['script']
    }
  }
}
</script>
<style module>
.app {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
}
</style>
