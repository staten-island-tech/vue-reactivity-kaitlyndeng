<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Base</router-link> |
      <router-link to="/toppings">Toppings</router-link> |
      <router-link to="/confirmation">Confirmation</router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
h1 {
  color: rgb(0, 0, 0);
}
</style>
