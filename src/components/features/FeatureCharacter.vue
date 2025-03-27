<template>
  <div class="feature-character">
    <Suspense>
      <template #default>
        <GltfModelLazy />
      </template>
      <template #fallback>
        <UiLoader class="feature-character__spinner" />
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import UiLoader from "@/components/ui/UiLoader.vue";

const GltfModelLazy = defineAsyncComponent(() => import("@/components/features/FeatureGltfModelLoader.vue"));
</script>

<style lang="scss" scoped>
@use '@/assets/styles/media' as media;

.feature-character {
  pointer-events: none;
  width: 100%;

  &__spinner {
    left: 30%;

    @include media.max('lg') {
      left: calc(50% - 47px);
    }
  }
}
</style>
