<template>
  <footer class="footer">
    <div class="wrapper_footer">
      <div class="box-footer">
        <div class="social">
          <NuxtLink class="footer__mail" to="mailto:gk.galaxy@yandex.ru">
            gk.galaxy@yandex.ru</NuxtLink
          >
          <div class="social__icon">
            <a :href="`https://wa.me/${phoneWhatsapp}`" class="footer__link">
              <ClientOnly>
                <font-awesome-icon icon="fa-brands fa-whatsapp" />
              </ClientOnly>
            </a>
          </div>
        </div>

        <h3 class="form__title blue-text">Свяжитесь с нами</h3>
        <form @submit.prevent="checkForm" class="contact" action="">
          <input
            class="contact__input form-style"
            type="text"
            placeholder="Ваше имя"
            v-model="form.name"
            :class="{ error: showNameError }"
          />

          <input
            class="contact__input form-style"
            type="tel"
            placeholder="Ваш телефон"
            v-model="form.phone"
            :class="{ error: showPhoneError || !isPhoneValid }"
          />

          <textarea
            class="contact__text form-style"
            name="text_ask"
            cols="30"
            rows="10"
            placeholder="Ваше сообщение"
            v-model="form.message"
          ></textarea>
          <!-- Ошибки -->
          <div v-if="formError" class="form-error">{{ formError }}</div>
          <!-- Чекбокс согласия -->
          <label class="consent" :class="{ 'consent-error': showConsentError }">
            <input type="checkbox" v-model="isAgreed" />
            <span style="text-align: start;">
              Я соглашаюсь с
              <NuxtLink to="/privacy" target="_blank" rel="noopener">
                Политикой обработки персональных данных
              </NuxtLink>
            </span>
          </label>

          <button class="contact__button" type="submit">Отправить</button>
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
import { ref, computed } from "vue";

const location = useLocationStore();
const currentLocation = computed(() => Locations[location.location] || {});
const phoneWhatsapp = computed(() => currentLocation.value.phone || "");

const form = ref({
  name: "",
  phone: "",
  message: "",
});

const isAgreed = ref(false);
const formError = ref("");
const showConsentError = ref(false);
const showNameError = ref(false);
const showPhoneError = ref(false);

const isPhoneValid = computed(() => {
  const phone = form.value.phone;
  const phoneRe = /^\+7\d{10}$/;
  if (!phone.length) return true;
  return phoneRe.test(phone);
});

async function submit(formArg) {
  await $fetch("/back/contact", {
    method: "POST",
    body: formArg,
  })
    .then(() => {
      form.value = { name: "", phone: "", message: "" };
      isAgreed.value = false;
      formError.value = "";
      showConsentError.value = false;
      showNameError.value = false;
      showPhoneError.value = false;
    })
    .catch(() => {
      formError.value = "Ошибка отправки. Попробуйте позже.";
    });
}

function checkForm() {
  // сбрасываем ошибки
  formError.value = "";
  showConsentError.value = false;
  showNameError.value = false;
  showPhoneError.value = false;

  if (!form.value.name) {
    showNameError.value = true;
    formError.value = "Пожалуйста, укажите имя.";
    return;
  }
  if (!form.value.phone) {
    showPhoneError.value = true;
    formError.value = "Пожалуйста, укажите телефон.";
    return;
  }
  if (!isPhoneValid.value) {
    showPhoneError.value = true;
    formError.value = "Неверный формат телефона. Укажите в формате +7XXXXXXXXXX.";
    return;
  }
  if (!isAgreed.value) {
    showConsentError.value = true;
    formError.value = "Необходимо согласие с политикой персональных данных.";
    return;
  }

  submit(form.value);
}
</script>

<style>
.contact__input + .error__message {
  margin: 0;
}
.contact__input.form-style.error {
  border: 1px solid #b2141059;
}
.error__message {
  font-size: 10px;
  font-style: italic;
  color: #b21410ab;
  bottom:82px;
}

.wrapper_footer {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 50px;
  justify-items: end;
  padding: 0 0 0 30px;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
}
.footer {
  background: #f4f4f4;
  color: white;
  margin-top: auto;
  font-family: "Gilroy", sans-serif;
}
.contact__input {
  font-weight: 400;
  font-size: 14px;
  font-family: "Gilroy", sans-serif;
  line-height: 19px;
}
.form-style {
  width: 100%;
  border: none;
  background: #efeeed;
  color: rgb(81, 81, 81);
  font-size: 13px;
  padding: 9px 15px;
  border-radius: 10px;
}
.form-style::placeholder {
  color: #999;
  font-size: 12px;
  line-height: 28px;
  font-family: "Gilroy", sans-serif;
}
[data-theme="dark"] .form-style {
  background: #2e2e2e;
  color: #e1e1e1;
}
[data-theme="dark"] .form-style::placeholder {
  color: #aaa;
}
.box-footer {
  padding: 30px 0;
  width: 100%;
}
.contact {
  text-align: end;
  gap: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
}
.contact__text {
  max-height: 80px;
  resize: none;
  line-height: 1.4;
}
.contact__button:hover {
  background-color: #359acbe0;
  cursor: pointer;
}
.contact__button {
  padding: 8px 16px;
  border: 1px solid transparent;
  max-width: max-content;
  border-radius: 10px;
  background-color: #359acbb8;
  font-size: 14px;
  text-align: end;
  color: white;
  margin-top: 5px;
  font-family: "Gilroy", sans-serif;
}
.contact__button:disabled {
  color: white;
  background-color: #7f8589b8;
}
.footer__link {
  font-size: 25px;
  line-height: 19px;
  display: inline;
  color: #3395c5;
}
.footer__link:hover {
  color: #104bb2;
}
.footer__mail {
  display: block;
  color: grey;
  font-size: 16px;
}
.social {
  display: flex;
  align-items: end;
  justify-content: end;
  gap: 20px;
}
.social__icon {
  display: flex;
  gap: 20px;
  margin-right: 10px;
}
.button__box {
  display: flex;
}
.map {
  position: relative;
  width: 100%;
  height: 100%;
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
  padding: 20px 0;
  font-size: 22px;
  font-family: "Gilroy", sans-serif;
  font-weight: 500;
}
.consent {
  font-size: 12px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 8px;
  margin-top: 20px;
}
.consent input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #3395c5; /* голубая галочка */
  cursor: pointer;
}

.consent a {
  color: #3395c5;
  text-decoration: underline;
}
.form-error {
  position: absolute;
  bottom: 0;
  font-size: 10px;
  color: #b21410ab;
  text-align: start;
  bottom: 80px;
}
@media (max-width: 650px) {
  .wrapper_footer {
    grid-template-columns: 1fr;
    justify-items: center;
    padding: 0;
  }
  .footer .wrapper_footer {
    gap: 0px;
    grid-template-rows: 420px 350px;
  }
  .box-footer {
    padding: 25px;
  }
  .carousel__viewport .carousel__slide img {
    min-height: auto;
  }
}
</style>
