<template>
  <div class="ui-skill">
    <div class="ui-skill__icon">
      <img :src="imgSrc" alt="" />
    </div>
    <div class="ui-skill__body">
      <div class="ui-skill__name">{{ name }}</div>
      <UiProgressBar class="ui-skill__progress" :value="level" />
    </div>
    <div class="ui-skill__level">
      {{ level }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import UiProgressBar from "@/components/ui/UiProgressBar.vue";

interface UiSkillProps {
  imgSrc: string;
  name: string;
  level: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
}

defineProps<UiSkillProps>();
</script>

<style lang="scss" scoped>
@use '@/assets/styles/media' as media;

.ui-skill {
  display: flex;
  align-items: center;

  width: 500px;
  min-height: 50px;
  border-radius: 5px;

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: #F5F5F5;

    flex: 0 0 50px;
    border-radius: 5px 0 0 5px;

    img {
      width: 30px;
      height: 30px;
    }
  }

  &__body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    width: 100%;
    height: 100%;
    background: #ffffff;
    padding: 10px;

    border-top: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
  }

  &__name {
    color: var(--color-text-secondary);
    font-weight: 600;
    word-break: break-word;
  }

  &__progress {
    flex: 0 0 90px;
  }

  &__level {
    display: flex;
    align-items: center;
    justify-content: center;

    flex: 0 0 60px;
    height: 100%;
    background: #EBEEF5;
    color: var(--color-text-secondary);
    font-weight: 600;

    border-radius: 0 5px 5px 0;
  }

  @include media.max('md') {
    width: 100%;

    &__name {
      font-size: 12px;
    }
  }

  @include media.max('sm') {
    min-height: 40px;

    &__progress {
      flex-basis: 50px;
    }

    &__level {
      flex-basis: 40px;
    }
  }
}
</style>