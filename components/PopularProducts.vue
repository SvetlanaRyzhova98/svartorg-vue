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

// Fetch popular products
const { data } = await useFetch(
  `/api/products?populate=img&filters[product_day][$eq]=true`,
  {
    baseURL: baseUrl,
  }
);

if (data.value) {
  popularItem.value = data.value.data
    .map((product) => {
      const images = product.attributes.img?.data?.map(
        (img) => `${baseUrl}${img.attributes.formats.thumbnail?.url || img.attributes.url}`
      ) || [];

      return {
        src: images[0],
        name: product.attributes.name,
        id: product.id,
        price: product.price,
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
  left: 0;
  z-index: 999;
  font-size: 18px;
  font-weight: 600;
  transform: translate(50%, 0%);
}

.carousel__pagination-button::after {
  width: 10px !important;
  height: 10px !important;
  border-radius: 100% !important;
}
</style>
