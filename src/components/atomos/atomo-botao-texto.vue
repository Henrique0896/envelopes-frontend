<template>
  <v-btn text :to="dadosBotao.link" :color="corTexto">{{
    dadosBotao.texto
  }}</v-btn>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import IDadosBotao from "@/models/interfaces/IDadosBotao";
import Cores from "@/constants/cores";

@Component
export default class AtomoBotaoTexto extends Vue {
  @Prop()
  dadosBotao!: IDadosBotao;

  corTexto = Cores.COR_5;
}
</script>
