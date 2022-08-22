<template>
  <div class="d-flex justify-center">
    <h3 class="cor-1-texto">{{ titulo }}</h3>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AtomoTituloSecao extends Vue {
  @Prop()
  titulo!: string;
}
</script>
