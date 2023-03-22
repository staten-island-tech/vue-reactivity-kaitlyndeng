<template>
  <div class="toppings">
    <h1>Add toppings here</h1>
    <div v-for="topping in toppings" :key="topping">
      {{ topping }}
    </div>
  </div>
</template>
<script>
export default {
  name: "toppings",
  components: {},
  data() {
    return {
      toppings: [
        "chocolate chips",
        "sprinkles",
        "Oreos",
        "fudge",
        "M&Ms",
        "chopped nuts",
      ],
    };
  },
};
</script>
<style></style>
