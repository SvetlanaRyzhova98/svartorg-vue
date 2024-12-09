<template>
  <form class="form_search" @submit.prevent="onSubmit">
    <input type="text" class="input-search" v-model="search" />
    <button class="button_search" @click="onSubmit" type="button">
      <img src="/assets/search2.svg" alt="search" />
    </button>
  </form>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const searchQuery = route.params.searchQuery;
let search = searchQuery;

const onSubmit = (e) => {
  if (search) {
    navigateTo(`/search/${search}`);
  }
};
</script>

<style scoped>
.form_search {
  width: 100%;
  display: flex;
  position: relative;
}
.button {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  padding: 0 20px;
  border-radius: 10px;
  cursor: pointer;
}
.banner__box {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
}
.input-search {
  background: #e8e5e5;
  border: none;
  padding: 25px;
  border-radius: 10px  0 0 10px;
  width: 100%;
  height: 70px;
}
.button_search:hover{
  background: #e8e5e5cf;
}
.button_search img{
  opacity: 0.8;
  width: 18px;

}
.button_search{
  background:   #e8e5e5;
  border: none;
  padding: 5px;
  border-radius: 0 10px 10px 0;
  width: 55px;
  height: 70px;
  cursor: pointer;
}
 
</style>
