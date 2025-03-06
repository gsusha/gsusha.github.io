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
import TsImage from '@/assets/images/icons/pixel-ts.png';
import JsImage from '@/assets/images/icons/pixel-js.png';
import VueImage from '@/assets/images/icons/pixel-vue.png';
import NuxtImage from '@/assets/images/icons/pixel-nuxt.png';
import PiniaImage from '@/assets/images/icons/pixel-pinia.png';
import SassImage from '@/assets/images/icons/pixel-sass.png';
import ArchitectureImage from '@/assets/images/civil-designer.png';
import DocumentationImage from '@/assets/images/documentation.png';
import RocketImage from '@/assets/images/rocket.png';
import ProgrammingImage from '@/assets/images/programming.png';
import EngineeringImage from '@/assets/images/engineering.png';
import KitImage from '@/assets/images/kit.png';
import LoyalImage from '@/assets/images/loyal.png';
import SillyImage from '@/assets/images/silly.png';
import OutdoorsyImage from '@/assets/images/outdoorsy.png';
import CubesImage from '@/assets/images/cubes.png';
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
    imgSrc: KitImage,
    name: 'UI-киты (Ant Design, Quasar, кастомные Design Systems)',
    level: '8',
  },
  {
    imgSrc: SassImage,
    name: 'SCSS / BEM / CSS-модули',
    level: '9',
  },
  {
    imgSrc: RocketImage,
    name: 'Оптимизация производительности',
    level: '8',
  },
  {
    imgSrc: EngineeringImage,
    name: 'Тестирование',
    level: '5',
  },
  {
    imgSrc: ProgrammingImage,
    name: 'REST API / GraphQL',
    level: '8',
  },
  {
    imgSrc: CubesImage,
    name: 'Docker и CI/CD',
    level: '7',
  },
  {
    imgSrc: ArchitectureImage,
    name: 'Архитектурные паттерны',
    level: '8',
  },
  {
    imgSrc: SillyImage,
    name: 'Работа с анимациями',
    level: '8',
  },
  {
    imgSrc: OutdoorsyImage,
    name: 'Работа с картами',
    level: '6',
  },
  {
    imgSrc: DocumentationImage,
    name: 'Документирование',
    level: '10',
  },
  {
    imgSrc: LoyalImage,
    name: 'Менторинг и код-ревью',
    level: '8',
  },
]
</script>

<style lang="scss" scoped>
.section-skills {
  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px;

    &-item {
      width: 100%;
    }
  }
}
</style>