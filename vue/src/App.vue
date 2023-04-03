<template>
  <h1>Scoops</h1>
  <h2>I scream, you scream. We all scream.</h2>
  <div id="app">
    <section class="nav">
      <router-link to="/">Order</router-link> |
      <router-link to="/confirm">Check Out</router-link>
    </section>
    <router-view />
  </div>
</template>

<style scoped>
body{
  background-color:rgb(255, 255, 255)
}
h1{
  font: 30px;
  text-align: center;
  font-weight: 600;
}
 h2, h3{
  color:black;
  text-align: center;
  text-align: center;
  padding: 10px;
  margin:10px
}
.nav {
  color: rgb(0, 0, 0);
  font-size: 1rem;
  text-align: center;
  border-radius: 30px;
  background-color: rgb(202, 141, 193);
  text-align: center;
  padding: 10px;
  margin:10px;
  border-color: black;
}
</style>
