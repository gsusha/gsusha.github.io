<template>
  <main class="layout-main">
    <SectionHero />

    <div class="layout-main__content">
      <SectionCareer id="career" class="layout-main__section" />
      <SectionSkills id="skills" class="layout-main__section" />
      <SectionAchievements id="achievements" class="layout-main__section" />
      <SectionHunt id="hunt" class="layout-main__section" />
    </div>
  </main>
</template>
<script setup lang="ts">
import SectionHero from "@/components/sections/SectionHero.vue";
import SectionCareer from "@/components/sections/SectionCareer.vue";
import SectionSkills from "@/components/sections/SectionSkills.vue";
import SectionAchievements from "@/components/sections/SectionAchievements.vue";
import SectionHunt from "@/components/sections/SectionHunt.vue";
</script>

<style lang="scss" scoped>
.layout-main {
  flex: 1 1 100%;
  overflow: hidden;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    position: relative;
    z-index: 1;

    margin: 0 30px;
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