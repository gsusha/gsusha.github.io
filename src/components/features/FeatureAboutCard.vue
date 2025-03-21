<template>
  <div class="feature-about-card">
    <div class="feature-about-card__title">
      Я Frontend-разработчик 🚀
    </div>

    <div class="feature-about-card__description">
      Привет! 👋 У меня 3+ года опыта, люблю Vue 3, TypeScript, Nuxt 3 и всё, что делает веб лучше.
      Работаю в команде, решаю задачи, пишу чистый код.
      Давай создавать крутые проекты вместе!
    </div>

    <UiButton @click="gravityScroll">Захантить</UiButton>
  </div>
</template>

<script lang="ts" setup>
import UiButton from "@/components/ui/UiButton.vue";

const gravityScroll = () => {
  let start: number | null = null;
  let velocity = 0;
  const gravity = 2;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  const animate = (timestamp: number) => {
    if (start === null) start = timestamp;

    velocity += gravity;
    window.scrollBy(0, velocity);

    if (window.scrollY < maxScroll) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};
</script>

<style lang="scss" scoped>
@use '@/assets/styles/media' as media;

.feature-about-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  background: #ffffff;
  border-radius: 20px;
  padding: 20px;

  &__title {
    font-size: 20px;
    font-weight: 600;
    color: var(--color-text-primary);

    line-height: 1.2;

    text-align: center;
  }

  &__description {
    font-size: 16px;
    line-height: 1.4;
  }

  @include media.max('sm') {
    &__description {
      font-size: 14px;
      text-align: center;
    }
  }
}
</style>