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
  background: url('~/components/MainTitle/assets/slider-decor.svg') no-repeat center left;
  font-size: 27px;
  line-height: 30px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: black;
  font-weight: 600;
  padding-left: 140px;
}
@media all and (max-width: 800px) {
    .title-section {
    font-size: 24px;
    line-height: 24px;
    padding-left: 130px;
  }
}
@media all and (max-width: 500px) {
  

  .title-section {
    font-size: 20px;
    line-height: 1;
    padding-left: 0;
    background-size: 0;
    color: var(--blue);
  }}

</style>