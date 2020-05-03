<template>
  <div :class="$style.container">
    <template v-if="error.statusCode === 404">
      <h1 :class="$style.title">404</h1>
      <h2 :class="$style.subTitle">Page not found</h2>
    </template>
    <template v-else>
      <h1 :class="$style.title">Ooops!</h1>
      <h2 :class="$style.subTitle">An error occurred</h2>
    </template>
  </div>
</template>

<script>
import mixinTransition from '@/mixins/transition'

export default {
  mixins: [
    mixinTransition
  ],

  props: {
    error: {
      type: Object,
      default: () => ({})
    }
  },

  head() {
    return {
      title: 'Ooops!'
    }
  }
}
</script>

<style module>
@import '~/assets/styles/main.css';

.container {
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.title {
  font-weight: var(--font-bold);
  font-size: 300px;
  margin: 0;
  line-height: 0.75em;
}

.subTitle {
  margin: 0;
  font-size: 74px;
}

@media (max-width: 640px) {
  .title {
    font-size: 50vw;
  }

  .subTitle {
    font-size: 12.4vw;
  }
}
</style>
