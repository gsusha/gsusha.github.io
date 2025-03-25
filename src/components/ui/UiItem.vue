<template>
  <div v-popover="{ title: itemTypesObject[is].name }" class="ui-item">
    <img :src="itemTypesObject[is].imgSrc" :alt="itemTypesObject[is].name" />
  </div>
</template>

<script lang="ts" setup>
import TsImage from '@/assets/images/icons/pixel-ts.webp';
import JsImage from '@/assets/images/icons/pixel-js.webp';
import VueImage from '@/assets/images/icons/pixel-vue.webp';
import NuxtImage from '@/assets/images/icons/pixel-nuxt.webp';
import PiniaImage from '@/assets/images/icons/pixel-pinia.webp';
import SassImage from '@/assets/images/icons/pixel-sass.webp';
import ReactImage from '@/assets/images/icons/pixel-react.webp';
import ReduxImage from '@/assets/images/icons/pixel-redux.webp';
import { ItemTypes } from "@/utils/common";

interface UiItemProps {
  is: ItemTypes;
  name?: string;
  imgSrc?: string;
}

const props = defineProps<UiItemProps>();

const itemTypesObject = {
  ts: {
    name: 'TypeScript',
    imgSrc: TsImage,
  },
  js: {
    name: 'JavaScript',
    imgSrc: JsImage,
  },
  vue: {
    name: 'Vue 3',
    imgSrc: VueImage,
  },
  nuxt: {
    name: 'Nuxt 3',
    imgSrc: NuxtImage,
  },
  pinia: {
    name: 'Pinia',
    imgSrc: PiniaImage,
  },
  scss: {
    name: 'SCSS',
    imgSrc: SassImage,
  },
  react: {
    name: 'React',
    imgSrc: ReactImage,
  },
  redux: {
    name: 'Redux',
    imgSrc: ReduxImage,
  },
  custom: {
    name: props.name,
    imgSrc: props.imgSrc,
  }
}
</script>

<style lang="scss" scoped>
.ui-item {
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 4px;

  background: #e5eff6;
}
</style>