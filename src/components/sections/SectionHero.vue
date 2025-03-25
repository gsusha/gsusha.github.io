<template>
  <div class="section-hero">
    <div class="section-hero__content">
      <FeatureAboutCard class="section-hero__card" />
      <FeatureSkills class="section-hero__skills" />
      <FeatureCharacter class="section-hero__model" />
    </div>
    <div class="section-hero__overlap">
      <div class="section-hero__overlap-group">
        <div class="section-hero__overlap-group-ellipse section-hero__overlap-group-ellipse-0" />
        <div class="section-hero__overlap-group-ellipse section-hero__overlap-group-ellipse-1" />
        <div class="section-hero__overlap-group-ellipse section-hero__overlap-group-ellipse-2" />
        <div class="section-hero__overlap-group-ellipse section-hero__overlap-group-ellipse-3" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import FeatureCharacter from "@/components/features/FeatureCharacter.vue";
import FeatureSkills from "@/components/features/FeatureSkills.vue";
import FeatureAboutCard from "@/components/features/FeatureAboutCard.vue";
</script>

<style lang="scss">
@use '@/assets/styles/media' as media;

.section-hero {
  position: relative;
  height: 100vh;

  &__content {
    position: relative;
    z-index: 1;
    min-height: 100vh;
  }

  &__skills {
    position: absolute;
    top: 200px;
    left: 50px;
  }

  &__card {
    position: absolute;
    top: 50%;
    right: 10%;

    width: 520px;

    transform: translate(0, -50%);
  }

  &__model {
    position: absolute;
    bottom: 0;
    height: 100%;
  }

  @include media.max('lg') {
    &__content {
      min-height: unset;
      display: flex;
      flex-direction: column;
      align-items: center;

      padding-top: 210px;
    }

    &__skills {
      top: 150px;
      left: 50%;

      transform: translateX(-50%);

      order: 1;
    }

    &__card {
      position: relative;
      top: unset;
      right: unset;
      transform: unset;
      margin-bottom: 60px;

      max-width: 80%;

      order: 3;
    }

    &__model {
      position: relative;
      height: 90vh;
      order: 2;
    }
  }

  @include media.max('sm') {
    &__card {
      max-width: calc(100% - 60px);
      margin-bottom: 30px;
    }
  }

  // градиентный фон
  &__overlap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &-group {
      position: relative;

      &-ellipse {
        pointer-events: none;
      }

      &-ellipse-0 {
        background-color: #4ecd9b;
        border-radius: 291.23px/456.01px;
        filter: blur(410px);
        height: 912px;
        right: 10%;
        position: absolute;
        top: 0;
        transform: rotate(-27.02deg);
        width: 582px;
      }

      &-ellipse-1 {
        background-color: #4a8fda;
        border-radius: 291.23px/456.01px;
        filter: blur(410px);
        height: 912px;
        left: 24%;
        position: absolute;
        top: 30%;
        transform: rotate(30deg);
        width: 582px;
      }

      &-ellipse-2 {
        background: radial-gradient(50% 50% at 50% 50%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%);
        border-radius: 648.93px/644.35px;
        filter: blur(210px);
        height: 1289px;
        left: 50%;
        position: absolute;
        top: 50%;
        width: 1298px;

        transform: translate(-50%, 0);
      }

      &-ellipse-3 {
        background: linear-gradient(180deg, rgb(46, 109, 179) 0%, rgb(49, 144, 140) 100%);
        border-radius: 1198.15px/224.81px;
        filter: blur(500px);
        height: 450px;
        left: 50%;
        position: absolute;
        bottom: 0;
        width: 140%;

        transform: translate(-50%, 300%);
      }
    }
  }
}
</style>