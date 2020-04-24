<template>
  <div class="experience-screen">
    <div class="mock-macbook">
      <img class="mock-img macbook" src="./../assets/mock_macbook.png" alt="">
      <img class="ozon-macbook" src="./../assets/jobs/ozon-macbook.png" alt="">
    </div>

    <div class="mock-iphone">
      <img class="mock-img ozon-iphone" src="./../assets/jobs/ozon-iphone.jpg" alt="">
      <img class="mock-img" src="./../assets/mock_iphone.png" alt="">
    </div>

    <div class="mock-macbook">
      <img class="mock-img macbook" src="./../assets/mock_macbook.png" alt="">
      <img class="ozon-macbook" src="./../assets/jobs/rabotaru-macbook.png" alt="">
    </div>

    <div class="mock-iphone">
      <img class="mock-img ozon-iphone" src="./../assets/jobs/rabotaru-iphone.jpeg" alt="">
      <img class="mock-img" src="./../assets/mock_iphone.png" alt="">
    </div>

    <div class="mock-macbook">
      <img class="mock-img macbook" src="./../assets/mock_macbook.png" alt="">
      <img class="ozon-macbook" src="./../assets/jobs/ecn-macbook.png" alt="">
    </div>

    <div class="mock-iphone">
      <img class="mock-img ozon-iphone" src="./../assets/jobs/ecn-iphone.jpeg" alt="">
      <img class="mock-img" src="./../assets/mock_iphone.png" alt="">
    </div>

    <div class="mock-macbook">
      <img class="mock-img macbook" src="./../assets/mock_macbook.png" alt="">
      <img class="ozon-macbook" src="./../assets/jobs/breffi-macbook.png" alt="">
    </div>

    <div class="mock-iphone">
      <img class="mock-img ozon-iphone" src="./../assets/jobs/breffi-iphone.jpeg" alt="">
      <img class="mock-img" src="./../assets/mock_iphone.png" alt="">
    </div>

    <div class="mock-macbook">
      <img class="mock-img macbook" src="./../assets/mock_macbook.png" alt="">
      <img class="ozon-macbook" src="./../assets/jobs/bezpravok-macbook.png" alt="">
    </div>

    <div class="mock-iphone">
      <img class="mock-img ozon-iphone" src="./../assets/jobs/bezpravok-iphone.jpeg" alt="">
      <img class="mock-img" src="./../assets/mock_iphone.png" alt="">
    </div>

    <div class="mock-macbook">
      <img class="mock-img macbook" src="./../assets/mock_macbook.png" alt="">
      <img class="ozon-macbook" src="./../assets/jobs/alfaensurance-macbook.jpg" alt="">
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
    max-width: 1280px;
    width: 100%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    box-sizing: border-box;
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

  .ozon-iphone {
    position: absolute;
    width: 64%;
    top: 2%;
    left: 18%;
  }

  .ozon-macbook {
    position: absolute;
    width: 76%;
    top: 6%;
    left: 12%;
  }

  @media (max-width: 1280px) {
    .experience-screen {
      max-width: 960px;
    }
  }

  @media (max-width: 960px) {
    .experience-screen {
      max-width: 640px;
    }
  }
</style>
