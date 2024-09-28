<template>
  <div class="banner v1">
    <client-only>
      <CarouselComponent v-if="bannerImages.length" :images="bannerImages" />
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

// Создаем переменную для хранения изображений всех баннеров
const bannerImages = ref([]);

// Запрос на получение данных о конкретном баннере по его ID
const { data } = await useFetch(`/api/banners/1?populate=*`, {
  baseURL: baseUrl,
});

if (data.value) {
  // Извлекаем URL изображений баннера
  bannerImages.value = data.value.data.attributes.banner.data.map(
    (banner) => `${baseUrl}${banner.attributes.url}`
  );
}
</script>

<style scoped>
.banner {
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
