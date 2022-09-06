new Vue({
	el: '#desafio',
	data: {
		estilo: 'destaque',
		bordaQuadrada: true,
		inputEstilo: 'estilo',
		estilosCSS: '',
		classe4: '',
		progress: '',
		colorProgress: 'red'
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.estilo = this.estilo === 'destaque' ? 'encolher' : 'destaque'
			}, 1000)

		},
		iniciarProgresso() {
			let number = 0;

			const TEMPO_PROGRESSO = setInterval(() => {

				this.progress = `${number}%`

				if (number === 50) {
					this.colorProgress = 'yellow'
				}

				if (number === 70) {
					this.colorProgress = 'aquamarine'
				}

				if (number === 100) {
					this.colorProgress = 'green'
				}

				if(number == 100) {
					clearInterval(TEMPO_PROGRESSO)
				}

				number += 10;
			}, 1000);
		},
		setBordaQuadrada(event) {
			console.log(event.target.value);
			if (event.target.value === "true") {
				this.bordaQuadrada = true;
			} else if (event.target.value === "false") {
				this.bordaQuadrada = false
			}
		}
	},
})
