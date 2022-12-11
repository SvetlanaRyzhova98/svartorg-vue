<template>
  <div class="wrapper">
    
    <CatalogHero>{{titles[route.params.group]}}</CatalogHero>
    



    <BreadCrumbs />

    <div class="catalog_box">
      <CatalogItem v-for="(item, j) in catalogItems" :key="j" :item="item" />
    </div>
  </div>
</template>


<script setup>


const route = useRoute();
const { data: catalogItems } = await useFetch(`/api/catalog?group=${route.params.group}`);




// console.log("uytruytrutyru", catalogItems);
</script>

<script>
import CatalogItem from './components/CatalogItem';
import CatalogHero from './components/CatalogHero';

export default {
  name: 'MainCatalog',
  props: {},
  data() {
    return {
      titles: {
        welding: 'СВАРОЧНОЕ ОБОРУДОВАНИЕ',
        electro: 'ЭЛЕКТРООБОРУДОВАНИЕ',
      }
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.catalog_box {
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin-top: 30px;
  justify-content: center;
  grid-auto-rows: 360px;
}
</style>




Array.from(document.querySelectorAll(".card-item")).map((cardItem) => {
const image = cardItem.querySelector(".front img").src;
const desc =  cardItem.querySelector(".front .name-product").firstChild.nodeValue.trim();
const title =  cardItem.querySelector(".front .name-product span").innerHTML;
const price =  cardItem.querySelector(".front .price").innerHTML.trim();
const table =  cardItem.querySelector(".back .info-list").rows;
const rows = Array.from(table).map((r) => {return {key: r.cells[0].firstChild.innerHTML, val: r.cells[1].innerHTML }});
return {image,desc,title,price,rows};
});
