<template>
  <div v-popover="{ title: itemTypesObject[is].name }" class="ui-item">
    <img :src="itemTypesObject[is].imgSrc" :alt="itemTypesObject[is].name" />
  </div>
</template>

<script lang="ts" setup>
import TsImage from '@/assets/images/icons/pixel-ts.png';
import JsImage from '@/assets/images/icons/pixel-js.png';
import VueImage from '@/assets/images/icons/pixel-vue.png';
import NuxtImage from '@/assets/images/icons/pixel-nuxt.png';
import PiniaImage from '@/assets/images/icons/pixel-pinia.png';
import SassImage from '@/assets/images/icons/pixel-sass.png';
import ReactImage from '@/assets/images/icons/pixel-react.png';
import ReduxImage from '@/assets/images/icons/pixel-redux.png';
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

  background: linear-gradient(180deg, rgb(245, 248, 253) 0%, rgb(213, 228, 239) 100%);
}
</style>