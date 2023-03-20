<template>
  <div class="base">
    <h1 v-if="vegan">{{ flavor }}</h1>
    <h1 v-else>Not vegan.</h1>
    <!-- <input type="checkbox" id="chocolate" value="chocolate" v-model="flavors" />
    <label for="chocolate">Chocolate</label>
    <br />
    <input type="checkbox" id="vanilla" value="vanilla" v-model="flavors" />
    <label for="vanilla">Vanilla</label>
    <br />
    <input
      type="checkbox"
      id="strawberry"
      value="strawberry"
      v-model="flavors"
    />
    <label for="strawberry">Strawberry</label>
    <br /> -->
  </div>
</template>

<script>
export default {
  name: "Base",
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
