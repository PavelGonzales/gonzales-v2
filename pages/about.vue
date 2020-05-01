<template>
  <section :class="[$style.root, $style.container]">
    <h1 ref="title" :class="$style.title">About</h1>
    <picture ref="avatar" :class="$style.avatar">
      <source srcset="./../assets/ava_2.jpg" type="image/jpeg" :class="$style.avatarSource" />
      <img src="./../assets/ava_2.jpg" alt="Pavel Gonzales Avatar" :class="$style.avatarSource" />
    </picture>

    <article ref="article">
      <p :class="$style.paragraph">
        I'm a self-taught programmer. I joined the development in 2013 and started working actively in 2015.
      </p>
      <p :class="$style.paragraph">
        In 2013, I graduated from web-design courses. After that, I'm a little freelanced. Then there was a break for 2 years.
      </p>
      <p :class="$style.paragraph">
        In 2015, I was hired as a junior developer at Beta Digital Production, where I grew up a lot. I gained experience in designing interfaces, acquired a sense of style in websites, and learned to feel the animation.
      </p>
      <p :class="$style.paragraph">
        In 2018, I joined OZON. At that point, he was moving on to a new track. And I was involved in the move from the very beginning. I gained experience in product development of large and complicated systems. I understood how development works with a lot of dependencies and approvals.
      </p>
      <p :class="$style.paragraph">
        At different moments of my life I tried to launch my projects. On the last project, I designed the interface, designed the base, wrote the node backend, the front on vue, and put everything on the hosting. I got an idea and experience of the whole development cycle.
      </p>
      <p :class="$style.paragraph">
        Where do I want to go?
        <br />
        Lately I've been looking more and more at the control side. I want to think about and develop products. I plan to grow further as a technical manager.
      </p>
    </article>
  </section>
</template>

<script>
import { TimelineMax } from 'gsap';
import mixinTransition from '@/mixins/transition'

export default {
  name: 'PageAbout',

  mixins: [
    mixinTransition
  ],

  mounted() {
    const tlEntry = new TimelineMax({ paused: true });
    tlEntry
      .from(this.$refs.title, 1, { opacity: 0, y: 30 }, 0)
      .from(this.$refs.avatar, 1, { opacity: 0, y: 30 }, 0)
      .staggerFrom(this.$refs.article.children, 1, { opacity: 0, y: 30 }, 0.05, 0.05)

    setTimeout(() => {
      tlEntry.play();
    }, 300)
  }
}
</script>

<style module>
@import '~/assets/styles/main.css';

.root {
  padding-bottom: 50px;
}

.title {
  font-size: 170px;
  font-weight: var(--font-bold);
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
  margin-bottom: 1em;
}

@media (max-width: 960px) {
  .avatar {
    max-width: 300px;
  }
}

@media (max-width: 640px) {
  .title {
    font-size: 100px;
  }

  .avatar {
    margin-right: 0;
    max-width: 100%;
  }

  .paragraph {
    font-size: 20px;
  }
}
</style>
