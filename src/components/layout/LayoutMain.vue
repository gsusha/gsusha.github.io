<template>
  <main class="layout-main">
    <SectionHero />

    <div class="layout-main__content">
      <SectionExp class="layout-main__section" />
    </div>
  </main>
</template>
<script setup lang="ts">
import SectionHero from "@/components/sections/SectionHero.vue";
import SectionExp from "@/components/sections/SectionExp.vue";
</script>

<style lang="scss" scoped>
.layout-main {
  flex: 1 1 100%;
  overflow: hidden;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
    z-index: 1;
  }

  &__section {
    background: #ffffff;
    border-radius: 20px;

    width: 100%;
    max-width: 1200px;

    padding: 40px;
  }
}
</style>