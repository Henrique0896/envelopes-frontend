<template>
  <v-btn class="mx-4" dark icon>
    <v-icon size="24px">
      {{ dadosBotao.icone }}
    </v-icon>
  </v-btn>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import IDadosBotao from "@/models/interfaces/IDadosBotao";

@Component
export default class AtomoBotaoIcone extends Vue {
  @Prop()
  dadosBotao!: IDadosBotao;
}
</script>
