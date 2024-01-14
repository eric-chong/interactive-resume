<template>
  <div class="personal-projects">
    <InfoRow v-for="(project, index) in projects" :key="index" :listItems="project.highlights">
      <template v-slot:icon>
        <RowIcon :iconKey="project.icon" />
      </template>
      <template v-slot:title>
        {{ project.title }}
      </template>
      <template v-slot:subtitle>
        {{ project.description }}
      </template>
      <template v-slot:period> ({{ project.year }}) </template>
    </InfoRow>
  </div>
</template>

<script setup lang="ts">
import projects from '@/stores/projectsData'
import RowIcon from './RowIcon.vue'
import InfoRow from './InfoRow.vue'
</script>

<style lang="scss">
.personal-projects {
  padding: 16px 0;
}
</style>
