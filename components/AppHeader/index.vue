<template>
 
    <header class="header">
      <div class="header__wrapper">
        <NuxtLink class="header__logo" to="/">
          <img class="logo_img" src="./assets/logo1.svg" alt="Галактика сварки" />
        </NuxtLink>

        <nav class="header__nav">
          <ul class="header__list">
            <li class="header__item">
              <div class="header__link">Продукция</div>
              <ul class="header__sublist">
                <li v-for="category in categories" :key="category.id">
                  <NuxtLink
                    class="header__link header__link--sub"
                    :to="`/catalog/${category.id}`"
                  >
                    {{ category.name }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li class="header__item">
              <NuxtLink to="/services" class="header__link">Услуги</NuxtLink>
            </li>
            <li class="header__item">
              <NuxtLink class="header__link" to="/contacts">Контакты </NuxtLink>
            </li>
            <li class="header__item">
              <NuxtLink to="/articles" class="header__link">Инфо</NuxtLink>
            </li>
          </ul>

          <HeaderLocation />

          <div @click="onMobileMenuClick" class="menu-burger">
            <span></span>
          </div>
        </nav>
      </div>

      <div
        class="menu-mobile"
        :class="{ 'menu-mobile-active': isMobileMenuOpen }"
      >
        <nav class="nav">
          <ul class="mobile-header__list">
            <li v-for="category in categories" :key="category.id">
              <NuxtLink
                @click="myEventHandler"
                class="header__link"
                :to="`/catalog/${category.id}`"
              >
                {{ category.name }}
              </NuxtLink>
            </li>

            <li class="header__item line">
              <NuxtLink
                @click="myEventHandler"
                class="header__link"
                to="/contacts"
                >Контакты</NuxtLink>
              >
            </li>
            <li class="header__item">
              <NuxtLink
                @click="myEventHandler"
                class="header__link"
                to="/articles"
                >Полезная информация</NuxtLink>
              >
            </li>
          </ul>
        </nav>
      </div>
    </header>
 
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useFetch } from '#app'

const isMobileMenuOpen = ref(false)
const categories = ref([])

const onMobileMenuClick = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const myEventHandler = () => {
  isMobileMenuOpen.value = false
}

// Fetch categories on the server-side
const { data: categoriesData, error } = await useFetch('http://localhost:1337/api/categories')

if (error.value) {
  console.error('Error fetching categories:', error.value)
} else {
  categories.value = categoriesData.value.data.map(category => ({
    id: category.id,
    name: category.attributes.name
  }))
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', myEventHandler)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', myEventHandler)
  }
})
</script>


<style>
.menu-mobile {
  position: absolute;
  top: 80px;
  background: black;
  width: 100%;
  display: flex;
  transition: 0.5s;
  z-index: 9;
  max-height: 0;
  overflow: hidden;
}
.menu-mobile nav {
  width: 100%;
}
.menu-mobile .mobile-header__list {
  width: 100%;
}
.menu-mobile .mobile-header__list .header__item {
  font-weight: 700;
  padding: 17px 0;
  display: flex;
  justify-content: center;
  width: 100%;
}
.menu-mobile .mobile-header__list .header__item .header__link {
  font-weight: 700;
}
.menu-mobile .mobile-header__list .header__item .header__link {
  font-weight: 700;
}
.menu-mobile .mobile-header__list .header__item:first-child {
  margin-top: 30px;
}
.menu-mobile-active {
  top: 80px;
  height: calc(100vh - 80px);
  max-height: calc(100vh - 80px);
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
  align-items: center;
  padding: 11px 0;
  width: 100%;
  justify-content: center;
  max-width: 1920px;
  margin: 0 auto;
}
.header {
  background: black;
  width: 100%;
  display: flex;
  z-index: 99;
  transition: 1.5s;
}
.header__nav {
  display: flex;
  margin-right: auto;
  flex: 2;
  justify-content: space-around;
}
.header__item {
  position: relative;
}
.header__link {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-decoration: none;
  color: white;
}
.header__sublist {
  position: absolute;
  top: 19px;
  /* left: -20px; */
  height: 300px;
  left: -17px;
  display: flex;
  flex-direction: column;
  background: black;
  align-items: flex-start;
  padding: 5px 15px;
  justify-content: space-evenly;
  display: none;
  border-radius: 8px;
  box-shadow: 7px 7px 13px 0px #1311119c;
}
.header__item:hover .header__sublist {
  display: flex;
}
.header__link--sub {
  margin-bottom: 10px;
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
  margin: 0 20px;
  flex: 1;
  max-width: 180px;
  height: 100%;
  width: 100%;
  /* background: url(../img/svg/logo_short-white.svg) center no-repeat; */
  background-size: contain;
  margin: 0 0 0 10px;
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
  font-size: 13px;
  color: var(--blue);
}

.menu-burger {
  position: relative;
  width: 24px;
  height: 24px;
  display: block;
  margin-left: 40px;
  margin-right: 20px;
}
.menu-burger:after,
.menu-burger:before {
  content: "";
}

.menu-burger span,
.menu-burger::after,
.menu-burger::before {
  height: 4px;
  width: 100%;
  position: absolute;
  background: #359acbf7;
  margin: 0 auto;
}
.menu-burger span {
  top: 10px;
}
.menu-burger:after {
  top: 0;
}
.menu-burger::before {
  bottom: 0;
}
.menu-burger {
  display: none;
}
.menu-burger.open span {
  opacity: 0;
}
.menu-burger.open span::after {
  transform: rotate(45deg);
}

@media all and (max-width: 1000px) {
  /*   
  .header__logo img{
  }
  .header__logo{
    height: 100%;
    width: 100%;
    background: url(../img/svg/logo_short-white.svg) center no-repeat;
    background-size: contain;
    max-width: 80px;
    margin: 0;
   }*/
  .header__contact {
    display: none;
  }
}
@media all and (max-width: 800px) {
  .header__list {
    gap: 0px;
  }
  .header__link_cont {
    display: none;
  }
  .header__link_cont.header__link_cont-mobile {
    display: block;
    font-size: 25px;
  }
  .header__link {
    font-size: 16px;
    line-height: 19px;
    padding-right: 15px;
  }
}

@media all and (max-width: 600px) {
  .header__list {
    display: none;
  }
  .menu-burger {
    display: block;
  }
  .header__nav {
    justify-content: end;
  }
}
</style>
