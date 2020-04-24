<template>
  <div class="root">
    <button class="close" @click="$emit('close')">close</button>
    <main class="content">
      <h1 class="head-title">Обо мне</h1>

      <picture class="avatar">
        <source srcset="./../assets/ava_2.jpg" type="image/jpeg" class="avatar-source" />
        <img src="./../assets/ava_2.jpg" alt="Pavel Gonzales Avatar" class="avatar-source" />
      </picture>

      <p class="paragraph">Я программист-самоучка. Вошел в разработку в 2013, активно начал заниматься с 2015.
      </p>
      <p class="paragraph">В 2013 окончил курсы по web-дизайну. После этого немного фрилансил. Затем был
        перерыв на 2 года.</p>
      <p class="paragraph">В 2015 меня взяли младшим разработчиком в Beta Digital Production, где я сильно
        вырос. Получил опыт проектирования интерфейсов, приобрел чувство стиля в сайтах, научился чувствовать
        анимацию.</p>
      <p class="paragraph">В 2018 я перешел работать в OZON. На тот момент он переезжал на новые рельсы. И я в
        участвовал в переезде с самого начала. Приобрел опыт продуктовой разработки больших и запутанных систем.
        Понял как происходит разработка с кучей зависимостей и согласований.</p>
      <p class="paragraph">В разные моменты жизни пытался запустить запустить свои проекты. На последнем проекте
        спроектировал интерфейс, спроектировал базу, написал бэкенд на node, фронт на vue, задеплоил все на хостинге.
        Получил представление и опыт о полном цикле разработки.</p>
      <p class="paragraph">Куда хочу двигаться?<br>Последнее время все больше начал смотреть в сторону
        управления. Хочется продумывать и развивать продукты. Планирую дальше расти как технический менеджер.</p>
      <ul class="social-list">
        <li class="social-item">
          <a href="mailto:develop.gonzales@gmail.com" target="_blank">
            <img src="./../assets/icons/google.svg" alt="gmail" class="social-img">
          </a>
        </li>
        <li class="social-item">
          <a href="https://www.linkedin.com/in/pavelgonzales/" target="_blank">
            <img src="./../assets/icons/linkedin.svg" alt="linkedin" class="social-img">
          </a>
        </li>
        <li class="social-item">
          <a href="https://www.facebook.com/develop.gonzales" target="_blank">
            <img src="./../assets/icons/facebook.svg" alt="facebook" class="social-img">
          </a>
        </li>
        <li class="social-item">
          <a href="https://www.instagram.com/pavelgonzales/" target="_blank">
            <img src="./../assets/icons/instagram.svg" alt="instagram" class="social-img">
          </a>
        </li>
        <li class="social-item">
          <a href="https://medium.com/@pavelgonzales" target="_blank">
            <img src="./../assets/icons/medium.svg" alt="medium" class="social-img">
          </a>
        </li>
        <li class="social-item">
          <a href="https://github.com/PavelGonzales" target="_blank">
            <img src="./../assets/icons/github.svg" alt="github" class="social-img">
          </a>
        </li>
        <li class="social-item">
          <a href="tg://resolve?domain=pavelgonzales" target="_blank">
            <img src="./../assets/icons/telegram.svg" alt="telegram" class="social-img">
          </a>
        </li>
        <li class="social-item">
          <a href="/pavel-gonzales.pdf" target="_blank">
            <img src="./../assets/icons/download.svg" alt="download" class="social-img">
          </a>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Resume'
}
</script>

<style scoped>
.root {
  height: 100vh;
  overflow-y: auto;
  color: #fff;
}

.content {
  padding: 50px 16px;
  max-width: 640px;
  margin: auto;
}

.avatar {
  width: 100%;
  display: block;
}

.avatar-source {
  width: 100%;
  height: 100%;
}

.head-title {
  font-size: 100px;
  margin: 0;
}

.paragraph {
  font-size: 24px;
  margin-top: 0;
}

.social-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
}

.social-item {
  width: 50px;
  margin-right: 10px;
}

.social-img {
  width: 100%;
  height: 100%;
}

.close {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: #fff;
}
</style>
