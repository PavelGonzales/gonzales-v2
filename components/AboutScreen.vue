<template>
  <div class="about-screen container">
    <p class="text">Since 2015, I have been engaged in front-end development and managed to participate in many projects and work in several large companies.</p>
  </div>
</template>

<script>
export default {
  name: 'AboutScreen'
}
</script>

<style scoped>
  .about-screen {
    display: flex;
    align-items: center;
    padding: 150px 16px;
  }

  .text {
    font-size: 72px;
    color: #fff;
    font-weight: 600;
    text-align: left;
    position: relative;
    width: 100%;
    margin: 0;
  }

  @media (max-width: 1280px) {
    .text {
      font-size: 54px;
    }
  }

  @media (max-width: 960px) {
    .text {
      font-size: 36px;
    }
  }
</style>
