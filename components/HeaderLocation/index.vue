<template>
  <div class="header__contact">

    
    <div class="header__link header__link_cont">
      <ClientOnly><font-awesome-icon icon="fa-solid fa-location-dot" /></ClientOnly>
      {{ Locations[location.location]?.address }}
    </div>

    <a
      :href="'tel:' + Locations[location.location]?.phone"
      class="header__link header__link_cont"
    >
    <ClientOnly><font-awesome-icon icon="fa-solid fa-phone" /></ClientOnly>
      {{ Locations[location.location]?.phone}} 
    </a>
    <!-- <a
      :href="'tel:' + Locations[location.location]?.phone"
      class="header__link header__link_cont header__link_cont-mobile"
    >
    </a> -->
  </div>
</template>

<script setup>
import { useLocationStore } from "../../store/location";
import { Locations } from "../../consts/location";

const location = useLocationStore();
</script>

<style>
.header__contact {
  display: flex;
  gap: 15px;
}
.header__link.header__link_cont {
  font-size: 13px;
  color: var(--blue);
}
</style>
