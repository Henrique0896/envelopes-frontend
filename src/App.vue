<template>
  <v-app>
      <router-view />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({name: "App",});
</script>
<style scoped>
@import "../src/styles/app.css";
</style>