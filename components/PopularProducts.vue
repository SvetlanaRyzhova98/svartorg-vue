<template>
  <div class="popular_container relative">
    <div class="title_carousel">Популярные товары</div>
    <client-only>
      <CarouselComponent v-if="popularItem.length" :product="popularItem" />
    </client-only>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useFetch } from "#app";
import { defineAsyncComponent } from "vue";
import { baseUrl } from "../consts/configServ.js";

// Asynchronous loading of the carousel component
const CarouselComponent = defineAsyncComponent(() => import("./CarouselPopular.vue"));

// Create a variable to store popular items
const popularItem = ref([]);
let dataValue = null;

// Fetch popular products
const { data } = await useFetch(
  `/api/products?populate=img&filters[product_day][$eq]=true`,
  {
    baseURL: baseUrl,
  }
);

if (data.value) {
  dataValue = data.value.data;
  popularItem.value = dataValue
    .map((product) => {
      const images = product.attributes.img?.data?.map(
        (img) => `${baseUrl}${img.attributes.url || img.attributes.url}`
      ) || [];

      return {
        src: images[0],
        name: product.attributes.name,
        type: product.attributes.type,
        id: product.id,
        price: product.attributes.price,
      };
    })
    .filter(Boolean);
}
</script>

<style scoped>
.popular_container {
  position: relative;
}

.title_carousel {
  position: absolute;
  top: 30px;
  left: 50%;
  white-space: nowrap;
  z-index: 9;
  font-size: 18px;
  font-weight: 500;
  transform: translate(-50%, 0%);
}

.carousel__pagination-button::after {
  width: 10px !important;
  height: 10px !important;
  border-radius: 100% !important;
}
</style>
