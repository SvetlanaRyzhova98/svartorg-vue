<template>
    <div class="hiro hiro-srv">
            <h1 class="hiro__title"><slot /><br></h1>
        </div>
</template>

<style scoped>

.hiro {
    width: 100%;
    height: 100vh;
    
}
.hiro.hiro-srv {
  height: 150px;
    display: flex;
    font-size: 20px;
    margin: 0;
    margin-top: 20px;
    width: 100%;
    background: url(/_nuxt/components/MainCatalog/components/CatalogHero/assets/black-bg1.jpg) no-repeat center right;
    background-size: cover;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
 
.hiro.hiro-srv .hiro__title {
  font-size: 22px;
  line-height: 1;
  margin: 0;
  text-transform: uppercase;
}
 
 

</style>