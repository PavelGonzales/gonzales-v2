<template>
  <div class="main-screen">
    <ol class="nav">
      <li class="nav-item">
        <router-link to="/about">About</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/experience">Experience</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/contacts">Contacts</router-link>
      </li>
    </ol>
    <h1 class="title">Hi. I'm Pavel, a Moscow based <nobr>front-end</nobr> developer and team lead</h1>
  </div>
</template>

<script>
export default {
  name: 'MainScreen'
}
</script>

<style scoped>
  .main-screen {
    max-width: 1280px;
    width: 100%;
    margin: auto;
    min-height: 100vh;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 16px;
    color: #fff;
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

  @media (max-width: 1280px) {
    .main-screen {
      max-width: 960px;
    }

    .title {
      font-size: 100px;
    }
  }

  @media (max-width: 960px) {
    .main-screen {
      max-width: 640px;
    }

    .title {
      font-size: 65px;
    }
  }
</style>
