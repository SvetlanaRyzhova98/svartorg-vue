

<template>
  <header class="header">
    <div class="header__wrapper">
      <a class="header__logo" href="/html.html">
        <img class="logo_img" src="./assets/logo.svg" alt="Logo" />
      </a>
      <nav class="header__nav">
        <ul class="header__list">
          <li class="header__item">
            <!-- -- продукция -- услуги -- контакты -- о компании -->
            <router-link to="/catalog" class="header__link header__link-display">Продукция</router-link>
            <a href="#!" class="header__link header__link-displaynone"><i class="fas fa-align-justify"></i></a>
          </li>
          <li class="header__item">
            <router-link to="/services" class="header__link header__link-display">Услуги</router-link>
            <a href="./servis.htmlbvc" class="header__link header__link-displaynone"><i class="fab fa-themeco"></i></a>
          </li>
          <li class="header__item">
            <a href="#!" class="header__link header__link-display">Контакты </a>
            <a href="#!" class="header__link header__link-displaynone"><i class="fas fa-portrait"></i></a>
          </li>
          <li class="header__item">
            <a href="#!" class="header__link header__link-display">О компании</a>
            <a href="#!" class="header__link header__link-displaynone"><i class="fas fa-info"></i></a>
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
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
header {
  top: 0;
}
section {
  margin-bottom: 100px;
}
a {
  text-decoration: none;
  color: white;
}
a:active,
a:focus,
a:hover {
  outline-style: none !important;
}
img {
  max-width: 100%;
  height: auto;
}
.blue {
  color: var(--blue);
}
.blue-text {
  color: var(--blue) !important;
}
.visible {
  visibility: hidden;
}
.rotate180 {
  transition: 0.5s all;
  transform: rotate(180deg);
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
.header__link-display {
  display: block;
}
.header__link-displaynone {
  display: none;
}
/*Hiro start*/
.location {
  margin-top: 15px;
  /* font-weight: bold; */
  display: flex;
  gap: 10px;
  width: max-content;
  font-size: 20px;
  line-height: 25px;
  flex-direction: column;
}
/* .location span {
  text-decoration: underline;
  text-underline-position: under;
} */
.location-city {
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
}
.location-city li:hover {
  color: var(--blue);
  cursor: pointer;
}
.location-select:hover{
  cursor: pointer;
}
//.hiro {
//  width: 100%;
//  height: 100vh;
//  max-height: 1800px;
//  position: relative;
//  background: url(../img/фон/black-bg1.jpg) no-repeat center right;
//  /* background: url(../img/svar2_background1.jpg) no-repeat center center; */
//  background-size: cover;
//  display: flex;
//  justify-content: center;
//  align-items: center;
//  margin-bottom: 50px;
//  padding-top: 100px;
//  /* padding-right: calc(100vw + -86%); */
//}
.hiro__decor {
  position: absolute;
  width: 444px;
  height: calc(100% - 80px);
  /* left: 405px; */
  top: 80px;
  z-index: 1;
  background: var(--bg-color);
}

.hiro__box {
  max-width: 700px;
  z-index: 2;
}
.hiro__title {
  font-size: 50px;
  line-height: 60px;
  letter-spacing: 0.5px;

  margin-bottom: 40px;
  font-weight: 600;
}
.hiro__desc {
  margin-bottom: 40px;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.5px;
}
.submit {
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  background: var(--bg-color);
  border: 1px solid white;
  padding: 15px 40px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
/*Main start*/

.wrapper {
  max-width: 1110px;
  margin: 0 auto;
}
.title-box {
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
//.title-section {
//  background: url(../img/svg/slider-decor.svg) no-repeat center left;
//  font-size: 27px;
//  line-height: 30px;
//  letter-spacing: 0.05em;
//  text-transform: uppercase;
//  color: black;
//  font-weight: 600;
//  padding-left: 140px;
//}
//.main__link-right {
//  background: url(../img/svg/slider-menu__left.svg) no-repeat center left;
//  width: 55px;
//  height: 55px;
//  display: inline-block;
//}
//.main__link-left {
//  background: url(../img/svg/slider-menu__button_right.svg) no-repeat center
//  left;
//  width: 55px;
//  height: 55px;
//  margin-left: -3px;
//  display: inline-block;
//}
.main__bottom {
  display: flex;
}
.main__bottom-pic-one {
  display: flex;
  margin-right: 30px;
}
.main__bottom-pic-first {
  display: flex;
}

/*section 2*/
.category {
  display: flex;
  justify-content: center;
  margin-bottom: 70px;
}
.category__link.category__acces {
  margin-left: 47px;
}
.category__link {
  display: block;
  font-size: 22px;
  color: black;
  /* line-height: 22px; */
  letter-spacing: 0.05em;
  text-decoration: none;
  text-transform: uppercase;
  border-bottom: 3px solid transparent;
  font-weight: 600;
}
.category__link:hover,
.category__link:active {
  color: var(--blue2);
  border-bottom: 3px solid var(--blue2);
}
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
}
.card-category {
  position: relative;
  max-width: 350px;
  min-width: 100px;
  /* filter: grayscale(100%); */
  transition: 0.5s all;
}
.card-category:hover img, .card-category:focus img, .card-category:active img{
  transform: scale(1.03);
  filter: grayscale(0%);

}
.card__desc {
  position: absolute;
  max-width: 255px;
  height: 60px;
  background-color: var(--bg-color);
  color: white;
  bottom: 30px;
  right: 0;
  z-index: 4;
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.displaynone {
  display: none;
}
.cards.instrumental {
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.cards.acsess {
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
}
.header__link_cont-mobile {
  display: none;
}
@media all and (max-width: 1200px) {
  .wrapper {
    padding: 0 30px;
  }
}
@media all and (max-width: 1000px) {
  .wrapper {
    padding: 0 30px;
  }
  .header__logo img{
    display: none;
  }
  .header__logo{
    height: 100%;
    width: 100%;
    background: url('./assets/logo-short-white.svg') center no-repeat;
    background-size: contain;
    max-width: 80px;
    margin: 0;
  }
  .cards.instrumental {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
  }
}

@media all and (max-width: 800px) {
  .article {
    grid-template-columns: 1fr;
  }
  .article__img {
    display: none;
  }
  .articles {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .card__desc.card__desc-serv {
    font-size: 14px;
    padding: 0 10px;
  }
  .title-section {
    font-size: 24px;
    line-height: 24px;
    padding-left: 130px;
  }
  img {
    max-height: 300px;
    min-width: 125px;
  }
  .cards.acsess {
    grid-template-columns: 1fr;
  }
  .header__list {
    gap: 0px;
  }
  .header__link_cont {
    display: none;
  }
  .header__link_cont.header__link_cont-mobile {
    display: block;
    font-size: 20px;
  }

  .hiro__desc {
    margin-bottom: 40px;
    font-size: 18px;
    line-height: 25px;
  }
  .hiro__box {
    padding: 0 30px;
  }
  .hiro__title {
    font-size: 45px;
  }
  .category {
    margin-bottom: 50px;
  }
  .header__link {
    font-size: 16px;
    line-height: 19px;
    padding-right: 15px;
  }

  .hiro__decor {
    width: 300px;
  }
}
@media all and (max-width: 500px) {
  .articles {
    grid-template-columns: 1fr;
  }
  .article__text {
    margin-bottom: 0px;
    min-height: 60px;
  }
  .wrapper_footer {
    grid-template-columns: 1fr;
    gap: 30px;
    grid-template-rows: 450px 350px;
    justify-items: center;
    padding: 0;
  }
  .title-section {
    font-size: 22px;
    line-height: 22px;
    padding-left: 0;
    background-size: 0;
    color: var(--blue);
  }

  .title-box {
    margin-bottom: 30px;
  }
  .hiro__title {
    font-size: 35px;
    line-height: 40px;
    margin-bottom: 20px;
  }
  .hiro__desc {
    margin-bottom: 40px;
    font-size: 15px;
  }

  .hiro__decor {
    width: 200px;
  }
  .header__link-display {
    display: none;
  }
  .header__link-displaynone {
    display: block;
    font-size: 20px;
  }
  .header__list {
    width: 100%;
    justify-content: space-evenly;
  }
  .category__link {
    font-size: 18px;
  }
  .category__link.category__acces {
    margin-left: 30px;
  }
  .cards.services {
    grid-template-columns: 1fr;
    justify-items: center;
    grid-template-rows: 1fr 1fr 1fr;
  }
  .box-footer {
    padding: 30px 10px;
  }
  section {
    margin-bottom: 50px;
  }
  .cards.instrumental {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
  .location {
    gap: 10px;
    font-size: 15px;
    line-height: 16px;}
}

@media all and (max-height: 500px) {
  .hiro__title {
    font-size: 36px;
    line-height: 36px;
    letter-spacing: 0.5px;
    margin-bottom: 15px;
    font-weight: 600;
  }
  .location {
    margin-top: 15px;
    /* font-weight: bold; */
    display: flex;
    gap: 10px;
    width: max-content;
    font-size: 18px;
    line-height: 20px;
    flex-direction: column;
  }
  .hiro__desc {
    font-size: 18px;
    line-height: 25px;
  }
}
@media all and (max-height: 500px) {
  .hiro__desc {
    font-size: 17px;
    line-height: 20px;
  }
  .hiro__title {
    font-size: 25px;
    line-height: 25px;
    margin-bottom: 10px;
  }
  .location {
    font-size: 17px;
    line-height: 17px;
  }
}
@media all and (max-height: 400px) {
  .hiro__title {
    font-size: 22px;
    line-height: 22px;
  }
  .location {
    margin-top: 10px;
    gap: 5px;}
  .location-city {
    flex-direction: row;
    gap: 16px;
    margin-top: 5px;}
  .hiro__desc {
    font-size: 15px;}
}
</style>
