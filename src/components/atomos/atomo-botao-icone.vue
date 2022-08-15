<template>
  <v-btn class="mx-4" icon>
    <v-icon size="24px" :color="corIcone">
      {{ dadosBotao.icone }}
    </v-icon>
  </v-btn>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import IDadosBotao from "@/models/interfaces/IDadosBotao";
import Cores from "@/constants/cores";

@Component
export default class AtomoBotaoIcone extends Vue {
  @Prop()
  dadosBotao!: IDadosBotao;

  corIcone = Cores.COR_5;
}
</script>
