<template>
  <div class="feature-skills">
    <UiHexagon
        v-hint="'Vue 3'"
        class="feature-skills__skill feature-skills__skill--vue"
        size="big"
        type="vertical"
        state="special"
        :img-src="PixelVueImage"
        @click="selectTab(TAB_NAMES.vue)"
    />

    <UiHexagon
        v-hint="'TypeScript'"
        class="feature-skills__skill feature-skills__skill--ts"
        :img-src="PixelTsImage"
        type="vertical"
        state="gold"
        @click="selectTab(TAB_NAMES.ts)"
    />

    <div class="feature-skills__row">
      <UiHexagon
          v-hint="'Nuxt 3'"
          class="feature-skills__skill feature-skills__skill--nuxt"
          :img-src="PixelNuxtImage"
          @click="selectTab(TAB_NAMES.nuxt)"
      />
      <UiHexagon
          v-hint="'Pinia'"
          class="feature-skills__skill feature-skills__skill--pinia"
          :img-src="PixelPiniaImage"
          @click="selectTab(TAB_NAMES.pinia)"
      />
      <UiHexagon
          v-hint="'SCSS'"
          class="feature-skills__skill feature-skills__skill--sass"
          :img-src="PixelSassImage"
          @click="selectTab(TAB_NAMES.sass)"
      />
    </div>

    <div v-if="activeTab" class="feature-skills__info">
      <div class="feature-skills__info-title">
        О навыке
      </div>

      <div class="feature-skills__details">
        <div class="feature-skills__details-label">
          {{ activeTab.label }}
        </div>

        <div class="feature-skills__details-description">
          {{ activeTab.description }}
        </div>

        <div class="feature-skills__details-progress">
          <!-- Здесь будет прогресс-бар -->
        </div>
      </div>
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
import { ref } from "vue";

type TabType = {
  label: string;
  description: string;
}

const TAB_NAMES = {
  vue: 'vue',
  ts: 'ts',
  nuxt: 'nuxt',
  pinia: 'pinia',
  sass: 'sass',
};

const activeTab = ref<TabType | null>(null);

const tabsMap: Record<string, TabType> = {
  vue: { label: 'Vue 3', description: 'Прогрессивный фреймворк для создания интерфейсов' },
  ts: { label: 'TypeScript', description: 'Язык программирования, расширяющий JavaScript' },
  nuxt: { label: 'Nuxt 3', description: 'Фреймворк на основе Vue для SSR и SSG' },
  pinia: { label: 'Pinia', description: 'Современное хранилище состояний для Vue' },
  sass: { label: 'SCSS', description: 'Препроцессор CSS с поддержкой переменных и вложенности' },
};

const selectTab = (key: string) => {
  activeTab.value = activeTab.value?.label === tabsMap[key].label ? null : tabsMap[key];
};
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

  &__info {
    position: absolute;

    top: 130%;
    left: 0;

    width: 100%;

    &-title {
      font-size: 22px;
      color: #ffffff;
      text-align: center;
      text-shadow: -2px 1px 3px rgba(0, 0, 0, 0.5);
      margin-bottom: 20px;
    }
  }

  &__details {
    background: rgba(255, 255, 255, 0.3);
    padding: 20px;
    border-radius: 10px;

    &-label {
      font-size: 18px;
      color: #ffffff;
      text-align: center;
      text-shadow: -2px 1px 2px rgba(0, 0, 0, 0.5);
      margin-bottom: 20px;
    }
  }
}
</style>