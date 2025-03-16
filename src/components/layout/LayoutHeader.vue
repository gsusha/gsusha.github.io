<template>
  <header class="layout-header">
    <div class="layout-header__name">
      Ксения Дьяченко
    </div>
  </header>
</template>

<script lang="ts" setup>  </script>

<style lang="scss">
@use '@/assets/styles/media' as media;

.layout-header {
  display: flex;
  justify-content: space-between;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  z-index: 1;

  &__name {
    display: flex;
    align-items: center;
    justify-content: center;

    background: #ffffff;
    color: var(--color-text-primary);
    font-weight: 600;
    font-size: 20px;

    border-radius: 0 0 50px 0;

    height: 60px;
    width: 340px;
  }
}
</style>