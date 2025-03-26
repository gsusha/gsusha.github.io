<template>
  <div class="feature-character">
    <Suspense>
      <template #default>
        <GltfModelLazy />
      </template>
      <template #fallback>
        <div class="loading">Загрузка модели...</div>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const GltfModelLazy = defineAsyncComponent(() => import("@/components/features/FeatureGltfModelLoader.vue"));
</script>

<style scoped>
.feature-character {
  pointer-events: none;
  width: 100%;
}

.loading {
  position: absolute;
  top: 50%;
  left: 36%;
  transform: translate(-50%, -50%);

  text-align: center;
  font-size: 18px;
  color: #fff;
  padding: 20px;
}
</style>
