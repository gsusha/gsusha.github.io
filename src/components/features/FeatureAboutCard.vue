<template>
  <UiCard class="feature-about-card">
    <template #title>
      Я Frontend-разработчик 🚀
    </template>

    <div class="feature-about-card__content">
      <div class="feature-about-card__cv">
        <img src="@/assets/images/me.svg" alt="Резюме"/>
      </div>

      <div class="feature-about-card__description">
        Привет! 👋 У меня 3+ года опыта, люблю Vue 3, TypeScript, Nuxt 3 и всё, что делает веб лучше.
        Работаю в команде, решаю задачи, пишу чистый код.
        Давай создавать крутые проекты вместе!
      </div>
    </div>

    <UiButton>Захантить</UiButton>
  </UiCard>
</template>

<script lang="ts" setup>
import UiCard from "@/components/ui/UiCard.vue";
import UiButton from "@/components/ui/UiButton.vue";
</script>

<style lang="scss" scoped>
.feature-about-card {
  &__cv {
    min-width: fit-content;
    width: 130px;
    height: 130px;
  }

  &__content {
    display: flex;
    gap: 20px;
    margin-bottom: 10px;
  }

  &__description {
    margin-bottom: 20px;
  }
}
</style>