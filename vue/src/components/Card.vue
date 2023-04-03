<template>
  <div class="card">
    <h3>{{ type }}</h3>
    <img :src="image" alt="" />
    <button @click="add(), count++"> Add to Order</button>
    <h4>Scoops: {{ count }}</h4>
  </div>
  
</template>

<script>
import { cart } from "../cart";
export default {
  name: "Card",
  props: {
    type: String,
    image: String,
  },
  methods:{
      add(){
        cart.cart.push({
          name:this.type,
          image: this.image,

        })
        console.log(cart.cart)
      }
    },
    data(){
      return{
        count:0
      }
    }
};
  
</script>

<style scoped>
body {
  display: flex;
  flex-direction: row;
  text-align: center;
}
.card {
  width: 50%;
  font-size: 13px;
  border-radius: 20px;
  background-color: white;
  text-align: center;
  color: black;
  text-align: center;
  padding: 10px;
  margin:10px
}
img {
  width: 100%;
}
button{
  border-radius: 50px;
  background-color: rgb(202, 141, 193);
  font-family: 'Gluten', cursive;
  text-align: center;
  padding: 10px;
  margin:10px
}
</style>
