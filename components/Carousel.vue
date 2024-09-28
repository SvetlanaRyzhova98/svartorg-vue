<template>
  <div class="img_box">
  <carousel :items-to-show="1">

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
    
  </carousel>
</div>
    
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

</script>

<style scoped>

img {
  width: 100%;
  height:  100%;
  object-fit: cover;
}

</style>
