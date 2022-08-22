<template>
  <div class="d-flex justify-center">
    <h2 class="pb-10 cor-1-texto">{{ titulo }}</h2>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AtomoTituloCartao extends Vue {
  @Prop()
  titulo!: string;
}
</script>
