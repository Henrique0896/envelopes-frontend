<template>
  <div>
    <template-principal>
      <template #cabecalho>
        <molecula-cabecalho />
      </template>
      <template #rodape>
        <molecula-rodape />
      </template>
    </template-principal>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MoleculaCabecalho from "../moleculas/molecula-cabecalho.vue";
import MoleculaRodape from "../moleculas/molecula-rodape.vue";
import TemplatePrincipal from "../templates/template-principal.vue";

@Component({
  components: {
    TemplatePrincipal,
    MoleculaCabecalho,
    MoleculaRodape,
  },
})
export default class PaginaPrincipal extends Vue {}
</script>
