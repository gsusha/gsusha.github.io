<template>
  <div class="section-hero">
    <div class="section-hero__content">
      <FeatureSkills class="section-hero__skills" />
      <FeatureCharacter class="section-hero__model" />
      <FeatureAboutCard class="section-hero__card" />
    </div>
    <div class="section-hero__overlap">
      <div class="section-hero__overlap-group">
        <div class="section-hero__overlap-group-ellipse section-hero__overlap-group-ellipse-0" />
        <div class="section-hero__overlap-group-ellipse section-hero__overlap-group-ellipse-1" />
        <div class="section-hero__overlap-group-ellipse section-hero__overlap-group-ellipse-2" />
        <div class="section-hero__overlap-group-ellipse section-hero__overlap-group-ellipse-3" />
        <div class="section-hero__overlap-group-ellipse section-hero__overlap-group-ellipse-4" />
        <div class="section-hero__overlap-group-ellipse section-hero__overlap-group-ellipse-5" />
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
.section-hero {
  //background-size: cover;
  //background: radial-gradient(circle, #48d7ff 0%, #0099cc 50%, #006688 100%) no-repeat;

  position: relative;

  &__content {
    position: relative;
    z-index: 1;
    min-height: 100vh;
  }

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

      // подложка
      //&-ellipse-4 {
      //  background: radial-gradient(50% 50% at 50% 50%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%);
      //  border-radius: 602.73px/44.56px;
      //  filter: blur(110px);
      //  height: 89px;
      //  left: 625px;
      //  position: absolute;
      //  top: 1127px;
      //  width: 1205px;
      //}

      //&-ellipse-5 {
      //  background: linear-gradient(180deg, rgb(56, 114, 187) 0%, rgb(143, 189, 207) 49.43%, rgb(61, 165, 128) 100%);
      //  border-radius: 960px/90.88px;
      //  filter: blur(130px);
      //  height: 182px;
      //  left: 267px;
      //  position: absolute;
      //  top: 812px;
      //  width: 1920px;
      //}
    }
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
}
</style>