<template>
  <ol class="nav container">
    <li class="nav-item">
      <nuxt-link class="nav-link" to="/about">About</nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link class="nav-link" to="/experience">Experience</nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link class="nav-link" to="/contacts">Contacts</nuxt-link>
    </li>
  </ol>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped>
  .nav {
    width: 100%;
    display: flex;
    color: #fff;
    padding: 0;
    list-style: none;
    position: relative;
    justify-content: center;
    padding: 25px 0;
  }

  .nav::before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: #666;
    position: absolute;
    top: 50%;
  }

  .nav-item {
    padding: 0 6px;
    margin: 0 6px;
    background-color: var(--background-color);
    position: relative;
  }

  .nav-link {
    color: #fff;
    text-decoration: none;
  }

  @media (max-width: 1280px) {
    .about-screen {
      max-width: 960px;
    }

    .text {
      font-size: 54px;
    }
  }

  @media (max-width: 960px) {
    .about-screen {
      max-width: 640px;
    }

    .text {
      font-size: 36px;
    }
  }
</style>
