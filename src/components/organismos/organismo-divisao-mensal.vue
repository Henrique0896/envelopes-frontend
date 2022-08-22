<template>
  <v-container fluid class="cor-4 pa-15">
    <atomo-titulo-secao :titulo="textosSecao.TITULO" />
    <v-row>
      <v-col>
        <molecula-cartao>
          <template #cabecalho> <atomo-titulo-cartao :titulo="textosSecao.SALARIO"/> </template>
          <template #conteudo>
            <v-text-field :label="textosSecao.ROTULO_SALARIO"></v-text-field>
          </template>
        </molecula-cartao>
      </v-col>
      <v-col>
        <molecula-cartao>
          <template #cabecalho> <atomo-titulo-cartao :titulo="textosSecao.BENEFICIOS"/> </template>
          <template #conteudo>
            <v-text-field :label="textosSecao.ROTULO_BENEFICIOS"></v-text-field>
          </template>
        </molecula-cartao>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { DivisaoMensal } from "@/constants/textos";
import { Component, Vue } from "vue-property-decorator";
import AtomoTituloSecao from "../atomos/atomo-titulo-secao.vue";
import AtomoTituloCartao from "../atomos/atomo-titulo-cartao.vue";
import MoleculaCartao from "../moleculas/molecula-cartao.vue";


@Component({
  components: {
    AtomoTituloSecao,
    AtomoTituloCartao,
    MoleculaCartao,
  },
})
export default class OrganismoDivisaoMensal extends Vue {
  textosSecao = DivisaoMensal;
}
</script>
