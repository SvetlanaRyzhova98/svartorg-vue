<template> 
  
  <div v-if="product" class="prod_box">
    <MainCatalogItemCard :product="product" />
   </div>
</template>

<script setup>
const baseURL = process.env.BASE_URL || "http://localhost:1337";
const route = useRoute();
const { data } = await useFetch(`/products/${route.params.id}?populate=img`, {
  baseURL: process.env.BASE_URL || "http://localhost:1337/api",
});

const product = data.value.data ? {
  id: data.value.data.id,
  name: data.value.data.attributes.name,
  price: data.value.data.attributes.price,
  property: data.value.data.attributes.property,
  image: baseURL + data.value.data.attributes.img.data[0]?.attributes?.url || '',
} : null;
</script>

<style scoped>
.prod_box{
  color: black;
  padding: 80px 0;
}


</style>