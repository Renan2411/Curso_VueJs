<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->

		<hr>
		<p>{{ 'testando filtro por vafgo' | trocarEspacosPorVirgula }}</p>

		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->

		<hr>
		<p>{{ 'Renan é foda' | contarCaracteres }}</p>

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<p>{{ trocaEspacoPorVirgula }}</p>
		<p>{{ contarCaracteresMostrarTamanho }}</p>

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
import mixin from './mixin'
export default {
	mixins: [mixin],
	data() {
		return {
			message: "Trocar Espaço por virgula",
		};
	},
	filters: {
		trocarEspacosPorVirgula(str) {
			str = str.replaceAll(" ", ",");

			return str;
		},
	},
};
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
