<template>
  <NuxtLink :to="`/product/${item.id}`" class="card-item">
    <div class="card">
      <div class="front">
        <img :src="item.image" alt="Продукт каталога" />
        <div class="catalog_desc">
          <p class="name-product">
            {{ item.name }}
            <span>{{ item.desc }}</span>
          </p>
          <div class="price">{{ item.price }}</div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'CatalogItem',
  props: {
    item: Object
  }
}
</script>

<style scoped>
.breadcrumbs{
  display: flex;
  justify-content: start;
  margin-top: 20px;
  font-size: 13px;
}
.breadcrumbs li a{
  color: rgba(34,41,51,0.6);
  margin: 0 5px;
  font-style: italic;
}
.breadcrumbs span {
  font-style: italic;
  color: rgba(34, 41, 51, 0.6);
}

.catalog_box {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin-top: 30px;
  justify-content: center;
  grid-auto-rows: 360px;
}

.name-product {
  color: black;
  font-size: 15px;
}

.name-product span {
  font-weight: bold;
  display: block;
  padding: 7px 0;
}
.catalog_desc {
  margin: 15px 0 0 0;
  color: grey;
  text-align: center;
  font-size: 14px;
}
 
.card-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
}
.item-info {
  width: 100%;
  transition: 1s all;
  height: 100%;
  border-radius: inherit;
}

.price {
  font-size: 18px;
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
.card-item {
  margin: 0px auto;
  perspective: 400px;
  width: 100%;
  z-index: 73;
  max-width: 265px;
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
