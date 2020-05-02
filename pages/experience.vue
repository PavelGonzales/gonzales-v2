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
        {{ job.startAt }} – {{ job.endAt }} ({{ job.duration }})
      </div>

      <div :class="$style.row">
        <div :class="$style.col">
          <div ref="dutiesTitle" :class="$style.listTitle">Duties</div>
          <ul ref="dutiesList" :class="$style.list">
            <li
              v-for="duty in job.duties"
              :key="duty"
              :class="$style.listItem"
            >
              {{ duty }}
            </li>
          </ul>
        </div>

        <div :class="$style.col">
          <div ref="achievementsTitle" :class="$style.listTitle">Achievements</div>
          <ul ref="achievementsList" :class="$style.list">
            <li
              v-for="achievement in job.achievements"
              :key="achievement"
              :class="$style.listItem"
            >
              {{ achievement }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineMax } from 'gsap';
import mixinTransition from '@/mixins/transition'
import jobs from '@/data/jobs'

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

  mounted() {
    const tlEntry = new TimelineMax({ paused: true });
    tlEntry
      .from(this.$refs.title, 1, { opacity: 0, y: 30 }, 0)
      .from(this.$refs.logo, 1, { opacity: 0, y: 30 }, 0.05)
      .from(this.$refs.jobPosition, 1, { opacity: 0, y: 30 }, 0.1)
      .from(this.$refs.jobDuration, 1, { opacity: 0, y: 30 }, 0.15)

    if (window.innerWidth > 960) {
      tlEntry
        .from(this.$refs.dutiesTitle, 1, { opacity: 0, y: 30 }, 0.2)
        .from(this.$refs.achievementsTitle, 1, { opacity: 0, y: 30 }, 0.2)
        .staggerFrom(this.$refs.dutiesList[0].children, 1, { opacity: 0, y: 30 }, 0.05, 0.25)
        .staggerFrom(this.$refs.achievementsList[0].children, 1, { opacity: 0, y: 30 }, 0.05, 0.25)
    } else {
      tlEntry
        .from(this.$refs.dutiesTitle, 1, { opacity: 0, y: 30 }, 0.2)
        .staggerFrom(this.$refs.dutiesList[0].children, 1, { opacity: 0, y: 30 }, 0.05, 0.25)
        .from(this.$refs.achievementsTitle, 1, { opacity: 0, y: 30 }, 0.25 + this.$refs.dutiesList[0].children.length * 0.05)
        .staggerFrom(this.$refs.achievementsList[0].children, 1, { opacity: 0, y: 30 }, 0.05, 0.3 + this.$refs.dutiesList[0].children.length * 0.05)
    }

    setTimeout(() => {
      tlEntry.play();
    }, 300)
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
  margin-bottom: 25px;
}

.listTitle {
  font-size: 24px;
  font-weight: var(--font-bold);
}

.list {
  padding-left: 1em;
}

.listItem {
  margin-bottom: 5px;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.col {
  width: 50%;
}

@media (max-width: 960px) {
  .jobTitle {
    font-size: 90px;
  }

  .col {
    width: 100%;
  }
}

@media (max-width: 640px) {
  .jobTitle {
    font-size: 48px;
  }
}
</style>
