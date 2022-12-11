<template>
    <a :href="item.href">
              <figure class="card-category">
                <img
                  :src="item.imageSrc"
                  alt="Ручная дуговая сварка"
                  class="card__img"
                />
                <figcaption class="card__desc">
                  {{item.caption}}
                </figcaption>
              </figure>
            </a>
</template>

<script>
export default {
  name: 'GroupItem',
  props: {
    item: Object
  },
  data() {return {}},
  methods: {
  }
}
</script>