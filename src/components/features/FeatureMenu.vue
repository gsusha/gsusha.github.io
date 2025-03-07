<template>
  <div class="feature-menu">
    <div class="feature-menu__header">Меню</div>
    <div class="feature-menu__buttons">
      <UiButton v-for="item in menuItems"
                :key="generateRandomId('menu')"
                :href="item.id"
                type="outline"
      >
        {{ item.name }}
      </UiButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import UiButton from "@/components/ui/UiButton.vue";
import { generateRandomId } from "@/utils/common";

const menuItems = [
  {
    id: 'career',
    name: 'Карьера',
  },
  {
    id: 'skills',
    name: 'Навыки',
  },
  {
    id: 'achievements',
    name: 'Достижения',
  },
]
</script>