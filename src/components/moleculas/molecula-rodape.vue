<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="cor-1">
        <strong class="cor-5-texto">{{ slogan }}</strong>

        <v-spacer></v-spacer>

        <atomo-botao-icone
          v-for="botao in botoesMenu"
          :dadosBotao="botao"
          :key="botao.icone"
        />
      </v-card-title>

      <v-card-text class="py-2 text-center cor-1">
        <p class="cor-5-texto">{{ marca }} | {{ anoAtual }}</p>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { Rodape } from "@/constants/textos";
import AtomoBotaoIcone from "../atomos/atomo-botao-icone.vue";
import IDadosBotao from "@/models/interfaces/IDadosBotao";
@Component({
  components: {
    AtomoBotaoIcone,
  },
})
export default class MoleculaRodape extends Vue {
  slogan = Rodape.SLOGAN;
  marca = Rodape.MARCA;
  botoesMenu: IDadosBotao[] = [
    {
      icone: "mdi-facebook",
    },
    {
      icone: "mdi-twitter",
    },
    {
      icone: "mdi-linkedin",
    },
    {
      icone: "mdi-instagram",
    },
  ];
  anoAtual = new Date().getFullYear();
}
</script>
