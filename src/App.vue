<script setup lang="ts">
import LayoutHeader from "./components/layout/LayoutHeader.vue";
import LayoutFooter from "./components/layout/LayoutFooter.vue";
import SectionHero from "./components/sections/SectionHero.vue";
</script>

<template>
  <LayoutHeader />
  <main class="main">
    <SectionHero />
  </main>
  <LayoutFooter />
</template>

<style lang="scss" scoped>
.main {
  flex: 1 1 100%;

  overflow: hidden;
}
</style>

