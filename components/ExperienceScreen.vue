<template>
  <div ref="experienceScreen" :class="[$style.experienceScreen, $style.container]">
    <div :class="$style.timeline">
      <div ref="timelineLine" :class="$style.timelineLine" />
      <ul ref="yearList" :class="$style.yearList">
        <li ref="year-2015" :class="$style.yearListItem">2015</li>
        <li ref="year-2016" :class="$style.yearListItem">2016</li>
        <li ref="year-2018" :class="$style.yearListItem">2018</li>
        <li ref="year-2020" :class="$style.yearListItem">2020</li>
      </ul>
    </div>

    <div :class="$style.jobsList">
      <div ref="jobStart" :class="[$style.job, $style.jobStart]">
        several small companies
      </div>
      <div ref="job-beta" :class="$style.job">
        <img ref="logo-beta" :class="[$style.companyLogo, $style.beta]" src="~/assets/logos/beta.svg" alt="">
      </div>
      <div ref="job-ozon" :class="$style.job">
        <img ref="logo-ozon" :class="[$style.companyLogo, $style.ozon]" src="~/assets/logos/ozon.svg" alt="">
      </div>
      <div ref="job-rabotaru" :class="$style.job">
        <img ref="logo-rabotaru" :class="[$style.companyLogo, $style.rabotaru]" src="~/assets/logos/rabotaru.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineMax } from 'gsap';
export default {
  name: 'ExperienceScreen',

  data() {
    return {
      controller: null
    }
  },

  mounted() {
    this.controller = new this.$scrollmagic.Controller();
    const yearListItem = [
      this.$refs['year-2015'],
      this.$refs['year-2016'],
      this.$refs['year-2018'],
      this.$refs['year-2020']
    ];
    const tlYears = new TimelineMax({ paused: true });
    tlYears
      .from(this.$refs.timelineLine, 3, { scaleX: 0 }, 0)
      .staggerFrom(yearListItem, 0.15, { opacity: 0 }, 0.4, 0.2)

    // Timeline 2015
    const tl2015 = new TimelineMax({ paused: true })
    tl2015
      .to(this.$refs['year-2015'], 0.25, { scale: 1.2, color: '#fff' }, 0)
      .from(this.$refs.jobStart, 0.15, { opacity: 0 }, 0)

    // Timeline 2016
    const tl2016 = new TimelineMax({ paused: true })
    tl2016
      .to(this.$refs['year-2016'], 0.25, { scale: 1.2, color: '#fff' }, 0)
      .from(this.$refs['job-beta'], 0.15, { opacity: 0 }, 0.15)

    // Timeline 2018
    const tl2018 = new TimelineMax({ paused: true })
    tl2018
      .to(this.$refs['year-2018'], 0.25, { scale: 1.2, color: '#fff' }, 0)
      .from(this.$refs['job-ozon'], 0.15, { opacity: 0 }, 0.15)

    // Timeline 2020
    const tl2020 = new TimelineMax({ paused: true })
    tl2020
      .to(this.$refs['year-2020'], 0.25, { scale: 1.2, color: '#fff' }, 0)
      .from(this.$refs['job-rabotaru'], 0.15, { opacity: 0 }, 0.15)

    new this.$scrollmagic.Scene({
      triggerElement: this.$refs.experienceScreen,
      offset: (window.innerHeight / 6),
      duration: 1000
    })
      .setPin(this.$refs.experienceScreen)
      .on('enter', () => {
        tlYears.play()
      })
      .on('progress', (e) => {
        if (e.progress >= 0 && e.progress < 0.33) {
          tl2015.play()
          tl2016.reverse()
        } else if (e.progress >= 0.33 && e.progress < 0.66) {
          tl2015.reverse()
          tl2016.play()
          tl2018.reverse()
        } else if (e.progress >= 0.66 && e.progress < 1) {
          tl2016.reverse()
          tl2018.play()
          tl2020.reverse()
        } else {
          tl2018.reverse()
          tl2020.play()
        }
      })
      .addTo(this.controller)
      // .addIndicators({ name: 'experience' })
  }
}
</script>

<style module>
@import '~/assets/styles/main.css';

.experienceScreen {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 150px;
}

.timeline {
  position: relative;
  width: 100%;
}

.timelineLine {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--light-gray-color);
  transform-origin: center left;
}

.yearList {
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  position: relative;
}

.yearListItem {
  font-size: 60px;
  font-weight: var(--font-bold);
  padding: 0 15px;
  background-color: var(--black-color);
  color: var(--light-gray-color);
}

.jobsList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 275px;
}

.job {
  width: 100%;
  position: absolute;
  display: flex;
  margin-top: 50px;
}

.jobStart {
  justify-content: center;
  text-align: center;
  font-size: 105px;
  font-weight: var(--font-bold);
  font-weight: var(--font-bold);
  padding-top: 4%;
}

.companyLogo {
  width: 100%;
  height: 100%;
}

.companyLogo.ozon {
  width: 51%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4%;
}

.companyLogo.beta {
  width: 51%;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 1280px) {
  .yearListItem {
    font-size: 45px;
  }

  .jobStart {
    font-size: 78px;
  }
}

@media (max-width: 960px) {
  .yearListItem {
    font-size: 30px;
  }

  .jobStart {
    font-size: 50px;
  }
}

@media (max-width: 640px) {
  .jobStart {
    padding-top: 0;
  }

  .yearListItem {
    font-size: 20px;
  }
}

@media (max-width: 400px) {
  .timelineLine {
    display: none;
  }
}
</style>
