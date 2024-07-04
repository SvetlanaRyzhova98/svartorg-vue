<template>
  <div v-if="product">
    <div class="wrapper">
      <div class="item-info">
        <div>
          {{ product.name }}
        </div>
        <div>
          {{ product.price }}
        </div>
        <img :src="product.image" alt="">
        <table class="info-list">
          <thead>
            <tr>Характеристики</tr>
            <tr>
              <th>Параметр</th>
              <th>Значение</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in product.property.rows" :key="index">
              <td>{{ row.key }}</td>
              <td>{{ row.val }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div v-else>
    Загрузка...
  </div>
</template>

<script>
export default {
  name: 'CatalogItemCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
/* Ваши стили здесь */
</style>
