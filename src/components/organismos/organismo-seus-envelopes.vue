<template>
<v-container fluid class="cor-3 pa-15">
    <div class="d-flex justify-center">
      <h2 class="pa-10">Seus Envelopes</h2>
    </div>
    <v-row>
      <v-col>
        <v-card elevation="2" >
          <div class="d-flex justify-center">
          <v-card-title>Envelope 1</v-card-title>
          </div>
          <v-card-text>Este é o envelope 1</v-card-text>
        </v-card>
      </v-col>
      <v-col>
         <v-card elevation="2" >
          <div class="d-flex justify-center">
          <v-card-title>Envelope 2</v-card-title>
          </div>
          <v-card-text>Este é o envelope 2</v-card-text>
        </v-card>
      </v-col>
    </v-row>
 
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class OrganismoSeusEnvelopes extends Vue {}
</script>
<style scoped>
@import "../../styles/principal.css";
</style>
