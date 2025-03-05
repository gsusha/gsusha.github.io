<template>
  <div class="section-exp">
    <UiHeader>Карьера и достижения 🏆</UiHeader>
    <div class="section-exp__content">
      <UiAchievement
          :img-src="PlantImage"
          title="Фирма 'Агрокомплекс' им. Н.И. Ткачева"
          time="Апрель 2024 — Январь 2025 (10 месяцев)"
          description="Сложная миссия с крупным сервисом для B2B-продаж. Этот проект стал настоящим испытанием,
          но благодаря смелым решениям с микрофронтендами и созданию UI-кита, персонаж довёл проект до
          успешного завершения."
      >
        <div class="section-exp__skills">
          <div v-popover="{ title: 'TypeScript' }" class="section-exp__skills-item">
            <img src="@/assets/images/icons/pixel-ts.png" alt="TypeScript" />
          </div>
          <div v-popover="{ title: 'Vue 3' }" class="section-exp__skills-item">
            <img src="@/assets/images/icons/pixel-vue.png" alt="Vue 3" />
          </div>
          <div v-popover="{ title: 'Nuxt 3' }" class="section-exp__skills-item">
            <img src="@/assets/images/icons/pixel-nuxt.png" alt="Nuxt 3" />
          </div>
          <div v-popover="{ title: 'Pinia' }" class="section-exp__skills-item">
            <img src="@/assets/images/icons/pixel-pinia.png" alt="Pinia" />
          </div>
          <div v-popover="{ title: 'SCSS' }" class="section-exp__skills-item">
            <img src="@/assets/images/icons/pixel-sass.png" alt="Pinia" />
          </div>
        </div>
      </UiAchievement>
      <UiAchievement
          :img-src="ChiefImage"
          title="Смартомато"
          time="Май 2022 — Апрель 2024 (2 года)"
          description="Этот персонаж сделал шаг в сторону Flutter-приложений, а затем погрузился в мир Vue и Nuxt. Сложности с адаптацией проекта под разные языки? Преодолены. Оптимизация стилей? Выполнена с блеском."
      >
        <div class="section-exp__skills">
          <div v-popover="{ title: 'JavaScript' }" class="section-exp__skills-item">
            <img src="@/assets/images/icons/pixel-js.png" alt="JavaScript" />
          </div>
          <div v-popover="{ title: 'TypeScript' }" class="section-exp__skills-item">
            <img src="@/assets/images/icons/pixel-ts.png" alt="TypeScript" />
          </div>
          <div v-popover="{ title: 'Vue 3' }" class="section-exp__skills-item">
            <img src="@/assets/images/icons/pixel-vue.png" alt="Vue 3" />
          </div>
          <div v-popover="{ title: 'Nuxt 3' }" class="section-exp__skills-item">
            <img src="@/assets/images/icons/pixel-nuxt.png" alt="Nuxt 3" />
          </div>
          <div v-popover="{ title: 'Pinia' }" class="section-exp__skills-item">
            <img src="@/assets/images/icons/pixel-pinia.png" alt="Pinia" />
          </div>
          <div v-popover="{ title: 'SCSS' }" class="section-exp__skills-item">
            <img src="@/assets/images/icons/pixel-sass.png" alt="Pinia" />
          </div>
        </div>
      </UiAchievement>
      <UiAchievement
          :img-src="AlienImage"
          title="Miura Tech"
          time="Ноябрь 2021 — Май 2022 (7 месяцев)"
          description="Персонаж принял вызов по переносу проекта с нативного JS на React. Здесь ей удалось не только освоить новый фреймворк, но и внедрить Material UI с магической лёгкостью."
      >
        <div class="section-exp__skills">
          <div v-popover="{ title: 'JavaScript' }" class="section-exp__skills-item">
            <img src="@/assets/images/icons/pixel-js.png" alt="JavaScript" />
          </div>
          <div v-popover="{ title: 'TypeScript' }" class="section-exp__skills-item">
            <img src="@/assets/images/icons/pixel-ts.png" alt="TypeScript" />
          </div>
          <div v-popover="{ title: 'React' }" class="section-exp__skills-item">
            <img src="@/assets/images/icons/pixel-react.png" alt="React" />
          </div>
          <div v-popover="{ title: 'Redux' }" class="section-exp__skills-item">
            <img src="@/assets/images/icons/pixel-redux.png" alt="Redux" />
          </div>
          <div v-popover="{ title: 'SCSS' }" class="section-exp__skills-item">
            <img src="@/assets/images/icons/pixel-sass.png" alt="Pinia" />
          </div>
        </div>
      </UiAchievement>
    </div>
  </div>
</template>

<script setup lang="ts">
import UiHeader from "@/components/ui/UiHeader.vue";
import UiAchievement from "@/components/ui/UiAchievement.vue";
import PlantImage from "@/assets/images/plant.webp";
import ChiefImage from "@/assets/images/chief.png";
import AlienImage from "@/assets/images/alien.webp";
</script>

<style lang="scss" scoped>
.section-exp {
  &__skills {
    display: flex;
    gap: 4px;

    &-item {
      width: 40px;
      height: 40px;
      padding: 10px;
      border-radius: 4px;

      background: linear-gradient(180deg, rgb(245, 248, 253) 0%, rgb(213, 228, 239) 100%);

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>