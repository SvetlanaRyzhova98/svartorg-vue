<template>
  <Head>
    <Title>Контакты</Title>
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
    <BreadCrumbs :path="[{ caption: 'Как купить', href: '/how-to-buy' }]" />

        <div class="how-to-buy">
          <h1>Как купить</h1>
          
          <!-- Основные шаги покупки -->
          <div class="steps">
            <div class="step">
              <h2>Шаг 1: Выберите товар</h2>
              <p>Ознакомьтесь с нашим каталогом и выберите интересующий вас товар.</p>
            </div>
            <div class="step">
              <h2>Шаг 2: Свяжитесь с нами</h2>
              <p>Для оформления заказа свяжитесь с нами удобным способом: напишите на электронную почту, отправьте сообщение в мессенджеры или приезжайте в наши магазины.</p>
            </div>
            <div class="step">
              <h2>Шаг 3: Подтвердите покупку</h2>
              <p>Наши специалисты уточнят детали заказа и помогут с оформлением. После подтверждения вы сможете забрать товар в удобное для вас время.</p>
            </div>
          </div>
          <!-- Информация о доставке и оплате -->
          <section class="info">
            <h2>Информация о доставке и оплате</h2>
            <p>Мы предлагаем различные варианты доставки: курьерская доставка, самовывоз и почтовые отправления. Оплатить заказ можно онлайн или при получении.</p>
          </section>
        </div>
      
  </section>
</template>
 
 
<style scoped>
/* Основные стили */
.how-to-buy {
  
  padding: 20px 0;
  margin-bottom: 30px;
  color: #333;
}

.h1, h2 {
  color: #3395c5;
}

h1 {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

h2 {
  font-size: 20px;
  margin: 10px 0;
}

/* Стили для секции шагов */
.steps {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.step {
  background: #f9f9f9;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
}

/* Стили для секции информации */
.info {
  margin-top: 30px;
  background: #e6f7ff;
  padding: 20px;
  border-radius: 8px;
  font-size: 16px;
}

/* Адаптивные стили */
@media (max-width: 768px) {
  h1 {
    font-size: 20px;
  }

  h2 {
    font-size: 18px;
  }

  .steps {
    gap: 15px;
  }

  .step, .info {
    padding: 10px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 18px;
  }

  h2 {
    font-size: 16px;
  }

  .how-to-buy {
    padding: 15px;
  }
 
}
</style>