<template>
  <footer class="about-screen container">
    <p class="contact-text">Contact me</p>
    <div class="copyright">
      <span class="copyright__inner">
        {{ new Date().getFullYear() }} &copy; Pavel Gonzales
      </span>
    </div>
    <p class="bye-text">Chiao!</p>
  </footer>
</template>

<script>
export default {
  name: 'ByeScreen'
}
</script>

<style scoped>
  .about-screen {
    padding: 150px 16px 0;
    color: #fff;
    text-align: center;
  }

  .copyright {
    font-weight: 300;
    color: #ddd;
    position: relative;
    display: flex;
    justify-content: center;
  }

  .copyright::before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: #666;
    position: absolute;
    top: 50%;
  }

  .copyright__inner {
    background-color: var(--background-color);
    position: relative;
    padding: 0 6px;
  }

  .contact-text {
    font-size: 186px;
    font-weight: 600;
    margin: 0;
  }

  .bye-text {
    font-size: 300px;
    font-weight: 900;
    text-transform: uppercase;
    margin: 0;
  }

  @media (max-width: 1280px) {
    .text {
      font-size: 54px;
    }

    .bye-text {
      font-size: 230px;
    }

    .contact-text {
      font-size: 144px;
    }
  }

  @media (max-width: 960px) {
    .text {
      font-size: 36px;
    }

    .bye-text {
      font-size: 150px;
    }

    .contact-text {
      font-size: 95px;
    }
  }

  @media (max-width: 640px) {
    .bye-text {
      font-size: 75px;
    }

    .contact-text {
      font-size: 47px;
    }

    .copyright {
      margin: 15px 0;
    }
  }
</style>
