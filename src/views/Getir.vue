<template>
  <div class="container">
   <header class="header">
     <div class="logo">
      <img  src="../assets/getirlogo.png">
      <h3>Wij bezorgen jouw eten binnen 10 minuten</h3>
      <h3>Van ijsbergsla tot ijskoud bier wij brengen jou alles wat je nodig hebt (en meer) binnen minuten.</h3>
     </div>
   </header>
   <main>
     <h1 class="discount">Kortingen</h1>
     <!----kortingscode div--->      
      <section class="discount_box">
        <div class="left_side">
        <h1>$10 ,- op je bestelling bij zapp</h1>
        <p>Krijg nu tijdelijk 10 euro koritning op je bestelling bij zapp</p>
         <p>voorwaar</p>
        </div> 
        <div class="right_side">
          <button @click="kortingscode = !kortingscode" class="button_1">Druk voor code</button>
          <h6 :class="{'active':kortingscode }">korting 1234</h6>
        </div>  
      </section>  
      <!----kortingscode div--->      
      <section class="discount_box">
        <div class="left_side">
        <h1>$10 ,- op je bestelling bij zapp</h1>
        <p>Krijg nu tijdelijk 10 euro koritning op je bestelling bij zapp</p>
         <p>voorwaar</p>
        </div> 
        <div class="right_side">
          <button @click="kortingscode2 = !kortingscode2" class="button_1">Druk voor code</button>
          <h6 :class="{'active':kortingscode2 }">korting 1234</h6>
        </div>  
      </section>  
      <!---- box 2----->
      <section class="box_2">
        <h1>Klaar voor uw eerste bestelling ?</h1>
        <img src="../assets/getirstelen.png" >
      </section>  
   </main> 
   <!------- footer--> 
   <footer>
       <section class="links">
          <div class="columns">
          <ul>
            <li>LINK</li>
            <li>LINK</li>
            <li>LINK</li>
            <li>LINK</li>
          </ul>
          </div>
           <div class="columns">
          <ul>
            <li>LINK</li>
            <li>LINK</li>
            <li>LINK</li>
            <li>LINK</li>
          </ul>
          </div>
            <div class="columns">
          <ul>
            <li>LINK</li>
            <li>LINK</li>
            <li>LINK</li>
            <li>LINK</li>
          </ul>
          </div> 
        </section>  
        <div class="social">
      <font-awesome-icon class="social-icon" :icon="['fab', 'instagram']" />
      <font-awesome-icon class="social-icon" :icon="['fab', 'twitter']" />
      <font-awesome-icon class="social-icon" :icon="['fab', 'linkedin']" />
      <font-awesome-icon class="social-icon" :icon="['fab', 'youtube']" />
    </div>
   </footer>

    
  </div>
</template>
<script >



export default {
  data: () => {
    return {kortingscode : false ,
    kortingscode2 : false}
  },
};
</script>
<style >
*{
align-items: center;
justify-content: center;
}

/* header body css */


header{
  background-image: url('../assets/header-background.png') ;
  height: 40vh;
  
}

 .logo{
 margin-top:2em ;
 }
 .logo > h3{
   color: #fff;
  text-align:center ;
  font-weight: bold;
 }
 .logo > img{
   height: 110px;
   margin: 0 auto;
   display: block;
 }
/* Main body css */
main{
 display: flex;
 flex-direction: column; 
}
 main > .discount{
 position: inherit;
  margin-right: 60% ;
  margin-top:0.3em ;
   margin-bottom:0.3em ;
 }

/* discount box css */
 main > .discount_box{
  border: purple 2px solid;
  display: flex;
  flex-direction: row; 
  height: 18vh;
  width: 80%;
  margin-bottom:6em ;
 }

.discount_box > .right_side{
  margin-left: 6em;
}
.discount_box > .left_side{
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-right:3em ;
}

.button_1{
  background-color: purple;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.right_side >h6{
 
  opacity: 0 ;
  transform: translateY(2em);
  transition: 300ms;
}
 
.right_side >h6.active{
  opacity: 1;
  transform: translateY(0);
}

/* box 2 css */
main > .box_2{
  display: flex;
  flex-direction: row;
}

.box_2 {
  background-image: url('../assets/header-background.png') ;
  width: 100%;
  height: 40vh;
}
.box_2 >h1{
  color: #fff;
  margin-right:10em ;
  font-weight: bold;
  font-size: 40px;
}

.box_2 > img{
  height: 450px;
}
/* footer css */
footer{
  height: 30vh;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.links{
  display: flex;
  flex-direction: row;
  align-content: left;
  justify-content: left;
  margin-right: auto;
}
 .links > .columns{
   margin: 3em;
  list-style-type: none;
   
 }
.links > .columns > ul{
  list-style-type: none;
  color: purple;
  font-weight: bold;
}

ul > li:hover{
  color: #00008b;
}

footer > .social{
  color: purple;
  position: absolute;
  right: 20px;
  font-size: 25px;
}

.social > .social-icon{
  margin: 0.5em;
}

</style>
