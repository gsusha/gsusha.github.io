<template>
  <div class="ui-header">
    <h2 class="ui-header__title">
      <slot />
    </h2>
    <h3 v-if="$slots.subtitle" class="ui-header__subtitle">
      <slot name="subtitle" />
    </h3>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/media' as media;

.ui-header {
  text-align: center;
  font-weight: 600;

  margin-bottom: 40px;

  &__title {
    font-size: 24px;
    color: var(--color-text-primary);
  }

  &__subtitle {
    font-size: 16px;
    color: var(--color-text-secondary);
    margin-top: 10px;
  }

  @include media.max('md') {
    &__title {
      font-size: 20px;
    }

    &__subtitle {
      font-size: 14px;
    }
  }
}
</style>
<script setup lang="ts">
</script>