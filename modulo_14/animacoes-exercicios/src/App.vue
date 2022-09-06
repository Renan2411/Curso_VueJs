<template>
	<div
		id="app"
		class="container-fluid"
	>
		<h1>Animações</h1>
		<hr>

		<b-button
			variant="primary"
			class="mb-3"
			@click="exibir = !exibir"
		>Mostrar mensagem</b-button>

		<transition
			name="fade"
			appear
		>

			<b-alert
				variant="info"
				show
				v-if="exibir"
			>{{ msg }}</b-alert>
		</transition>

		<transition
			name="slide"
			type="animation"
			appear
		>

			<b-alert
				variant="info"
				show
				v-show="exibir"
			>{{ msg }}</b-alert>
		</transition>

		<transition
			enter-active-class="animated bounce"
			leave-active-class="animated wobble"
		>

			<b-alert
				variant="info"
				show
				v-show="exibir"
			>{{ msg }}</b-alert>
		</transition>

		<hr>

		<h3>Animaçoes dinâmicas</h3>

		<b-select
			v-model="tipoAnimacao"
			class="mb-3"
		>
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>

		<transition
			:name="tipoAnimacao"
			mode="out-in"
		>

			<b-alert
				variant="info"
				show
				v-if="exibir"
				key="info"
			>{{ msg }}</b-alert>
			<b-alert
				variant="warning"
				show
				v-else
				key="warn"
			>{{ msg }}</b-alert>
		</transition>

		<hr>
		<b-button
			variant="primary"
			class="mb-3"
			@click="exibirJS = !exibirJS"
		>
			Alternar
		</b-button>

		<transition
			:css="false"
			@before-enter="beforeEnter"
			@enter="enter"
			@before-leave="beforeLeave"
			@leave="leave"
		>
			<div
				v-if="exibirJS"
				class="caixa"
			></div>
		</transition>

		<hr>
		<div class="mt-4 mb-4">
			<b-button
				variant="info"
				class="mr-2"
				@click="componenteSelecionado = 'AlertaInfo'"
			>Info</b-button>
			<b-button
				variant="warning"
				@click="componenteSelecionado = 'AlertaAdvertencia'"
			>Advertência</b-button>
		</div>

		<transition
			name="fade"
			mode="out-in"
		>
			<component :is="componenteSelecionado"></component>
		</transition>

		<hr class="mt-3 mb-3">

		<h1>Transicion Group</h1>

		<b-button
			@click="adicionarAluno"
			class="mb-3"
		>Adicionar Aluno</b-button>

		<transition-group name="slide" appear tag="div">
			<!-- O primeiro parâmetro do v-for é o item, o segundo o indice -->
			<b-list-group
				v-for="(aluno, i) in alunos"
				:key="aluno"
			>
				<b-list-group-item @click="removerAluno(i)">{{ aluno }}</b-list-group-item>
			</b-list-group>
		</transition-group>

	</div>
</template>

<script>
import AlertaAdvertencia from "./AlertaAdvertencia.vue";
import AlertaInfo from "./AlertaInfo.vue";

export default {
	components: { AlertaAdvertencia, AlertaInfo },
	data() {
		return {
			alunos: ["Renan", "Talita", "Laísa", "Edenilson"],
			msg: "Uma mensagem de informação para o usuário!!",
			exibir: false,
			exibirJS: true,
			tipoAnimacao: "fade",
			larguraBase: 0,
			componenteSelecionado: "AlertaInfo",
		};
	},
	methods: {
		adicionarAluno() {
			const NOVO_ALUNO = Math.random().toString(36).substring(2);
			this.alunos.push(NOVO_ALUNO);
		},
		removerAluno(indice) {
			this.alunos.splice(indice, 1);
		},
		animar(el, done, negativo) {
			let rodada = 1;
			const temporizador = setInterval(() => {
				const novaLargura =
					this.larguraBase + (negativo ? -rodada * 10 : rodada * 10);
				el.style.width = `${novaLargura}px`;
				rodada++;

				if (rodada > 30) {
					clearInterval(temporizador);
					done();
				}
			}, 20);
		},
		setarLargura(el, novaLargura) {
			this.larguraBase = novaLargura;
			el.style.width = `${this.larguraBase}px`;
		},
		beforeEnter(el) {
			this.setarLargura(el, 0);
		},
		enter(el, done) {
			this.animar(el, done, false);
		},
		beforeLeave(el) {
			this.setarLargura(el, 300);
		},
		leave(el, done) {
			this.animar(el, done, true);
		},
		// 	afterEnter(el) {
		// 		console.log("depois que entrou");
		// 	},
		// 	enterCancelled(el) {
		// 		console.log("cacelou a entrada");
		// 	},
		// afterLeave(el) {
		// 	console.log("depois de sair");
		// },
		// leaveCancelled(el) {
		// 	console.log("cacelou a saída");
		// },
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
	font-size: 1.5rem;
}

.caixa {
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: lightgreen;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 2s;
}

@keyframes slide-in {
	from {
		transform: translateY(40px);
	}
	to {
		transform: translateY(0px);
	}
}

@keyframes slide-out {
	from {
		transform: translateY(0px);
	}
	to {
		transform: translateY(40px);
	}
}

.slide-enter-active {
	animation: slide-in 2s ease;
	transition: opacity 2s;
}

.slide-leave-active {
	position: absolute;
	width: 100%;
	animation: slide-out 2s ease;
	transition: opacity 2s;
}

.slide-enter,
.slide-leave-to {
	opacity: 0;
}

.slide-move {
	transition: transform 1s;
}
</style>
