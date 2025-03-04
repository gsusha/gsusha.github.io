<template>
  <div :class="[
      'ui-hexagon',
      `ui-hexagon--size-${size}`,
      `ui-hexagon--type-${type}`,
      `ui-hexagon--state-${state}`,
      ]">
    <div class="ui-hexagon__content">
      <img :src="imgSrc" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface UiHexagonProps {
  imgSrc?: string;
  size?: 'medium' | 'big';
  type?: 'horizontal' | 'vertical';
  state?: 'default' | 'gold' | 'special';
}

withDefaults(defineProps<UiHexagonProps>(), {
  size: 'medium',
  type: 'horizontal',
  state: 'default',
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

  &:hover {
    filter: brightness(110%);
    cursor: pointer;

    img {
      animation: bounceImg 0.2s ease-out;
    }
  }
}

// в данном случае никакой практической пользы в использовании этой конструкции нет,
// я просто показываю, что могу делать приколы на scss

$types: (
    'horizontal': (
        'default': (
            background: url("src/assets/images/icons/hexagon-horizontal.svg"),
        ),
        'gold': (
            background: url("src/assets/images/icons/hexagon-horizontal-gold.svg"),
        ),
    ),
    'vertical': (
        'default': (
            background: url("src/assets/images/icons/hexagon-vertical.svg"),
        ),
        'gold': (
            background: url("src/assets/images/icons/hexagon-vertical-gold.svg"),
        ),
        'special': (
            background: url("src/assets/images/icons/hexagon-vertical-premium.svg"),
        ),
    ),
);

@each $type-key, $type-states in $types {
  #{$block}--type-#{$type-key} {
    @each $state, $state-value in $type-states {
      &#{$block}--state {
        &-#{$state} {
          background: map.get($state-value, background) no-repeat center / cover;
        }
      }
    }
  }
}
</style>