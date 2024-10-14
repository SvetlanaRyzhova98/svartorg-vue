<template>
  <div>
    <NuxtLink :to="`/product/${item.id}`"  class="card_item">
      <img
        :src="getImageUrl(item.image)"
        alt="Продукт каталога"
      />
      <div class="catalog_desc">
        <p class="name-product">
          {{ item.name }}
          <span>{{ item.type }}</span>
        </p>
        <div class="price">
          {{ item.price ? `${item.price} руб.` : 'Цена по запросу' }}
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  item: Object,
});
const placeholderImage = '/assets/no_image.svg';  
const getImageUrl = (image) => {
  return image ?  "http://188.130.251.143:1337" + image : placeholderImage;
};
</script>

<style scoped>
.breadcrumbs {
  display: flex;
  justify-content: start;
  margin-top: 20px;
  font-size: 13px;
}
.breadcrumbs li a {
  color: rgba(34, 41, 51, 0.6);
  margin: 0 5px;
  font-style: italic;
}
.breadcrumbs span {
  font-style: italic;
  color: rgba(34, 41, 51, 0.6);
}

.name-product {
  color: black;
  font-size: 15px;
}

.name-product span {
  font-weight: 600;
  display: block;
  padding: 5px 0;
  font-size: 13px;
}
.catalog_desc {
  margin: 15px 0 0 0;
  color: grey;
  text-align: center;
  font-size: 14px;
  margin-top: auto;
  gap: 6px;
  display: flex;
  flex-direction: column;
}

.card_item img {
  width: 100%;
}
.card_item {
  display: flex;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  max-width: 250px;
  height: 100%;
  background: white;
}
.item-info {
  width: 100%;
  transition: 1s all;
  height: 100%;
  border-radius: inherit;
}

.price {
  font-size: 16px;
  line-height: 25px;
  text-align: center;
}
.info-btn:hover {
  color: var(--blue);
}
.info-list {
  padding: 15px;
  width: 100%;
  color: black;
}

.card {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.3s linear;
  border-radius: 20px;
  border: 1px solid grey;
  background: white;
}
.card-item:hover img {
  transform: scale(1.05);
}
.card-item:hover {
  cursor: pointer;
}

.card-item-hover .card {
  transform: rotateY(180deg);
}
.card-item-hover .front {
  display: none;
}
.card-item-hover .back {
  display: block;
}

.front {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background-color: white;
  backface-visibility: hidden;
  border-radius: 20px;
  margin: 15px;
}

strong {
  font-weight: bold;
}

@media all and (max-width: 800px) {
}
</style>
