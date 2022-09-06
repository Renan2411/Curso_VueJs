<template>
	<div class="usuario-detalhe">
		<h3>Usuario Detalhe</h3>
		<hr>
		<p><strong>Código: </strong>{{id}}</p>
		<!-- :to="`/usuario/${id}/editar`" -->
		<router-link
			tag="button"
			primario
			:to="{ 
			name: 'usuarioEditar',
			params: { id },
			query: {
				completo: true,
				lingua: 'pt',
				nome: 'renan',
			},
			hash: '#rodape',
		 }"
		>
			Editar
		</router-link>
	</div>
</template>

<script>
export default {
	props: ["id"],
	data() {
		return {
			// id: this.$route.params.id,
		};
	},
	watch: {
		//verifica as mudanças na rota
		//recebe dois parametros, o para onde vai, e o da onde veio
		// $route(to, from) {
		// 	this.id = to.params.id
		// }
	},
};
</script>

<style>
</style>