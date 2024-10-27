<template>
    <Carousel v-bind="config">
    <slide
      v-for="(img, index) in images"
      :key="img"
    >
      <img
        :src="img"
        alt="Продукт"
      />
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
    
  </Carousel>
    
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});
const config = {
  breakpoints: {
    200: {
      slidesPerView: 2,
      snapAlign: 'center',
    },
    400: {
      slidesPerView: 3,
      snapAlign: 'start',
    },
    900: {
      slidesPerView: 1,
      snapAlign: 'start',
    },
  },
};

console.log(props);

</script>

<style scoped>
img {
  width: 100%;
  height: auto;
  object-fit: contain;
}
</style>
