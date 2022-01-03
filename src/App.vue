<template>
 <div id="app">
    <NavHome />
   <router-view/>
 </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<script>

import navHome from "./components/navHome.vue"
export default {
  components: {
    navHome,
  }
}
</script>
