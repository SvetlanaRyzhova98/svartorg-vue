<template>
  <div class="popular_container relative">
    <!-- Отображаем компонент карусели только если есть данные -->
     <div class="title">{{popularItemName}}</div>
    <client-only>
      <CarouselComponent v-if="popularItemImages.length" :images="popularItemImages" />
    </client-only>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useFetch } from "#app";
import { defineAsyncComponent } from "vue";
import { baseUrl } from "../consts/configServ.js";

// Асинхронная загрузка компонента карусели
const CarouselComponent = defineAsyncComponent(() => import("./Carousel.vue"));

// Создаем переменные для хранения данных
const popularItemImages = ref([]);
const popularItemName = ref([]);

// Запрос на получение данных о популярных товарах
const { data } = await useFetch(`/api/products?populate=img&filters[product_day][$eq]=true`, {
  baseURL: baseUrl,
});

if (data.value) {
   
  popularItemImages.value = data.value.data.map((product) => {
    const images = product.attributes.img?.data?.map(
      (img) => `${baseUrl}${img.attributes.formats.thumbnail?.url || img.attributes.url}`
    ) || [];
     
    return images[0];  
  }).filter(Boolean); 

  popularItemName.value = data.value.data.map((product) => {
    return product.attributes.name;
  });

  console.log(popularItemName.value);  
}
</script>

<style scoped>
.popular_container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
}
section.carousel {
  margin: 0;
  padding: 0;
}

.carousel__pagination-button::after {
  width: 10px !important;
  height: 10px !important;
  border-radius: 100% !important;
}
</style>
