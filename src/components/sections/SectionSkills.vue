<template>
  <div class="section-skills">
    <UiHeader>
      <template #default>
        Навыки 🛠️
      </template>

      <template #subtitle>
        Каждое изученное умение — это новый бонус к эффективности! Эти навыки помогают мне побеждать баги и писать чистый код.
      </template>
    </UiHeader>
    <div class="section-skills__grid">
      <UiSkill v-for="skill in skills"
               :key="generateRandomId('skill')"
               class="section-skills__grid-item"
               :img-src="skill.imgSrc"
               :name="skill.name"
               :level="skill.level"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import UiHeader from "@/components/ui/UiHeader.vue";
import UiSkill from "@/components/ui/UiSkill.vue";
import TsImage from '@/assets/images/icons/pixel-ts.webp';
import JsImage from '@/assets/images/icons/pixel-js.webp';
import VueImage from '@/assets/images/icons/pixel-vue.webp';
import NuxtImage from '@/assets/images/icons/pixel-nuxt.webp';
import PiniaImage from '@/assets/images/icons/pixel-pinia.webp';
import SassImage from '@/assets/images/icons/pixel-sass.webp';
import TestImage from '@/assets/images/icons/pixel-test.webp';
import DockerImage from '@/assets/images/icons/pixel-docker.webp';
import StorybookImage from '@/assets/images/icons/pixel-storybook.webp';
import AnimationImage from '@/assets/images/icons/pixel-animation.webp';
import DocumentImage from '@/assets/images/icons/pixel-document.webp';
import PinImage from '@/assets/images/icons/pixel-pin.webp';
import RequestImage from '@/assets/images/icons/pixel-request.webp';
import LighthouseImage from '@/assets/images/icons/pixel-lighthouse.webp';
import PullRequestImage from '@/assets/images/icons/pixel-pr.webp';
import KissImage from '@/assets/images/icons/pixel-kiss.webp';
import { generateRandomId } from "@/utils/common";

type SkillType = {
  imgSrc: string;
  name: string;
  level: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
}

const skills: SkillType[] = [
  {
    imgSrc: JsImage,
    name: 'JavaScript (ES6+)',
    level: '7',
  },
  {
    imgSrc: TsImage,
    name: 'TypeScript',
    level: '6',
  },
  {
    imgSrc: VueImage,
    name: 'Vue 3',
    level: '7',
  },
  {
    imgSrc: NuxtImage,
    name: 'Nuxt 3, SSR',
    level: '6',
  },
  {
    imgSrc: PiniaImage,
    name: 'Управление состоянием',
    level: '7',
  },
  {
    imgSrc: StorybookImage,
    name: 'UI-киты (Ant Design, Quasar, кастомные Design Systems)',
    level: '8',
  },
  {
    imgSrc: SassImage,
    name: 'SCSS / BEM / CSS-модули',
    level: '9',
  },
  {
    imgSrc: LighthouseImage,
    name: 'Оптимизация производительности',
    level: '7',
  },
  {
    imgSrc: TestImage,
    name: 'Тестирование',
    level: '5',
  },
  {
    imgSrc: RequestImage,
    name: 'REST API / GraphQL',
    level: '8',
  },
  {
    imgSrc: DockerImage,
    name: 'Docker и CI/CD',
    level: '7',
  },
  {
    imgSrc: KissImage,
    name: 'Архитектурные паттерны',
    level: '8',
  },
  {
    imgSrc: AnimationImage,
    name: 'Работа с анимациями',
    level: '8',
  },
  {
    imgSrc: PinImage,
    name: 'Работа с картами',
    level: '6',
  },
  {
    imgSrc: DocumentImage,
    name: 'Документирование',
    level: '10',
  },
  {
    imgSrc: PullRequestImage,
    name: 'Менторинг и код-ревью',
    level: '8',
  },
]
</script>

<style lang="scss" scoped>
@use '@/assets/styles/media' as media;

.section-skills {
  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px;

    &-item {
      width: 100%;
    }
  }

  @include media.max('lg') {
    &__grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>