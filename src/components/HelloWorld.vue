<template>
  <h1>{{mensagem}}</h1>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  public mensagem = "ola";
}
</script>
