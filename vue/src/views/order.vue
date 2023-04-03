<template>
  <div class="order">
    <header>Order here.</header>
 <section class="display">
    <Card
      v-for="flavor in flavors"
      :key="flavor.type"
      :type="flavor.type"
      :image="flavor.image"
    />
  </section>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  
  name: "order",
  components: {
    Card,
  },
  data() {
    return {
      cart:[],
      flavors: [
        {
          type: "Vanilla",
          image:
            "https://www.carvel.com/-/media/carvel/menu/ice-cream/scooped/36-vanilla.png?v=1&d=20180327T225019Z&h=600&w=600&la=en&hash=7A935619D543C883D95A2FB028E9100E",
        },
        {
          type: "Strawberry",
          image:
            "https://www.carvel.com/-/media/carvel/menu/ice-cream/scooped/52-strawberry.png?v=1&d=20180327T225028Z&h=600&w=600&la=en&hash=BD858A3D14786C200F7E6EF17839E5D4",
        },
        {
          type: "Chocolate",
          image:"https://www.carvel.com/-/media/carvel/menu/ice-cream/scooped/37-chocolate.png?v=1&d=20180327T225042Z&h=600&w=600&la=en&hash=9D65EF2A3332FAE92842638EAF2314F4",
        },
        { type: "Cookies & Cream",
          image:"https://www.carvel.com/-/media/carvel/menu/ice-cream/scooped/49-oreo_cookies_and-cream.png?v=1&d=20180327T225025Z&h=600&w=600&la=en&hash=9E49C4B9DF526C56369727CB61903799" },
        { type: "Cookie Dough",
          image:"https://www.carvel.com/-/media/carvel/menu/ice-cream/scooped/cookie-dough.png?v=1&d=20180420T162555Z&h=600&w=600&la=en&hash=506F1B8E46F3AFBB82C2B75FB5E4B4E2"},
        { type: "Coffee",
          image:"https://www.carvel.com/-/media/carvel/menu/ice-cream/scooped/45-coffee_and_cream.png?v=1&d=20180327T225022Z&h=600&w=600&la=en&hash=B61E07B244254D8F37D035DEFA8F212E" },
      ],
    };
  },
};
</script>
<style>
header{
  text-align: center;
  padding: 10px;
  margin:10px;
  font-size: 1.5rem;
}
.display{
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  padding: 10px;
  margin:10px;
  background-color: white;
}
</style>
