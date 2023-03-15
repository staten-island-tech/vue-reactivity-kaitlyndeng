<script>
import Base from `./HomeView.vue`;
import Toppings from `./AboutView.vue`;
import Confirmation from `./Confirmation.vue`;

export default {
  components: {
    Base,
    Toppings,
    Confirmation
  },
  data() {
    return{
      currentTab:`Base`,
      tabs: [`Base`, `Toppings`, `Confirmation`]
    }
  }
}
</script>

<template>
  <div class="app">
    <!-- <div class="nav">
      <router-link to="/">Base</router-link>
      <router-link to="/">Toppings</router-link>
      <router-link to="/">Confirmation</router-link> -->
    <button v-for="tab in tabs" :key="tab" :class"[`tab-button`, {active:
    currentTab === tab}]"
  </div>
</template>

<style scoped>
h1 {
  color: rgb(0, 0, 0);
}
</style>
