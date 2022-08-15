<template>
<v-container fluid class="cor-4 pa-15">
  
    <div class="d-flex justify-center">
      <h2 class="pa-10">Divisão Mensal</h2>
    </div>
    <v-row>
      <v-col>
        <v-card elevation="2" >
          <div class="d-flex justify-center">
          <v-card-title>Salário</v-card-title>
          </div>
          <v-card-text><v-text-field label="Salário líquido"></v-text-field></v-card-text>
        </v-card>
      </v-col>
      <v-col>
         <v-card elevation="2" >
          <div class="d-flex justify-center">
          <v-card-title>Benefícios</v-card-title>
          </div>
          <v-card-text><v-text-field label="Total de benefícios"></v-text-field></v-card-text>
        </v-card>
      </v-col>
    </v-row>
 
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class OrganismoDivisaoMensal extends Vue {}
</script>
<style scoped>
@import "../../styles/principal.css";
</style>
