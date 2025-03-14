<template>
  <div class="section-career">
    <UiHeader>
      <template #default>
        Карьера 🏆
      </template>

      <template #subtitle>
        Этот персонаж прошёл долгий путь и овладел искусством фронтенда, принимая сложные вызовы и создавая мощные проекты!
      </template>
    </UiHeader>
    <UiSkill class="section-career__level" :img-src="ProgrammingImage" name="Frontend-разработка" level="8" />
    <div class="section-career__content">
      <UiAchievement
          class="section-career__company"
          v-for="company in companies"
          :key="generateRandomId('company')"
          :img-src="company.image"
          :title="company.name"
          :period="company.period"
          :description="company.description"
      >
        <div class="section-career__skills">
          <UiItem v-for="item in company.skills" :key="generateRandomId('company-skill')" :is="item" />
        </div>
      </UiAchievement>
    </div>
  </div>
</template>

<script setup lang="ts">
import UiItem from "@/components/ui/UiItem.vue";
import UiHeader from "@/components/ui/UiHeader.vue";
import UiSkill from "@/components/ui/UiSkill.vue";
import UiAchievement from "@/components/ui/UiAchievement.vue";
import WheatImage from "@/assets/images/icons/wheat.svg";
import TomatoImage from "@/assets/images/icons/tomato.svg";
import AlienImage from "@/assets/images/icons/alien.svg";
import ProgrammingImage from '@/assets/images/icons/programming.png';
import {generateRandomId, ITEM_NAME, ItemTypes} from "@/utils/common";

const agrocomplexSkills: ItemTypes[] = [ITEM_NAME.ts, ITEM_NAME.vue, ITEM_NAME.nuxt, ITEM_NAME.pinia, ITEM_NAME.scss];
const smartomatoSkills: ItemTypes[] = [ITEM_NAME.js, ITEM_NAME.ts, ITEM_NAME.vue, ITEM_NAME.nuxt, ITEM_NAME.pinia, ITEM_NAME.scss];
const miuraSkills: ItemTypes[] = [ITEM_NAME.js, ITEM_NAME.ts, ITEM_NAME.react, ITEM_NAME.redux, ITEM_NAME.scss];

const companies = [
  {
    image: WheatImage,
    name: 'Фирма \'Агрокомплекс\' им. Н.И. Ткачева',
    period: 'Апрель 2024 — Январь 2025 (10 месяцев)',
    description: 'Сложная миссия с крупным сервисом для B2B-продаж. Этот проект стал настоящим испытанием, ' +
        'но благодаря смелым решениям с микрофронтендами и созданию UI-кита, персонаж заложил отличную базу ' +
        'для великих свершений.',
    skills: agrocomplexSkills,
  },
  {
    image: TomatoImage,
    name: 'Смартомато',
    period: 'Май 2022 — Апрель 2024 (2 года)',
    description: 'Этот персонаж сделал шаг в сторону Flutter-приложений, а затем погрузился в мир Vue и Nuxt. Сложности с адаптацией проекта под разные языки? Преодолены. Оптимизация стилей? Выполнена с блеском.',
    skills: smartomatoSkills,
  },
  {
    image: AlienImage,
    name: 'Miura Tech',
    period: 'Ноябрь 2021 — Май 2022 (7 месяцев)',
    description: 'Персонаж принял вызов по переносу проекта с нативного JS на React. Здесь ей удалось не только освоить новый фреймворк, но и внедрить Material UI с магической лёгкостью.',
    skills: miuraSkills,
  },
]
</script>

<style lang="scss" scoped>
.section-career {
  display: flex;
  flex-direction: column;

  &__level {
    align-self: center;
    margin-bottom: 40px;
  }

  &__skills {
    display: flex;
    gap: 4px;
  }

  &__company {
    border-radius: 0;

    &:first-child {
      border-radius: 5px 5px 0 0;
      border-bottom: none;
    }

    &:last-child {
      border-radius: 0 0 5px 5px;
      border-top: none;
    }
  }
}
</style>