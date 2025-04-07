<template>
  <div class="section-achievements">
    <UiHeader>
      <template #default>
        Достижения 🌟
      </template>

      <template #subtitle>
        Я не просто пишу код, а постоянно прокачиваюсь и достигаю новых вершин!
      </template>
    </UiHeader>
    <div class="section-achievements__content">
      <a
          class="section-achievements__item"
          v-for="item in items"
          :key="item.id"
          :href="item.url"
          target="_blank"
      >
        <img :src="item.imageUrl" alt="" loading="lazy"/>
        <div class="section-achievements__item-title">
          {{ item.name }}
        </div>
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import UiHeader from "@/components/ui/UiHeader.vue";
import RospatentImage from '@/assets/images/hackaton1.webp';
import CyberGardenImage from '@/assets/images/hackaton2.webp';
import SfeduImage from '@/assets/images/diploma.webp';

interface Achievement {
  id: string;
  name: string;
  imageUrl: string;
  url: string;
}

const items = [
  {
    id: 'rospatent',
    name: 'Выиграла хакатон',
    imageUrl: RospatentImage,
    url: 'https://taganrogprav.ru/zavershilsya-marafon-programmirovaniya-hakaton-rospatent-jufu/',
  },
  {
    id: 'cyber_garden',
    name: 'Выиграла ещё хакатон',
    imageUrl: CyberGardenImage,
    url: 'https://sfedu.ru/press-center/news/70424',
  },
  {
    id: 'sfedu',
    name: 'Бакалавр IT',
    imageUrl: SfeduImage,
    url: 'https://sfedu.ru/',
  }
]
</script>

<style lang="scss" scoped>
@use '@/assets/styles/media' as media;

.section-achievements {
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  &__item {
    display: block;

    flex: 1 1 33%;
    background: #f2f4f8;
    padding: 10px;

    will-change: transform;
    transition: transform 0.3s ease-in-out;

    &-title {
      text-align: center;
      padding: 20px 0;
      color: var(--color-text-primary);
      font-weight: 700;
      transition: color 0.2s ease-in-out;
    }

    &:hover {
      transform: scale(1.1);

      .section-achievements__item-title {
        color: var(--color-text-secondary);
      }
    }
  }

  @include media.max('lg') {
    &__content {
      flex-direction: column;
    }

    &__item {
      flex: unset;
    }
  }
}
</style>