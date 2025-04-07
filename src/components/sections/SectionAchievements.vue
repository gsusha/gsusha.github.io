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
      <div class="section-achievements__item">
        <img src="@/assets/images/hackaton1.webp" alt="" />
        <div class="section-achievements__item-title">
          <a href="https://taganrogprav.ru/zavershilsya-marafon-programmirovaniya-hakaton-rospatent-jufu/"
             target="_blank"
          >
            Выиграла хакатон
          </a>
        </div>
      </div>
      <div class="section-achievements__item">
        <img src="@/assets/images/hackaton2.webp" alt="" />
        <div class="section-achievements__item-title">
          <a href="https://sfedu.ru/press-center/news/70424"
             target="_blank"
          >
            Выиграла другой хакатон
          </a>
        </div>
      </div>
      <div class="section-achievements__item">
        <img src="@/assets/images/diploma.webp" alt="" />
        <div class="section-achievements__item-title">
          <a href="https://sfedu.ru/"
             target="_blank"
          >
            Бакалавр IT
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import UiHeader from "@/components/ui/UiHeader.vue";

// TODO: ресайзнуть
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
    flex: 1 1 33%;
    background: #f2f4f8;
    padding: 10px;

    &-title {
      display: block;
      text-align: center;
      padding: 20px 0;

      a {
        color: var(--color-text-primary);
        font-weight: 700;
        transition: 0.2s color ease;

        &:hover {
          color: var(--color-text-secondary);
        }
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