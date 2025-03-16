<template>
  <div class="feature-skills">
    <UiHexagon
        v-popover="{ title: 'Мастер Vue 3', content: 'Этот персонаж — истинный маг в использовании Vue 3! Она с лёгкостью создаёт динамичные интерфейсы, подстраиваясь под любые задачи и эффективно применяя Composition API для суперорганизованного кода.' }"
        class="feature-skills__skill feature-skills__skill--vue"
        size="big"
        type="vertical"
        state="special"
        :img-src="PixelVueImage"
    />

    <UiHexagon
        v-popover="{ title: 'Профи TypeScript', content: 'Этот персонаж не терпит ошибок. Он всегда находит типы и создаёт структуру, которая идеально вписывается в любой проект. Благодаря её опыту в TypeScript, приложение всегда работает без сбоев.' }"
        class="feature-skills__skill feature-skills__skill--ts"
        :img-src="PixelTsImage"
        type="vertical"
        state="gold"
    />

    <div class="feature-skills__row">
      <UiHexagon
          v-popover="{ title: 'Гуру Nuxt 3', content: 'Как и любой стратег, этот персонаж всегда знает, как построить проект с нуля и сделать его максимально быстрым и надёжным. Nuxt 3 — её любимый инструмент для создания сервер-сайд рендеринга с лёгкостью.' }"
          class="feature-skills__skill feature-skills__skill--nuxt"
          :img-src="PixelNuxtImage"
      />
      <UiHexagon
          v-popover="{ title: 'Секретный агент Pinia', content: 'Как настоящий агент, она всегда точно знает, как управлять состоянием проекта, создавая чистый и понятный код с помощью Pinia.' }"
          class="feature-skills__skill feature-skills__skill--pinia"
          :img-src="PixelPiniaImage"
      />
      <UiHexagon
          v-popover="{ title: 'Чародей SCSS', content: 'Этот персонаж — волшебник CSS. Она строит стильные и адаптивные интерфейсы с использованием SCSS, создавая креативные и сложные стили, которые идеально подходят под любые устройства.' }"
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
  width: 306px;

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
}
</style>