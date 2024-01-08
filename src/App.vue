<script setup lang="ts">
import { RouterView } from 'vue-router'

import PageHeader from './components/PageHeader.vue'
</script>

<template>
  <v-sheet class="main-content" :width="800">
    <PageHeader />

    <v-tabs class="navigation-tabs" color="primary" density="compact">
      <v-tab to="/">Experiences</v-tab>
      <v-tab to="/projects">Projects</v-tab>
    </v-tabs>

    <RouterView />
  </v-sheet>
</template>

<style scoped>
.main-content {
  min-height: 500px;
  border: 1px solid rgb(var(--v-theme-border-light-2));
  border-radius: 8px;
}
.navigation-tabs {
  border-bottom: 1px solid rgb(var(--v-theme-border-light-2));
}
</style>
