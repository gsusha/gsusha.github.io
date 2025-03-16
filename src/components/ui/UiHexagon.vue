<template>
  <div :class="[
      'ui-hexagon',
      `ui-hexagon--size-${size}`,
      `ui-hexagon--type-${type}`,
      `ui-hexagon--state-${state}`,
      ]">
    <div class="ui-hexagon__content">
      <img class="ui-hexagon__content-img" :src="imgSrc" alt=""/>
      <div class="ui-hexagon__background">
        <img class="ui-hexagon__background-img" :src="backgroundSrc" alt=""/>
      </div>
      <div v-if="state === 'special'" class="ui-hexagon__sparkles">
        <div v-for="_item in 4" :key="generateRandomId('sparkle')" class="ui-hexagon__sparkle">
          <img class="ui-hexagon__sparkle-img" src="@/assets/images/icons/star.svg" alt=""/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import HexagonHorizontalImage from '@/assets/images/hexagon-horizontal.svg';
import HexagonHorizontalGoldImage from '@/assets/images/hexagon-horizontal.svg';
import HexagonVerticalImage from '@/assets/images/hexagon-vertical.svg';
import HexagonVerticalGoldImage from '@/assets/images/hexagon-vertical-gold.svg';
import HexagonVerticalSpecialImage from '@/assets/images/hexagon-vertical-premium.svg';
import {generateRandomId} from "@/utils/common";

interface UiHexagonProps {
  imgSrc?: string;
  size?: 'medium' | 'big';
  type?: 'horizontal' | 'vertical';
  state?: 'default' | 'gold' | 'special';
}

const props = withDefaults(defineProps<UiHexagonProps>(), {
  size: 'medium',
  type: 'horizontal',
  state: 'default',
});

// TODO: переделать? не нравится
const backgroundSrc = computed(() => {
  if (props.type === 'vertical') {

    if (props.state === 'gold') {
      return HexagonVerticalGoldImage;
    }

    if (props.state === 'special') {
      return HexagonVerticalSpecialImage;
    }

    return HexagonVerticalImage;
  }

  if (props.state === 'gold') {
    return HexagonHorizontalGoldImage;
  }

  return HexagonHorizontalImage;
});
</script>

<style lang="scss" scoped>
@use 'sass:map';

$block: '.ui-hexagon';

@keyframes sparkle {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
}

#{$block} {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  position: relative;

  transition: filter .1s ease-in-out;
  will-change: filter;

  &--size {
    &-medium {
      width: 70px;
      height: 72px;

      #{$block}__content-img {
        width: 50%;
        height: 50%;
      }
    }

    &-big {
      width: 100px;
      height: 110px;

      #{$block}__content-img {
        width: 70%;
        height: 70%;
      }
    }
  }

  &__content {
    max-width: 100%;
    max-height: 100%;

    &-img {
      object-fit: cover;
    }
  }

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &__sparkle {
    position: absolute;
    width: 12px;
    height: 12px;

    opacity: 0;
    animation: sparkle 2s infinite ease-in-out;

    &:nth-child(1) {
      top: 30%;
      left: 16%;
      animation-delay: 1s;

      width: 10px;
      height: 10px;
    }

    &:nth-child(2) {
      width: 8px;
      height: 8px;
      top: 40%;
      right: 5%;
      animation-delay: 3s;
    }

    &:nth-child(3) {
      width: 6px;
      height: 6px;

      bottom: 20%;
      left: 30%;
      animation-delay: 1.5s;
    }

    &:nth-child(4) {
      bottom: 10%;
      right: 20%;
      animation-delay: 2s;
    }
  }

  &:hover {
    filter: brightness(110%);

    img {
      animation: bounceImg 0.2s ease-out;
    }
  }
}
</style>