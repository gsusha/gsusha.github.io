<template>
  <div :class="['ui-progress-bar', { 'ui-progress-bar--full': isFull }]">
    <div class="ui-progress-bar__fill" />
  </div>
</template>

<script lang="ts" setup>
import {computed} from "vue";

interface UiProgressBarProps {
  value: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
}

const props = defineProps<UiProgressBarProps>();

const progressWidth = computed(() => `${(parseInt(props.value) / 10) * 100}%`);

const isFull = computed(() => props.value === '10');
</script>

<style lang="scss" scoped>
.ui-progress-bar {
  position: relative;
  width: 90px;
  height: 16px;
  border-radius: 8px;
  background: #ddd;
  overflow: hidden;
  border: 1px solid #bbb;

  &__fill {
    height: 100%;
    background: linear-gradient(to right, #6ab04c, #4caf50);
    width: v-bind(progressWidth);
  }
}
</style>