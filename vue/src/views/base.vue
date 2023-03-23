<script>
export default {
  name: "base",
  components: {},
  data() {
    return {
      flavors: [
        {
          type: "vanilla",
          vegan: "true",
          desc: "desc",
          img: <a ref src="https://www.rachelcooks.com/wp-content/uploads/2022/05/no-churn-vanilla-ice-cream-1500R-13-square.jpg">,
        },
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
<template>
  <div class="base">
    <h1>Choose all your flavors.</h1>
    <h2>1 flavor = 1 scoop</h2>
    <div class="flavors"></div>
    <div v-for="flavor in flavors" :key="flavor">
      <div class="card">
        <h3>
          <b>{{ flavor.type }}</b>
        </h3>
        <p>{{ flavor.desc }}</p>
        {{ flavor.img }}
      </div>
    </div>
    <!-- <div class="vegan">
      <h2 v-if="vegan === 'true'">{{ flavors.type }}</h2>
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
    <div :style="styleObject"></div>
  </div>
</template>
<style></style>
