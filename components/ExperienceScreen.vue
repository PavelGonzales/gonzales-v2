<template>
  <div ref="experience-screen" class="experience-screen container">
    <div ref="frame-macbook" class="mock-macbook">
      <img class="mock-macbook-job main" src="./../assets/jobs/gonzales-macbook.png" alt="">

      <img ref="macbook-ozon-job" class="mock-macbook-job" src="./../assets/jobs/ozon-macbook.png" alt="">
      <img ref="macbook-rabotaru-job" class="mock-macbook-job" src="./../assets/jobs/rabotaru-macbook.png" alt="">
      <img ref="macbook-ecn-job" class="mock-macbook-job" src="./../assets/jobs/ecn-macbook.png" alt="">
      <img ref="macbook-breffi-job" class="mock-macbook-job" src="./../assets/jobs/breffi-macbook.png" alt="">
      <img ref="macbook-bezpravok-job" class="mock-macbook-job" src="./../assets/jobs/bezpravok-macbook.png" alt="">
      <img ref="macbook-alfaensurance-job" class="mock-macbook-job" src="./../assets/jobs/alfaensurance-macbook.jpg" alt="">

      <img class="mock-img macbook" src="./../assets/mock_macbook.png" alt="">
    </div>

    <div ref="frame-iphone" class="mock-iphone">
      <img class="mock-iphone-job main" src="./../assets/jobs/gonzales-iphone.jpeg" alt="">

      <img ref="iphone-ozon-job" class="mock-iphone-job" src="./../assets/jobs/ozon-iphone.jpg" alt="">
      <img ref="iphone-rabotaru-job" class="mock-iphone-job" src="./../assets/jobs/rabotaru-iphone.jpeg" alt="">
      <img ref="iphone-ecn-job" class="mock-iphone-job" src="./../assets/jobs/ecn-iphone.jpeg" alt="">
      <img ref="iphone-breffi-job" class="mock-iphone-job" src="./../assets/jobs/breffi-iphone.jpeg" alt="">
      <img ref="iphone-bezpravok-job" class="mock-iphone-job" src="./../assets/jobs/bezpravok-iphone.jpeg" alt="">

      <img class="mock-img" src="./../assets/mock_iphone.png" alt="">
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { TimelineMax, TweenMax } from 'gsap';
export default {
  name: 'ExperienceScreen',

  data() {
    return {
      controller: null,
      scene1: null,
      scene2: null,
      scene3: null,
      scene4: null,
      scene5: null
    }
  },

  mounted() {
    this.controller = new this.$scrollmagic.Controller();

    const jobsArray = ['ozon', 'rabotaru', 'ecn', 'breffi', 'bezpravok'];
    const duration = 380;
    let accOffset = window.innerHeight / 3.75;

    jobsArray.forEach((name, index) => {
      this[`scene${index + 1}`] = this.createScene({ pin: 'experience-screen', name, offset: accOffset })
      accOffset += duration
    })

    const tlFrames = new TimelineMax({ paused: true });
    tlFrames
      .from(this.$refs['frame-macbook'], 1, { x: -100, opacity: 0 }, 0)
      .from(this.$refs['frame-iphone'], 1, { x: 100, opacity: 0 }, 0)

    new this.$scrollmagic.Scene({
      triggerElement: this.$refs['experience-screen'],
      duration: 1000
    })
      .on('enter', () => {
        tlFrames.play()
      })
      // .addIndicators({ name: 'experience' })
      .addTo(this.controller)
  },

  methods: {
    createScene({ pin = '', name = '', offset = 150 } = {}) {
      new this.$scrollmagic.Scene({
        triggerElement: this.$refs[pin],
        offset,
        duration: 380
      })
      .setPin(this.$refs[pin])
      .on('tlFrames', (e) => {
        tlTitleLeave.progress(e.progress)
      })
      .on('enter', (e) => {
        TweenMax.to(this.$refs[`macbook-${name}-job`], 0.5, { opacity: 1 })
        TweenMax.to(this.$refs[`iphone-${name}-job`], 0.5, { opacity: 1 })
      })
      .on('leave', (e) => {
        TweenMax.to(this.$refs[`macbook-${name}-job`], 0.5, { opacity: 0 })
        TweenMax.to(this.$refs[`iphone-${name}-job`], 0.5, { opacity: 0 })
      })
      // .addIndicators({ name: pin })
      .addTo(this.controller)
    }
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

  .mock-macbook {
    width: 73%;
    position: relative;
  }

  .mock-iphone {
    width: 27%;
    position: relative;
  }

  .mock-img {
    width: 100%;
    position: relative;
  }

  .mock-iphone-job {
    position: absolute;
    width: 64%;
    top: 2%;
    left: 18%;
    opacity: 0;
  }

  .mock-macbook-job {
    position: absolute;
    width: 76%;
    top: 5%;
    left: 12%;
    opacity: 0;
  }

  .mock-iphone-job.main,
  .mock-macbook-job.main {
    opacity: 1;
  }
</style>
