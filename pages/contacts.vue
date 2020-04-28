<template>
  <div :class="$style.container">
    <h1 :class="$style.title">Contacts</h1>
    <ul :class="$style.socialList">
      <li :class="$style.socialItem">
        <a :class="$style.socialLink" href="mailto:develop.gonzales@gmail.com" target="_blank">
          @gmail
        </a>
      </li>
      <li :class="$style.socialItem">
        <a :class="$style.socialLink" href="https://www.linkedin.com/in/pavelgonzales/" target="_blank">
          LinkedIn
        </a>
      </li>
      <li :class="$style.socialItem">
        <a :class="$style.socialLink" href="https://www.facebook.com/develop.gonzales" target="_blank">
          Facebook
        </a>
      </li>
      <li :class="$style.socialItem">
        <a :class="$style.socialLink" href="https://www.instagram.com/pavelgonzales/" target="_blank">
          Instagram
        </a>
      </li>
      <li :class="$style.socialItem">
        <a :class="$style.socialLink" href="https://medium.com/@pavelgonzales" target="_blank">
          Medium
        </a>
      </li>
      <li :class="$style.socialItem">
        <a :class="$style.socialLink" href="https://github.com/PavelGonzales" target="_blank">
          GitHub
        </a>
      </li>
      <li :class="$style.socialItem">
        <a :class="$style.socialLink" href="tg://resolve?domain=pavelgonzales" target="_blank">
          Telegram
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import mixinTransition from '@/mixins/transition'

export default {
  name: 'PageContacts',

  mixins: [
    mixinTransition
  ]
}
</script>

<style module>
@import '~/assets/styles/main.css';

.title {
  font-size: 170px;
  font-weight: 600;
  text-align: center;
  margin: 0;
}

.socialList {
  padding: 0;
  list-style-type: none;
  text-align: center;
}

.socialItem {
  width: 100%;
}

.socialLink {
  font-size: 70px;
  color: var(--white-color);
  font-weight: 600;
  text-decoration: none;
  width: 100%;
  position: relative;
}

.socialLink::before {
  content: '';
  display: block;
  height: 0.27em;
  background-color: red;
  width: calc(100% + 0.72em);
  position: absolute;
  top: 0.53em;
  left: -0.36em;
  opacity: 0;
  z-index: -1;
}

/* mouse, touch pad */
@media (hover: hover) and (pointer: fine) {
  .socialLink:hover  {
    font-style: italic;
  }

  .socialLink:hover::before {
    opacity: 1;
  }
}

@media (max-width: 1280px) {
  .title {
    font-size: 128px;
  }

  .socialLink {
    font-size: 52px;
  }
}

@media (max-width: 640px) {
  .title {
    font-size: 85px;
  }
}
</style>
