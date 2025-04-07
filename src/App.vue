<template>
  <LayoutHeader />
  <LayoutMain />
  <LayoutFooter />
  <FeatureConfetti v-if="isConfettiVisible" />
</template>

<script lang="ts" setup>
import LayoutHeader from "./components/layout/LayoutHeader.vue";
import LayoutFooter from "./components/layout/LayoutFooter.vue";
import LayoutMain from "@/components/layout/LayoutMain.vue";
import FeatureConfetti from "@/components/features/FeatureConfetti.vue";
import { useConfetti } from "@/composables/useConfetti";

const { isConfettiVisible } = useConfetti();
</script>

