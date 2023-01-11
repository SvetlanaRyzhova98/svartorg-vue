<template>
                <NuxtLink to="/articles" class="articles">
              <div class="article">
                <img src="./assets/gr.jpg" alt="" class="article__img" />
                <div class="article__content">
                  <h4 class="article__title">Какое оборудование выбрать</h4>
                  <div class="article__data">27.01.2022</div>
                  <div class="article__text">
                    Покупка сварочного аппарата – ответственная задача. Качество
                    прибора зависит не только от производителя, а также от условий
                    его использования.
                  </div>
                  
                  <div class="article__link"> Читать полностью </div>
                </div>
              </div>
  
              <div class="article__content">
                <div class="article__title">Сварочный аппарат для дома</div>
                <div class="article__text">
                  Сварочный аппарат для дома необходим для установки забора,
                  возведени...
                </div>
                <img
                  src="./assets/e3.jpeg"
                  alt=""
                  class="article__img article__img_less"
                />
                <div class="article__data">07.03.2022</div>
              </div>
              <div class="article__content">
                <div class="article__title">
                  Cварочный инвертор для начинающих
                </div>
                <div class="article__text">
                  Сварочные трансформаторы уже отходят на второй план. С
                  появлением инверторов варить металлические конструкции стало
                  намного проще.
                </div>
                <img
                  src="./assets/12r.jpeg"
                  alt=""
                  class="article__img article__img_less"
                />
                <div class="article__data">07.03.2022</div>
              </div>
            </NuxtLink>
</template>


<style scoped>

.articles {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 25px;
  color: #343434;
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
  margin-top: 30px;
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
.articles-new .article__content {
    display: flex;
    flex-direction: column;
    text-align: start;
    align-items: flex-start;
    max-height: max-content;
    padding: 15px;
    border: 1px solid grey;
    border-radius: 20px;
    display: block;
}



@media all and (max-width: 800px) {
   .article {
    grid-template-columns: 1fr;
  }
  .article__img {
    display: none;
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
}
</style>