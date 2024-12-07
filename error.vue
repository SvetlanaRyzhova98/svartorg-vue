<template>
  <nuxt-link to="/">
    <div class="error-page">
      <img src="./public/assets/404-2.svg" alt="404" />
    </div>
  </nuxt-link>
</template>

<script setup>
definePageMeta({
  statusCode: 500,
});
</script>

<style scoped>
.error-page img {
  height: 75vh;
  padding: 40px;
}

.error-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
