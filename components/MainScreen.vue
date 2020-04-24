<template>
  <div class="main-screen container">
    <h1 class="title">
      Hi. I'm Pavel, a Moscow based <nobr>front-end</nobr> developer and team lead
      <img class="emoji" src="~/assets/technologist-emoji.png" alt="">
    </h1>
  </div>
</template>

<script>
export default {
  name: 'MainScreen'
}
</script>

<style scoped>
  .main-screen {
    min-height: 100vh;
    display: flex;
    align-items: center;
    color: #fff;
    position: relative;
  }

  .title {
    font-size: 140px;
    font-weight: 600;
    text-align: left;
    position: relative;
    width: 100%;
    margin: 0;
    line-height: 0.85em;
  }

  .emoji {
    position: absolute;
    bottom: 10px;
    width: 1.14em;
  }

  @media (max-width: 1280px) {
    .title {
      font-size: 100px;
    }

    .emoji {
      bottom: 7px;
    }
  }

  @media (max-width: 960px) {
    .title {
      font-size: 65px;
    }

    .emoji {
      bottom: 4px;
    }
  }
</style>
