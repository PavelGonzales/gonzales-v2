<template>
  <section :class="[$style.root, $style.container]">
    <h1 ref="title" :class="$style.title">About</h1>
    <picture ref="avatar" :class="$style.avatar">
      <source srcset="./../assets/ava_3.jpeg" type="image/jpeg" :class="$style.avatarSource" />
      <img src="./../assets/ava_3.jpeg" alt="Pavel Gonzales Avatar" :class="$style.avatarSource" />
    </picture>

    <article ref="article">
      <p :class="$style.paragraph">
        I'm a self-taught programmer. I joined the development in 2013 and started working actively in 2015.
      </p>
      <p :class="$style.paragraph">
        In 2013, I graduated from web-design courses. After that, I'm a little freelancing. Then there was a break for 2 years.
      </p>
      <p :class="$style.paragraph">
        In 2015, I was hired as a junior developer at Beta Digital Production, where I grew up a lot. I gained experience in designing interfaces, acquired a sense of style in websites, and learned to feel the animation.
      </p>
      <p :class="$style.paragraph">
        In 2018, I joined OZON. At that point, he was moving on to a new track. And I was involved in the move from the very beginning. I gained experience in product development of large and complicated systems. I understood how development works with a lot of dependencies and approvals.
      </p>
      <p :class="$style.paragraph">
        At different moments of my life, I tried to launch my projects. On the last project, I designed the interface, designed the base, wrote the node backend, the front on Vue, and put everything on the hosting. I got an idea and experience of the whole development cycle.
      </p>
      <p :class="$style.paragraph">
        Where do I want to go?
        <br />
        Lately, I've been looking more and more at the control side. I want to think about and develop products. I plan to grow further as a technical manager.
      </p>
    </article>
  </section>
</template>

<script>
import gsap from 'gsap';
import mixinTransition from '@/mixins/transition'
import { getMeta } from '@/helpers/meta'
import jsonLd from '@/seo/about.json'

export default {
  name: 'PageAbout',

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

  mounted() {
    const tlEntry = gsap.timeline({ paused: true });
    tlEntry
      .from(this.$refs.title, { duration: 1, opacity: 0, y: 30 }, 0)
      .from(this.$refs.avatar, { duration: 1, opacity: 0, y: 30 }, 0)
      .from(this.$refs.article.children, { duration: 1, opacity: 0, y: 30, stagger: 0.05 }, 0.05)

    setTimeout(() => {
      tlEntry.play();
    }, 300)
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
