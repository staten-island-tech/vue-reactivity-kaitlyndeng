<template>
  <div class="base">
    <h1>Choose all your flavors.</h1>
    <h2>1 flavor = 1 scoop</h2>
    <div class="flavors"></div>
    <Card v-for="flavor in flavors" :key="flavor" />
    <div class="card">
      <h3>
        <b>{{ flavor.type }}</b>
      </h3>
      <p>{{ flavor.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    desc: String,
    img: String,
  },
};
</script>
