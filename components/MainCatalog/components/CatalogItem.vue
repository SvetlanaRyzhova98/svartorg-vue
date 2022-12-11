
<template>
  <div class="card-item" :class="{'card-item-hover': isBack}" @click="onChange">
    <div class="card">
      <div class="front ">
        <img :src="item.image" alt="" />
        <div class="catalog_desc">
          <p class="name-product">
            {{item.title}}
            <span>{{item.desc}}</span>
          </p>
          <div class="price">{{item.price}}</div>
        </div>
      </div>

      <div class="back ">
        <div class="item-info">
          <table class="info-list">
            <thead>
            <tr>
              <th>Параметр</th>
              <th>Значение</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="({key,val}, j) in item.rows" :key="j">
              <td>{{key}}</td>
              <td>{{val}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogItem',
  props: {
    item: Object
  },
  data() {return {isBack: false}},
  methods: {
    onChange() {
      this.isBack = !this.isBack;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.breadcrumbs{
  display: flex;
  justify-content: start;
  margin-top: 20px;
  font-size: 13px;
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
  font-size: 13px;
  font-style: italic;
  border-radius: 8px;
  background: transparent;
  margin: 0 5px;
}
.filter-btn:hover{
  background: #80808052;
}

.catalog_box {
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin-top: 30px;
  justify-content: center;
  grid-auto-rows: 360px;
}

.name-product {
  color: black;
  font-size: 15px;
}

.name-product span {
  font-weight: bold;
  display: block;
  padding: 7px 0;
}
.catalog_desc {
  margin: 15px 0 0 0;
  color: grey;
  text-align: center;
  font-size: 14px;
}

/* .catalog_item {
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  align-items: center;
  justify-content: center;
  border-radius: 10%;
  padding: 15px;
  position: relative;
} */
.card-item {
  display: flex;
  flex-direction: column;
  /* border: 1px solid grey; */
  align-items: flex-start;
  justify-content: center;
  /* border-radius: 10%; */
  /* padding: 15px; */
  position: relative;
}
.item-info {

  width: 100%;
  transition: 1s all;
  height: 100%;
  border-radius: inherit;
}

.price {
  font-size: 18px;
  line-height: 25px;
  text-align: center;
}
.info-btn:hover {
  color: var(--blue);
}
.info-list {
  padding: 15px;
  width: 100%;
  color: black;
}
.card-item {
  margin: 0px auto;
  perspective: 400px;
  width: 100%;
  z-index: 73;
  max-width: 265px;
}

.card {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.3s linear;
  border-radius: 20px;
  border: 1px solid grey;
  background: white;
}
.card-item:hover img {
  transform: scale(1.05);
}
.card-item:hover {
  cursor: pointer;
}

.card-item-hover .card {
  transform: rotateY(180deg);
}
.card-item-hover .front {
  display: none;
}
.card-item-hover .back {
  display: block;
}

.front {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background-color: white;
  backface-visibility: hidden;
  border-radius: 20px;
  margin:  15px;
  /* height: 330px; */
  /* height: 100%; */
}

.card img {
  width: 100%;
  border-radius: 20px;
  object-fit: contain;
}
.back {
  display: none;
  transform: rotateY(180deg);
  box-sizing: border-box;
  color: black;
  text-align: center;
  background-color: white;
  backface-visibility: hidden;
  border-radius: 20px;
  padding: 15px;
  /* min-height: 365px; */
  overflow: hidden;
  /* height: 330px; */
}

strong {
  font-weight: bold;
}


table {
  font-size: 12px;
  line-height: 20px;
  text-align: left;
}
.info-list {
  font-size: 10px;}
th {

  color: #000;
  font-weight: bold;
  padding-bottom: 5px;

  text-align: center;
}
th:first-child{
  border-right: 1px solid  var(--grey-light);
}
td{
  border-bottom: 1px solid   var(--grey-light);
  word-wrap: break-word;
}
td:first-child {
  padding-right: 20px;
  border-right: 1px solid  var(--grey-light);
  line-height: 1;
  padding: 5px;
  max-width: 80px;
}
td:last-child {
  color: rgb(15 14 14);
  font-size: 10px;
  padding: 5px 0 3px 10px;
  min-width: 100px;
  font-weight: 600;
  vertical-align: middle;
  line-height: 1;}

tr:last-of-type td {
  border: none;

}
tr:last-child td:last-child {
  border: none;
  border-left: 1px solid  var(--grey-light);
}
/*
th:after {
  background: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,.08));
  content: '';
  display: block;
  height: 25%;
  left: 0;
  margin: 1px 0 0 0;
  position: absolute;
  top: 25%;
  width: 100%;
}
th:first-child {
  border-left: 1px solid #777;
  box-shadow: inset 1px 1px 0 #999;
}
th:last-child {
  box-shadow: inset -1px 1px 0 #999;
}
td {
  border-right: 1px solid #fff;
  border-left: 1px solid #e8e8e8;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #e8e8e8;
  /* padding: 10px 15px;
  position: relative;
  transition: all 300ms;
}
tr {
  background: url(https://jackrugile.com/images/misc/noise-diagonal.png);
}
tr:nth-child(odd) td {
  background: #f1f1f1 url(https://jackrugile.com/images/misc/noise-diagonal.png);
}
tr:last-of-type td {
  box-shadow: inset 0 -1px 0 #fff;
}
tr:last-of-type td:first-child {
  box-shadow: inset 1px -1px 0 #fff;
}
tr:last-of-type td:last-child {
  box-shadow: inset -1px -1px 0 #fff;
}
tbody:hover td {
  color: transparent;
  text-shadow: 0 0 3px #aaa;
}
tbody:hover tr:hover td {
  color: #444;
  text-shadow: 0 1px 0 #fff;
}
 */

/*------------------------------- benzo--------------------------------------------------------------------------------- */



@media all and (max-width: 800px) {

  /* .front, .back{
    height: 200px;
  } */
}
@media all and (max-width: 500px) {
  .filter-btn {
    padding: 5px 12px;}
  /* .front, .back{
    height: 250px;
  } */
}
</style>
