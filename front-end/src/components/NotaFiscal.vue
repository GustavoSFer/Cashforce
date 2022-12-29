<template>
  <div class="notaFiscal">
    <h1>Notas fiscais</h1>
    <p>
      Visualize as notas fiscais que você tem.  
    </p>
    
    <div>
      <div>
        <span>NOTA FISCAL</span>
        <span>SACADO</span>
        <span>CEDENTE</span>
        <span>EMISSÃO</span>
        <span>VALOR</span>
        <span>STATUS</span>
        <span></span>
      </div>
      <PropostaMorre :dadosNotas="dados" />
    </div>

  </div>
</template>

<script>
import PropostaMorre from './PropostaMorre.vue';

export default {
  name: 'NotaFiscal',
  data() {
    return {
      dados: [
        { id: 123, sacado: 'teste', cedente: 'teste', emissao: '23-32-43:432', valor: 123.33, status: 'pago' },
      ]
    }
  },
  components: {
    PropostaMorre,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span {
  padding: 30px;
}
</style>
