<template>




<div class="header__contact">
            <div class="header__link header__link_cont">
              <i class="fas fa-location-arrow icon"></i>
              {{Locations[location.location]?.address}}</div
            >
            <div class="header__link header__link_cont  header__link_cont-mobile map-click">
              <i class="fas fa-location-arrow icon"></i>
              </div
            >
            <a :href="'tel:' + Locations[location.location]?.phone" class="header__link header__link_cont">
              <i class="fas fa-phone-alt icon"></i>
              {{Locations[location.location]?.phone}}</a
            >
            <a :href="'tel:' + Locations[location.location]?.phone" class="header__link header__link_cont header__link_cont-mobile">
              <i class="fas fa-phone-alt icon"></i>
            </a>
          </div>
</template>




<script setup>
  import { useLocationStore } from "../../store/location";
  import { Locations } from '../../consts/location';

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