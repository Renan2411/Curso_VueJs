<template>
	<div class="usuario">
		<h2>Usuários</h2>
		<hr>

		<transition
			appear
			enter-active-class="animated rubberBand"
			leave-active-class="animated rollOut"
			mode="out-in"
		>
			<router-view></router-view>
		</transition>


		<button
			sucesso
			@click="irParaInicio"
		>Voltar</button>
	</div>
</template>

<script>
export default {
	methods: {
		irParaInicio() {
			//Navegação normal
			// this.$router.push('/')

			// //navegação passando objeto
			// this.$router.push({
			// 	path: "/",
			// });

			//navegando com name
			this.$router.push({
				name: 'inicio'
			});

		},
	},
};
</script>

<style>
</style>