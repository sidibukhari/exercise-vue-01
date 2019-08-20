import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import FontAwesomeIcon from './components/FontAwesomeIcon.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
