<template>
  <div class="section-hunt">
    <UiHeader>
      <template #default>
        Захантить 🧛
      </template>

      <template #subtitle>
        Собираете команду мечты? Я — тот самый frontend-герой!
      </template>
    </UiHeader>
    <div class="section-hunt__content">
      <UiButton>Полное резюме 📂</UiButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import UiHeader from "@/components/ui/UiHeader.vue";
import UiButton from "@/components/ui/UiButton.vue";
</script>

<style lang="scss" scoped>
.section-hunt {
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
}
</style>