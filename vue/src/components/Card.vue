<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <div class="image">
      <image :src="image" alt="" />
    </div>
    <h4>{{ desc }}</h4>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    desc: String,
    image: String,
  },
};
</script>

<style scoped>
.card {
  width: 30%;
  font-size: 13px;
  border-radius: 20px;
  background-color: rgb(237, 228, 175);
  text-align: center;
  color: black;
}
.image {
  width: 100%;
}
</style>
