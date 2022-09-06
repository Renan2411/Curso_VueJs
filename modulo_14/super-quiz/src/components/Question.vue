<template>
	<div class="question answers">
		<h1 class="text">{{questao.text}}</h1>
        <ul class="answers">
            <li v-for="(opcao, index) in questao.answers" :key="index" @click="$emit('questao-selecionada', opcao)">
                <span class="number">{{ index }}</span>
                <span class="text">{{ opcao.text }}</span>
            </li>
        </ul>
	</div>
</template>

<script>
export default {
	props: {
		questao: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style>
.question {
	height: 500px;
	color: #000;
	background-color: #fff;
	width: 70%;
	border-radius: 20px;
	font-size: 2.5rem;

	display: flex;
	flex-direction: column;
	justify-content: space-around;
}

ul.answers {
	font-size: 2rem;
	padding: 0;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
}

.answers li {
	margin: 20px;
	background-color: #89c454;
	border-radius: 8px;
	width: 40%;

	display: flex;
}

.answers .number {
	padding: 10px;
	background-color: #1e9c31;
	color: #fff;
	flex-basis: 30px;
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
}

.answers .text {
	flex: 1;
	align-self: center;
}
</style>
