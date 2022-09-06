<template>
	<div id="app">
		<h1>Super Quiz</h1>

		<transition name="flip" mode="out-in">
			<question
				v-if="!respondido"
				:questao="questao"
				@questao-selecionada="tratarEventoQuestaoSelecionada"
			></question>
			<result
				v-else
				:resultado="resultado"
				@nova-questao="tratarEventoNovaQuestao"
			></result>
		</transition>
	</div>
</template>

<script>
import questions from "./util/questions";
import Question from "./components/Question.vue";
import Result from "./components/Result.vue";

export default {
	components: { Question, Result },
	data() {
		return {
			questao: null,
			questions: Object.assign([], questions),
			respondido: false,
			resultado: {},
		};
	},
	beforeMount() {
		this.definirQuestao();
	},
	methods: {
		definirQuestao() {
			let numeroQuestao = parseInt(Math.random() * this.questions.length);

			this.questao = this.questions[numeroQuestao];
		},
		montarRespostaCerta() {
			this.resultado = {
				text: "Resposta Certa! :)",
			};
		},
		montarRespostaErrada() {
			this.resultado = {
				text: "Resposta Errada! :(",
				class: "wrong",
			};
		},
		tratarEventoNovaQuestao() {
			this.respondido = false;
			this.resultado = {};
			this.definirQuestao();
		},
		tratarEventoQuestaoSelecionada(event) {
			this.respondido = true;
			event.correct
				? this.montarRespostaCerta()
				: this.montarRespostaErrada();
		},
	},
};
</script>

<style>
body {
	background: linear-gradient(to right, rgb(0, 0, 70), rgb(28, 181, 224));
	font-family: "Lato", sans-serif;
	color: #fff;
	height: 100vh;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;

	display: flex;
	flex-direction: column;
	align-items: center;
}

#app h1 {
	font-weight: 200;
	font-size: 4rem;
}

@keyframes flip-out {
	from {
		transform: rotateY(0deg);
	}
	to {
		transform: rotateY(90deg);
	}
}

@keyframes flip-in {
	from {
		transform: rotateY(90deg);
	}
	to {
		transform: rotateY(0deg);
	}
}

.flip-enter-active {
	animation: flip-in 0.3s ease;
}

.flip-leave-active {
	animation: flip-out 0.3s ease;
}
</style>
