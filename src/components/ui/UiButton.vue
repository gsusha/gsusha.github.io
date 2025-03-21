<template>
  <a class="ui-button" :href="href" :target="target">
    <slot />
  </a>
</template>

<script lang="ts" setup>
interface UiButtonProps {
  href?: string;
  target?: string;
}

defineProps<UiButtonProps>();
</script>

<style lang="scss" scoped>
@use '@/assets/styles/media' as media;

.ui-button {
  display: block;
  width: fit-content;

  border-radius: 30px;
  border: 2px solid #eeeeee;

  padding: 8px 20px;

  text-align: center;
  font-weight: 600;
  font-size: 16px;

  cursor: pointer;

  color: var(--color-text-primary);
  background: #ffffff;

  @include media.max('sm') {
    font-size: 14px;
  }
}
</style>