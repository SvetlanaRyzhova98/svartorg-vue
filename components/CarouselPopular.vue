<template>
  <div class="img_box">
    <carousel :items-to-show="1">
      <slide v-for="item in product" :key="item.id">
        <a class="relative popular_img_box" :href="`/product/${item.id}`">
          <img :src="item.src" alt="Продукт" />
          <div class="popular_info_box absolute">
            <div class="title_popular">{{ item.name }}</div>
            <div class="title_popular_type">{{ item.type }}</div>

            <div class="title_price">{{ item.price }} руб.</div>
          </div>
        </a>
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
.popular_info_box {
  display: flex;
  gap: 5px;
  left: 50%;
  transform: translate(-50%, 0%);
  bottom: 30px;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  color: #333;
  max-width: 200px;
  width: 100%;
}

.title_popular {
  font-size: 16px;
  font-weight: 600;
}

.title_popular_type {
  font-size: 12px;
  width: 100%;
  font-weight: 500;
  margin-bottom: 5px;
}

.title_price {
  font-size: 14px;
  text-align: start;
}
</style>
