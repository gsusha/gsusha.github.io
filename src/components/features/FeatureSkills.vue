<template>
  <div class="feature-skills">
    <UiHexagon
        v-hint="'Vue 3'"
        class="feature-skills__skill feature-skills__skill--vue"
        size="big"
        type="vertical"
        border="gold"
        :img-src="PixelVueImage"
    />

    <UiHexagon
        v-hint="'TypeScript'"
        class="feature-skills__skill feature-skills__skill--ts"
        :img-src="PixelTsImage"
        type="vertical"
        border="gold"
    />

    <div class="feature-skills__row">
      <UiHexagon
          v-hint="'Nuxt 3'"
          class="feature-skills__skill feature-skills__skill--nuxt"
          :img-src="PixelNuxtImage"
      />
      <UiHexagon
          v-hint="'Pinia'"
          class="feature-skills__skill feature-skills__skill--pinia"
          :img-src="PixelPiniaImage"
      />
      <UiHexagon
          v-hint="'SCSS'"
          class="feature-skills__skill feature-skills__skill--sass"
          :img-src="PixelSassImage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import UiHexagon from "@/components/ui/UiHexagon.vue";
import PixelVueImage from "@/assets/images/icons/pixel-vue.png";
import PixelTsImage from "@/assets/images/icons/pixel-ts.png";
import PixelNuxtImage from "@/assets/images/icons/pixel-nuxt.png";
import PixelPiniaImage from "@/assets/images/icons/pixel-pinia.png";
import PixelSassImage from "@/assets/images/icons/pixel-sass.png";
</script>

<style lang="scss" scoped>
.feature-skills {
  &__row {
    position: absolute;
    top: 20px;
    left: 120px;
  }

  &__skill {
    position: relative;

    &--vue {
      position: relative;
    }

    &--ts {
      position: absolute;
      top: -41px;
      left: 58px;
    }

    &--pinia {
      position: absolute;
      top: 32px;
      left: 54px;
    }

    &--sass {
      position: absolute;
      top: 0;
      left: 108px;
    }
  }

  &::before {
    content: '';

    position: absolute;
    top: calc(50% - 4px);
    left: 90px;

    width: 36px;
    height: 4px;
    background: linear-gradient(
            90deg,
            rgb(225, 185, 105) 0%,
            rgba(255, 255, 255, 0.6) 100%
    );

    z-index: -1;

    clip-path: polygon(0 0, 96% 0, 89% 100%, 0% 100%);
  }

  &::after {
    content: '';

    position: absolute;
    top: calc(50% + 4px);
    left: 90px;

    width: 36px;
    height: 4px;
    background: linear-gradient(
            90deg,
            rgb(225, 185, 105) 0%,
            rgba(255, 255, 255, 0.6) 100%
    );

    clip-path: polygon(0 0, 91% 0, 98% 100%, 0% 100%);

    z-index: -1;
  }
}
</style>