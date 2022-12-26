<template>
    <div class="hiro hiro-srv">
          <div class="hiro__decor"></div>
          <div class="hiro__box">
            <h1 class="hiro__title"><slot /><br></h1>
          </div>
        </div>
</template>

<style scoped>

.hiro {
    width: 100%;
    height: 100vh;
    max-height: 1800px;
    position: relative;
    /* background: url(../img/svar2_background1.jpg) no-repeat center center; */
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    padding-top: 100px;
}
.hiro.hiro-srv {
  height: 200px;
  font-size: 20px;
  margin: 0;
  padding-top: 80px;
}
.hiro.hiro-srv .hiro__decor {
  width: 100vw;
  background: url('~/components/MainCatalog/components/CatalogHero/assets/black-bg1.jpg') no-repeat center right;
  background-size: cover;
}
.hiro.hiro-srv .hiro__title {
  font-size: 22px;
  line-height: 1;
  margin: 0;
  text-transform: uppercase;
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
@media all and (max-width: 800px) {
 
 .hiro__decor {
   display: none;}
}

@media all and (max-width: 500px) {
 
 .hiro.hiro-srv .hiro__title {
   font-size: 17px;}
}

</style>