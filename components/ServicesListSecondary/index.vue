<template>
<section class="srv-section">
        <div class="wrapper srv">
            <div class="srv__list">
                <div class="srv__item">
                    <img  src="./assets/servise1.jpeg" alt="Work">
                    <h2 class="srv__title">Сварочные работы</h2>
                    <p>Компания Галактика сварки предоставляет весь спектр сварочных работ.
                        Изготовление и ремонт металло&shy;конструкций.
                    </p>
                </div>
                <div class="srv__item">
                    <img src="./assets/servisse2.png" alt="Work">
                    <h2 class="srv__title">Металло&shy;обработка</h2>
                    <p>Изготовление метал&shy;лических изделий по техноло&shy;гическим заданиям любой сложности.

                    </p>
                </div>
                <div class="srv__item">
                    <img src="./assets/service3.jpg" alt="Work">
                    <h2 class="srv__title">Электро&shy;монтажные работы</h2>
                    <p>Электро&shy;монтажные работы. Проектировка. 
                        Подключение и настройка промышленного оборудования.
                    </p>
                </div>
            </div>
            <p class="text-down"> **Cроки выполнения, стоимость оговариваются индивидуально
                 перед заключением договора на проведение работ</p>
                 <!-- <a href="./html.html" class="link-back"> <i class="fas fa-arrow-left"></i>На главную</a> -->

        </div>
      </section>
</template>


<style scoped>

.srv-section {
  margin-bottom: 0;
}
.srv {
  height: auto;
  margin: 0;
  position: relative;
  margin-top: 20px;
}
/* .srv::before {
  content: "";
  border-bottom: 3px solid black;
  position: absolute;
  width: 100%;
  margin-top: 10px;
} */

.srv__item {
  color: black;
  display: flex;
  font-size: 20px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 15px;
}
.srv__item p {
  line-height: 1.35;
  font-size: 17px;
}

.srv__list {
  padding-top: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
}
.srv__title {
  font-size: 20px;
  line-height: 1;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.text-down {
  color: rgba(128, 128, 128, 0.797);
  font-size: 14px;
  margin: 30px 0;
}

@media all and (max-width: 800px) {
  .srv__item p {
    font-size: 15px;
  }
  .srv__title {
    font-size: 16px;
  }
  /* .hiro.hiro-srv .hiro__title {
    font-size: 19px;}
   */
  
}
@media all and (max-width: 500px) {
  .srv {
    height: auto;
  }
  .srv__list{
    grid-template-columns: 1fr;
  }
  /* .hiro.hiro-srv .hiro__title {
    font-size: 17px;}
 */}

</style>