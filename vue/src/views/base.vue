<template>
  <div class="base">
    <h1>Choose all your flavors.</h1>
    <h2>1 flavor = 1 scoop</h2>

    <Card
      v-for="flavor in flavors"
      :key="flavor"
      :title="flavor.type"
      :image="flavor.image"
      :desc="flavor.desc"
    />

    <!-- <h3>
      <b>{{ flavor.type }}</b>
    </h3>
    <p>{{ flavor.desc }}</p> -->

    <!-- <h2 v-if="vegan === 'true'">{{ flavors.type }}</h2>
    <h2 v-else>Not vegan.</h2> -->

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
import Card from "../components/Card.vue";
export default {
  name: "base",
  components: {
    Card,
  },
  data() {
    return {
      selected: "",
      flavors: [
        {
          type: "Vanilla",
          vegan: "true",
          desc: "Classic Vanilla",
          image:
            "https://www.eatthis.com/wp-content/uploads/sites/4/2022/06/vanilla-ice-cream.jpg?quality=82&strip=all",
        },
        { type: "Strawberry", vegan: "true", desc: "desc" },
        {
          type: "Chocolate",
          vegan: "false",
          desc: "Made with dark chocolate.",
        },
        { type: "Cookies n' Cream", vegan: "false", desc: "desc" },
        { type: "Rum Raisin", vegan: "true", desc: "desc" },
        { type: "Rocky Road", vegan: "false", desc: "desc" },
      ],
    };
  },
};
</script>
<style></style>
