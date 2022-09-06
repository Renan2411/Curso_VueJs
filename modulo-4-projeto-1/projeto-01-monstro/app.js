// Implementação do Curso

new Vue({
    el: '#app',
    data: {
        playerLife: 100,
        monsterLife: 100,
        running: false,
        logs: []
    },
    methods: {
        startGame() {
            this.running = true,
                this.playerLife = 100,
                this.monsterLife = 100,
                this.logs = [];
        },

        attack(especial = false) {
            this.hurt('monsterLife', 5, 10, especial, 'Jogador', 'Monstro', 'player');

            if (this.monsterLife > 0) {
                this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster');
            }
        },

        hurt(prop, min, max, especial, source, target, cls) {
            const PLUS = especial ? 5 : 0;
            const HURT = this.getRandom(min + PLUS, max + PLUS);

            //Garante que a vida do jogador nunca será negativa, visto que se for, pegará o 0. Por isso a função Math.max(), pois ela pega o maior valor entre os dois passados por parâmetro
            this[prop] = Math.max(this[prop] - HURT, 0);

            this.registerLog(`${source} atingiu ${target} com ${HURT}.`, cls);
        },

        healAndHurt() {
            this.heal(10, 15);
            this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster');
        },

        heal(min, max) {
            const HEAL = this.getRandom(min, max);
            this.playerLife = Math.min(this.playerLife + HEAL, 100);

            this.registerLog(`Jogador ganhou força de ${HEAL}.`, 'player');
        },

        getRandom(min, max) {
            const VALUE = Math.random() * (max - min) + min;

            return Math.round(VALUE);
        },

        registerLog(text, cls) {
            this.logs.unshift({ text, cls });
        }
    },
    computed: {
        hasResult() {
            return this.playerLife === 0 || this.monsterLife === 0;
        }
    },

    watch: {
        hasResult(value) {
            if (value) this.running = false;
        }
    }
})