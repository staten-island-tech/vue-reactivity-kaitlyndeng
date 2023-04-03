<template>
  <div class="confirm">
    <header>Confirm your order.</header>
    <ul v-for="item in cart"
      :key="item"
      :item="item">
{{ item.name }}
    </ul>
  </div>
</template>

<script>
import { cart } from "../cart";
export default {
  
  name:"confirm",
 
  data() {
    return {
    cart:cart.cart,
    };
  },
};
</script>

<style scoped>
header{
  text-align: center;
  font-size: 1.5rem;
}
.confirm, ul{
  color:black;
  margin: 10px;
  padding: 10px;
  text-align: center;
}
</style>
