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
      <div class="section-hunt__cv">
        <div class="section-hunt__cv-img">
          <img src="@/assets/images/cv.svg" alt="Резюме" />
        </div>
      </div>
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

  &__cv {
    &-img {
      width: 200px;
      height: 200px;
      border-radius: 20px;
      background: #F5F5F5;
      padding: 20px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>