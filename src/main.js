import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'popper.js'
import './assets/sass/app.scss'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router
}).$mount('#app')