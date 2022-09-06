// Minha Implementação

new Vue({
    el: "#app",
    data: {
        vidaJogador: 100,
        vidaMonstro: 100,
        pontoDeAtaqueMonstro: 0,
        pontoDeAtaqueJogador: 0,
        pontoDeCura: 0,
        logs: [],
        jogoIniciado: false,
        jogoFinalizado: false,
        vencedor: null,
    },
    methods: {
        iniciarJogo() {
            this.vidaJogador = 100;
            this.vidaMonstro = 100;
            this.jogoIniciado = true;
            this.jogoFinalizado = false;
            this.vencedor = null;
            this.logs = [];
        },

        finalizarJogo() {
            if (this.vidaJogador <= 0) {
                this.vidaJogador = 0;
                this.vencedor = false
            }

            if (this.vidaMonstro <= 0) {
                this.vidaMonstro = 0;
                this.vencedor = true
            }

            if(this.vencedor !== null){
                this.jogoFinalizado = true;
                this.jogoIniciado = false;
            }
        },

        realizarAtaque(especial = false) {
            let forcaAtaque = 10;

            if (especial) {
                forcaAtaque = 20;
            }

            this.pontoDeAtaqueJogador = parseInt(Math.random() * forcaAtaque + 1);
            this.vidaMonstro -= this.pontoDeAtaqueJogador;

            this.ataqueDoMonstro();
            
            this.finalizarJogo();
        },

        realizarAtaqueEspecial() {
            this.realizarAtaque(true);
        },

        curarVidaDoJogador() {
            this.pontoDeCura = parseInt(Math.random() * 15 + 1);

            this.vidaJogador += this.pontoDeCura;

            this.ataqueDoMonstro();

            this.finalizarJogo();
        },

        ataqueDoMonstro() {
            this.pontoDeAtaqueMonstro = parseInt(Math.random() * 20 + 1);
            this.vidaJogador -= this.pontoDeAtaqueMonstro;
        },

        ModificarLogs(logJogador, logMonstro) {
            this.logs.unshift(logMonstro, logJogador);

        }
    },
    computed: {
        porcentagemVidaMonstro() {
            return {
                width: `${this.vidaMonstro}%`
            }
        },

        porcentagemVidaJogador() {
            return {
                width: `${this.vidaJogador}%`
            }
        },
    },
    watch: {
        pontoDeCura() {
            this.ModificarLogs(
                {
                    'class': 'player',
                    'mensagem': `JOGADOR  GANHOU FORÇA DE ${this.pontoDeCura}`
                },
                {
                    'class': 'monster',
                    'mensagem': `MONSTRO ATINGIU JOGADOR COM ${this.pontoDeAtaqueMonstro}`
                }
            );
        },

        pontoDeAtaqueJogador() {
            this.ModificarLogs(
                {
                    'class': 'player',
                    'mensagem': `JOGADOR ATINGIU MONSTRO COM ${this.pontoDeAtaqueJogador}`
                },
                {
                    'class': 'monster',
                    'mensagem': `MONSTRO ATINGIU JOGADOR COM ${this.pontoDeAtaqueMonstro}`
                }
            );
        }
    }
})