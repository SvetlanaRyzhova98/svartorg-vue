<template>
  <div>
    <h1>{{ categoryName }}</h1>
    <div v-if="products && products.length">
      <MainCatalogItem v-for="item in products" :key="item.id" :item="item" />
    </div>
    <div v-else>
      <p>No products found for this category.</p>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from '#app'
import { useRoute } from 'vue-router'
import MainCatalogItem from '~/components/MainCatalog/components/CatalogItem.vue'

const route = useRoute()
const categoryId = route.params.id

const { data: productsData } = await useFetch(`http://localhost:1337/api/products`, {
  params: {
    populate: '*',
    'filters[kategoriya][$eq]': categoryId,
    'pagination[page]': 1
  }
})

const products = productsData.value.data.map(product => ({
  id: product.id,
  name: product.attributes.name,
  desc: product.attributes.desc,
  price: product.attributes.price,
  image: product.attributes.image ? product.attributes.image.url : ''
}))

const { data: categoryData } = await useFetch(`http://localhost:1337/api/categories/${categoryId}`)
const categoryName = categoryData.value.data.attributes.name
</script>
