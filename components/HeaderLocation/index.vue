<template>
  <div class="header__contact">
    <div class="header__link header__link_cont">
      <ClientOnly><font-awesome-icon icon="fa-solid fa-location-dot" /></ClientOnly>
      {{ currentAddress }}
    </div>

    <a
      :href="'tel:' + currentPhone"
      class="header__link header__link_cont"
    >
      <ClientOnly><font-awesome-icon icon="fa-solid fa-phone" /></ClientOnly>
      {{ currentPhone }}
    </a>
  </div>
</template>

<script setup>
import { useLocationStore } from "../../store/location";
import { Locations } from "../../consts/location";
import { computed } from 'vue';

const locationStore = useLocationStore();

// Вычисляемые свойства для адреса и телефона
const currentAddress = computed(() => {
  return Locations[locationStore.location]?.address || '';
});

const currentPhone = computed(() => {
  return Locations[locationStore.location]?.phone || '';
});
</script>

<style>
.header__contact {
  display: flex;
  gap: 15px;
}
.header__link.header__link_cont {
  font-size: 16px;
  gap: 5px;
  align-items: center;
  color: #333333;
  display: flex;
  white-space: nowrap;
}
@media (max-width: 1300px) {
  .header__contact {
    flex-direction: column;
  }
}
@media (max-width: 900px) {
  .header__contact {
    flex-direction: row;
  }
  .header__wrapper .header_top {
    gap: 70px;
  }
}
</style>
