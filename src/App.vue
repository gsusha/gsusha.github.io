<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import AppCTA from "./components/AppCTA.vue";
</script>

<template>
  <AppHeader />
  <main class="main">
    <AppCTA />
  </main>
  <AppFooter />
</template>

<style lang="scss" scoped>
.main {
  flex: 1 1 100%;

  overflow: hidden;
}
</style>

