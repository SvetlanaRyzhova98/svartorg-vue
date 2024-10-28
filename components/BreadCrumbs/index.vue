<template>
    <ul class="breadcrumbs">
          <li><NuxtLink to="/">Главная</NuxtLink></li>

            <template v-for="({caption, href}, j) in path">
                <span>—</span>
                <li><NuxtLink  :to="href" >{{caption}}</NuxtLink></li>
            </template>

          
         </ul>
</template>

<script>
export default {
  name: 'BreadCrumbs',
  props: {path: Array}
}
</script>

<style>
.breadcrumbs{
  display: flex;
  justify-content: start;
  margin: 25px 0;
  gap: 5px;
  flex-wrap: wrap;
  font-size: 13px;
}
.breadcrumbs li{
    width: min-content;
    white-space: nowrap;
}
.breadcrumbs li a{
  color: rgba(34,41,51,0.6);
  margin: 0 5px;
  font-style: italic;
}
.breadcrumbs span {
  font-style: italic;
   color: rgba(34, 41, 51, 0.6);
}
</style>