<template>
  <div :class="$style.container">
    <ul :class="$style.socialList">
      <li :class="$style.socialItem">
        <a href="mailto:develop.gonzales@gmail.com" target="_blank">
          <img src="./../assets/icons/google.svg" alt="gmail" :class="$style.socialImg">
        </a>
      </li>
      <li :class="$style.socialItem">
        <a href="https://www.linkedin.com/in/pavelgonzales/" target="_blank">
          <img src="./../assets/icons/linkedin.svg" alt="linkedin" :class="$style.socialImg">
        </a>
      </li>
      <li :class="$style.socialItem">
        <a href="https://www.facebook.com/develop.gonzales" target="_blank">
          <img src="./../assets/icons/facebook.svg" alt="facebook" :class="$style.socialImg">
        </a>
      </li>
      <li :class="$style.socialItem">
        <a href="https://www.instagram.com/pavelgonzales/" target="_blank">
          <img src="./../assets/icons/instagram.svg" alt="instagram" :class="$style.socialImg">
        </a>
      </li>
      <li :class="$style.socialItem">
        <a href="https://medium.com/@pavelgonzales" target="_blank">
          <img src="./../assets/icons/medium.svg" alt="medium" :class="$style.socialImg">
        </a>
      </li>
      <li :class="$style.socialItem">
        <a href="https://github.com/PavelGonzales" target="_blank">
          <img src="./../assets/icons/github.svg" alt="github" :class="$style.socialImg">
        </a>
      </li>
      <li :class="$style.socialItem">
        <a href="tg://resolve?domain=pavelgonzales" target="_blank">
          <img src="./../assets/icons/telegram.svg" alt="telegram" :class="$style.socialImg">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PageContacts'
}
</script>

<style module>
@import '~/assets/styles/main.css';

.socialList {
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.socialItem {
  width: 10.5%;
}

.socialImg {
  width: 100%;
}

@media (max-width: 640px) {
  .socialList {
    justify-content: flex-start;
  }

  .socialItem {
    width: 60px;
    margin-bottom: 12%;
    margin-right: 12%;
  }

  .socialItem:nth-child(4n + 4) {
    margin-right: 0;
  }
}
</style>
