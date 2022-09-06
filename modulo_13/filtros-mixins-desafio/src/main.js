import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('contarCaracteres', (str) => {
	const arr = str.split(" ")

	arr.map((element, index) => {
		arr[index] = element + ` (${element.length}) `
	})

	return arr.join("")
})

new Vue({
	render: h => h(App),
}).$mount('#app')
