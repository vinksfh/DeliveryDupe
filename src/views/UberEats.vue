<template>
 <div class="container">
   <header>
     <img class="b_img" src="../assets/background.png">
      <section class="logo">
        <img class="logo_img" src="../assets/3545_bb7cfc7ecaae5f28ca69bcc3eddfcbb3.png" alt="">
      </section>
   </header>  
   <main>
     <!--- info row-->
    <section class="info_row"> 
     <div class="info">
       <div class="info_img">
          <img src="../assets/imguber2.png" >
       </div>  
       <div class="title_info">
         <h3>Zorg voor je werknemers</h3>
       </div>  
     </div>
     <div class="info">
       <div class="info_img">
         <img src="../assets/imgUber3.png" >
       </div>  
       <div class="title_info">
         <h3>Jouw restaurant, bij jouw bezorgd</h3>
       </div>  
     </div>
     <div class="info">
       <div class="info_img">
        <img src="../assets/img.png" >
       </div>  
       <div class="title_info">
         <h3>Werken voor uber</h3>
       </div>  
     </div>
    </section> 
   <h1 class="discount">Kortingen</h1>
     <!----kortingscode div--->      
      <section class="discount_box">
        <div class="left_side">
        <h1>$10 ,- op je bestelling bij Uber</h1>
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
        <h1>$10 ,- op je bestelling bij Uber</h1>
        <p>Krijg nu tijdelijk 10 euro koritning op je bestelling bij zapp</p>
         <p>voorwaar</p>
        </div> 
        <div class="right_side">
          <button @click="kortingscode2 = !kortingscode2" class="button_1">Druk voor code</button>
          <h6 :class="{'active':kortingscode2 }">korting 1234</h6>
        </div>  
      </section>  
      <!---extra filling --->
      <section>
        <div class="title_map">
          <h1>Cities near you</h1>
        </div>  
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19486.69615054807!2d4.886410484101774!3d52.3733752063353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609bb6821e9d3%3A0xd29b21b043cebd9b!2sAmsterdam-Centrum%2C%20Amsterdam!5e0!3m2!1sen!2snl!4v1641224057210!5m2!1sen!2snl" 
        width="1150" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        
      </section>
   </main>
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

<script>


export default {
  data: () => {
    return {kortingscode : false ,
    kortingscode2 : false}
  }
};
</script>

<style>
*{
align-items: center;
justify-content: center;
}

/* header  css */
header{
  height: 40vh;
  background-color: #e6e666;
  display: flex;
  flex-direction: row;
}

header >.b_img{
  height: 40vh;
  align-items: left !important;
}
.logo{
  margin: 0 auto;
  display: block;
  
}
.logo > .logo_img{
  height: 250px;
}
/* main  css */

.info_row{
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
}

.info{
  margin: 1em;

}
.info > .info_img{
border-radius: 50%;
}

.info > .title_info{
  font-weight: bold;
  font-size: 17px;
  
}

main{
 display: flex;
 flex-direction: column; 

}
 main > .discount{
 position: inherit;
  margin-right: 70% ;
  margin-top:0.3em ;
  margin-bottom:0.3em ;
 }

/* discount box css */
 main > .discount_box{
  border: rgb(0, 0, 0) 2px solid;
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
  background-color: rgb(110, 175, 25);
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
/* map box css */
.title_map{
  text-align: left;
  margin-right: 70% ;
  margin-top:0.3em ;
  margin-bottom:0.3em ;
  font-size: 20px;
}
/* footer css */
footer{
  background: black;
  height: 30vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 3em;
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
  color: rgb(255, 255, 255);
  font-weight: bold;
}

ul > li:hover{
  color: #747272;
}

footer > .social{
  color: rgb(241, 241, 241);
  position: absolute;
  right: 20px;
  font-size: 25px;
}

.social > .social-icon{
  margin: 0.5em;
}
</style>