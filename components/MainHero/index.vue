<template>
  <div class="hiro">
    <div class="hiro__decor"></div>

    <div class="hiro__box">
      <h1 class="hiro__title">Сварочное оборудование<br /></h1>
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

        <Location />
      </div>
    </div>
  </div>
</template>

<style scoped>
.hiro {
  width: 100%;
  height: 100vh;
  max-height: 1800px;
  position: relative;
  background-color: black;
  background: url("~/components/MainHero/assets/black-bg1.jpg") no-repeat center
    right;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  padding-top: 100px;
}
.hiro__decor {
  position: absolute;
  width: 300px;
  height: calc(100% - 80px);
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

@media all and (max-width: 800px) {
  .hiro {
    margin-bottom: 50px;
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
    width: 100%;
  }
}
@media all and (max-width: 500px) {
  .hiro__title {
    font-size: 35px;
    line-height: 40px;
    margin-bottom: 20px;
  }
  .hiro__desc {
    margin-bottom: 40px;
    font-size: 15px;
  }
}
@media all and (max-height: 500px) {
  .hiro__desc {
    line-height: 20px;
  }
  .hiro__title {
    font-size: 35px;
    line-height: 40px;
    margin-bottom: 20px;
  }
}
@media all and (max-height: 400px) {
  .hiro__title {
    font-size: 22px;
    line-height: 22px;
  }
}
</style>
