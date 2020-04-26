<template>
  <div :class="[$style.root, $style.container]">
    <h1 :class="$style.title">About</h1>
    <picture :class="$style.avatar">
      <source srcset="./../assets/ava_2.jpg" type="image/jpeg" :class="$style.avatarSource" />
      <img src="./../assets/ava_2.jpg" alt="Pavel Gonzales Avatar" :class="$style.avatarSource" />
    </picture>

    <p :class="$style.paragraph">
      Я программист-самоучка. Вошел в разработку в 2013, активно начал заниматься с 2015.
      <br /><br />
      В 2013 окончил курсы по web-дизайну. После этого немного фрилансил. Затем был
      перерыв на 2 года.
      <br /><br />
      В 2015 меня взяли младшим разработчиком в Beta Digital Production, где я сильно
      вырос. Получил опыт проектирования интерфейсов, приобрел чувство стиля в сайтах, научился чувствовать
      анимацию.
      <br /><br />
      В 2018 я перешел работать в OZON. На тот момент он переезжал на новые рельсы. И я в
      участвовал в переезде с самого начала. Приобрел опыт продуктовой разработки больших и запутанных систем.
      Понял как происходит разработка с кучей зависимостей и согласований.
      <br /><br />
      В разные моменты жизни пытался запустить запустить свои проекты. На последнем проекте
      спроектировал интерфейс, спроектировал базу, написал бэкенд на node, фронт на vue, задеплоил все на хостинге.
      Получил представление и опыт о полном цикле разработки.
      <br /><br />
      Куда хочу двигаться?
      <br />
      Последнее время все больше начал смотреть в сторону
      управления. Хочется продумывать и развивать продукты. Планирую дальше расти как технический менеджер.
    </p>
  </div>
</template>

<script>
export default {
  name: 'PageAbout'
}
</script>

<style module>
@import '~/assets/styles/main.css';

.root {
  padding-bottom: 50px;
}

.title {
  font-size: 170px;
  font-weight: 600;
  text-align: center;
  margin: 0;
}

.avatar {
  max-width: 500px;
  display: block;
  margin: auto;
  float: left;
  margin-right: 1em;
}

.avatarSource {
  width: 100%;
}

.paragraph {
  font-size: 30px;
  margin-top: 0;
}

@media (max-width: 640px) {
  .title {
    font-size: 100px;
  }
}
</style>
