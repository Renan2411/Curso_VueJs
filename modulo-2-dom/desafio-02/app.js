new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert('Você clicou');
        },
        capturarTecla(event){
            this.valor = event.target.value;
        }
    }
})