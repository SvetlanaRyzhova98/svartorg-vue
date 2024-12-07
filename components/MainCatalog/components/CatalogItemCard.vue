<template>
  <div class="wrapper">
    <BreadCrumbs :path="breadcrumbs" />

    <div v-if="product">
      <div class="product_card">
        <div class="img_box">
          <client-only>
            <CarouselComponent
              v-if="product.images && product.images.length"
              :images="product.images"
            />
          </client-only>
          <img v-if="product.images.length == 0" src="/assets/no_image.svg" alt="img" />
        </div>
        <div class="info_product">
          <div class="flex gap-5 flex-col top-info">
            <h1 class="title">
              <span>{{ product.type }}</span
              ><br />
              {{ product.name }}
            </h1>
            <div class="price_box">
              <div class="type_welding" v-if="product.type_welding">
                {{ product.type_welding }}
              </div>
              <div class="price">
                {{ product.price ? `${product.price} руб.` : "Цена по запросу" }}
              </div>
            </div>
          </div>

          <div class="flex gap-10 property-box">
            <div class="info_list">
              <h2>Характеристики:</h2>
              <ul>
                <li v-for="(row, index) in product.property.rows" :key="index">
                  <span>{{ row.key }}:</span> {{ row.val }}
                </li>
              </ul>
            </div>

            <div class="gap-5 flex-col">
              <div class="flex gap-5 info-file-box">
                <div class="availability">
                  <h2>Наличие в филиалах:</h2>
                  <ul>
                    <li v-for="(filial, index) in product.filials" :key="index">
                      <img src="/assets/ok.svg" alt="ok" /> {{ filial.name }}
                    </li>
                    <li v-if="!product.filials.length">Под заказ</li>
                  </ul>
                </div>
                <div
                  v-if="product.documents && product.documents.length"
                  class="documents"
                >
                  <h2>Файлы:</h2>
                  <ul>
                    <li v-for="(doc, index) in product.documents" :key="index">
                      <a class="link_doc" :href="doc.url" target="_blank">
                        <img src="/assets/file.svg" alt="" />{{ doc.name }}</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
           
              <a
                :href="getWhatsappLink(product.name, !!product.price)"
                target="_blank"
                class="button_send"
              >
                <span v-if="!product.price">Запросить цену</span>
                <span v-else>Купить</span>
              </a>
            </div>
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
import { useLocationStore } from "../../../store/location";
import { Locations } from "../../../consts/location";
const location = useLocationStore();

const getWhatsappLink = (productName, hasPrice) => {
  const phone =   Locations[location.location]?.phone ; // Телефонный номер получателя
  const baseUrl = "https://api.whatsapp.com/send";

  // Формируем текст сообщения в зависимости от наличия цены
  const message = hasPrice
    ? `Здравствуйте! Пишу с сайта.\n\nМеня интересует товар "${productName}". Проконсультируйте, пожалуйста.`
    : `Здравствуйте! Пишу с сайта.\n\nПодскажите, пожалуйста, цену на товар "${productName}".`;

  const encodedMessage = encodeURIComponent(message);

  return `${baseUrl}/?phone=${phone}&text=${encodedMessage}&type=phone_number&app_absent=0`;

};

const route = useRoute();
const productId = route.params.id;
const product = ref(null);
const breadcrumbs = ref([]);
const { data } = await useFetch(`/products/${productId}?populate=*`, {
  baseURL: "https://galaktika-svarki.ru/api",
});

if (data.value) {
  const item = data.value.data.attributes;

  // Получаем все изображения
  const images =
    item.img?.data?.map((img) => `https://galaktika-svarki.ru${img.attributes.url}`) ||
    [];

  product.value = {
    id: data.value.data.id,
    name: item.name,
    category: item.kategoriya.data,
    type: item.type,
    price: item.price,
    images,
    property: item.property || { rows: [] },
    filials: item.filials?.data?.map((filial) => filial.attributes) || [],
    documents:
      item.instructions?.data?.map((doc) => ({
        name: doc.attributes.name,
        url: `https://galaktika-svarki.ru${doc.attributes.url}`,
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

<style>
.flex {
  display: flex;
}
.gap-5 {
  gap: 20px;
}
.gap-10 {
  gap: 40px;
}
.items-end {
  align-items: flex-end;
}
</style>

<style scoped>
.link_doc {
  display: flex;
  align-items: center;
  gap: 5px;
}
.price_box {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
}
.type_welding {
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
  margin-bottom: 30px;
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
  gap: 35px;
}
.info_list ul {
  list-style-type: none;
  padding: 0;
}
.info_list li:nth-child(odd) {
  /* background-color: rgb(223 223 223 / 27%); */
}
[data-theme="dark"] .info_list li span {
  color: #e1e1e1;
}
.info_list li span {
  color: #292929;
}
.info_list li {
  padding: 5px;
  gap: 30px;
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
  font-size: 16px;
  font-weight: 600;
  color: #3395c5;
}
a.button_send {
  border: none;
  background-color: #3395c5;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  height: min-content;
  text-align: center;
}

@media all and (max-width: 1300px) {
  .info-file-box {
    display: flex;
    flex-direction: column;
  }
  .carousel__slide img {
    min-height: 300px;
    max-height: 335px;
  }
  .product_card {
    gap: 30px;
  }
}

@media all and (max-width: 1000px) {
  div.top-info {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }
  .property-box {
    flex-direction: column;
  }
  .img_box {
    width: 50%;
  }
}
@media all and (max-width: 650px) {
  .product_card {
    flex-direction: column;
  }
  .img_box {
    width: 100%;
  }
}
</style>
