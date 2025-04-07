<template>
  <div class="feature-confetti">
    <div
        v-for="i in 30"
        :key="i"
        class="feature-confetti__piece"
        :class="`feature-confetti__piece--${i}`"
    />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
$confetti-count: 30;
$colors: #ffd300, #7431e8, red, #00c2ff, #00ff8f;

@keyframes makeItRain {
  from { opacity: 0; }
  50% { opacity: 1; }
  to { transform: translateY(100vh); }
}

.feature-confetti {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 11;
  pointer-events: none;

  &__piece {
    position: absolute;
    top: 0;
    opacity: 0;
    animation-name: makeItRain;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;

    @for $i from 1 through $confetti-count {
      $left: random(100); // процент от 0 до 100
      $rotate: random(140) - 70; // от -70 до 70 градусов
      $delay: random(500); // мс
      $duration: 800 + random(1000); // 800–1800 мс
      $width: 2 + random(8); // 2px – 10px
      $height: 10 + random(20); // 10px – 30px
      $color: nth($colors, random(length($colors)));

      &--#{$i} {
        left: percentage($left / 100);
        transform: rotate(#{$rotate}deg);
        animation-delay: #{$delay}ms;
        animation-duration: #{$duration}ms;
        width: #{$width}px;
        height: #{$height}px;
        background: #{$color};
      }
    }
  }
}

</style>
