<template>
  <p>entrando aquiiii</p>
  <div v-for="(dados) in dadosNotas" :key="dados.id">
    <span>{{dados.id }}</span>
    <span>{{dados.sacado}}</span>
    <span>{{dados.cedente}}</span>
    <span>{{dados.emissao}}</span>
    <span>{{dados.valor}}</span>
    <span>{{dados.status}}</span>
    <span>....</span>
  </div>
</template>

<script>
export default {
  name: 'PropostaMorre',
  props: {
    dadosNotas: Array,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span {
  padding: 30px;
}
</style>
