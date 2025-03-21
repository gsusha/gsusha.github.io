<template>
  <header class="layout-header">
    <div class="layout-header__name">
      <div class="layout-header__name-text">
        Ксения Дьяченко
      </div>
      <div class="layout-header__name-avatar">
        <img src="@/assets/images/me.svg" alt="Ксения Дьяченко" />
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>  </script>

<style lang="scss">
@use '@/assets/styles/media' as media;

.layout-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  z-index: 2;

  &__name {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    position: relative;

    background: #ffffff;
    color: var(--color-text-primary);

    border-radius: 0 0 50px 0;

    height: 60px;
    width: 400px;
    padding: 0 60px;

    &-text {
      color: var(--color-text-primary);
      font-weight: 600;
      font-size: 20px;
    }

    &-avatar {
      width: 100px;
      height: 100px;

      border: 4px solid #ffffff;
      border-radius: 50%;

      position: absolute;
      bottom: -50px;
      left: 30px;
    }
  }

  @include media.max('sm') {
    &__name {
      width: 100%;
      border-radius: unset;
      padding: 0 40px;
      height: 50px;

      &-text {
        font-size: 18px;
      }

      &-avatar {
        width: 80px;
        height: 80px;
        bottom: -40px;
      }
    }
  }
}
</style>