<template>
  <div class="ui-achievement">
    <div class="ui-achievement__image">
      <img :src="imgSrc" alt="" />
    </div>
    <div class="ui-achievement__content">
      <div class="ui-achievement__text">
        <div class="ui-achievement__text-header">
          <div class="ui-achievement__text-title">{{ title }}</div>
          <div class="ui-achievement__text-time">{{ time }}</div>
        </div>
        <div class="ui-achievement__text-description">{{ description }}</div>
      </div>
      <div class="ui-achievement__additional">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface UiAchievementProps {
  imgSrc: string;
  title: string;
  time: string;
  description: string;
}

defineProps<UiAchievementProps>();
</script>

<style lang="scss" scoped>
.ui-achievement {
  display: flex;

  border: 1px solid #eeeeee;
  border-radius: 4px;

  &__image {
    width: 150px;
    height: 150px;
    background: #EFE5B0;

    padding: 40px;

    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;

      position: relative;
      z-index: 1;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url("@/assets/images/lines-bg.svg") no-repeat center center;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;

    padding: 20px 20px 10px 20px;
  }

  &__text {
    &-header {
      display: flex;
      justify-content: space-between;
    }

    &-title {
      color: var(--color-text-primary);
      font-weight: 600;
      font-size: 18px;
      margin-bottom: 10px;
    }

    &-time {
      font-size: 12px;
      opacity: 0.6;
    }

    &-description {
      color: var(--color-text-secondary);
      font-weight: 600;
      font-size: 12px;
      line-height: 1.2;
    }
  }
}
</style>