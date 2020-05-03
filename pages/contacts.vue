<template>
  <div :class="$style.container">
    <h1 ref="title" :class="$style.title">Contacts</h1>
    <ul ref="socialList" :class="$style.socialList">
      <li
        v-for="link in links"
        :key="link.text"
        :class="$style.socialItem"
      >
        <a
          :class="$style.socialLink"
          :href="link.href"
          target="_blank"
          @click="clickOnLink(link.text)"
        >
          {{ link.text }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { TimelineMax } from 'gsap';
import mixinTransition from '@/mixins/transition'
import { getMeta } from '@/helpers/meta'
import jsonLd from '@/seo/about.json'

export default {
  name: 'PageContacts',

  mixins: [
    mixinTransition
  ],

  data() {
    return {
      links: [
        {
          href: 'mailto:develop.gonzales@gmail.com',
          text: '@gmail'
        },
        {
          href: 'https://www.linkedin.com/in/pavelgonzales/',
          text: 'LinkedIn'
        },
        {
          href: 'https://www.facebook.com/develop.gonzales',
          text: 'Facebook'
        },
        {
          href: 'https://www.instagram.com/pavelgonzales/',
          text: 'Instagram'
        },
        {
          href: 'https://medium.com/@pavelgonzales',
          text: 'Medium'
        },
        {
          href: 'https://github.com/PavelGonzales',
          text: 'GitHub'
        },
        {
          href: 'tg://resolve?domain=pavelgonzales',
          text: 'Telegram'
        }
      ]
    };
  },

  computed: {
    meta() {
      return {
        text: 'Hi. I\'m Pavel, a Moscow based senior front-end developer and team lead',
        url: this.$route.fullPath
      }
    }
  },

  mounted() {
    const tlEntry = new TimelineMax({ paused: true });
    tlEntry
      .from(this.$refs.title, 1, { opacity: 0, y: 30 }, 0)
      .staggerFrom(this.$refs.socialList.children, 1, { opacity: 0, y: 30 }, 0.05, 0.05)

    setTimeout(() => {
      tlEntry.play();
    }, 300)
  },

  methods: {
    clickOnLink(name) {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: 'click',
        eventLabel: name
      })
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
@import '~/assets/styles/main.css';

.title {
  font-size: 170px;
  font-weight: var(--font-bold);
  text-align: center;
  margin: 0;
}

.socialList {
  padding: 0;
  list-style-type: none;
  text-align: center;
}

.socialItem {
  width: 100%;
}

.socialLink {
  font-size: 70px;
  color: var(--white-color);
  font-weight: var(--font-bold);
  text-decoration: none;
  width: 100%;
  position: relative;
}

.socialLink::before {
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
  .socialLink:hover  {
    font-style: italic;
  }

  .socialLink:hover::before {
    opacity: 1;
  }
}

@media (max-width: 1280px) {
  .title {
    font-size: 128px;
  }

  .socialLink {
    font-size: 52px;
  }
}

@media (max-width: 640px) {
  .title {
    font-size: 85px;
  }
}

@media (max-width: 400px) {
  .title {
    font-size: 21vw;
  }
}
</style>
