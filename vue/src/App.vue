<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Base</router-link> |
      <router-link to="/toppings">Toppings</router-link> |
      <router-link to="/confirmation">Confirmation</router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
.nav {
  color: rgb(0, 0, 0);
}
</style>
