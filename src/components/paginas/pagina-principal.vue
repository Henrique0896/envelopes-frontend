<template>
  <div>
    <template-principal>
      <template #cabecalho>
        <molecula-cabecalho />
      </template>
       <template #envelopes>
        <organismo-divisao-mensal />
        <organismo-divisao-mensal />
        <organismo-divisao-mensal />
      </template>
      <template #rodape>
        <molecula-rodape />
      </template>
    </template-principal>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MoleculaCabecalho from "../moleculas/molecula-cabecalho.vue";
import MoleculaRodape from "../moleculas/molecula-rodape.vue";
import OrganismoDivisaoMensal from "../organismos/organismo-divisao-mensal.vue";
import TemplatePrincipal from "../templates/template-principal.vue";

@Component({
  components: {
    TemplatePrincipal,
    OrganismoDivisaoMensal,
    MoleculaCabecalho,
    MoleculaRodape,
  },
})
export default class PaginaPrincipal extends Vue {}
</script>
