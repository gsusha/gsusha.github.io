<template>
  <div :class="[
      'ui-hexagon',
      `ui-hexagon--size-${size}`,
      `ui-hexagon--type-${type}`,
      `ui-hexagon--state-${state}`,
      ]">
    <div class="ui-hexagon__content">
      <img :src="imgSrc" alt="" />
      <div class="ui-hexagon__background">
        <img :src="backgroundSrc" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import HexagonHorizontalImage from '@/assets/images/hexagon-horizontal.svg';
import HexagonHorizontalGoldImage from '@/assets/images/hexagon-horizontal.svg';
import HexagonVerticalImage from '@/assets/images/hexagon-vertical.svg';
import HexagonVerticalGoldImage from '@/assets/images/hexagon-vertical-gold.svg';
import HexagonVerticalSpecialImage from '@/assets/images/hexagon-vertical-premium.svg';

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

.ui-hexagon {
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

      img {
        width: 50%;
        height: 50%;
      }
    }

    &-big {
      width: 100px;
      height: 110px;

      img {
        width: 70%;
        height: 70%;
      }
    }
  }

  &__content {
    max-width: 100%;
    max-height: 100%;

    img {
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

    img {
      width: 100%;
      height: 100%;
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