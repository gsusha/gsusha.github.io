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
.ui-header {
  text-align: center;
  font-weight: 600;
  font-family: var(--font-family--secondary), sans-serif;

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
}
</style>
<script setup lang="ts">
</script>