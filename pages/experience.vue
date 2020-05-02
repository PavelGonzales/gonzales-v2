<template>
  <div :class="$style.container">
    <div :class="$style.title">
      Experience
    </div>

    <div
      v-for="job in jobs"
      :key="job.companyName"
      :class="$style.job"
    >
      <a
        :class="$style.jobLink"
        :href="job.companyLink"
        target="_blank"
      >
        <img v-if="job.companyLogo" :class="$style.jobLogo" :src="require(`~/assets${job.companyLogo}`)" :alt="`${job.companyName} logo`">
        <span v-else :class="$style.jobTitle">{{ job.companyName }}</span>
      </a>

      <div :class="$style.jobPosition">{{ job.position }}</div>

      <div :class="$style.jobDuration">
        {{ job.startAt }} – {{ job.endAt }} ({{ job.duration }})
      </div>

      <div :class="$style.row">
        <div :class="$style.col">
          <div :class="$style.listTitle">Duties</div>
          <ul :class="$style.list">
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
          <div :class="$style.listTitle">Achievements</div>
          <ul :class="$style.list">
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
