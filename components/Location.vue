<template>
  <div class="location">
    <div @click="onLocationOpenClick" class="location-select">
      {{ Locations[location.location].title }}
      <i class="fas fa-arrow-circle-down" :class="{ rotated: isLocationOpen }"
        >▼</i
      >
    </div>

    <ul class="location-city" :class="{ visible: !isLocationOpen }">
      <li @click="setLocation('KRD')">{{ Locations["KRD"].title }}</li>
      <li @click="setLocation('NVR')">{{ Locations["NVR"].title }}</li>
      <li @click="setLocation('TMSH')">{{ Locations["TMSH"].title }}</li>
    </ul>
  </div>
</template>

<script setup>
import { useLocationStore } from "../store/location";
import { Locations } from "../consts/location";

const location = useLocationStore();

const isLocationOpen = useState("isLocationOpen", () => true);

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
  font-size: 15px;
  transition: 0.2s;
  display: inline-block;
}
.rotated {
  transform: rotate(180deg);
}

.location {
  display: flex;
  margin-top: 15px;
  width: max-content;
  font-size: 20px;
  line-height: 25px;
  flex-direction: column;
  color: #fd9d46cc;;
}
.location-city {
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  margin-top: 10px;
}
.location-city li:hover {
  color: #f48116e5;
  cursor: pointer;
}
.location-select:hover {
  cursor: pointer;
  color:  #fd9d46cc;
}

  @media all and (max-width: 500px) {
    .location {
      margin-top: 15px;
      font-size: 15px;
    }
  }
  @media all and (max-height: 500px) {
    .location {
      margin-top: 15px;
      /* font-weight: bold; */
      display: flex;
      gap: 10px;
      width: max-content;
      font-size: 18px;
      line-height: 20px;
      flex-direction: column;
    }

    .location {
      gap: 10px;
      font-size: 15px;
      line-height: 16px;
    }
  }

</style>
