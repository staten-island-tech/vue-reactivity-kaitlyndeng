<script>
import Base from `./BaseView.vue`;
import Toppings from `./ToppingsView.vue`;
import Confirmation from `./Confirmation.vue`;

const routes = {
  '/': Base,
  '/Toppings': Toppings,
  '/Confirmation': Confirmation
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  }
}
</script>

<template>
  <a href="#/">Base</a>
  <a href="#/ToppingsView">Toppings</a>
  <a href="#/Confirmation">Confirmation</a>
  <component :is="currentView" />
</template>
<!-- // export default {
//   components: {
//     Base,
//     Toppings,
//     Confirmation
//   },
//   data() {
//     return{
//       currentTab:`Base`,
//       tabs: [`Base`, `Toppings`, `Confirmation`]
//     }
//   }
// }
// </script> -->

<!-- //
<template>
  //
  <div class="app">
    //
     <div class="nav">
//       <router-link to="/">Base</router-link>
//       <router-link to="/">Toppings</router-link>
//       <router-link to="/">Confirmation</router-link> -->
<!-- // <button v-for="tab in tabs" :key="tab">{{ tab }}</button> //
  </div>
  //
</template>

<style scoped>
h1 {
  color: rgb(0, 0, 0);
}
</style> -->
