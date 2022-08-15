<template>
  <div>
    <slot name="cabecalho"></slot>
    <v-main>
      <slot name="envelopes"></slot>
      <slot name="sobre"></slot>
      <slot name="contato"></slot>
    </v-main>
    <slot name="rodape"></slot>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TemplatePrincipal extends Vue {}
</script>
