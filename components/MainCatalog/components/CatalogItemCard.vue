<template>
  <div class="wrapper">
    <BreadCrumbs :path="breadcrumbs" />

    <div v-if="product">
      <div class="product_card">
        <div class="img_box">
          <client-only>
            <CarouselComponent v-if="product.images && product.images.length" :images="product.images" />
          </client-only>
          <img v-if="product.images.length == 0" src="/assets/no_image.svg" alt="img">
        </div>
        <div class="info_product">
          <h1 class="title">
            <span>{{ product.type }}</span><br> {{ product.name }}
          </h1>
         <div class="price_box">
          <div class="type_welding" v-if="product.type_welding"> {{ product.type_welding }} </div>
          <div class="price"> {{ product.price ? `${product.price} руб.` : 'Цена по запросу' }}</div>
         </div>

          <div class="availability">
            <h2>Наличие в филиалах:</h2>
            <ul>
              <li
                v-for="(filial, index) in product.filials"
                :key="index"
              >
               <img src="/assets/ok.svg" alt="ok"> {{ filial.name }}
              </li>
            </ul>
          </div>

          <div class="info_list">
            <h2>Характеристики:</h2>
            <ul>
              <li
                v-for="(row, index) in product.property.rows"
                :key="index"
              >
                <span>{{ row.key }}:</span>  {{ row.val }}
              </li>
            </ul>
          </div>

          <div v-if="product.documents && product.documents.length" class="documents">
            <h2>Файлы:</h2>
            <ul>
              <li
                v-for="(doc, index) in product.documents"
                :key="index"
              >
                <a class="link_doc" :href="doc.url" target="_blank">
                  <img src="/assets/file.svg" alt="">{{ doc.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Загрузка...</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useFetch } from "#app";
import { defineAsyncComponent } from "vue";

const route = useRoute();
const productId = route.params.id;
const product = ref(null);
const breadcrumbs = ref([]);
const { data } = await useFetch(`/products/${productId}?populate=*`, {
  baseURL: "http://188.130.251.143/:1337/api",
});

if (data.value) {
  const item = data.value.data.attributes;

  // Получаем все изображения
  const images = item.img?.data?.map(
    (img) => `http://188.130.251.143/:1337${img.attributes.url}`
  ) || [];

  product.value = {
    id: data.value.data.id,
    name: item.name,
    category: item.kategoriya.data,
    type: item.type,
    price: item.price,
    images,
    property: item.property || { rows: [] },
    filials: item.filials?.data?.map((filial) => filial.attributes) || [],
    documents: item.instructions?.data?.map((doc) => ({
      name: doc.attributes.name,
      url: `http://188.130.251.143/:1337${doc.attributes.url}`,
    })) || [],
    type_welding: item.tip_svarochnika?.data?.attributes?.welding || null,
  };

  breadcrumbs.value = [
    {
      caption: product.value.category.attributes.name,
      href: `/catalog/${product.value.category.id}`,
    },
    { caption: item.name, href: `/product/${productId}` },
  ];
}

const CarouselComponent = defineAsyncComponent(() => import("./Carousel.vue"));
</script>

<style scoped>
.link_doc{
  display: flex;
  align-items: center;
  gap: 5px;
}
.price_box{
  display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
}
.type_welding{
  border-radius: 10px;
    text-transform: uppercase;
    background: #7a7f852e;
    padding: 10px;
    width: max-content;
}
.product_card a {
  color: black;
}
.product_card {
  display: flex;
  color: black;
  padding: 20px 0;
  gap: 50px;
}
.img_box {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 500px;
}
h2 {
  color: rgb(0 0 0);
  font-weight: 500;
  font-size: 17px;
  margin-bottom: 10px;
}
.image-container img {
  width: 100%;
}
.info_product {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.info_list ul {
  list-style-type: none;
  padding: 0;
}
.info_list li:nth-child(odd) {
  /* background-color: rgb(223 223 223 / 27%); */
}
.info_list li span {
  color: #292929;
}
.info_list li {
  padding: 5px;
  padding-left: 0px;
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.availability ul,
.documents ul {
  list-style-type: none;
  padding: 0;
}
.availability li img {
  width: 13px;
}
.availability li,
.documents li {
  margin-bottom: 10px;
  display: flex;
  gap: 5px;
  align-items: center;
}
.title span {
  font-size: 15px;
  line-height: 1.4;
  color: black;
  font-weight: 400;
}
.title {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
}
.price {
  font-size: 23px;
  font-weight: 600;
  color: #3395c5;
}
</style>
