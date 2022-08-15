<template>
  <v-app-bar app flat :color="corCabecalho">
    <v-container>
      <v-toolbar flat :color="corCabecalho">
        <v-toolbar-title>
          <atomo-logo />
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <atomo-botao-texto
            v-for="botao in botoesMenu"
            :dadosBotao="botao"
            :key="botao.texto"
          />
        </v-toolbar-items>
      </v-toolbar>
    </v-container>
  </v-app-bar>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Cores from '@/constants/cores';
import Links from '@/constants/links';
import { Cabecalho } from '@/constants/textos';
import IDadosBotao from '@/models/interfaces/IDadosBotao';
import AtomoBotaoTexto from '@/components/atomos/atomo-botao-texto.vue';
import AtomoLogo from '../atomos/atomo-logo.vue';

@Component({
  components: {
    AtomoBotaoTexto,
    AtomoLogo,
  },
})
export default class MoleculaCabecalho extends Vue {
  corCabecalho = Cores.COR_2;
  botoesMenu: IDadosBotao[] = [
    {
      texto: Cabecalho.INICIO,
      link: Links.INICIO,
    },
    {
      texto: Cabecalho.SOBRE,
      link: Links.SOBRE,
    },
    {
      texto: Cabecalho.CONTATO,
      link: Links.CONTATO,
    },
  ];
}
</script>
