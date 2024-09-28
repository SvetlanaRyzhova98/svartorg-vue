<template>
  <div class="hiro wrapper"><Banner /><PopularProducts /></div>
</template>


<script>
 
 
</script>


<style scoped>
.wrapper {
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
}

.hiro {
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 25px;
  margin-top: 35px;
}
@media all and (max-height: 400px) {
}
</style>
