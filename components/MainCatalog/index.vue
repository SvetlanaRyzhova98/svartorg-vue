<template>
  <div class="wrapper">
    <BreadCrumbs :path="[titles[categoryId]]" />

    <CatalogFilter
      :group="categoryId"
      v-model="filter"
      :tags="tags"
    />

    <div class="catalog_box">
      <MainCatalogItem
        v-for="(item, j) in items"
        :key="j"
        :item="item"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useFetch, useAsyncData } from "#app";
import { useRoute } from "vue-router";

import CatalogFilter from "./components/CatalogFilter";

const route = useRoute();
const categoryId = route.params.id;
const tag = route.query.tag;

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
const tags = ref([]);

const fetchData = async (tag = null) => {
  let query = `/products?populate=*&filters[kategoriya][$eq]=${categoryId}`;
  if (tag) {
    query += `&filters[tegs][id][$eq]=${tag}`;
  }

  // const { data } = await useFetch(query, { baseURL: "http://localhost:1337/api" });
  // await useFetch(query, { baseURL: "http://localhost:1337/api" });

  const [{data}, {data: categoriesData}] = await Promise.all([
    useFetch(query, { baseURL: "http://188.130.251.143:1337/api" }),
    useFetch(`/categories/${categoryId}?populate=tegs`, { baseURL: "http://188.130.251.143:1337/api" })
  ])

  if (data.value) {
    catalogItems.value = data.value.data.map((item) => ({
      id: item.id,
      name: item.attributes.name,
      type: item.attributes.type,
      price: item.attributes.price,
      desc: item.attributes.desc,
      image: item.attributes.img?.data?.[0]?.attributes?.url || "",
      tags: item.attributes.tegs.data.map(tag => tag.attributes.name)
    }));

    tags.value = categoriesData.value.data.attributes.tegs.data;
  }
};

await fetchData(tag);

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
watch(() => route.query.tag, async (tagId) => {
  await fetchData(tagId);
});

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
