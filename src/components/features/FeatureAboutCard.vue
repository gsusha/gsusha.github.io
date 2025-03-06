<template>
  <UiCard class="feature-about-card">
    <template #title>
      Я Frontend-разработчик 🚀
    </template>

    <div class="feature-about-card__description">
      Привет! 👋 У меня 3+ года опыта, люблю Vue 3, TypeScript, Nuxt 3 и всё, что делает веб лучше.
      Работаю в команде, решаю задачи, пишу чистый код. Давай создавать крутые проекты вместе!
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

  &__description {
    margin-bottom: 30px;
  }
}
</style>