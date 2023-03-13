<template>
  <div class="base">
    <input type="checkbox" id="chocolate" value="chocolate" v-model="flavors" />
    <label for="chocolate">Chocolate</label>
    <input type="checkbox" id="vanilla" value="vanilla" v-model="flavors" />
    <label for="vanilla">Vanilla</label>
    <input
      type="checkbox"
      id="strawberry"
      value="strawberry"
      v-model="flavors"
    />
    <label for="strawberry">Strawberry</label>
    <br />
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
