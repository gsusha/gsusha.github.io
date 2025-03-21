<template>
  <div class="ui-achievement">
    <div class="ui-achievement__image">
      <img :src="imgSrc" alt="" />
    </div>
    <div class="ui-achievement__text-title">{{ title }}</div>
    <div class="ui-achievement__text-period">{{ period }}</div>
    <div class="ui-achievement__text-description">{{ description }}</div>
    <div class="ui-achievement__additional">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface UiAchievementProps {
  imgSrc: string;
  title: string;
  period: string;
  description: string;
}

defineProps<UiAchievementProps>();
</script>

<style lang="scss" scoped>
@use '@/assets/styles/media' as media;

.ui-achievement {
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-template-rows: auto auto auto auto;
  gap: 10px 20px;
  align-items: start;

  border: 1px solid #eeeeee;
  border-radius: 4px;
  padding: 20px;

  &__image {
    width: 150px;
    height: 150px;
    background: #EFE5B0;
    padding: 40px;
    position: relative;
    grid-column: 1;
    grid-row: 1 / span 4;

    border-radius: 10px;

    img {
      position: relative;
      z-index: 1;
      max-width: 100%;

      &:hover {
        animation: bounceImg 0.2s ease-out;
      }
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      background: url("@/assets/images/lines-bg.svg") no-repeat center center;
    }
  }

  &__text-title {
    color: var(--color-text-primary);
    font-weight: 600;
    font-size: 18px;
    grid-column: 2;
    grid-row: 1;
  }

  &__text-period {
    font-size: 12px;
    opacity: 0.6;
    grid-column: 2;
    grid-row: 2;
  }

  &__text-description {
    color: var(--color-text-secondary);
    font-weight: 600;
    font-size: 12px;
    line-height: 1.2;
    grid-column: 2;
    grid-row: 3;
  }

  &__additional {
    grid-column: 2;
    grid-row: 4;
  }

  @include media.max('md') {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__image {
      width: 100px;
      height: 100px;
      padding: 20px;
      margin-bottom: 10px;
    }

    &__text-title {
      text-align: center;
    }

    &__text-period {
      text-align: center;
      margin-bottom: 10px;
    }

    &__text-description {
      text-align: center;
      margin-bottom: 20px;
    }
  }
}
</style>
