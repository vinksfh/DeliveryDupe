<template>
<div class="container">
  <header class="header">
    
    <div class="heading">
      <NavHome />
    <img src="../assets/zapp_logo.abf559db.svg" >
    <div class="titles">
    <p class="title">Want it. Need it. Zapp it<br/></p>
     <span class="subTitle">Deliverd in minutes, 24/7</span>
    </div>   
    </div> 
  </header>
    <div class="content">
      <h1 class="discount">Kortingen</h1>
<!----kortingscode div--->      
      <div class="discount_box">
        <div class="left_side">
        <h1>$10 ,- op je bestelling bij zapp</h1>
        <p>Krijg nu tijdelijk 10 euro koritning op je bestelling bij zapp</p>
         <p>voorwaar</p>
        </div> 
        <div class="right_side">
          <button @click="kortingscode = !kortingscode" class="button_1">Druk voor code</button>
          <h6 :class="{'active':kortingscode }">korting 1234</h6>
        </div>  
      </div>  
<!----kortingscode div--->
      <div class="discount_box">
        <div class="left_side">
        <h1>$10 ,- op je bestelling bij zapp</h1>
        <p>Krijg nu tijdelijk 10 euro koritning op je bestelling bij zapp</p>
         <p>voorwaar</p>
        </div> 
        <div class="right_side">
          <button @click="kortingscode2 = !kortingscode2" class="button_1">kortingscode</button>
          <h6 :class="{'active':kortingscode2 }">korting 1234</h6>
        </div>  
      </div>  
 <!----section met foto en text---> 
      <section class="box_2">
        <div class="section_left">
          <img class=img_1 src="../assets/fotozappwerknemer.png">
        </div>
        <div class="section_right">
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             </h1>
        </div>
      </section>
      <section class="box_3">
        <p>Zapp</p>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          </h1>
      </section>
      <!------footer --->
      <footer>
        <div class="links">
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
        </div>  
        <div class="social">
      <font-awesome-icon class="social-icon" :icon="['fab', 'instagram']" />
      <font-awesome-icon class="social-icon" :icon="['fab', 'twitter']" />
      <font-awesome-icon class="social-icon" :icon="['fab', 'linkedin']" />
      <font-awesome-icon class="social-icon" :icon="['fab', 'youtube']" />
    </div>
      </footer>
    </div>   
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
*{
align-items: center;
justify-content: center;
}

.heading{
display: flex;
flex-direction: column;
}
header{
height: 30vh;
display: flex;
flex-direction: column;
 background:#3cc2fb;
 background-size: cover;

}
.titles{
  margin-top: 0.8em;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.title{
  align-items: center;
  justify-content: center;
  font-size:30px;
  font-weight: 800;
  color: #fff;
  margin-left: 3em;
}
span{
   font-size:18px;
  font-weight: 800;
  color: #fff;
  margin-left: 3em;
}
img{
  height: 80px;
}
.imegs{
  align-content: center;
  align-items: center;
  justify-content: center;
}
.content{
 display: flex;
 flex-direction: column; 
 
}
.discount{
  position: inherit;
  margin-right: 60% ;
  margin-top:0.3em ;
   margin-bottom:0.3em ;
}
.discount_box{
  border: #3cc2fb 2px solid;
  display: flex;
  flex-direction: row; 
  height: 18vh;
  width: 80%;
  margin-bottom:6em ;

}
.right_side{
  margin-left: 6em;
}
.left_side{
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-right:3em ;
}
h6{
  opacity: 0 ;
  transform: translateY(2em);
  transition: 300ms;
}
h6.active{
  opacity: 1;
  transform: translateY(0);
  
}
.button_1{
   background-color: #00008b;
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
.box_2{
  width: 100%;
  background-color: #3cc2fb;
  display: flex;
  flex-direction: row;
}
.section_left > .img_1{
  width: auto;
	height: 100%;
}
.section_right > h1{
  color: #fff;
  margin: 4em
 
}
.box_3{
  height: 80vh;
  display: flex;
  flex-direction: column;
}


.box_3 > h1{
  color: #3cc2fb;
  margin: 2em 4em 4em 4em;
  font-size: 40px;
  text-align: center;
}
.box_3 > p{
   color: #00008b;;
   font-size: 50px;
   font-weight: bold;
}  

footer{
  height: 30vh;
  background-color: #3cc2fb;
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
  color: #fff;
  font-weight: bold;
}

ul > li:hover{
  color: #00008b;
}

footer > .social{
  color: #fff;
  position: absolute;
  right: 20px;
  font-size: 25px;
}

.social > .social-icon{
  margin: 0.5em;
}
</style>


