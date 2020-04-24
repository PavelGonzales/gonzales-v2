<template>
  <div class="experience-screen container">
    <div class="mock-macbook">
      <img class="mock-macbook-job" src="./../assets/jobs/ozon-macbook.png" alt="">
      <img class="mock-img macbook" src="./../assets/mock_macbook.png" alt="">
    </div>

    <div class="mock-iphone">
      <img class="mock-iphone-job" src="./../assets/jobs/ozon-iphone.jpg" alt="">
      <img class="mock-img" src="./../assets/mock_iphone.png" alt="">
    </div>

    <div class="mock-macbook">
      <img class="mock-macbook-job" src="./../assets/jobs/rabotaru-macbook.png" alt="">
      <img class="mock-img macbook" src="./../assets/mock_macbook.png" alt="">
    </div>

    <div class="mock-iphone">
      <img class="mock-iphone-job" src="./../assets/jobs/rabotaru-iphone.jpeg" alt="">
      <img class="mock-img" src="./../assets/mock_iphone.png" alt="">
    </div>

    <div class="mock-macbook">
      <img class="mock-macbook-job" src="./../assets/jobs/ecn-macbook.png" alt="">
      <img class="mock-img macbook" src="./../assets/mock_macbook.png" alt="">
    </div>

    <div class="mock-iphone">
      <img class="mock-iphone-job" src="./../assets/jobs/ecn-iphone.jpeg" alt="">
      <img class="mock-img" src="./../assets/mock_iphone.png" alt="">
    </div>

    <div class="mock-macbook">
      <img class="mock-macbook-job" src="./../assets/jobs/breffi-macbook.png" alt="">
      <img class="mock-img macbook" src="./../assets/mock_macbook.png" alt="">
    </div>

    <div class="mock-iphone">
      <img class="mock-iphone-job" src="./../assets/jobs/breffi-iphone.jpeg" alt="">
      <img class="mock-img" src="./../assets/mock_iphone.png" alt="">
    </div>

    <div class="mock-macbook">
      <img class="mock-macbook-job" src="./../assets/jobs/bezpravok-macbook.png" alt="">
      <img class="mock-img macbook" src="./../assets/mock_macbook.png" alt="">
    </div>

    <div class="mock-iphone">
      <img class="mock-iphone-job" src="./../assets/jobs/bezpravok-iphone.jpeg" alt="">
      <img class="mock-img" src="./../assets/mock_iphone.png" alt="">
    </div>

    <div class="mock-macbook">
      <img class="mock-macbook-job" src="./../assets/jobs/alfaensurance-macbook.jpg" alt="">
      <img class="mock-img macbook" src="./../assets/mock_macbook.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceScreen'
}
</script>

<style scoped>
  .experience-screen {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 150px 16px;
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
  }

  .mock-macbook-job {
    position: absolute;
    width: 76%;
    top: 5%;
    left: 12%;
  }
</style>
