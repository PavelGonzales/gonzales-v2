<template>
  <div :class="$style.app">
    <MainScreen />
    <AboutScreen />
    <ExperienceScreen />
    <ByeScreen />
  </div>
</template>

<script>
import MainScreen from '@/components/MainScreen.vue'
import AboutScreen from '@/components/AboutScreen.vue'
import ExperienceScreen from '@/components/ExperienceScreen.vue'
import ByeScreen from '@/components/ByeScreen.vue'
import mixinTransition from '@/mixins/transition'

export default {
  components: {
    MainScreen,
    AboutScreen,
    ExperienceScreen,
    ByeScreen
  },

  mixins: [
    mixinTransition
  ]
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
