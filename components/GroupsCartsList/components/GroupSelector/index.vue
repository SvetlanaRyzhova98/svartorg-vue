<template>
    <div class="category">
            <div  @click="onChange('main')" class="category__link category__instrum"
              >Оборудование</div
            >
            <div  @click="onChange('secondary')" class="category__link category__acces">Аксессуары</div>
          </div>
</template>




<script>
export default {
  name: 'GroupSelector',
  props: {
        modelValue: String
    },
    emits: ['update:modelValue'],
  data() {
    return {
    };
  },
  methods: {
    onChange(type) {
      this.$emit('update:modelValue', type)
    }
  }
}
</script>

<style>

/*section 2*/
.category {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  gap: 20px;
}
.category__link.category__acces {
  /* margin-left: 47px; */
}
.category__link {
  display: block;
  font-size: 22px;
  color: black;
  /* line-height: 22px; */
  letter-spacing: 0.05em;
  text-decoration: none;
  text-transform: uppercase;
  border-bottom: 3px solid transparent;
  font-weight: 600;
}
.category__link:hover,
.category__link:active {
  color: var(--blue2);
  border-bottom: 3px solid var(--blue2);
}
</style>