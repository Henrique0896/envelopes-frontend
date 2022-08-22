<template>
  <v-card elevation="2">
    <div class="d-flex justify-center">
      <v-card-title>
        <slot name="cabecalho"></slot>
      </v-card-title>
    </div>
    <v-card-text>
      <slot name="conteudo"></slot>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class MoleculaCartao extends Vue {}
</script>
