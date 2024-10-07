<template>
  <div class="img_box">
    <carousel :items-to-show="1">
      <slide v-for="(img, index) in product" :key="img.id">
        <div class="relative popular_img_box">
          <img :src="img.src" alt="Продукт" />
          <div class="absolute title_popular">{{ img.price }}</div>
          <div class="absolute title_popular">{{ img.name }}</div>
        </div>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const props = defineProps({
  product: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.popular_img_box {
  border-radius: 10px;
  background: #f6f4f5;
  width: 100%;
}

.popular_img_box img {
  width: 65%;
  height: 100%;
  object-fit: contain;
}

.title_popular {
  color: black;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, 0%);
}
</style>
