<template>
<div class="hiro hiro-srv">
          <div class="hiro__decor"></div>
          <div class="hiro__box">
            <h1 class="hiro__title"><slot /></h1>
          </div>
        </div>
</template>

<style scoped>
.hiro.hiro-srv {
  height: 200px;
  font-size: 20px;
  margin: 0;
  padding-top: 80px;
}
.hiro.hiro-srv .hiro__decor {
  width: 100%;
}
.hiro.hiro-srv .hiro__title {
  font-size: 22px;
  line-height: 1;
  margin: 0;
  text-transform: uppercase;
}
</style>