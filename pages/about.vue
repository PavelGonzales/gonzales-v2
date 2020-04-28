<template>
  <section :class="[$style.root, $style.container]">
    <h1 :class="$style.title">About</h1>
    <picture :class="$style.avatar">
      <source srcset="./../assets/ava_2.jpg" type="image/jpeg" :class="$style.avatarSource" />
      <img src="./../assets/ava_2.jpg" alt="Pavel Gonzales Avatar" :class="$style.avatarSource" />
    </picture>

    <p :class="$style.paragraph">
      I'm a self-taught programmer. I joined the development in 2013 and started working actively in 2015.
      <br /><br />
      In 2013, I graduated from web-design courses. After that, I'm a little freelanced. Then there was a break for 2 years.
      <br /><br />
      In 2015, I was hired as a junior developer at Beta Digital Production, where I grew up a lot. I gained experience in designing interfaces, acquired a sense of style in websites, and learned to feel the animation.
      <br /><br />
      In 2018, I joined OZON. At that point, he was moving on to a new track. And I was involved in the move from the very beginning. I gained experience in product development of large and complicated systems. I understood how development works with a lot of dependencies and approvals.
      <br /><br />
      At different moments of my life I tried to launch my projects. On the last project, I designed the interface, designed the base, wrote the node backend, the front on vue, and put everything on the hosting. I got an idea and experience of the whole development cycle.
      <br /><br />
      Where do I want to go?
      <br />
      Lately I've been looking more and more at the control side. I want to think about and develop products. I plan to grow further as a technical manager.
    </p>
  </section>
</template>

<script>
import mixinTransition from '@/mixins/transition'

export default {
  name: 'PageAbout',

  mixins: [
    mixinTransition
  ]
}
</script>

<style module>
@import '~/assets/styles/main.css';

.root {
  padding-bottom: 50px;
}

.title {
  font-size: 170px;
  font-weight: 600;
  text-align: center;
  margin: 0;
}

.avatar {
  max-width: 500px;
  display: block;
  margin: auto;
  float: left;
  margin-right: 1em;
}

.avatarSource {
  width: 100%;
}

.paragraph {
  font-size: 30px;
  margin-top: 0;
}

@media (max-width: 640px) {
  .title {
    font-size: 100px;
  }
}
</style>
