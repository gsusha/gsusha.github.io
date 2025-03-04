<template>
  <div class="ui-card">
    <div v-if="$slots.title || $slots.subtitle" class="ui-card__header">
      <div v-if="$slots.title" class="ui-card__header-title">
        <slot name="title" />
      </div>
      <div v-if="$slots.subtitle" class="ui-card__header-subtitle">
        <slot name="subtitle" />
      </div>
    </div>
    <div class="ui-card__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ui-card {
  display: flex;
  flex-direction: column;
  gap: 20px;

  background: #ffffff;
  border-radius: 20px;
  padding: 20px;

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 4px;

    &-title {
      font-family: var(--font-family-secondary), sans-serif;
      font-size: 24px;
      font-weight: 700;
      color: var(--color-text-primary);

      line-height: 1.2;

      text-align: center;
    }

    &-subtitle {
      color: var(--color-text-secondary);
      text-align: center;

      font-size: 18px;
    }
  }

  &__content {
    font-size: 16px;
    line-height: 1.4;
  }
}
</style>
<script setup lang="ts">
</script>