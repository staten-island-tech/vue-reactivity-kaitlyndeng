<template>
  <div class="home">
    <h1 v-if="vegan">{{ flavor }}</h1>
    <h1 v-else>"This flavor is not vegan."</h1>
    <ul>
      <li v-for="topping in toppings" :key="topping">{{ topping }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      flavor: "chocolate",
      vegan: "true",
      toppings: ["sprinkles", "marshmallows", "chocolate"],
    };
  },
};
</script>

<style></style>
