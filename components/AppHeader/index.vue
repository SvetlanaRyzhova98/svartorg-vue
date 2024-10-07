<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header_top">
        <Location />
        <nav class="header__nav">
          <ul class="header__list">
            <li class="header__item">
              <NuxtLink to="/services" class="header__link">Услуги</NuxtLink>
            </li>
            <li class="header__item">
              <NuxtLink class="header__link" to="/contacts">Контакты</NuxtLink>
            </li>
            <li class="header__item">
              <NuxtLink to="/articles" class="header__link">Инфо</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="header_bottom">
        <div class="bottom_panel" ref="bottomPanel">
          <NuxtLink class="header__logo" to="/">
            <img
              class="logo_img"
              src="/assets/Logo-total-black.svg"
              alt="Галактика сварки"
            />
          </NuxtLink>
          <div class="bottom_panel-button">
            <button class="button__catalog" @click="toggleCategories">
              Продукция <span>▼</span>
            </button>
            <ul class="header__sublist" v-if="showCategories">
              <li v-for="category in categories" :key="category.id">
                <NuxtLink
                  class="header__link header__link--sub"
                  :to="`/catalog/${category.id}`"
                  @click="closeCategories"
                >
                  {{ category.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <SearchComponent />
        <HeaderLocation />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useFetch } from "#app";

const categories = ref([]);
const showCategories = ref(false);

// Функция для переключения видимости категорий
const toggleCategories = () => {
  showCategories.value = !showCategories.value;
};

// Функция для закрытия меню
const closeCategories = () => {
  showCategories.value = false;
};

// Получение категорий с сервера
const { data: categoriesData, error } = await useFetch(
  "http://188.130.251.143:1337/api/categories"
);

if (error.value) {
  console.error("Ошибка при получении категорий:", error.value);
} else {
  categories.value = categoriesData.value.data.map((category) => ({
    id: category.id,
    name: category.attributes.name,
  }));
}

// Закрытие меню при клике вне его области
const handleClickOutside = (event) => {
  const bottomPanel = document.querySelector(".bottom_panel");
  if (!bottomPanel.contains(event.target)) {
    closeCategories();
  }
};

// Добавляем слушатель события клика
onMounted(() => {
  window.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener("click", handleClickOutside);
});
</script>

<style>
.logo_img {
  min-width: 150px;
  max-width: 150px;
}

.line {
  border-top: 2px solid rgb(71, 66, 66);
  margin: 0 auto;
  width: 60% !important;
  padding-top: 30px !important;
  margin-top: 30px;
}
/*header*/
.icon {
  margin: 0 5px;
}
.header__wrapper {
  display: flex;
  width: 100%;
  font-family: "Gilroy", sans-serif;
  max-width: 1440px;
  margin: 0 auto;
  flex-direction: column;
}
.header_bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
}
.header_top {
  width: 100%;
  display: flex;
  gap: 300px;
}
.header {
  width: 100%;
  display: flex;
  z-index: 99;
  transition: 1.5s;
}
.header__nav {
  display: flex;
}
.header__item {
  position: relative;
}
.header__link {
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 14px;
  text-decoration: none;
  color: #333333;
}
.bottom_panel {
  background-color: #e8e5e5;
  border-radius: 10px;
  padding: 16px 20px;
  display: flex;
  max-width: -moz-max-content;
  max-width: max-content;
  align-items: center;
  gap: 50px;
  height: 70px;
  width: 100%;
}
.header__sublist {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 15px;
  justify-content: flex-start;
  border-radius: 8px;
  box-shadow: 7px 7px 13px 0px #1311119c;
  z-index: 100;

  position: absolute;
  top: 50px;
  height: auto;
  left: 0;
  background: #fff;
  gap: 15px;
}
.header__link--sub {
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 16px;
}

.header__link:hover,
.header__link:active,
.header__link:focus {
  color: var(--blue);
  transition: 0.4s linear;
  outline-style: none;
}
.header__logo {
  margin-right: auto;
  flex: 1;
  width: max-content;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header__list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: end;
  gap: 25px;
}
.header__link_cont-mobile {
  display: none;
}
.header__contact {
  display: flex;
  gap: 15px;
}
.header__link.header__link_cont {
  font-size: 14px;
  color: #333333;
}
.button__catalog {
  background-color: white;
  border-radius: 5px;
  padding: 10px 14px;
  font-family: 'Gilroy';
  font-size: 16px;
  height: 100%;
  border: none;
  font-weight: 500;
}
.button__catalog span {
  font-size: 10px;
}
.bottom_panel-button {
  position: relative;
}
@media all and (max-width: 1200px) {
  .header__wrapper {
    padding: 0 15px;
  }
}
</style>
