<template>
  <div class="base">
    <h1>Choose all your flavors.</h1>
    <h2>1 flavor = 1 scoop</h2>
    <div v-for="flavor in flavors" :key="flavor">
      {{ flavor.type }}
    </div>
    <!-- <div class="vegan">
      <h2 v-if="vegan">{{ flavor.type }}</h2>
      <h2 v-else>Not vegan.</h2>
    </div> -->

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
  name: "base",
  components: {},
  data() {
    return {
      flavors: [
        { type: "vanilla", vegan: "true", desc: "desc" },
        { type: "strawberry", vegan: "true", desc: "desc" },
        { type: "chocolate", vegan: "false", desc: "desc" },
        { type: "cookies n' cream", vegan: "false", desc: "desc" },
        { type: "rum raisin", vegan: "true", desc: "desc" },
        { type: "rocky road", vegan: "false", desc: "desc" },
      ],
    };
  },
};
</script>

<style></style>
