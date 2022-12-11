<template>
    <div class="hiro">
      <div class="hiro__decor"></div>

      <div class="hiro__box">
        <h1 class="hiro__title">
          Сварочное оборудование<br />
        </h1>
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
            <div class="location-select"><span>Выберите город</span>  <i class="fas fa-arrow-circle-down"></i></div>
           
           <ul class="location-city visible">
            <li>Краснодар</li>
            <li>Тимашевск</li>
            <li>Новороссийск (Цемдолина)</li>
           </ul>
          </div>
        </div>
        <!-- <button type="submit" class="submit blue">КАТАЛОГ</button> -->
      </div>
    </div>
</template>

<style>






.hiro {
  width: 100%;
  height: 100vh;
  max-height: 1800px;
  position: relative;
  background: url("~/components/MainHero/assets/black-bg1.jpg") no-repeat center right;
  /* background: url(../img/svar2_background1.jpg) no-repeat center center; */
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  padding-top: 100px;
  /* padding-right: calc(100vw + -86%); */
}
.hiro__decor {
  position: absolute;
  width: 444px;
  height: calc(100% - 80px);
  /* left: 405px; */
  top: 80px;
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
</style>