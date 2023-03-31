<template>
  <div class="base">
    <h1>Choose all your flavors.</h1>
    <h2>1 flavor = 1 scoop</h2>

    <Card
      v-for="flavor in flavors"
      :key="flavor"
      :title="flavor.type"
      :desc="flavor.desc"
      :image="flavor.image"
    />
    <Button
      v-for="flavor in flavors"
      :key="flavor"
      @button-click="add"
    ></Button>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Button from "../components/Button.vue";
export default {
  name: "base",
  components: {
    Card,
    Button,
  },
  data() {
    return {
      selected: "",
      methods: {
        add: function () {
          v-model="add";
        },
      },
      flavors: [
        {
          type: "Vanilla",
          vegan: "true",
          desc: "Classic Vanilla",
          image:
            "https://www.eatthis.com/wp-content/uploads/sites/4/2022/06/vanilla-ice-cream.jpg?quality=82&strip=all",
        },
        {
          type: "Strawberry",
          vegan: "true",
          desc: "Classic Strawberry",
          image:
            "https://www.thespruceeats.com/thmb/kpuMkqk0BhGMTuSENf_IebbHu1s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/strawberry-ice-cream-10-0b3e120e7d6f4df1be3c57c17699eb2c.jpg",
        },
        {
          type: "Chocolate",
          vegan: "false",
          desc: "Dark chocolate ice cream.",
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
