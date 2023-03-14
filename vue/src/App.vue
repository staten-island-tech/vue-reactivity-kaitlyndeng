<template>
  <div class="app">
    <div class="nav">
      <router-link to="/">Base</router-link>
      <router-link to="/">Toppings</router-link>
      <router-link to="/">Confirmation</router-link>
    </div>
    <router-view />
    <h1></h1>
  </div>
</template>

<style scoped>
h1 {
  color: rgb(0, 0, 0);
}
</style>
