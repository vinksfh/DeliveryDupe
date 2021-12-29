import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPercent,
  faPlus,
  

  
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPercent);
library.add(faPlus);
library.add(faInstagram);
library.add(faTwitter);
library.add(faLinkedin);
library.add(faYoutube);
library.add(faFacebookF);


Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
