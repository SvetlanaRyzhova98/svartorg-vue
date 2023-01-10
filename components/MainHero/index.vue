<template>
  <div class="hiro">
    <div class="hiro__decor"></div>

    <div class="hiro__box">
      <title class="hiro__title">Сварочное оборудование </title>
      <div class="hiro__desc">
        <p>
          Оптово-розничная торговля: cварочное оборудование,
          бензо-электроинструмент, силовая техника, аксессуары.
        </p>
        <p>
          Cварочные работы, изготовление металлоконструкций, электромонтажные
          работы.<br />
          Розничная торговля представлена сетью магазинов
          <a href="#!" class="blue"> СВАРНОЙ</a>.
        </p>

        <div class="location">
          <div @click="onLocationOpenClick" class="location-select">
            {{Locations[location.location].title}}
            <i class="fas fa-arrow-circle-down" :class="{ rotated: isLocationOpen }">▼</i>
          </div>

          <ul class="location-city" :class="{ visible: !isLocationOpen }">
            <li @click="setLocation('KRD')">{{ Locations["KRD"].title }}</li>
            <li @click="setLocation('NVR')">{{ Locations["NVR"].title }}</li>
            <li @click="setLocation('TMSH')">{{ Locations["TMSH"].title }}</li>
          </ul>
        </div>
      </div>
      <!-- <button type="submit" class="submit blue">КАТАЛОГ</button> -->
    </div>
  </div>
</template>

<script setup>
import { useLocationStore } from "../../store/location";
import { Locations } from "../../consts/location";

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
  font-size: 15px;
  transition: .2s;
  display: inline-block;
}
.rotated {
  transform: rotate(180deg);
}
.hiro {
  width: 100%;
  height: 100vh;
  max-height: 1800px;
  position: relative;
  background: url("~/components/MainHero/assets/black-bg1.jpg") no-repeat center
    right;
  /* background: url(../img/svar2_background1.jpg) no-repeat center center; */
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  padding-top: 100px;
  /* padding-right: calc(100vw + -86%); */
}
.hiro__decor {
  position: absolute;
  width: 300px;
  height: calc(100% - 80px);
  /* left: 405px; */
  top: 60px;
  z-index: 1;
  background: var(--bg-color);
}

.hiro__box {
  max-width: 700px;
  z-index: 2;
}
.hiro__title {
  font-size: 50px;
  line-height: 60px;
  letter-spacing: 0.5px;

  margin-bottom: 40px;
  font-weight: 600;
}
.hiro__desc {
  margin-bottom: 40px;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.5px;
}
.submit {
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  background: var(--bg-color);
  border: 1px solid white;
  padding: 15px 40px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.location {
  display: flex;
  margin-top: 15px;
  width: max-content;
  font-size: 20px;
  line-height: 25px;
  flex-direction: column;
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
  color: var(--blue);
  cursor: pointer;
}
.location-select:hover {
  cursor: pointer;
  color: var(--blue);
}
@media all and (max-width: 800px) {
    .hiro {
    margin-bottom: 50px;
    /* padding-top: 100px;  */
}
  .hiro__desc {
    margin-bottom: 40px;
    font-size: 18px;
    line-height: 25px;
  }
  .hiro__box {
    padding: 0 20px;
  }
  .hiro__title {
    font-size: 45px;
  }
  .hiro__decor {
  width: 100%;}
}
@media all and (max-width:500px){
  .hiro__title {
    font-size: 35px;
    line-height: 40px;
    margin-bottom: 20px;
}
.hiro__desc {
    margin-bottom: 40px;
    font-size: 15px;
}
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

  .hiro__desc {
    line-height: 20px;
  }
  .hiro__title {
    font-size: 35px;
    line-height: 40px;
    margin-bottom: 20px;
  }
 
  .location {
    gap: 10px;
    font-size: 15px;
    line-height: 16px;
  }
}
@media all and (max-height: 400px) {
  .hiro__title {
    font-size: 22px;
    line-height: 22px;
  }
}
</style>
