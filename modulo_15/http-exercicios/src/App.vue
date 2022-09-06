<template>
	<div
		id="app"
		class="container"
	>
		<h1>HTTP com Axios</h1>

		<b-alert
			show
			dismissible
			v-for="mensagem in mensagens"
			:key="mensagem.texto"
			:variant="mensagem.tipo"
		>
			{{ mensagem.texto }}
		</b-alert>

		<b-card>
			<b-form-group label="Nome">
				<b-form-input
					type="text"
					size="lg"
					v-model="usuario.nome"
					placeholder="Informe o nome"
				>
				</b-form-input>
			</b-form-group>
			<b-form-group label="Email">
				<b-form-input
					type="email"
					size="lg"
					v-model="usuario.email"
					placeholder="Informe o email"
				>
				</b-form-input>
			</b-form-group>
			<hr>
			<b-button
				@click="salvarFormulario"
				size="lg"
				variant="primary"
			>Salvar</b-button>

			<b-button
				@click="obterUsuarios"
				size="lg"
				variant="success"
				class="ml-2"
			>
				Obter Usuarios
			</b-button>
		</b-card>

		<hr>

		<b-list-group>
			<b-list-group-item
				v-for="(usuario, id) in usuarios"
				:key="id"
			>
				<span>Nome: <strong>{{ usuario.nome }}</strong></span>
				<br />
				<span>Email: <strong>{{ usuario.email }}</strong></span>
				<br />
				<span>id: <strong>{{ usuario.id }}</strong></span>

				<br>

				<b-button
					variant="warning"
					size="lg"
					@click="carregar(id)"
				>Carregar</b-button>

				<b-button
					variant="danger"
					size="lg"
					class="ml-2"
					@click="deletarUsuario(usuario.id)"
				>Excluir</b-button>

			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
//usar axios localmente
import axios from "axios";
export default {
	data() {
		return {
			mensagens: [],
			usuarios: [],
			idUsuarioSelecionado: null,
			usuario: {
				nome: "",
				email: "",
			},
		};
	},
	methods: {
		carregar(id) {
			this.idUsuarioSelecionado = id;
			this.usuario = { ...this.usuarios[this.idUsuarioSelecionado] };
			console.log(this.usuario);
		},
		salvarFormulario() {
			const metodo = this.idUsuarioSelecionado !== null ? "patch" : "post";

			const finalUrl = this.idUsuarioSelecionado
				? `/${this.usuario.id}.json`
				: ".json";

			this.$http[metodo](`/usuarios${finalUrl}`, this.usuario).then((_) => {
				this.limpar();
				this.mensagens.push({
					texto: 'Usuário salvo com sucesso!',
					tipo: 'success'
				})
				this.obterUsuarios();
				this.idUsuarioSelecionado = null;
			});
		},
		limpar() {
			this.usuario = {};
			this.mensagens = [];
		},
		obterUsuarios() {
			this.$http.get("usuarios.json").then((resp) => {
				this.usuarios = resp.data;
			});
		},
		deletarUsuario(id) {
			this.$http.delete(`/usuarios/${id}.json`).then(() => {
				this.limpar();
				this.obterUsuarios();
			}).catch(_ => {
				this.mensagens.push({
					texto: 'Houve um problema ao realizar a exclusão',
					tipo: 'danger'
				})
			});
		},
	},

	// created(){
	// 	this.$http.post('usuarios.json', {
	// 		nome: 'Renan',
	// 		email: 'renan@gmail.com'
	// 	}).then((response) => {
	// 		console.log(response)
	// 	})
	// }
};
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
