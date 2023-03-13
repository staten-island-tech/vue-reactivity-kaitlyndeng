<template>
  <div class="app">
    <div class="nav">
      <router-link to="/">Base</router-link>
      <router-link to="/">Toppings</router-link>
      <router-link to="/">Profile</router-link>
    </div>
    <router-view />
    <h1>Hello world</h1>
  </div>
</template>

<style scoped>
h1 {
  color: red;
}
</style>
