<template>
  <div class="section-exp">
    <UiHeader>
      <template #default>
        Карьера и достижения 🏆
      </template>

      <template #subtitle>
        Этот персонаж прошёл долгий путь и овладел искусством фронтенда, принимая сложные вызовы и создавая мощные проекты!
      </template>
    </UiHeader>
    <div class="section-exp__content">
      <UiAchievement
          :img-src="PlantImage"
          title="Фирма 'Агрокомплекс' им. Н.И. Ткачева"
          time="Апрель 2024 — Январь 2025 (10 месяцев)"
          description="Сложная миссия с крупным сервисом для B2B-продаж. Этот проект стал настоящим испытанием,
          но благодаря смелым решениям с микрофронтендами и созданию UI-кита, персонаж заложил отличную базу
          для великих свершений."
      >
        <div class="section-exp__skills">
          <UiItem v-for="item in agrocomplexSkills" :is="item" />
        </div>
      </UiAchievement>
      <UiAchievement
          :img-src="ChiefImage"
          title="Смартомато"
          time="Май 2022 — Апрель 2024 (2 года)"
          description="Этот персонаж сделал шаг в сторону Flutter-приложений, а затем погрузился в мир Vue и Nuxt. Сложности с адаптацией проекта под разные языки? Преодолены. Оптимизация стилей? Выполнена с блеском."
      >
        <div class="section-exp__skills">
          <UiItem v-for="item in smartomatoSkills" :is="item" />
        </div>
      </UiAchievement>
      <UiAchievement
          :img-src="AlienImage"
          title="Miura Tech"
          time="Ноябрь 2021 — Май 2022 (7 месяцев)"
          description="Персонаж принял вызов по переносу проекта с нативного JS на React. Здесь ей удалось не только освоить новый фреймворк, но и внедрить Material UI с магической лёгкостью."
      >
        <div class="section-exp__skills">
          <UiItem v-for="item in miuraSkills" :is="item" />
        </div>
      </UiAchievement>
    </div>
  </div>
</template>

<script setup lang="ts">
import UiItem from "@/components/ui/UiItem.vue";
import UiHeader from "@/components/ui/UiHeader.vue";
import UiAchievement from "@/components/ui/UiAchievement.vue";
import PlantImage from "@/assets/images/plant.webp";
import ChiefImage from "@/assets/images/chief.png";
import AlienImage from "@/assets/images/alien.webp";
import { ITEM_NAME, ItemTypes } from "@/utils/common";

const agrocomplexSkills: ItemTypes[] = [ITEM_NAME.ts, ITEM_NAME.vue, ITEM_NAME.nuxt, ITEM_NAME.pinia, ITEM_NAME.scss];
const smartomatoSkills: ItemTypes[] = [ITEM_NAME.js, ITEM_NAME.ts, ITEM_NAME.vue, ITEM_NAME.nuxt, ITEM_NAME.pinia, ITEM_NAME.scss];
const miuraSkills: ItemTypes[] = [ITEM_NAME.js, ITEM_NAME.ts, ITEM_NAME.react, ITEM_NAME.redux, ITEM_NAME.scss];
</script>

<style lang="scss" scoped>
.section-exp {
  &__skills {
    display: flex;
    gap: 4px;
  }
}
</style>