<template>
  <div class="wrapper">
    <!-- <BreadCrumbs :path="[{ caption: 'Поиск', href: '/catalog/1' }]" /> -->
    <h1 class="search_title">Результат поиска по запросу: {{ searchQuery }}</h1>

    {{ loading ? "Загрузка..." : "" }}

    <div v-if="!catalogItems.length" class="result_box">По запросу ничего не найдено. Попробуйте ввести иначе.</div>

    <div class="catalog_box">
      <MainCatalogItem
        v-if="catalogItems.length"
        v-for="(item, j) in catalogItems"
        :key="j"
        :item="item"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const data = ref(null);
const error = ref(null);

const route = useRoute();
const searchQuery = route.params.searchQuery;
const catalogItems = ref([]);
const loading = ref(false);

onMounted(async () => {
  async function fetchData() {
    loading.value = true;
    let ids = [];
    let page = 1;
    let pageSize = 100;
    while (true) {
      try {
        const query = `/products?fields[0]=name&fields[1]=type&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=id`;
        const response = await fetch(`https://galaktika-svarki.ru/api${query}`);
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const { data, meta } = await response.json();
        //
        const search = searchQuery.toLowerCase();
        console.log("search", search, data);
        ids.push(
          ...data
            .filter(
              ({ attributes }) =>
                attributes.name?.toLowerCase().includes(search) ||
                attributes.type?.toLowerCase().includes(search)
            )
            .map(({ id }) => id)
        );
        //
        if (page >= meta.pagination.pageCount) {
          break;
        }
        page = page + 1;
      } catch (err) {
        console.log(err);
        break;
      }
    }

    if (!ids.length) {
      loading.value = false;
      return;
    }

    try {
      const queryString = `${ids
        .map((id, index) => `filters[id][$in][${index}]=${id}`)
        .join("&")}&populate=img`;
      const resp = await fetch(`https://galaktika-svarki.ru/api/products?${queryString}`);
      const { data } = await resp.json();
      console.log("ids", data);

      catalogItems.value = data.map((item) => ({
        id: item.id,
        name: item.attributes.name,
        type: item.attributes.type,
        price: item.attributes.price,
        image: item.attributes.img?.data?.[0]?.attributes?.url || "",
      }));
    } catch (err) {
      console.log(err);
    }
    loading.value = false;
  }

  await fetchData();
});
</script>

<style>
.catalog_box {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
  margin: 30px 0;
  flex-wrap: wrap;
}
.search_title {
  margin: 30px 0 0px;
  font-size: 16px;
}
.result_box{
    padding: 20px 0;
    font-size: 20px;
}
@media all and (max-width: 800px) {
  .catalog_box {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media all and (max-width: 500px) {
  .catalog_box {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
