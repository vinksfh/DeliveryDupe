<template>
  <div id="app">
    <div id="nav">
      <p>kortingen</p>
     
      <div class="right">

        <router-link to="/">Zapp</router-link>
        <router-link to="/getir">Getir</router-link>
        <router-link to="/getir">Gorrilas</router-link>
        <router-link to="/getir">UberEats</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav{
 display: flex;
 flex-direction: row;
 background-color: transparent;
 background-size: cover;
 background-clip: border-box;

}
#nav p{
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 2em;
  text-decoration: none;
  margin:0.5em;
  font-size: 30px;
  text-transform: uppercase;
  position: absolute ;
  left: 0px;

}
.right{
  margin-left:auto;
  display: flex;
   position: absolute;
  right: 0px;
}
#nav a {
  font-weight: bold;
  font-size: 15px;
  color: #ffffff;
  margin-bottom: 2em;
  text-decoration: none;
  margin:0.5em;
  margin-top: 1.5em;
  display: flex;
 

  
}
#nav a:hover{
  color: rgb(0, 0, 0);
}
.icon{
  color: rgb(0, 0, 0);
  font-size: 60px;
  margin-top: 0.4em;
}
@media (min-width:700px) {
  #nav a {
    font-size: 20px;
  }
  
}



</style>
