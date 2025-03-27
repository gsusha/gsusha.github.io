<template>
  <div class="ui-loader"></div>
</template>

<style lang="scss" scoped>
.ui-loader {
  position: absolute;
  top: calc(50% - 40px);
  left: calc(50% - 47px);

  color: #fff;
  font-family: Consolas, Menlo, Monaco, monospace;
  font-weight: bold;
  font-size: 78px;
  opacity: 0.8;

  &::before {
    content: "{";
    display: inline-block;
    animation: pulse 0.4s alternate infinite ease-in-out;
  }

  &::after {
    content: "}";
    display: inline-block;
    animation: pulse 0.4s 0.3s alternate infinite ease-in-out;
  }
}

@keyframes pulse {
  to {
    transform: scale(0.8);
    opacity: 0.5;
  }
}

</style>