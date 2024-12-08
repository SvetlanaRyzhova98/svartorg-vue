<template>
  <Head>
    <Title>Все филиалы</Title>
    <Meta
      name="description"
      content="Все для сварки ☎ +7-918-325-48-00, силовая техика, электроинструмент, компрессоры, пневмоинструмент"
    />
    <Meta
      name="keywords"
      content="Уральская 136, Краснодар, Тимашевск, Пролетарская 106, Новороссийск"
    />

    <Link
      rel="icon"
      href="https://www.galaktika-svarki.ru/favicon.ico"
      type="image/x-icon"
    />
  </Head>

  <section class="wrapper">
    <BreadCrumbs :path="[{ caption: 'Контакты', href: '/contacts' }]" />

    <p class="bue-desc">
      Для заказа свяжитесь с нами через форму внизу страницы или напишите на почту
      <span>gk.galaxy@yandex.ru </span>
    </p>

    <div class="citys">
      <div class="city">
        <img src="../public/assets/magaz.jpg" alt="Уральская 136/7" />
        <div class="city__desc">
          <div class="city__name">Краснодар / <span>Уральская 136/7</span></div>
          <div class="social__icon">
            <a href="https://wa.me/+79183254800" class="footer__link">
              <ClientOnly><font-awesome-icon icon="fa-brands fa-whatsapp" /></ClientOnly
            ></a>
          </div>
        </div>
        <a class="city__phone" :href="'tel:' + Locations.KRD.phone">
          {{ Locations.KRD.phone }}
          <ClientOnly><font-awesome-icon icon="fa-solid fa-phone-flip" /></ClientOnly>
        </a>
      </div>

      <div class="city">
        <img src="../public/assets/mag1.jpg" alt="Пролетарская 106" />
        <div class="city__desc">
          <div class="city__name">Тимашевск / <span>Пролетарская 106</span></div>
          <div class="social__icon">
            <a href="https://wa.me/+79384737577" class="footer__link">
              <ClientOnly><font-awesome-icon icon="fa-brands fa-whatsapp" /></ClientOnly
            ></a>
          </div>
        </div>
        <a class="city__phone" :href="'tel:' + Locations.TMSH.phone">
          {{ Locations.TMSH.phone }}
          <ClientOnly><font-awesome-icon icon="fa-solid fa-phone-flip" /></ClientOnly>
        </a>
      </div>
      <div class="city">
        <img src="../public/assets/magaz3.jpg" alt="" />
        <div class="city__desc">
          <div class="city__name">Новороссийск / <span>Цемдолина, Ленина 224</span></div>
          <div class="social__icon">
            <a href="https://wa.me/+79384737577" class="footer__link">
              <ClientOnly><font-awesome-icon icon="fa-brands fa-whatsapp" /></ClientOnly
            ></a>
          </div>
        </div>
        <a class="city__phone" :href="'tel:' + Locations.NVR.phone">
          {{ Locations.NVR.phone }}
          <ClientOnly><font-awesome-icon icon="fa-solid fa-phone-flip" /></ClientOnly>
        </a>
      </div>
      <div class="city">
        <img src="../public/assets/magaz4.jpg" alt="" />
        <div class="city__desc">
          <div class="city__name">Майкоп / <span>Хакурате 294</span></div>
          <div class="social__icon">
            <a href="https://wa.me/+79385535755" class="footer__link">
              <ClientOnly><font-awesome-icon icon="fa-brands fa-whatsapp" /></ClientOnly
            ></a>
          </div>
        </div>
        <a class="city__phone" :href="'tel:' + Locations.NVR.phone">
          {{ Locations.MPK.phone }}
          <ClientOnly><font-awesome-icon icon="fa-solid fa-phone-flip" /></ClientOnly>
        </a>
      </div>
    </div>
    <!-- <iframe src="https://yandex.kz/sprav/widget/rating-badge/231047479460?type=rating" width="150" height="50" frameborder="0"></iframe> -->
  </section>
</template>
<script setup>
import { Locations } from "../consts/location";
</script>
<style>
.bue-desc {
  font-size: 12px;
  font-style: italic;
  color: grey;
  margin: 20px 0;
  font-family: "Gilroy", sans-serif;
  line-height: 1.5;
}
.bue-desc span {
  font-size: 15px;
  color: var(--blue);
}
.citys {
  padding: 0px 0 40px 0;
  display: flex;
  display: grid;
  gap: 35px;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
}
.city {
  color: black;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  text-decoration: none;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
}
.city img {
  max-width: 400px;
  width: 100%;

  aspect-ratio: 1;
  object-fit: cover;
}
.city__name {
  font-weight: 600;
  color: var(--blue);
  font-family: "Gilroy", sans-serif;
}
.city__name span {
  text-transform: none;
  font-weight: normal;
  color: #333030bd;
  font-size: 14px;
  padding: 5px 0;
  display: block;
}
.city__phone {
  font-size: 16px;
  color: grey;
  font-family: "Gilroy", sans-serif;
}
.city__desc {
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.city__desc .social__icon {
  gap: 10px;
}
@media all and (max-width: 800px) {
  .citys {
    margin: 30px 0;
    padding: 40px 0;
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr;
  }
  .city {
    align-items: center;
  }
  .city__name span {
    display: inline;
  }
  .city__desc .social__icon {
    gap: 10px;
    margin-left: 30px;
  }
  .city__desc {
    justify-content: CENTER;
    align-items: CENTER;
  }
}
</style>
