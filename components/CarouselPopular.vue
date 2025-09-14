<template>
  <div class="img_box">
    <Carousel :breakpoints="config.breakpoints">
      <slide v-for="item in product" :key="item.id">
                <!-- <a class="relative popular_img_box" :href="`/product/${item.id}`"> -->
        <NuxtLink class="relative popular_img_box" :to="`/product/${item.id}`">
          <img :src="item.src" alt="Продукт" />
          <div class="popular_info_box absolute">
            <div class="title_popular">{{ item.name }}</div>
            <div class="title_popular_type">{{ item.type }}</div>
            <!-- 
            <div class="title_price">{{ item.price }} руб.</div> -->
          </div>
        </NuxtLink>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { reactive } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const props = defineProps({
  product: {
    type: Array,
    required: true,
  },
});

const config = reactive({
  breakpoints: {
    360: {
      itemsToShow: 2,
      snapAlign: "start",
    },
    800: {
      itemsToShow: 1,
      snapAlign: "start",
    },
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
  bottom: 20px;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  color: #333;
  max-width: 200px;
  width: 100%;
}

.title_popular {
  font-size: 16px;
  font-weight: 500;
  font-family: "Gilroy", sans-serif;
}

.title_popular_type {
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 5px;
  width: 100%;
  font-family: "Gilroy", sans-serif;
}

.title_price {
  font-size: 14px;
  text-align: start;
}
[data-theme="dark"] .popular_img_box {
  background: #2e2e2e;
}
[data-theme="dark"] .popular_info_box * {
  color: #e1e1e1;
}
@media (max-width: 1000px) {
  .popular_img_box img {
    object-fit: contain;
  }
  .popular_info_box.absolute {
    bottom: 15px;
  }
  .carousel__viewport .carousel__slide img {
    min-height: 300px;
  }
}
</style>
