
<template>
    <template v-if="group === 'welding'">
        <div class="filters">
          <button @click="onChange({'mma': !modelValue?.['mma']})" 
          class="filter-btn"
          :class="{'filter-btn-active': modelValue?.['mma']}"
          >MMA</button>
          <button @click="onChange({'tig': !modelValue?.['tig']})" 
          class="filter-btn"
          :class="{'filter-btn-active': modelValue?.['tig']}"
          >TIG</button>
          <button @click="onChange({'mig': !modelValue?.['mig']})" 
          class="filter-btn"
          :class="{'filter-btn-active': modelValue?.['mig']}"
          >MIG</button>
          <button @click="onChange({'mag': !modelValue?.['mag']})" 
          class="filter-btn"
          :class="{'filter-btn-active': modelValue?.['mag']}"
          >MAG</button>
        </div>
    </template>
</template>
  
  <script>

  export default {
    name: 'CatalogFilter',
    props: {
      group: String,
      modelValue: Object
    },

    data() {return {}},
    emits: ['update:modelValue'],
    methods: {
        onChange(filter) {
            this.$emit('update:modelValue',  {...this.modelValue, ... filter});
        }
    }
  }
  </script>
  
  <style scoped>
  
.filters{
  margin-top: 20px;
  display: flex;
  gap: 10px;
    flex-wrap: wrap;
  justify-content: start;
}  
.filter-btn{
  padding: 5px 27px;
  border: 1px solid grey;
  font-size: 14px;
  font-style: italic;
  border-radius: 8px;
  background: transparent;
  margin: 0 5px;
}
.filter-btn-active{
font-weight: 700;
}
.filter-btn:hover{
  background: #80808052;
}
  </style>
  