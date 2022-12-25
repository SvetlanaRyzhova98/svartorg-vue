<template>
  <div class="wrapper">
    <CatalogHero>{{ titles[route.params.group].caption }}</CatalogHero>

    <BreadCrumbs :path="[titles[route.params.group]]" />

    <CatalogFilter :group="route.params.group" v-model="filter" />

    <div class="catalog_box">
      <CatalogItem v-for="(item, j) in pageItems" :key="j" :item="item" />
    </div>

    <v-pagination
      v-model="page"
      :pages="pages"
      :range-size="1"
      active-color="#DCEDFF"
      @update:modelValue="updateHandler"
    />
    {{ pages }}
  </div>
</template>

<script setup>
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

import CatalogItem from "./components/CatalogItem";
import CatalogHero from "./components/CatalogHero";
import CatalogFilter from "./components/CatalogFilter";

const route = useRoute();
const { data: catalogItems } = await useFetch(
  `/api/catalog?group=${route.params.group}`
);

const titles = {
  welding: { caption: "Сварочное оборудование", href: "/catalog/welding" },
  electro: { caption: "Электрооборудование", href: "/catalog/electro" },
  benzo: { caption: "Бензоинструмент", href: "/catalog/benzo" },
  gas: { caption: "Газосварочное", href: "/catalog/gas" },
  protection: { caption: "Маски", href: "/catalog/protection" },
  materials: { caption: "Расходные материалы", href: "/catalog/materials" },
};

const filter = useState("filter", () => ({}));

const page = useState("page", () => 1);

const ItemsOnPage = 12;
// количество выводимых карточек в пагинации

const items = computed(() => {
  const filterObj = Object.entries(filter.value)
    .filter(([key, value]) => value)
    .map(([key, value]) => key);

  console.log(catalogItems.value);

  let afterFilter = [];

  if (!filterObj.length) {
    afterFilter = catalogItems.value;
  }
  else {
    afterFilter = (catalogItems.value || []).filter((itemA) => {
    return filterObj.some((itemB) => itemA.hasOwnProperty(itemB));
  });
  }

  

  return afterFilter;
});

const pageItems = computed(() => {
  return items.value.slice(
    (page.value - 1) * ItemsOnPage,
    (page.value - 1) * ItemsOnPage + ItemsOnPage
  );
});

const pages = computed(() => {
  return Math.ceil(items.value.length / ItemsOnPage);
});

const updateHandler = () => {};
</script>

<!-- <script setup>


const route = useRoute();
const { data: catalogItems } = await useFetch(`/api/catalog?group=${route.params.group}`);



</script>

<script>
import CatalogItem from './components/CatalogItem';
import CatalogHero from './components/CatalogHero';
import CatalogFilter from './components/CatalogFilter';

export default {
  name: 'MainCatalog',
  props: {},




  computed: {
    items() {
      const filter = Object.entries(this.filter)
        .filter(([key, value]) => value)
        .map(([key, value]) => key);
        console.log(filter);
        console.log(this.catalogItems);
      return (this.catalogItems || []).filter((item) => {
        return item;
      });
    }
  },

  data() {
    return {
      titles: {
        welding: {caption: 'Сварочное оборудование', href: '/catalog/welding'},
        electro: {caption: 'Электрооборудование', href: '/catalog/electro'},
      },
      filter: {}
    };
  }
}
</script> -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.catalog_box {
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin-top: 30px;
  justify-content: center;
  grid-auto-rows: 360px;
}


.Pagination {
    margin: 25px 0;
    justify-content: center;
}
</style>
<!-- 
Array.from(document.querySelectorAll(".card-item")).map((cardItem) => { const
image = cardItem.querySelector(".front img").src; const desc =
cardItem.querySelector(".front .name-product").firstChild.nodeValue.trim();
const title = cardItem.querySelector(".front .name-product span").innerHTML;
const price = cardItem.querySelector(".front .price").innerHTML.trim(); const
table = cardItem.querySelector(".back .info-list").rows; const rows =
Array.from(table).map((r) => {return {key: r.cells[0].firstChild.innerHTML, val:
r.cells[1].innerHTML }}); return {image,desc,title,price,rows}; }); -->
