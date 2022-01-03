<template>
 <header :class = "{ 'scrolled-nav': scrollPosition}" >
   <nav>
     <div class="logo">
       <h1>klaas</h1>
     </div>  
     <ul v-show="!mobile" class="navigation">
       <li><router-link class="link" to="{name: 'Zapp'}">Zapp</router-link></li>
       <li><router-link class="link" to="{name: 'Zapp'}">Zapp</router-link></li>
       <li><router-link class="link" to="{name: 'Zapp'}">Zapp</router-link></li>
     </ul>
     <div class="icon">
       <i @click="toggleCliked" v-show="mobile" class="fa fa-bars" :class="{'icon-active' : mobileNav}" ></i>
     </div>
     <transition name="mobile-nav">
       <ul v-show="mobileNav" class="dropdown-nav">
       <li><router-link class="link" to="{name: 'Zapp'}">Zapp</router-link></li>
       <li><router-link class="link" to="{name: 'Zapp'}">Zapp</router-link></li>
       <li><router-link class="link" to="{name: 'Zapp'}">Zapp</router-link></li>
     </ul>
     </transition> 
   </nav>
 </header>
</template>
<script>

</script>

<style lang="scss">

header{
  position: fixed;
  width: 100%;
  z-index: 99;
  transition: 0.5 ease all;
  color: #fff;
}

nav{
  display: flex;
  flex-direction: row;
  padding: 12px 0;
  transition: .5s ease all;
  width: 90%;
  margin: 0 auto;
  @media (min-width: 1140) {
    min-width: 1140;
  }

}
</style> >
