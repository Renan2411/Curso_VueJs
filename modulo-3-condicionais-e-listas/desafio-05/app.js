let obj = new Vue({
	el: '#desafio',
	data: {
		alternar: true,

		nomes: ['Pedro', 'Bia', 'Ana', 'Rebeca', 'Renan', 'Edenilson', 'Talita'],

		livro: {
			titulo: 'O Senhor dos Anéis',
			autor: 'J.R.R. Tolkiens',
			volume: '3'
		},

		aluno: {
			id: 10,
			nome: 'Maria',
			notas: [7.67, 8.33, 6.98, 9.21]
		}
	},
	methods:{
		tester(){
			let teste = this.aluno.notas
			console.log(Array.isArray(teste));
		}
	}

});
