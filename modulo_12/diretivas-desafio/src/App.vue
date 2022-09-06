<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>
		<!-- Exercício -->
		<!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->

		<button v-evento:click="eventoDeClick">teste</button>
		<button v-evento:mouseover="eventoDeMouseOver">teste</button>

	</div>
</template>

<script>
export default {
	directives:{
		"evento": {
			bind(el, binding, vnode){
				
				el.addEventListener(binding.arg, () => {
					binding.value(el)
				})
				
				// if(binding.arg === 'click'){
				// 	el.addEventListener(binding.arg, () => {
				// 		binding.value(el)
				// 	})
				// }

				// if(binding.arg === 'mouseover'){

				// }
			}
		}
	},
	methods: {
		eventoDeClick(element){
			alert('sua cor de fundo vai mudar')
			element.style.backgroundColor = 'red'
		},
		eventoDeMouseOver(element, mensagem){
			element.innerText = 'mouse em cima'
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}
</style>
