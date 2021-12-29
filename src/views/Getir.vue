<template>
  <div class="container">
   <header class="header">
     <NavHome />
  
   </header>
    
  </div>
</template>
<script>
import NavHome from '../components/navHome.vue';


export default {
  data: () => {
    return {kortingscode : false ,
    kortingscode2 : false}
  },
  components: {
    
    NavHome,
  }
};
</script>
<style>


.container{
 flex-direction: row;
}

header{
  background-color: #5D3FD3;
  height: 40vh;
}
</style>
