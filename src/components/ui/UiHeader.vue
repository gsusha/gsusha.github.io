<template>
  <h2 class="ui-header"><slot /></h2>
</template>

<style lang="scss" scoped>
.ui-header {
  font-size: 24px;
  font-weight: 600;
  color: var(--color-text-primary);
  font-family: var(--font-family--secondary), sans-serif;
  text-align: center;

  margin-bottom: 40px;
}
</style>
