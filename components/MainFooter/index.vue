<template>
  <footer class="footer">
    <div class="wrapper_footer">
      <div class="box-footer">
        <div class="social">
          <a class="footer__mail" href="mailto:gk.galaxy@yandex.ru">
            gk.galaxy@yandex.ru</a
          >
          <div class="social__icon">
            <a href="#!" class="footer__link"
            ><i class="fab fa-whatsapp"></i
            ></a>
            <a href="#!" class="footer__link"
            ><i class="fab fa-telegram-plane"></i
            ></a>
            <a href="#!" class="footer__link"> <i class="fab fa-vk"></i></a>
            <a href="#!" class="footer__link">
              <i class="fab fa-youtube"></i
              ></a>
          </div>
        </div>

        <h3 class="form__title blue-text">Свяжитесь с нами</h3>
        <form class="contact" action="">
          <input
              class="contact__input form-style"
              type="text"
              placeholder="Ваше имя"
          />
          <input
              class="contact__input form-style"
              type="text"
              placeholder="Ваш телефон"
          />
          <textarea
              class="contact__text form-style"
              name="text_ask"
              id=""
              cols="30"
              rows="10"
          ></textarea>
          <button class="contact__button" type="submit">
            Отправить
            <i class="far fa-envelope icon"></i>
          </button>
        </form>
      </div>

      <div class="map" id="map">
        <iframe
            width="100%"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.4293553974767!2d39.074142815543155!3d45.036508379098166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f05ac0a490e901%3A0xcf66548c0bcd02be!2z0YPQuy4g0KPRgNCw0LvRjNGB0LrQsNGPLCAxMzYsINCa0YDQsNGB0L3QvtC00LDRgCwg0JrRgNCw0YHQvdC-0LTQsNGA0YHQutC40Lkg0LrRgNCw0LksIDM1MDA4MA!5e0!3m2!1sru!2sru!4v1659643417683!5m2!1sru!2sru"
            frameborder="0"
            style="border: 0"
            allowfullscreen
        ></iframe>
      </div>
    </div>
    <div class="footer-copy">

    </div>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
.articles {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 25px;
  color: #343434;
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
}
.article {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.article__content {
  display: flex;
  flex-direction: column;
  text-align: start;
  align-items: flex-start;
  max-height: 300px;
}
.article__text {
  font-weight: 300;
  font-size: 13px;
  line-height: 19px;
  margin-bottom: 15px;
  overflow: hidden;
  min-height: 80px;
  text-overflow: ellipsis;
}
.article__link {
  text-decoration-line: underline;
  color: #343434;
}
.article__data {
  font-size: 13px;
  color: rgba(151, 151, 151, 1);
  line-height: 26px;
}
.article__title {
  font-size: 16px;
  letter-spacing: 0.05em;
  max-width: 235px;
  margin-bottom: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
  text-transform: uppercase;
  display: block;
  /* white-space: nowrap; */
  min-height: 40px;
  font-weight: 600;
}
.article__img.article__img_less {
  max-width: 128px;
}
.article__img {
  max-width: 255px;
  width: 100%;
}

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
.footer__link:hover{
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
