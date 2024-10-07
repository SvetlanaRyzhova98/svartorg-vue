<template>
  <input type="text" class="input-search">
</template>

<script setup>
import { ref } from "vue";
import { useFetch } from "#app";
import { defineAsyncComponent } from "vue";
import { baseUrl } from "../consts/configServ.js";

// Асинхронная загрузка компонента карусели
const CarouselComponent = defineAsyncComponent(() => import("./Carousel.vue"));
</script>

<style scoped>
.banner_box {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
}
 .input-search{
  background: #E8E5E5;
  border: none;
  padding: 25px;
  border-radius: 10px;
  width: 100%;
  height: 70px;
 }
 
</style>
