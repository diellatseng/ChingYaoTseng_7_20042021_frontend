import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { 
  faCommentDots, 
  faEllipsis, 
  faPaperPlane, 
  faHeart as fasHeart,
  faPenToSquare,
  
} from '@fortawesome/free-solid-svg-icons'

import { 
  faUser, 
  faHeart as farHeart,
  faTrashCan,
  faImage
} from '@fortawesome/free-regular-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(
  faCommentDots, 
  faUser, 
  fasHeart, 
  farHeart, 
  faPaperPlane, 
  faEllipsis,
  faPenToSquare,
  faTrashCan,
  faImage
)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
