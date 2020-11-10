import Vue from 'vue'
import Meta from 'vue-meta'
import App from './App.vue'
import store from './store'
import './assets/tailwind.css'

Vue.use(Meta)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
