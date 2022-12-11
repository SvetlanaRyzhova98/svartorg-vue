<template>
    <div>
        <header class="header">
      <div class="header__wrapper">
        <a class="header__logo" href="/html.html">
            <img class="logo_img" src="./img/svg/logo1.svg" alt="Logo" />
        </a>
        
        <nav class="header__nav">
          <ul class="header__list">
            <li class="header__item">
              <!-- -- продукция -- услуги -- контакты -- о компании -->
              <NuxtLink class="header__link" to="/catalog">Продукция</NuxtLink>
            </li>
            <li class="header__item">
              <NuxtLink  to="/services" class="header__link">Услуги</NuxtLink>
            </li>
            <li class="header__item">
              <a href="#!" class="header__link">Контакты </a>
            </li>
            <li class="header__item">
              <a href="#!" class="header__link">О компании</a>
            </li>
          </ul>

         
          
          <div class="header__contact">
            <div class="header__link header__link_cont">
              <i class="fas fa-location-arrow icon"></i>
              Уральская 136/7</div
            >
            <div class="header__link header__link_cont  header__link_cont-mobile map-click">
              <i class="fas fa-location-arrow icon"></i>
              </div
            >
            <a href="tel:+79183254800" class="header__link header__link_cont">
              <i class="fas fa-phone-alt icon"></i>
              8-918-325-48-00</a
            >
            <a href="tel:+79183254800" class="header__link header__link_cont header__link_cont-mobile">
              <i class="fas fa-phone-alt icon"></i>
            </a>
          </div>
          <div class="menu-burger">
            <span></span>
          </div>
        </nav>
      </div>



      <div class="menu-mobile">
        
        <!-- <nav class="nav">
          <ul class="header__list">
            <li class="header__item">
              <a href="#!" class="header__link">Продукция
                
            </a>
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
        </nav> -->
      </div>



    </header>
    </div>
</template>




<style>

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
.header__link {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-decoration: none;
  /* //padding-right: 25px; */
  color: white;
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