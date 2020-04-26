<template>
  <div ref="experience-screen" class="experience-screen container">
    <div class="timeline">
      <div ref="timeline-line" class="timeline-line" />
      <ul ref="year-list" class="year-list">
        <li ref="year-2015" class="year-list-item">2015</li>
        <li ref="year-2016" class="year-list-item">2016</li>
        <li ref="year-2018" class="year-list-item">2018</li>
        <li ref="year-2020" class="year-list-item">2020</li>
      </ul>
    </div>

    <div class="jobs-list">
      <div ref="job-start" class="job job-start">
        several small companies
      </div>
      <div ref="job-beta" class="job">
        <img ref="logo-beta" class="company-logo beta" src="~/assets/logos/beta.svg" alt="">
      </div>
      <div ref="job-ozon" class="job">
        <img ref="logo-ozon" class="company-logo ozon" src="~/assets/logos/ozon.svg" alt="">
      </div>
      <div ref="job-rabotaru" class="job">
        <img ref="logo-rabotaru" class="company-logo rabotaru" src="~/assets/logos/rabotaru.svg" alt="">
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
    const yearListItem = this.$refs['year-list'].querySelectorAll('.year-list-item');
    const tlYears = new TimelineMax({ paused: true });
    tlYears
      .from(this.$refs['timeline-line'], 3, { scaleX: 0 }, 0)
      .staggerFrom(yearListItem, 0.15, { opacity: 0 }, 0.4, 0.2)

    // Timeline 2015
    const tl2015 = new TimelineMax({ paused: true })
    tl2015
      .to(this.$refs['year-2015'], 0.25, { scale: 1.2, color: '#fff' }, 0)
      .from(this.$refs['job-start'], 0.15, { opacity: 0 }, 0)

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
      triggerElement: this.$refs['experience-screen'],
      offset: (window.innerHeight / 10),
      duration: 1000
    })
      .setPin(this.$refs['experience-screen'])
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

<style scoped>
  .experience-screen {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 150px;
  }

  .timeline {
    color: #fff;
    position: relative;
    width: 100%;
  }

  .timeline-line {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #999;
    transform-origin: center left;
  }

  .year-list {
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    position: relative;
  }

  .year-list-item {
    font-size: 60px;
    font-weight: 600;
    padding: 0 15px;
    background-color: var(--background-color);
    color: #999;
  }

  .jobs-list {
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

  .job-start {
    color: #fff;
    justify-content: center;
    text-align: center;
    font-size: 105px;
    font-weight: 600;
    font-weight: 600;
    padding-top: 4%;
  }

  .company-logo {
    width: 100%;
  }

  .company-logo.ozon {
    width: 51%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4%;
  }

  .company-logo.beta {
    width: 51%;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 1280px) {
    .year-list-item {
      font-size: 45px;
    }

    .job-start {
      font-size: 78px;
    }
  }

  @media (max-width: 960px) {
    .year-list-item {
      font-size: 30px;
    }

    .job-start {
      font-size: 50px;
    }
  }

  @media (max-width: 640px) {
    .timeline-line {
      display: none;
    }

    .job-start {
      padding-top: 0;
    }
  }
</style>
