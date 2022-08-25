<template>
  <v-text-field dense :label="dadosInput.label" ></v-text-field>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { Prop } from "vue-property-decorator";

@Component
export default class MoleculaInputValor extends Vue {
  @Prop()
  dadosInput!: any;

}
</script>
