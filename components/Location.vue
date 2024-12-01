<template>
  <div class="location">
    <div @click="onLocationOpenClick" class="location-select">
      {{ Locations[location.location].title }}
      <i class="fas fa-arrow-circle-down" :class="{ rotated: isLocationOpen }">▼</i>
    </div>

    <ul class="location-city" :class="{ visible: !isLocationOpen }">
      <li @click="setLocation('KRD')">{{ Locations["KRD"].title }}</li>
      <li @click="setLocation('NVR')">{{ Locations["NVR"].title }}</li>
      <li @click="setLocation('TMSH')">{{ Locations["TMSH"].title }}</li>
      <li @click="setLocation('MPK')">{{ Locations["MPK"].title }}</li>
    </ul>
  </div>
</template>

<script setup>
import { useLocationStore } from "../store/location";
import { Locations } from "../consts/location";

const location = useLocationStore();

const isLocationOpen = useState("isLocationOpen", () => false);

function onLocationOpenClick() {
  isLocationOpen.value = !isLocationOpen.value;
}

function setLocation(str) {
  location.setLocation(str);
  isLocationOpen.value = false;
}
// if (process.server) {
//   counter.n = 20
// }
</script>

<style scoped>
.fa-arrow-circle-down {
  font-size: 8px;
  transition: 0.2s;
  display: inline-block;
}
.rotated {
  transform: rotate(180deg);
}

.location {
  display: flex;
  width: -moz-max-content;
  width: max-content;
  font-size: 16px;
  position: relative;
  color: #333333;
  padding: 20px 0;
  font-weight: 500;
}

[data-theme="dark"] .location-select:hover {
    color: #e1e1e1;
}
[data-theme="dark"] .location-city li:hover {
    color: #ffffff;
  }
[data-theme="dark"] .location-city {
  background: #000000;
}
.location-city {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  position: absolute;
  margin-top: 10px;
  padding: 10px 10px 10px 0;
  background: white;
  box-shadow: 1px 1px 0px #80808012;
  left: 0;
  padding: 10px;
  z-index: 99;
  border-radius: 5px;
  top: 30px;
}
.location-city li:hover {
  color: #000000;
  cursor: pointer;
}
.location-select {
  width: min-content;
  display: flex;
  align-items: center;
  gap: 3px;
}
.location-select:hover {
  cursor: pointer;
  color: #333333;
}
</style>
