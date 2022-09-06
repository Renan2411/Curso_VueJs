<template>
  <div class="componente">
    <h2>Alterar os Dados de Usuário</h2>
    <p>Edite as informações</p>

    <p>
      Idade do usuário <strong>{{ idade }}</strong>
    </p>

    <input type="text" id="novoNome" :value="nome">
    <button @click="alterarNome">Alterar Nome</button>

    <button @click="alterarIdade">Alterar Idade</button>
  </div>
</template>

<script>

import barramento from '../barramento'

export default {
  props: {
    idade: Number,
    nome: String
  },
  methods: {
    alterarIdade() {
        let novaIdade = ++this.idade;
        barramento.alterarIdade(novaIdade);
    },
    alterarNome(){
      let novoNome = document.querySelector('#novoNome');
      this.$emit('alterouNome', novoNome.value);
    }
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #98b99a;
  color: #fff;
}
</style>
