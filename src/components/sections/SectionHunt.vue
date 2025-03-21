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
      <a class="section-hunt__item section-hunt__item--telegram"
         href="https://t.me/gsusha"
         target="_blank"
      >
        <div class="section-hunt__item-img">
          <img src="@/assets/images/telegram.png" alt="telegram" />
        </div>
        <div class="section-hunt__item-name">
          telegram
        </div>
      </a>
      <a class="section-hunt__item section-hunt__item--whatsapp"
         href="https://wa.me/79604515666"
      >
        <div class="section-hunt__item-img">
          <img src="@/assets/images/whatsapp.png" alt="whatsapp" />
        </div>
        <div class="section-hunt__item-name">
          whatsapp
        </div>
      </a>
      <a
          class="section-hunt__item section-hunt__item--phone"
          href="tel:79604515666"
      >
        <div class="section-hunt__item-img">
          <img src="@/assets/images/phone.png" alt="позвонить" />
        </div>
        <div class="section-hunt__item-name">
          позвонить
        </div>
      </a>

      <a class="section-hunt__item section-hunt__item--hh"
         href="https://rostov.hh.ru/resume/c347e7beff0df704680039ed1f556e45614179"
         target="_blank">
        <div class="section-hunt__item-img">
          <img src="@/assets/images/hh.png" alt="hh.ru" />
        </div>
        <div class="section-hunt__item-name">
          hh.ru
        </div>
      </a>
      <a class="section-hunt__item section-hunt__item--habr"
         href="https://career.habr.com/gsushka"
         target="_blank"
      >
        <div class="section-hunt__item-img">
          <img src="@/assets/images/habr.png" alt="хабр карьера" />
        </div>
        <div class="section-hunt__item-name">
          хабр карьера
        </div>
      </a>
      <a
          class="section-hunt__item section-hunt__item--email"
          href="mailto:x.dyachenko@yandex.ru"
      >
        <div class="section-hunt__item-img">
          <img src="@/assets/images/mail.png" alt="email" />
        </div>
        <div class="section-hunt__item-name">
          email
        </div>
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import UiHeader from "@/components/ui/UiHeader.vue";
</script>

<style lang="scss" scoped>
@use '@/assets/styles/media' as media;

.section-hunt {
  &__content {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 200px);
    grid-gap: 10px;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    border-radius: 10px;
    border: 2px solid #eeeeee;
    padding: 10px 20px;

    will-change: border-color;
    transition: border-color 0.1s ease-in-out;

    &-img {
      width: 20px;
    }

    &-name {
      font-weight: 600;
    }

    &--hh {
      color: #FF0002;

      &:hover {
        border-color: #FF0002;
      }
    }

    &--habr {
      color: #6374BC;
      &:hover {
        border-color: #6374BC;
      }
    }

    &--telegram {
      color: #24A1DE;

      &:hover {
        border-color: #24A1DE;
      }
    }

    &--whatsapp {
      color: #49AD1E;

      &:hover {
        border-color: #49AD1E;
      }
    }

    &--email {
      color: #EDBF3F;

      &:hover {
        border-color: #FFCA38;
      }
    }

    &--phone {
      color: #3F61D8;

      &:hover {
        border-color: #3F61D8;
      }
    }
  }

  @include media.max('md') {
    &__content {
      grid-template-columns: 1fr 1fr;
    }
  }

  @include media.max('sm') {
    &__item {
      font-size: 12px;
    }
  }
}
</style>