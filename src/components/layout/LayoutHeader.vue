<template>
  <header class="layout-header">
    <div class="layout-header__name">
      Ксения Дьяченко
    </div>
    <div class="layout-header__plumbob">
      <img src="@/assets/images/icons/plumbob.svg" alt="" />
    </div>
    <div class="layout-header__actions">
      <a v-popover="{ title: 'Telegram' }" class="layout-header__actions-message layout-header__actions--circle" href="https://t.me/gsusha" target="_blank">
        <img src="@/assets/images/icons/telegram.svg" alt="" />
      </a>
      <a v-popover="{ title: 'Позвонить' }" class="layout-header__actions-phone layout-header__actions--circle" href="tel:89604515666">
        <img src="@/assets/images/icons/phone.svg" alt="" />
      </a>
      <div v-popover="{ title: 'Меню' }" class="layout-header__actions-navigation">
        <img src="@/assets/images/icons/burger.svg" alt="" />
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>  </script>

<style lang="scss">
@use '@/assets/styles/media' as media;

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

    font-family: var(--font-family-secondary), sans-serif;

    background: #ffffff;
    color: var(--color-text-primary);
    font-weight: 600;
    font-size: 22px;
    padding: 20px 50px 20px 114px;
    border-radius: 0 0 50px 0;

    height: fit-content;

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

    &:hover {
      img {
        animation: bounceImg 0.2s ease-out;
      }
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

      position: relative;
      top: -10px;
      left: 20px;

      cursor: pointer;

      img {
        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);

        width: 60%;
      }

      &:hover {
        animation: bounceImg 0.2s ease-out;
        background: linear-gradient(90deg, rgb(26, 183, 66) 0%, rgb(125, 225, 32) 100%);
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
      justify-content: center;

      background: rgba(255, 255, 255, 0.3);

      padding: 16px 30px 16px 40px;

      mask: radial-gradient(circle 37px at -24px 25px, transparent 37px, black 38px);

      cursor: pointer;

      &:hover {
        animation: bounceImg 0.2s ease-out;
        background: linear-gradient(180deg, rgb(125, 225, 32) 0%, rgb(125, 225, 32) 100%);
      }
    }
  }

  @include media.max('md') {
    &__name {
      font-size: 18px;
      padding: 16px 40px 16px 90px;

      mask: radial-gradient(circle 30px at 45px 39px, transparent 28px, black 20px);
    }

    &__plumbob {
      width: 50px;
      height: 50px;

      left: 20px;
    }

    &__actions {
      &--circle {
        width: 50px;
        height: 50px;
      }

      &-navigation {

        padding: 8px 20px 8px 20px;
        img {
          width: 70%;
        }
      }
    }
  }
}
</style>