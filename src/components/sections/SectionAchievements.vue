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
        <img src="@/assets/images/hackaton1.jpg" alt="" />
        <div class="section-achievements__item-title">Выиграла хакатон</div>
      </div>
      <div class="section-achievements__item">
        <img src="@/assets/images/hackaton2.jpg" alt="" />
        <div class="section-achievements__item-title">Выиграла другой хакатон</div>
      </div>
      <div class="section-achievements__item">
        <img src="@/assets/images/diploma.jpg" alt="" />
        <div class="section-achievements__item-title">Бакалавр IT</div>
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
      text-align: center;
      padding: 20px 0;

      color: var(--color-text-primary);
      font-weight: 700;
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