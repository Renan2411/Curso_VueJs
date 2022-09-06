import Vue from 'vue'
import App from './App.vue'
import Contadores from './ContadoresIncrementais.vue'

Vue.config.productionTip = false

//Aqui eu defino o nome do componente de forma global
Vue.component('app-contadores', Contadores)

new Vue({
  render: h => h(App),
}).$mount('#app')
