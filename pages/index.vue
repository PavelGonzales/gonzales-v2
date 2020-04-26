<template>
  <div class="app">
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

export default {
  components: {
    MainScreen,
    AboutScreen,
    ExperienceScreen,
    ByeScreen
  }
}
</script>
<style scoped>
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
