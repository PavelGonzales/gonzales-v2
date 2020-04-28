<template>
  <div class="title">
    Experience
  </div>
</template>

<script>
import mixinTransition from '@/mixins/transition'

export default {
  name: 'PageExperience',

  mixins: [
    mixinTransition
  ]
}
</script>

<style scoped>
  .title {
    font-size: 70px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
</style>
