<template>
  <div id="app">
    <h1>{{ titulo }}</h1>

    <button @click="titulo += '#'">Alterar</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      titulo: "Teste Data Usando Vue JS!!",
    };
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
  background-color: chocolate;
  color: #fff;
}
</style>
