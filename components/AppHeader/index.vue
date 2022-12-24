<template>
    <div>
        <header class="header">
      <div class="header__wrapper">
        <NuxtLink class="header__logo" to="/">
            <img class="logo_img" src="./assets/logo1.svg" alt="Logo" />
        </NuxtLink>
        
        <nav class="header__nav">
          <ul class="header__list">
            <li class="header__item">
              <a class="header__link">Продукция</a>
              <ul class="header__sublist">
                <li><NuxtLink class="header__link header__link--sub" to="/catalog/welding">Сварочное оборудование</NuxtLink></li>
                <li><NuxtLink class="header__link header__link--sub" to="/catalog">Электроинструмент</NuxtLink></li>
                <li><NuxtLink class="header__link header__link--sub" to="/catalog">Бензоинструмент</NuxtLink></li>
                <li><NuxtLink class="header__link header__link--sub" to="/catalog">Газосварочное</NuxtLink></li>
                <li><NuxtLink class="header__link header__link--sub" to="/catalog">Маски</NuxtLink></li>
                <li><NuxtLink class="header__link header__link--sub" to="/catalog">Расходные материалы</NuxtLink></li>
              </ul>
            </li>
            <li class="header__item">
              <NuxtLink  to="/services" class="header__link">Услуги</NuxtLink>
            </li>
            <li class="header__item">
              <NuxtLink class="header__link" to="/contacts" >Контакты </NuxtLink>
            </li>
            <li class="header__item">
              <NuxtLink to="/about" class="header__link">О компании</NuxtLink>
            </li>
          </ul>

         
          
          <HeaderLocation />

          <div @click="onMobileMenuClick" class="menu-burger">
            <span></span>
          </div>
        </nav>
      </div>



      <div class="menu-mobile" :class="{'menu-mobile-active': isMobileMenuOpen}">
        
        <nav class="nav">
          <ul class="mobile-header__list">
            <li class="header__item">
              <NuxtLink class="header__link" to="/">Сварочное оборудование</NuxtLink>
            </li>
            <li class="header__item">
              <a href="#!" class="header__link">Применение</a>
            </li>
            <li class="header__item">
              <a href="#!" class="header__link">Документация</a>
            </li>
            <li class="header__item">
              <a href="#!" class="header__link">Контакты</a>
            </li>
            <li class="header__item">
              <a href="#!" class="header__link">Hовости</a>
            </li>
          </ul>
        </nav>
      </div>



    </header>
    </div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
  },
  data() {return {isMobileMenuOpen: false}},
  methods: {
    onMobileMenuClick() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    myEventHandler(e) {
      this.isMobileMenuOpen = false;
    }
  },
  created() {
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", this.myEventHandler);
    }
  },
  destroyed() {
    if (typeof window !== 'undefined') {
      window.removeEventListener("resize", this.myEventHandler);
    }
  }
}
</script>



<style>

.menu-mobile {
  position: absolute;
  top: 80px;
    background: black;
    width: 100%;
    display: flex;
    transition: 1s;
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
    border-bottom: 1px solid #3d3d3d;
}
.menu-mobile .mobile-header__list .header__item .header__link {
  font-weight: 700;
}
.menu-mobile-active {
  
  top: 80px;
  height: auto;
  max-height: 500px;
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
  position: fixed;
  width: 100%;
  display: flex;
  z-index: 99;
  min-height: 80px;
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
    height: 200px;
    left: -17px;
    display: flex;
    flex-direction: column;
    background: black;
    align-items: flex-start;
    padding: 5px 15px;
    justify-content: space-evenly;
    display: none;
}
.header__item:hover .header__sublist{
display: flex;
}
.header__link--sub{
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
  max-width: 185px;
  margin: 0 20px;
  flex: 1;
}
.header__list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: end;
  gap: 25px;
}
.header__contact {
  display: flex;
  gap: 15px;
}
.header__link.header__link_cont {
  font-size: 13px;
  color: var(--blue);
}
</style>