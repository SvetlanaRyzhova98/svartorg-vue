<template>
    <div class="title-box">
            <h3 class="title-section"><slot /></h3>
    </div>
</template>

<style>
.title-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
}
.title-section {
  font-size: 24px;
  font-weight: 500;
}
@media all and (max-width: 800px) {
   
}
 

</style>