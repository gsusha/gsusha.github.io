<template>
  <main class="layout-main">
    <SectionHero />

    <div class="layout-main__content">
      <div class="layout-main__content-container">
        <SectionExp />
      </div>
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
    background: #ffffff;

    top: -20px;
    border-radius: 20px 20px 0 0;

    padding: 40px;
    margin-bottom: -20px;

    &-container {
      width: 100%;
      max-width: 1200px;
    }
  }
}
</style>