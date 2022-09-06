<template>
  <div  @input="$emit('input', `${nome} ${sobrenome}`)">
    <rotulo :nome="'nome'" > 
        <input type="text" v-model="nome">
    </rotulo>
    <rotulo :nome="'sobrenome'"> 
        <input type="text" v-model="sobrenome">
    </rotulo>
  </div>
</template>

<script>
import Rotulo from "./Rotulo.vue";

export default {
  components: { Rotulo },
  data(){
      return{
          nome: '',
          sobrenome: ''
      }
  }
};
</script>