<template>
  <a :href="href"
     :class="[
         'ui-button',
         `ui-button--type-${type}`
         ]"
  >
    <slot />
  </a>
</template>

<script lang="ts" setup>
interface UiButtonProps {
  href?: string;
  target?: string;
  type?: 'primary' | 'outline';
}

withDefaults(defineProps<UiButtonProps>(), {
  type: 'outline',
});
</script>

<style lang="scss" scoped>
.ui-button {
  display: block;
  width: fit-content;

  border-radius: 30px;
  border: 2px solid transparent;

  padding: 8px 20px;

  text-align: center;
  font-weight: 600;
  font-size: 16px;

  cursor: pointer;

  &--type {
    // TODO: не нравится
    &-primary {
      color: #ffffff;
      background: var(--color-text-primary);
    }

    &-outline {
      border-color: #eeeeee;
      color: var(--color-text-primary);
      background: #ffffff;
    }
  }
}
</style>