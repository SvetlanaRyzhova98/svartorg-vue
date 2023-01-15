<template>
  <footer class="footer">
    <div class="wrapper_footer">
      <div class="box-footer">
        <div class="social">
          <a class="footer__mail" href="mailto:gk.galaxy@yandex.ru">
            gk.galaxy@yandex.ru</a
          >
          <div class="social__icon">
            <a href="#!" class="footer__link">
              <ClientOnly><font-awesome-icon icon="fa-solid fa-paper-plane" /></ClientOnly>
            </a>
            <a href="#!" class="footer__link"
              >
              <ClientOnly><font-awesome-icon icon="fa-brands fa-whatsapp" /></ClientOnly></a>
            <a href="#!" class="footer__link">
              <ClientOnly><font-awesome-icon icon="fab fa-vk" /></ClientOnly>
            </a>
            <!-- <a href="#!" class="footer__link">
              <ClientOnly><font-awesome-icon icon="fab fa-youtube" /></ClientOnly>
            </a> -->
          </div>
        </div>

        <h3 class="form__title blue-text">Свяжитесь с нами</h3>
        <form @submit.prevent="submit(form)" class="contact" action="">
          <input
            class="contact__input form-style"
            type="text"
            placeholder="Ваше имя"
          />
          <input
            class="contact__input form-style"
            type="text"
            placeholder="Ваш телефон"
            v-model="form.phone"
          />
          <textarea
            class="contact__text form-style"
            name="text_ask"
            id=""
            cols="30"
            rows="10"
            v-model="form.message"
          ></textarea>
          <button class="contact__button" type="submit">
            Отправить
            <i class="far fa-envelope icon"></i>
          </button>
          <!-- {{form}} -->
        </form>
      </div>

      <div class="map" id="map">
        <iframe
          width="100%"
          :src="Locations[location.location]?.coordinate"
          frameborder="0"
          style="border: 0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div class="footer-copy"></div>
  </footer>
</template>

<script setup>
import { useLocationStore } from "../../store/location";
import { Locations } from "../../consts/location";

const form = ref({
  name: "",
  phone: "",
  subject: "",
  message: "",
});

async function submit(form) {
  await $fetch("/api/contact", {
    method: "POST",
    body: form,
  })
    .then(() => {
      // this.errors = false;
      // this.succsess = true;
      // this.waiting = false;
      this.form = {
        name: "",
        email: "",
        subject: "",
        message: "",
      };
    })
    .catch(() => {
      // this.errors = true;
      // this.succsess = false;
      // this.waiting = false;
    });
}

const location = useLocationStore();
</script>

<style>
/*Main end*/
/*footer*/
.wrapper_footer {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 70px;
  justify-items: end;
  padding: 0 0 0 30px;
  align-items: center;
  max-width: 1920px;
  margin: 0 auto;
}
.footer {
  background: linear-gradient(
    155deg,
    rgba(0, 0, 0, 1) 60%,
    rgba(51, 149, 197, 0.9839286056219363) 100%,
    rgba(0, 0, 0, 1) 100%
  );
  color: white;
}
.contact__input {
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
}
.form-style {
  width: 100%;
  border: 1px solid transparent;
  border-bottom: 0.5px solid #272626;
  margin-bottom: 15px;
  background: transparent;
  color: grey;
  font-size: 13px;
  font-family: "Exo 2", sans-serif;
  line-height: 30px;
}
.form-style::placeholder {
  color: grey;
  line-height: 30px;
  font-size: 13px;
  font-family: "Exo 2", sans-serif;
}
.box-footer {
  padding: 30px 0;
}
.contact {
  /* padding: 20px 0px; */
  text-align: end;
  max-width: 350px;
}

.contact__text {
  max-height: 80px;
  resize: none;
  line-height: 1.4;
  color: grey;
}
.contact__button {
  padding: 5px 10px;
  border: 1px solid transparent;
  background-color: transparent;
  font-size: 15px;
  text-transform: uppercase;
  color: var(--blue);
  font-family: "Exo 2", sans-serif;
}
.footer__link {
  font-size: 16px;
  line-height: 19px;
  display: inline;
  color: #3395c5;
}
.footer__link:hover {
  color: #b21410;
}
.footer__mail {
  display: block;
  color: grey;
  font-size: 16px;
}
.social {
  display: flex;
  align-items: end;
  flex-direction: column;
  gap: 25px;
}

.social__icon {
  display: flex;
  gap: 20px;
}
.button__box {
  display: flex;
}
.map {
  position: relative;
  width: 100%;
  height: 100%;
  /* filter: grayscale(1) invert(100%); */
  filter: grayscale(1) brightness(1) invert(1);
}
.map iframe {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
.form__title {
  text-transform: uppercase;
  padding: 30px 0;
  font-size: 22px;
}
</style>
