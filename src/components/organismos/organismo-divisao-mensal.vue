<template>
  <v-container fluid class="cor-4 pa-15">
    <atomo-titulo-secao :titulo="textosSecao.TITULO" />
    <v-row>
      <v-col>
        <molecula-cartao>
          <template #cabecalho>
            <atomo-titulo-cartao :titulo="textosSecao.SALARIO" />
          </template>
          <template #conteudo>
            <molecula-input-valor
              :dadosInput="dadosInputSalario"
            ></molecula-input-valor>
          </template>
        </molecula-cartao>
      </v-col>
      <v-col>
        <molecula-cartao>
          <template #cabecalho>
            <atomo-titulo-cartao :titulo="textosSecao.BENEFICIOS" />
          </template>
          <template #conteudo>
            <molecula-input-valor
              :dadosInput="dadosInputBeneficios"
            ></molecula-input-valor>
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
import MoleculaInputValor from "../moleculas/molecula-input-valor.vue";

@Component({
  components: {
    AtomoTituloSecao,
    AtomoTituloCartao,
    MoleculaCartao,
    MoleculaInputValor,
  },
})
export default class OrganismoDivisaoMensal extends Vue {
  textosSecao = DivisaoMensal;
  dadosInputSalario = {
    label: DivisaoMensal.ROTULO_SALARIO,
  };

  dadosInputBeneficios = {
    label: DivisaoMensal.ROTULO_BENEFICIOS,
  };
}
</script>
