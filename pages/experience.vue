<template>
  <div :class="$style.container">
    <div ref="title" :class="$style.title">
      Experience
    </div>

    <div
      v-for="job in jobs"
      :key="job.companyName"
      :class="$style.job"
    >
      <a
        ref="logo"
        :class="$style.jobLink"
        :href="job.companyLink"
        target="_blank"
      >
        <img v-if="job.companyLogo" :class="$style.jobLogo" :src="require(`~/assets${job.companyLogo}`)" :alt="`${job.companyName} logo`">
        <span v-else :class="$style.jobTitle">{{ job.companyName }}</span>
      </a>

      <div ref="jobPosition" :class="$style.jobPosition">{{ job.position }}</div>

      <div ref="jobDuration" :class="$style.jobDuration">
        {{ job.startAt }} – {{ job.endAt }} ({{ job.duration }} months)
      </div>
      <div ref="progress" :class="$style.progress">
        <div v-for="month in job.duration" :key="month" :class="$style.progressSquare" />
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineMax } from 'gsap';
import mixinTransition from '@/mixins/transition'
import jobs from '@/data/jobs'
import { getMeta } from '@/helpers/meta'
import jsonLd from '@/seo/about.json'

export default {
  name: 'PageExperience',

  mixins: [
    mixinTransition
  ],

  data() {
    return {
      jobs
    }
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
      .from(this.$refs.logo, 1, { opacity: 0, y: 30 }, 0.05)
      .from(this.$refs.jobPosition, 1, { opacity: 0, y: 30 }, 0.1)
      .from(this.$refs.jobDuration, 1, { opacity: 0, y: 30 }, 0.15)

    tlEntry
      .staggerFrom(this.$refs.progress[0].children, 1, { opacity: 0, x: 30 }, 0.05, 0.25)

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

.title {
  font-size: 70px;
  font-weight: var(--font-bold);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 50px;
}

.progress {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.progressSquare {
  background-color: red;
  width: 11px;
  height: 11px;
  border-radius: 2px;
  margin-right: 4px;
  margin-bottom: 4px;
  opacity: 0.8;
}

@media (max-width: 640px) {
  .title {
    font-size: 59px;
  }
}

.job {
  margin-bottom: 125px;
}

.jobLink {
  color: var(--white-color);
  text-decoration: none;
  display: block;
}

.jobTitle {
  font-size: 110px;
  font-weight: var(--font-bold);
  display: block;
  text-align: center;
}

.jobDuration {
  font-size: 18px;
  text-align: center;
  font-weight: var(--font-bold);
  margin-bottom: 25px;
}

.jobPosition {
  font-size: 32px;
  font-weight: var(--font-bold);
  text-align: center;
}

.jobLogo {
  width: 100%;
  height: 125px;
  margin-bottom: 25px;
}

@media (max-width: 960px) {
  .jobTitle {
    font-size: 90px;
  }
}

@media (max-width: 640px) {
  .jobTitle {
    font-size: 48px;
  }
}
</style>
