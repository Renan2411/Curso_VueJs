new Vue({
    //Referenciar o elemento que receberá esse objeto
    el: '#desafio',
    
    //Criando os atributos do objeto
    data: {
        nome: 'Renan Monteiro',
        idade: 19,
        srcImage: './minhaFoto.jpeg'
    },

    //Criando os métodos do objeto
    methods: {
        gerarNumeroAleatorio(){
            let numero = Math.random();

            return numero.toString();
        }
    }
})