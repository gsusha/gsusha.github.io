<template>
  <header class="layout-header">
    <div class="layout-header__name">
      Ксения Дьяченко
    </div>
    <div class="layout-header__plumbob">
      <img src="@/assets/images/icons/plumbob.svg" alt="" />
    </div>
    <div class="layout-header__actions">
      <a v-hint="'Telegram'" class="layout-header__actions-message layout-header__actions--circle" href="https://t.me/gsusha" target="_blank">
        <img src="@/assets/images/icons/telegram.svg" alt="" />
      </a>
      <a v-hint="'Позвонить'" class="layout-header__actions-phone layout-header__actions--circle" href="tel:89604515666">
        <img src="@/assets/images/icons/phone.svg" alt="" />
      </a>
      <div v-hint="'Меню'" class="layout-header__actions-navigation">
        <img src="@/assets/images/icons/burger.svg" alt="" />
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>  </script>

<style lang="scss">
.layout-header {
  display: flex;
  justify-content: space-between;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  z-index: 5;

  &__name {
    display: flex;
    align-items: center;

    background: #ffffff;
    color: #0D4CAC;
    font-weight: 600;
    font-size: 22px;
    padding: 20px 50px 20px 114px;
    border-radius: 0 0 50px 0;

    position: relative;

    mask: radial-gradient(circle 37px at 51px 49px, transparent 37px, black 38px);
  }

  &__plumbob {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;

    position: absolute;
    top: 14px;
    left: 16px;

    background: radial-gradient(
            50% 50% at 50% 50%,
            rgb(125, 161, 196) 0%,
            rgb(163, 189, 213) 100%
    );

    img {
      height: 80%;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;

      display: block;

      width: 100%;
      height: 100%;
      border-radius: 50%;
      box-shadow: inset 0 0 0 2px #ADC6DF;
    }
  }

  &__actions {
    display: flex;
    align-items: flex-start;

    position: relative;

    &--circle {
      width: 70px;
      height: 70px;
      border-radius: 50%;

      background: radial-gradient(
              50% 50% at 50% 50%,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.3) 100%
      );

      background-color: rgba(255, 255, 255, 0);

      position: relative;
      top: -10px;
      left: 20px;

      transition: background-color .4s ease;
      will-change: background-color;

      cursor: pointer;

      img {
        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);

        width: 60%;
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.3);
      }
    }

    &-message {
      display: block;

      border-radius: 50% 0 50% 50%;
      mask: radial-gradient(circle 37px at 94px 35px, transparent 37px, black 38px);

      img {
        left: 45%;
      }
    }

    &-phone {
      display: block;
      left: 10px;
    }

    &-navigation {
      display: flex;
      align-items: center;

      background: rgba(255, 255, 255, 0.3);

      padding: 16px 30px 16px 40px;

      mask: radial-gradient(circle 37px at -24px 25px, transparent 37px, black 38px);

      cursor: pointer;
    }
  }
}
</style>