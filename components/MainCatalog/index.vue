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
  `/products?group=${route.params.group}`,
  { baseURL: process.env.BASE_URL || 'http://localhost:1337/api' }
);

const titles = {
  welding: { caption: "Сварочное оборудование", href: "/catalog/welding" },
  electro: { caption: "Электрооборудование", href: "/catalog/electro" },
  benzo: { caption: "Бензоинструмент", href: "/catalog/benzo" },
  gas: { caption: "Газосварочное", href: "/catalog/gas" },
  protection: { caption: "Маски", href: "/catalog/protection" },
  materials: { caption: "Расходные материалы", href: "/catalog/materials" },
  compressor: { caption: "Компрессоры и пневмоинструмент", href: "/catalog/compressor" },
};

const filter = useState("filter", () => ({}));

const page = useState("page", () => 1);

const ItemsOnPage = 12; // количество выводимых карточек в пагинации

const items = computed(() => {
  const filterObj = Object.entries(filter.value)
    .filter(([key, value]) => value)
    .map(([key, value]) => key);

  let afterFilter = [];

  if (!filterObj.length) {
    afterFilter = catalogItems.value.data.map((item) => ({
      id: item.id,
      name: item.attributes.name,
      price: item.attributes.price,
      desc: item.attributes.desc,
      image: item.attributes.image?.data?.attributes?.url || ''
    }));
  } else {
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

onMounted(() => {
  page.value = 1;
});
</script>

<style>
.catalog_box {
  display: grid;
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
