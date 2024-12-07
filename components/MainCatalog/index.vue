<template>
  <div class="wrapper">
    <BreadCrumbs :path="[titles[categoryId]]" />

    <CatalogFilter :group="categoryId" v-model="filter" :tags="tags" />

    <div class="catalog_box">

      <MainCatalogItem v-for="(item, j) in items" :key="item.id" :item="item" />
      
    </div>

    <div v-if="catalogItemsServer" class="flex justify-center">
      <vue-awesome-paginate
        :total-items="catalogItemsServer"
        :items-per-page="SIZE"
        :max-pages-shown="5"
        v-model="page"
        @click="onClickHandler"
      />

    </div>

  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useFetch, useAsyncData } from "#app";
import { useRouter, useRoute } from "vue-router";

import CatalogFilter from "./components/CatalogFilter";

const router = useRouter();
const route = useRoute();
const categoryId = route.params.id;
const tag = route.query.tag;

const page = ref(route.query.page ? Number(route.query.page) : 1);

function updateQueryParam(key, value) {
  router.push({
    path: route.path, // текущий путь
    query: {
      ...route.query, // сохраняем текущие query-параметры
      [key]: value, // добавляем или изменяем новый query-параметр
    },
  });
}

const titles = {
  1: { caption: "Сварочное оборудование", href: "/catalog/1" },
  2: { caption: "Газосварочное", href: "/catalog/2" },
  3: { caption: "Бензоинструмент", href: "/catalog/3" },
  4: { caption: "Маски", href: "/catalog/4" },
  5: { caption: "Электроинструмент", href: "/catalog/5" },
  6: { caption: "Расходные материалы", href: "/catalog/6" },
  7: { caption: "Компрессоры и пневмоинструмент", href: "/catalog/7" },
};

const filter = ref({});
const catalogItems = ref([]);
const catalogItemsServer = ref(0);
const SIZE = 30;
const tags = ref([]);

const onClickHandler = async (pageId) => {
  //   console.log(page);
  //   updateQueryParam("page", pageId);
  //   await fetchData(tag, SIZE, page.value);
  page.value = pageId;
  updateQueryParam("page", pageId);
  await fetchData(tag, SIZE, page.value);
};

const fetchData = async (tag = null, size, page) => {
  let query = `/products?populate=*&filters[kategoriya][$eq]=${categoryId}&pagination[pageSize]=${size}&pagination[page]=${page}&sort=id`;
  if (tag) {
    query += `&filters[tegs][id][$eq]=${tag}`;
  }

  console.log(query);
  // const { data } = await useFetch(query, { baseURL: "http://localhost:1337/api" });
  // await useFetch(query, { baseURL: "http://localhost:1337/api" });

  const [{ data }, { data: categoriesData }] = await Promise.all([
    useFetch(query, { baseURL: "https://galaktika-svarki.ru/api" }),
    useFetch(`/categories/${categoryId}?populate=tegs`, {
      baseURL: "https://galaktika-svarki.ru/api",
    }),
  ]);

  console.log(data);

  if (data.value) {
    catalogItems.value = data.value.data.map((item) => ({
      id: item.id,
      name: item.attributes.name,
      type: item.attributes.type,
      price: item.attributes.price,
      desc: item.attributes.desc,
      image: item.attributes.img?.data?.[0]?.attributes?.url || "",
      tags: item.attributes.tegs.data.map((tag) => tag.attributes.name),
    }));

    tags.value = categoriesData.value.data.attributes.tegs.data;

    catalogItemsServer.value = data.value.meta.pagination.total;
  }
};

await fetchData(tag, SIZE, page.value);

const items = computed(() => {
  const filterObj = Object.entries(filter.value)
    .filter(([key, value]) => value)
    .map(([key, value]) => key);

  let afterFilter = [];

  if (!filterObj.length) {
    afterFilter = catalogItems.value;
  } else {
    afterFilter = catalogItems.value.filter((item) => {
      return item.tags.some((tag) => filterObj.includes(tag));
    });
  }

  return afterFilter;
});

// Слушаем изменения параметра фильтра в URL
watch(
  () => route.query.tag,
  async (tagId) => {
    page.value = 1;
    updateQueryParam("page", page.value);
    await fetchData(tagId, SIZE, page.value);
  }
);

// watch(
//   () => route.query.page,
//   async (pageId) => {
//     page.value = pageId;
//     updateQueryParam("page", page.value);
//     await fetchData(tagId, SIZE, page.value);
//   }
// );

// watchEffect(() => {
//   debugger
//   if (filter.value.tag) {
//     debugger
//     fetchData(filter.value.tag);
//   } else {
//     debugger
//     fetchData();
//   }
// });
</script>

<style>
.catalog_box {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
  margin: 30px 0;
  flex-wrap: wrap;
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
