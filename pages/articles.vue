<template>
<SecondaryHero>Полезная информация<br /></SecondaryHero>

<div class="wrapper">
    <BreadCrumbs :path="[{caption: 'Полезная информация', href: '/articles'}]" />
    
</div>

  <section class="wrapper wrapper-articles">
    <div class="articles articles-new">
      <div class="article__content">
        <h4 class="article__title">Какое оборудование выбрать</h4>
        
        <div class="article__text">
            <p>Покупка сварочного аппарата – ответственная задача. Качество
          прибора зависит не только от производителя, а также от условий его
          использования.</p>    
          <p>При выборе сварочного аппарата, нужно учитывать показатель максимального значения сварочного тока. От его величины будет зависеть то, какие электроды подойдут для работы и какие по толщине металлические заготовки можно будет сваривать. </p>
          <p> Например, нужно соединить металлический профиль для постройки каркаса забора на даче. Толщина металла 2 мм – такой материал сваривают на небольшой силе тока, величиной до 70 А.</p>
          
          <p>Если сфера использования аппарата будет ограничиваться аналогичными работами, и сваривать более толстые заготовки Вы не планируете, то нет смысла выбирать инвертор с высоким показателем сварочного тока.</p>
           <p>Для профессионального применения на производстве, когда приходится работать с разными видами металла и с разными по толщине заготовками, нужно более функциональное устройство. 
              Сегодня, когда на рынке силового оборудования предлагаются разные по мощности инверторные сварочные аппараты, как выбрать из всего многообразия подходящий? Достаточно знать простое правило: на расплавление 1 мм электрода необходимо воздействие силы тока в 30-40 А. </p>
              

              <p> Важно учесть и рекомендуемое напряжение в сети. Маломощные устройства рассчитаны на работу от однофазной сети (220 В), многие современные модели могут подключаться к электрогенератору, что очень удобно, например, на даче или стройучастке. Мощные (свыше 5-6 кВт) профессиональные установки работают от промышленной сети с напряжением в 380 В.
                </p>
          
        </div>
        <div class="article__data">27.01.2022</div>
      </div>

      <div class="article__content">
        <div class="article__title">Сварочный аппарат для дома</div>
        <div class="article__text">
           <p>Сварочный аппарат – незаменимый инструмент для установки забора, возведения фундамента постройки, монтажа системы трубопровода и многих других работы. Если вы сможете выполнять сварочные работы самостоятельно, существенно сэкономите средства.</p>  
           <p>Аппараты, предназначенные для бытового использования и выполнения несложных задач в автогаражных мастерских, как правило, выпускаются мощностью до 5 кВт. А вот модели профессионального класса, сила тока которых превышает 200 А, могут иметь мощность от 6 до 17 кВт. Учитывать показатель мощности нужно не только потому, что от этого будет зависеть максимальная сила сварочного тока. </p> 
                <p>Допустим, использовать мощный инвертор в быту не только нерационально – такое оборудование будет потреблять большое количество электроэнергии, но и в некоторых случаях невозможно, электросеть может не выдержать такой нагрузки. Считается, что оптимальным запасом мощности будет примерно 20% сверх необходимого показателя. Так Вы будете иметь возможность в будущем немного расширить спектр задач, выполняемых с помощью инвертора, и в то же время, не перегрузите сеть и сможете избежать чрезмерного расхода электроэнергии.</p> 
        
            
        </div>
         <div class="article__data">07.03.2022</div>
      </div>
      <div class="article__content">
        <div class="article__title">Cварочный инвертор для начинающих</div>
        <div class="article__text">
            <p> Сварочные трансформаторы уже отходят на второй план.</p>
            <p> С появлением
                инверторов варить металлические конструкции стало намного проще: оборудование можно легко поместить в небольшую сумку или автомобиль для перевозки.</p>
            <p>При этом, начать процесс сварки на инверторе намного проще - прибор не требует специального обучения.</p>
           
        </div>
        <div class="article__data">07.03.2022</div>
      </div>
    </div>
    <a href="./html.html" class="link-back"> <i class="fas fa-arrow-left"></i>На главную</a>
  </section>
  </template>


<style scoped>

.articles {
  display: grid;
  grid-template-columns:  1fr;
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
  .articles {
    grid-template-columns: 1fr;
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